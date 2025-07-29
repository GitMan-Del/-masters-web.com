export interface Project {
  id: string;
  user_id: string;
  name: string;
  description?: string;
  contact_email?: string;
  contact_phone?: string;
  website_url?: string;
  project_type?: string;
  technology_stack?: string[];
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
  technology_stack?: string[];
  project_value?: number;
  estimated_completion_date?: string;
} 