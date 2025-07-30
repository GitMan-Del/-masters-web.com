-- Creează tabelul payments pentru Stripe integration
CREATE TABLE IF NOT EXISTS payments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT NOT NULL,
  user_email TEXT NOT NULL,
  stripe_payment_id TEXT UNIQUE NOT NULL,
  stripe_session_id TEXT,
  payment_type TEXT NOT NULL CHECK (payment_type IN ('one_time', 'monthly_maintenance')),
  amount DECIMAL(10,2) NOT NULL,
  currency TEXT NOT NULL DEFAULT 'RON',
  status TEXT NOT NULL CHECK (status IN ('pending', 'completed', 'failed', 'refunded')),
  description TEXT,
  metadata JSONB,
  payment_date TIMESTAMPTZ DEFAULT now(),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Index pentru căutări rapide
CREATE INDEX IF NOT EXISTS payments_user_email_idx ON payments(user_email);
CREATE INDEX IF NOT EXISTS payments_stripe_payment_id_idx ON payments(stripe_payment_id);
CREATE INDEX IF NOT EXISTS payments_status_idx ON payments(status);
CREATE INDEX IF NOT EXISTS payments_payment_date_idx ON payments(payment_date DESC);

-- Row Level Security (RLS) policies
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;

-- Policy pentru SELECT - utilizatorii pot vedea doar propriile plăți
CREATE POLICY "Users can view their own payments" ON payments
  FOR SELECT
  USING (user_email = auth.jwt() ->> 'email');

-- Policy pentru INSERT - se poate insera pentru orice user (webhook-ul vine de la Stripe)
CREATE POLICY "Service role can insert payments" ON payments
  FOR INSERT
  WITH CHECK (true);

-- Policy pentru UPDATE - se poate actualiza pentru orice user (webhook-ul vine de la Stripe)  
CREATE POLICY "Service role can update payments" ON payments
  FOR UPDATE
  USING (true);

-- Trigger pentru updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_payments_updated_at
  BEFORE UPDATE ON payments
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Grant permissions pentru service role
GRANT ALL ON payments TO service_role;
GRANT USAGE ON SCHEMA public TO service_role;