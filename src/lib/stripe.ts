// lib/stripe.ts
import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is required');
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2025-06-30.basil',
  typescript: true,
});

// Stripe client pentru frontend
export const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

if (!stripePublishableKey) {
  throw new Error('NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is required');
}

// Configurație pentru diferite tipuri de plăți
export const PAYMENT_CONFIGS = {
  one_time: {
    name: 'Website Development - One Time Payment',
    description: 'Payment for website development services',
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?payment=success`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?payment=cancelled`,
  },
  monthly_maintenance: {
    name: 'Website Maintenance - Monthly Subscription', 
    description: 'Monthly maintenance and support services',
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?payment=success`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?payment=cancelled`,
  }
} as const;

// Helper pentru crearea unui Payment Intent
export async function createPaymentIntent(
  amount: number,
  currency: string = 'RON',
  metadata: Record<string, string> = {}
) {
  return await stripe.paymentIntents.create({
    amount: Math.round(amount * 100), // Stripe folosește cei mai mici din moneda (bani în RON)
    currency: currency.toLowerCase(),
    metadata,
  });
}

// Helper pentru crearea unui Checkout Session
export async function createCheckoutSession(
  userEmail: string,
  amount: number,
  paymentType: 'one_time' | 'monthly_maintenance',
  metadata: Record<string, string> = {}
) {
  const config = PAYMENT_CONFIGS[paymentType];
  
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: paymentType === 'monthly_maintenance' ? 'subscription' : 'payment',
    customer_email: userEmail,
    
    // Pentru plăți one-time
    ...(paymentType === 'one_time' && {
      line_items: [
        {
          price_data: {
            currency: 'ron',
            product_data: {
              name: config.name,
              description: config.description,
            },
            unit_amount: Math.round(amount * 100),
          },
          quantity: 1,
        },
      ],
    }),
    
    // Pentru subscripții lunare
    ...(paymentType === 'monthly_maintenance' && {
      line_items: [
        {
          price_data: {
            currency: 'ron',
            product_data: {
              name: config.name,
              description: config.description,
            },
            unit_amount: Math.round(amount * 100),
            recurring: {
              interval: 'month',
            },
          },
          quantity: 1,
        },
      ],
    }),
    
    success_url: config.success_url,
    cancel_url: config.cancel_url,
    metadata: {
      user_email: userEmail,
      payment_type: paymentType,
      ...metadata,
    },
  });

  return session;
}

// Helper pentru validarea webhook-ului Stripe
export function validateStripeWebhook(body: Buffer, signature: string) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  
  if (!webhookSecret) {
    throw new Error('STRIPE_WEBHOOK_SECRET is required');
  }

  try {
    return stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (error) {
    throw new Error(`Webhook signature verification failed: ${error}`);
  }
}