// app/api/payments/test-connection/route.ts
import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { supabaseAdmin } from '@/lib/supabase';

export async function GET() {
  try {
    console.log('🔍 Testing Stripe & Supabase connection...');

    const session = await auth();
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Test Supabase connection
    const { data: payments, error: paymentsError } = await supabaseAdmin
      .from('payments')
      .select('*')
      .limit(1);

    const supabaseWorking = !paymentsError;
    
    // Test Stripe webhook endpoint
    const webhookResponse = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/payments/webhook`, {
      method: 'OPTIONS'
    });
    
    const stripeWebhookWorking = webhookResponse.status !== 404;

    return NextResponse.json({
      status: 'Connection Test Results',
      supabase: {
        working: supabaseWorking,
        error: paymentsError?.message || null,
        paymentsCount: payments?.length || 0
      },
      stripe: {
        webhookEndpoint: `${process.env.NEXT_PUBLIC_APP_URL}/api/payments/webhook`,
        webhookWorking: stripeWebhookWorking
      },
      environment: {
        hasStripeSecret: !!process.env.STRIPE_SECRET_KEY,
        hasStripeWebhookSecret: !!process.env.STRIPE_WEBHOOK_SECRET,
        hasSupabaseServiceKey: !!process.env.SUPABASE_SERVICE_ROLE_KEY
      }
    });

  } catch (error) {
    console.error('❌ Connection test failed:', error);
    return NextResponse.json(
      { error: 'Connection test failed', details: error },
      { status: 500 }
    );
  }
}