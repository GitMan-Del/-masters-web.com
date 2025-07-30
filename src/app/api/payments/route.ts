// app/api/payments/route.ts
import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { supabaseAdmin } from '@/lib/supabase';
import { Payment } from '@/lib/types';

// GET - Obține toate plățile pentru user-ul curent
export async function GET() {
  try {
    const session = await auth();
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const { data: payments, error } = await supabaseAdmin
      .from('payments')
      .select('*')
      .eq('user_id', session.user.email)
      .order('payment_date', { ascending: false });

    if (error) {
      console.error('Supabase error fetching payments:', error);
      return NextResponse.json(
        { error: 'Failed to fetch payments' },
        { status: 500 }
      );
    }

    return NextResponse.json({ 
      payments: payments as Payment[],
      count: payments?.length || 0 
    });

  } catch (error) {
    console.error('Error in payments GET route:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}