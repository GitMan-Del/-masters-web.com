// app/api/payments/webhook/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { validateStripeWebhook } from '@/lib/stripe';
import { supabaseAdmin } from '@/lib/supabase';
import Stripe from 'stripe';

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get('stripe-signature');

    console.log('🔔 Webhook received with signature:', !!signature);
    console.log('📅 Timestamp:', new Date().toISOString());

    if (!signature) {
      console.error('❌ Missing stripe-signature header');
      return NextResponse.json(
        { error: 'Missing stripe-signature header' },
        { status: 400 }
      );
    }

    // Validează webhook-ul
    const event = validateStripeWebhook(Buffer.from(body), signature);

    console.log('✅ Stripe webhook received:', event.type);
    console.log('📄 Event data keys:', Object.keys(event.data.object));
    console.log('🔍 Full event object:', JSON.stringify(event, null, 2));

    // Procesează evenimentele relevante
    switch (event.type) {
      case 'checkout.session.completed':
        await handleCheckoutSessionCompleted(event.data.object as Stripe.Checkout.Session);
        break;
      
      case 'payment_intent.succeeded':
        await handlePaymentSucceeded(event.data.object as Stripe.PaymentIntent);
        break;
      
      case 'payment_intent.payment_failed':
        await handlePaymentFailed(event.data.object as Stripe.PaymentIntent);
        break;
      
      case 'invoice.payment_succeeded':
        await handleInvoicePaymentSucceeded(event.data.object as Stripe.Invoice);
        break;
      
      case 'invoice.payment_failed':
        await handleInvoicePaymentFailed(event.data.object as Stripe.Invoice);
        break;
      
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });

  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 400 }
    );
  }
}

async function handleCheckoutSessionCompleted(session: Stripe.Checkout.Session) {
  console.log('🛒 Processing checkout session completed:', session.id);
  console.log('📧 Customer email:', session.customer_email);
  console.log('🏷️ Session metadata:', session.metadata);
  
  const userEmail = session.customer_email || session.metadata?.user_email;
  const paymentType = session.metadata?.payment_type as 'one_time' | 'monthly_maintenance';
  
  console.log('👤 User email:', userEmail);
  console.log('💳 Payment type:', paymentType);
  
  if (!userEmail || !paymentType) {
    console.error('❌ Missing metadata in checkout session:', {
      sessionId: session.id,
      userEmail,
      paymentType,
      metadata: session.metadata
    });
    return;
  }

  // Pentru plăți one-time
  if (paymentType === 'one_time' && session.payment_intent) {
    await savePaymentToDatabase({
      user_email: userEmail,
      payment_type: paymentType,
      stripe_payment_id: session.payment_intent.toString(),
      stripe_session_id: session.id,
      amount: (session.amount_total || 0) / 100,
      currency: session.currency || 'ron',
      status: 'completed',
      description: session.metadata?.description,
      metadata: session.metadata as Record<string, string | number | boolean> | undefined,
    });
  }
  
  // Pentru subscripții
  if (paymentType === 'monthly_maintenance' && session.subscription) {
    await savePaymentToDatabase({
      user_email: userEmail,
      payment_type: paymentType,
      stripe_payment_id: session.subscription.toString(),
      stripe_session_id: session.id,
      amount: (session.amount_total || 0) / 100,
      currency: session.currency || 'ron',
      status: 'completed',
      description: session.metadata?.description || 'Monthly maintenance subscription',
      metadata: session.metadata as Record<string, string | number | boolean> | undefined,
    });
  }
}

async function handlePaymentSucceeded(paymentIntent: Stripe.PaymentIntent) {
  console.log('Processing payment succeeded:', paymentIntent.id);
  
  // Actualizează statusul plății dacă există deja în baza de date
  await updatePaymentStatus(paymentIntent.id, 'completed');
}

async function handlePaymentFailed(paymentIntent: Stripe.PaymentIntent) {
  console.log('Processing payment failed:', paymentIntent.id);
  
  // Actualizează statusul plății
  await updatePaymentStatus(paymentIntent.id, 'failed');
}

async function handleInvoicePaymentSucceeded(invoice: Stripe.Invoice) {
  console.log('Processing invoice payment succeeded:', invoice.id);
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if ((invoice as any).subscription && invoice.customer_email) {
    await savePaymentToDatabase({
      user_email: invoice.customer_email,
      payment_type: 'monthly_maintenance',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      stripe_payment_id: (invoice as any).payment_intent?.toString() || invoice.id,
      amount: (invoice.amount_paid || 0) / 100,
      currency: invoice.currency || 'ron',
      status: 'completed',
      description: `Monthly maintenance - ${new Date().toLocaleDateString('ro-RO', { month: 'long', year: 'numeric' })}`,
      metadata: {
        invoice_id: invoice.id || '',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        subscription_id: (invoice as any).subscription?.toString() || '',
      },
    });
  }
}

async function handleInvoicePaymentFailed(invoice: Stripe.Invoice) {
  console.log('Processing invoice payment failed:', invoice.id);
  
  if (invoice.customer_email) {
    await savePaymentToDatabase({
      user_email: invoice.customer_email,
      payment_type: 'monthly_maintenance',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      stripe_payment_id: (invoice as any).payment_intent?.toString() || invoice.id,
      amount: (invoice.amount_due || 0) / 100,
      currency: invoice.currency || 'ron',
      status: 'failed',
      description: `Failed monthly maintenance - ${new Date().toLocaleDateString('ro-RO', { month: 'long', year: 'numeric' })}`,
      metadata: {
        invoice_id: invoice.id || '',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        subscription_id: (invoice as any).subscription?.toString() || '',
      },
    });
  }
}

async function savePaymentToDatabase(paymentData: {
  user_email: string;
  payment_type: 'one_time' | 'monthly_maintenance';
  stripe_payment_id: string;
  stripe_session_id?: string;
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  description?: string;
  metadata?: Record<string, string | number | boolean>;
}) {
  try {
    console.log('💾 Attempting to save payment to database:', {
      user_email: paymentData.user_email,
      payment_type: paymentData.payment_type,
      stripe_payment_id: paymentData.stripe_payment_id,
      amount: paymentData.amount,
      currency: paymentData.currency,
      status: paymentData.status
    });

    const { data, error } = await supabaseAdmin
      .from('payments')
      .insert([
        {
          user_id: paymentData.user_email, // Using email as user_id since that's how users table is set up
          user_email: paymentData.user_email,
          stripe_payment_id: paymentData.stripe_payment_id,
          stripe_session_id: paymentData.stripe_session_id,
          payment_type: paymentData.payment_type,
          amount: paymentData.amount,
          currency: paymentData.currency,
          status: paymentData.status,
          description: paymentData.description,
          metadata: paymentData.metadata,
        },
      ]);

    if (error) {
      console.error('❌ Error saving payment to database:', error);
      console.error('❌ Error details:', JSON.stringify(error, null, 2));
    } else {
      console.log('✅ Payment saved successfully:', data);
    }
  } catch (error) {
    console.error('❌ Exception in savePaymentToDatabase:', error);
  }
}

async function updatePaymentStatus(
  stripePaymentId: string,
  status: 'pending' | 'completed' | 'failed' | 'refunded'
) {
  try {
    const { data, error } = await supabaseAdmin
      .from('payments')
      .update({ status })
      .eq('stripe_payment_id', stripePaymentId);

    if (error) {
      console.error('Error updating payment status:', error);
    } else {
      console.log('Payment status updated:', data);
    }
  } catch (error) {
    console.error('Error in updatePaymentStatus:', error);
  }
}