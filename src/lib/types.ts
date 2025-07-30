export interface Project {
  id: string;
  user_id: string;
  name: string;
  description?: string;
  contact_email?: string;
  contact_phone?: string;
  website_url?: string;
  project_type?: string;
  project_value?: number;
  status: 'planning' | 'development' | 'testing' | 'deployment' | 'completed' | 'maintenance';
  progress: number;
  start_date: string;
  estimated_completion_date?: string;
  created_at: string;
  updated_at: string;
}

export interface CreateProjectData {
  name: string;
  description?: string;
  contact_email?: string;
  contact_phone?: string;
  website_url?: string;
  project_type?: string;
  project_value?: number;
  estimated_completion_date?: string;
}

export interface Payment {
  id: string;
  user_id: string;
  user_email: string;
  stripe_payment_id: string;
  stripe_session_id?: string;
  payment_type: 'one_time' | 'monthly_maintenance';
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  description?: string;
  metadata?: Record<string, any>;
  payment_date: string;
  created_at: string;
  updated_at: string;
}

export interface CreatePaymentData {
  user_email: string;
  payment_type: 'one_time' | 'monthly_maintenance';
  amount: number;
  currency?: string;
  description?: string;
  metadata?: Record<string, any>;
}

export interface StripePaymentLinkData {
  payment_link_url: string;
  payment_link_id: string;
  user_email: string;
  amount: number;
  payment_type: 'one_time' | 'monthly_maintenance';
}

export interface LighthouseMetrics {
  performance: number;
  accessibility: number;
  bestPractices: number;
  seo: number;
  uptime: number;
  loadTime: number; // în secunde
  firstContentfulPaint: number; // în ms
  largestContentfulPaint: number; // în ms
  lastUpdated: string;
}

export interface GoogleLighthouseResponse {
  lighthouseResult: {
    categories: {
      performance: { score: number };
      accessibility: { score: number };
      'best-practices': { score: number };
      seo: { score: number };
    };
    audits: {
      'first-contentful-paint': { displayValue: string; numericValue: number };
      'largest-contentful-paint': { displayValue: string; numericValue: number };
      'speed-index': { displayValue: string; numericValue: number };
    };
  };
} 