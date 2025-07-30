// app/api/debug/supabase-check/route.ts
import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { supabaseAdmin } from '@/lib/supabase';

export async function GET() {
  try {
    const session = await auth();
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    console.log('🔍 Checking Supabase tables and permissions...');

    // 1. Check if payments table exists
    const { error: tablesError } = await supabaseAdmin
      .rpc('check_table_exists', { table_name: 'payments' })
      .single();

    if (tablesError) {
      console.log('Checking tables manually...');
      // Try to select from payments table
      const { data: paymentsTest, error: paymentsError } = await supabaseAdmin
        .from('payments')
        .select('count')
        .limit(1);
      
      console.log('Payments table test:', { paymentsTest, paymentsError });
    }

    // 2. Test insert capability
    console.log('Testing insert capability...');
    const testPayment = {
      user_id: session.user.email,
      user_email: session.user.email,
      stripe_payment_id: 'test_' + Date.now(),
      payment_type: 'one_time',
      amount: 1.00,
      currency: 'RON',
      status: 'completed',
      description: 'Debug test payment'
    };

    const { data: insertData, error: insertError } = await supabaseAdmin
      .from('payments')
      .insert([testPayment])
      .select();

    console.log('Insert test result:', { insertData, insertError });

    // 3. Clean up test data
    if (insertData && insertData.length > 0) {
      await supabaseAdmin
        .from('payments')
        .delete()
        .eq('stripe_payment_id', testPayment.stripe_payment_id);
      console.log('Test payment cleaned up');
    }

    // 4. Check RLS policies
    const { data: policies, error: policiesError } = await supabaseAdmin
      .from('pg_policies')
      .select('*')
      .eq('tablename', 'payments');

    console.log('RLS Policies:', { policies, policiesError });

    return NextResponse.json({
      success: true,
      tests: {
        tableExists: !tablesError,
        canInsert: !insertError,
        insertData: insertData,
        policies: policies
      },
      errors: {
        tablesError: tablesError?.message,
        insertError: insertError?.message,
        policiesError: policiesError?.message
      },
      environment: {
        hasSupabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
        hasSupabaseServiceKey: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
        hasStripeSecret: !!process.env.STRIPE_SECRET_KEY,
        hasStripeWebhookSecret: !!process.env.STRIPE_WEBHOOK_SECRET
      }
    });

  } catch (error) {
    console.error('❌ Debug check failed:', error);
    return NextResponse.json(
      { error: 'Debug check failed', details: error },
      { status: 500 }
    );
  }
}