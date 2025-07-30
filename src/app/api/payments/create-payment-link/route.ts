// app/api/payments/create-payment-link/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { createCheckoutSession } from '@/lib/stripe';
import { CreatePaymentData } from '@/lib/types';

export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const body: CreatePaymentData = await request.json();
    const { user_email, payment_type, amount, currency = 'RON', description, metadata } = body;

    // Validare input
    if (!user_email || !payment_type || !amount) {
      return NextResponse.json(
        { error: 'Missing required fields: user_email, payment_type, amount' },
        { status: 400 }
      );
    }

    if (amount <= 0) {
      return NextResponse.json(
        { error: 'Amount must be greater than 0' },
        { status: 400 }
      );
    }

    if (!['one_time', 'monthly_maintenance'].includes(payment_type)) {
      return NextResponse.json(
        { error: 'Invalid payment_type. Must be one_time or monthly_maintenance' },
        { status: 400 }
      );
    }

    // Creează Stripe Checkout Session
    const checkoutSession = await createCheckoutSession(
      user_email,
      amount,
      payment_type,
      {
        created_by: session.user.email,
        description: description || '',
        ...metadata,
      }
    );

    return NextResponse.json({
      payment_link_url: checkoutSession.url,
      payment_link_id: checkoutSession.id,
      user_email,
      amount,
      payment_type,
      currency,
    });

  } catch (error) {
    console.error('Error creating payment link:', error);
    return NextResponse.json(
      { error: 'Failed to create payment link' },
      { status: 500 }
    );
  }
}