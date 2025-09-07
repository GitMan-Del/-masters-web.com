// app/api/payments/webhook/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { validateStripeWebhook } from '@/lib/stripe';
import { supabaseAdmin } from '@/lib/supabase';
import Stripe from 'stripe';

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get('stripe-signature');

   

    if (!signature) {
      console.error('❌ Missing stripe-signature header');
      return NextResponse.json(
        { error: 'Missing stripe-signature header' },
        { status: 400 }
      );
    }

    // Validează webhook-ul
    const event = validateStripeWebhook(Buffer.from(body), signature);

    
    
    // Log doar pentru checkout.session.completed să nu spam consola
    if (event.type === 'checkout.session.completed') {
    }

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
  const userEmail = session.customer_email || session.metadata?.user_email || session.customer_details?.email;
  const paymentType = session.metadata?.payment_type as 'one_time' | 'monthly_maintenance';
  
  if (!userEmail) {
    console.error('❌ NO USER EMAIL FOUND!');
    console.error('❌ customer_email:', session.customer_email);
    console.error('❌ metadata.user_email:', session.metadata?.user_email);
    console.error('❌ SKIPPING - Payment will not be saved to database');
    return;
  }
  
  if (!paymentType) {
    console.error('❌ NO PAYMENT TYPE FOUND!');
    console.error('❌ metadata:', session.metadata);
    console.error('❌ Available keys in metadata:', Object.keys(session.metadata || {}));
    return;
  }
  

  // Pentru plăți one-time
  if (paymentType === 'one_time') {
    
    if (session.payment_intent) {
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
    } else {
      console.error('❌ No payment_intent found for one-time payment!');
    }
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
  
  // Actualizează statusul plății dacă există deja în baza de date
  await updatePaymentStatus(paymentIntent.id, 'completed');
}

async function handlePaymentFailed(paymentIntent: Stripe.PaymentIntent) {
  
  // Actualizează statusul plății
  await updatePaymentStatus(paymentIntent.id, 'failed');
}

async function handleInvoicePaymentSucceeded(invoice: Stripe.Invoice) {
  
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
  

    const {  error } = await supabaseAdmin
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
    const { error } = await supabaseAdmin
      .from('payments')
      .update({ status })
      .eq('stripe_payment_id', stripePaymentId);

    if (error) {
      console.error('Error updating payment status:', error);
    } else {
    }
  } catch (error) {
    console.error('Error in updatePaymentStatus:', error);
  }
}