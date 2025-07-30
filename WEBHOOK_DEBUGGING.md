# 🐛 Webhook Debugging Steps

## Problema: Webhook primește evenimente dar nu salvează în database

### 1. Verifică logurile în Vercel

Mergi la **Vercel Dashboard** → **Functions** → **Logs** și caută:

```
🛒 ========== HANDLING CHECKOUT SESSION ==========
👤 EXTRACTED User email: client@example.com  
💳 EXTRACTED Payment type: one_time
✅ Both email and payment type found, proceeding...
💾 Calling savePaymentToDatabase...
✅ savePaymentToDatabase completed
```

### 2. Dacă vezi eroarea "NO USER EMAIL FOUND"

Payment link-ul nu are customer email setat. În Stripe Dashboard:
- Customer information → Collect customer's email address ✅

### 3. Dacă vezi eroarea "NO PAYMENT TYPE FOUND"

Payment link-ul nu are metadata. În Stripe Dashboard:
- Metadata → Add key: `payment_type`, value: `one_time`

### 4. Dacă nu vezi deloc logurile

Webhook-ul nu primește evenimente. Verifică:
- URL în Stripe: `https://masters-web.vercel.app/api/payments/webhook`
- Events selected: `checkout.session.completed`

### 5. Test rapid

Creează payment link cu:
```
Amount: 10 RON
Customer email: test@example.com (prefilled)
Metadata: payment_type = one_time
```

Fă plată cu card test: 4242 4242 4242 4242

### 6. Debugging endpoint

Accesează pentru verificarea Supabase:
```
GET https://masters-web.vercel.app/api/debug/supabase-check
```