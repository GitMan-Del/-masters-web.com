// app/api/webhook-test/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'Webhook endpoint is accessible',
    timestamp: new Date().toISOString(),
    message: 'This endpoint can receive GET requests from Stripe'
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get('stripe-signature');
    
    console.log('🔔 Test webhook received POST');
    console.log('📄 Body length:', body.length);
    console.log('🔑 Has signature:', !!signature);
    
    return NextResponse.json({
      status: 'Test webhook received successfully',
      timestamp: new Date().toISOString(),
      bodyLength: body.length,
      hasSignature: !!signature
    });
  } catch (error) {
    console.error('❌ Test webhook error:', error);
    return NextResponse.json(
      { error: 'Test webhook failed', details: error },
      { status: 500 }
    );
  }
}