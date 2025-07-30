# Stripe Setup pentru Payments

## 1. Creează tabelul `payments` în Supabase

Mergi la Supabase Dashboard → SQL Editor și rulează următoarea comandă:

```sql
-- Creez tabelul pentru payments
CREATE TABLE payments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT NOT NULL,
  user_email TEXT NOT NULL,
  stripe_payment_id TEXT UNIQUE NOT NULL,
  stripe_session_id TEXT,
  payment_type VARCHAR(50) NOT NULL, -- 'one_time' sau 'monthly_maintenance'
  amount DECIMAL(10, 2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'RON',
  status VARCHAR(20) DEFAULT 'pending', -- 'pending', 'completed', 'failed', 'refunded'
  description TEXT,
  metadata JSONB,
  payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Creez indexuri pentru performanță
CREATE INDEX idx_payments_user_id ON payments(user_id);
CREATE INDEX idx_payments_stripe_payment_id ON payments(stripe_payment_id);
CREATE INDEX idx_payments_payment_date ON payments(payment_date DESC);
CREATE INDEX idx_payments_status ON payments(status);

-- Activez RLS (Row Level Security)
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;

-- Creez politici RLS - utilizatorii pot vedea doar propriile plăți
CREATE POLICY "Users can view their own payments" ON payments
  FOR SELECT USING (auth.uid()::text = user_id);

-- Admins pot vedea toate plățile (doar pentru backend)
CREATE POLICY "Service role can manage all payments" ON payments
  FOR ALL USING (auth.role() = 'service_role');

-- Webhook-ul Stripe poate insera plăți noi
CREATE POLICY "Allow insert for service role" ON payments
  FOR INSERT WITH CHECK (auth.role() = 'service_role');

-- Funcție pentru actualizarea automată a updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger pentru actualizarea automată a updated_at
CREATE TRIGGER update_payments_updated_at 
  BEFORE UPDATE ON payments 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
```

## 2. Configurarea Environment Variables

Adaugă în fișierul `.env.local`:

```env
# Stripe Keys (Test mode)
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Pentru production, folosește:
# STRIPE_SECRET_KEY=sk_live_...
# NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
```

## 3. Tipuri de plăți configurate

- **One-time payment**: Pentru plata inițială a site-ului
- **Monthly maintenance**: Pentru plăți recurente lunare de mentenanță

## 4. Workflow-ul de plată

1. Admin creează un payment link pentru user
2. User-ul primește link-ul prin email/dashboard
3. User-ul se autentifică cu email-ul său de pe site
4. User-ul completează plata în Stripe
5. Webhook-ul Stripe notifică backend-ul
6. Payment-ul este salvat în baza de date
7. Payment-ul apare în "Recent Payments"