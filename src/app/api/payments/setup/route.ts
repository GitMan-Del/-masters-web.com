// app/api/payments/setup/route.ts
import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST() {
  try {
    const session = await auth();
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    console.log('🔧 Setting up payments table...');

    // Check if payments table exists by trying to select from it
    const { data: tableCheck, error: checkError } = await supabaseAdmin
      .from('payments')
      .select('count')
      .limit(1);

    if (checkError && checkError.code === '42P01') {
      // Table doesn't exist (error code 42P01 = relation does not exist)
      console.log('❌ Payments table does not exist. Please create it manually in Supabase.');
      
      return NextResponse.json({
        success: false,
        message: 'Payments table does not exist',
        instructions: 'Please run the SQL from SUPABASE_PAYMENTS_SETUP.sql in your Supabase Dashboard',
        sqlFile: 'SUPABASE_PAYMENTS_SETUP.sql',
        created: false
      });
    } else if (checkError) {
      // Other error
      console.error('❌ Error checking table:', checkError);
      return NextResponse.json(
        { error: 'Error checking payments table', details: checkError },
        { status: 500 }
      );
    } else {
      // Table exists, test insert capability
      console.log('✅ Payments table exists. Testing insert...');
      
      const testPayment = {
        user_id: session.user.email,
        user_email: session.user.email,
        stripe_payment_id: 'setup_test_' + Date.now(),
        payment_type: 'one_time',
        amount: 1.00,
        currency: 'RON',
        status: 'completed',
        description: 'Setup test payment'
      };

      const { data: insertData, error: insertError } = await supabaseAdmin
        .from('payments')
        .insert([testPayment])
        .select();

      if (insertError) {
        console.error('❌ Cannot insert into payments table:', insertError);
        return NextResponse.json({
          success: false,
          message: 'Cannot insert into payments table',
          error: insertError.message,
          tableExists: true,
          canInsert: false
        });
      }

      // Clean up test data
      if (insertData && insertData.length > 0) {
        await supabaseAdmin
          .from('payments')
          .delete()
          .eq('stripe_payment_id', testPayment.stripe_payment_id);
        console.log('✅ Test payment cleaned up');
      }

      console.log('✅ Payments table is working correctly');
      return NextResponse.json({
        success: true,
        message: 'Payments table is working correctly',
        tableExists: true,
        canInsert: true,
        testCompleted: true
      });
    }

  } catch (error) {
    console.error('❌ Setup check failed:', error);
    return NextResponse.json(
      { error: 'Setup check failed', details: error },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const session = await auth();
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Simple check if payments table exists and user has payments
    const { data: payments, error } = await supabaseAdmin
      .from('payments')
      .select('id, user_email, payment_type, amount, status, created_at')
      .eq('user_email', session.user.email)
      .order('created_at', { ascending: false })
      .limit(5);

    if (error && error.code === '42P01') {
      return NextResponse.json({
        tableExists: false,
        message: 'Payments table does not exist',
        error: error.message
      });
    } else if (error) {
      return NextResponse.json({
        tableExists: true,
        error: error.message
      });
    }

    return NextResponse.json({
      tableExists: true,
      paymentsCount: payments?.length || 0,
      recentPayments: payments || []
    });

  } catch (error) {
    console.error('❌ GET setup check failed:', error);
    return NextResponse.json(
      { error: 'Setup check failed', details: error },
      { status: 500 }
    );
  }
}