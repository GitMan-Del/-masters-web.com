# Supabase Setup pentru Projects

## 1. Creează tabelul `projects` în Supabase

Mergi la Supabase Dashboard → SQL Editor și rulează următoarea comandă:

```sql
-- Creez tabelul pentru proiecte
CREATE TABLE projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  contact_email VARCHAR(255),
  contact_phone VARCHAR(50),
  website_url VARCHAR(255),
  project_type VARCHAR(100),
  project_value DECIMAL(10, 2),
  status VARCHAR(50) DEFAULT 'planning',
  progress INTEGER DEFAULT 0,
  start_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  estimated_completion_date TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Creez indexul pentru user_id pentru performanță
CREATE INDEX idx_projects_user_id ON projects(user_id);

-- Activez RLS (Row Level Security)
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Creez politici RLS - utilizatorii pot vedea doar propriile proiecte
CREATE POLICY "Users can view their own projects" ON projects
  FOR SELECT USING (auth.uid()::text = user_id);

CREATE POLICY "Users can insert their own projects" ON projects
  FOR INSERT WITH CHECK (auth.uid()::text = user_id);

CREATE POLICY "Users can update their own projects" ON projects
  FOR UPDATE USING (auth.uid()::text = user_id);

CREATE POLICY "Users can delete their own projects" ON projects
  FOR DELETE USING (auth.uid()::text = user_id);
```

## 2. Verifică că tabela `users` există

Dacă nu există, creează-o:

```sql
CREATE TABLE users (
  id TEXT PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  image TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Activez RLS pentru users
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Politici pentru users
CREATE POLICY "Users can view their own data" ON users
  FOR SELECT USING (auth.uid()::text = id);

CREATE POLICY "Users can insert their own data" ON users
  FOR INSERT WITH CHECK (auth.uid()::text = id);

CREATE POLICY "Users can update their own data" ON users
  FOR UPDATE USING (auth.uid()::text = id);
```

## 3. Verifică variabilele de mediu

Asigură-te că ai în `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
```

## 4. Testează conexiunea

Poți testa conexiunea prin SQL Editor în Supabase:

```sql
-- Testează dacă tabelul există
SELECT * FROM projects LIMIT 1;

-- Verifică politicile RLS
SELECT * FROM pg_policies WHERE tablename = 'projects';
``` 