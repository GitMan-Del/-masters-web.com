import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { supabaseAdmin } from '@/lib/supabase';
import { CreateProjectData } from '@/lib/types';

// GET - Obține toate proiectele utilizatorului
export async function GET() {
  const session = await auth();
  
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { data: projects, error } = await supabaseAdmin
      .from('projects')
      .select('*')
      .eq('user_id', session.user.email)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching projects:', error);
      return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
    }

    return NextResponse.json({ projects });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST - Creează un proiect nou
export async function POST(request: NextRequest) {
  const session = await auth();
  
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthorized - No user email in session' }, { status: 401 });
  }

  try {
    const body: CreateProjectData = await request.json();
    
    // Validez câmpurile obligatorii
    if (!body.name || body.name.trim() === '') {
      return NextResponse.json({ error: 'Project name is required' }, { status: 400 });
    }

    const projectData = {
      user_id: session.user.email,
      name: body.name.trim(),
      description: body.description?.trim() || null,
      contact_email: body.contact_email?.trim() || null,
      contact_phone: body.contact_phone?.trim() || null,
      website_url: body.website_url?.trim() || null,
      project_type: body.project_type?.trim() || null,

      project_value: body.project_value || null,
      estimated_completion_date: body.estimated_completion_date || null,
    };


    const { data: project, error } = await supabaseAdmin
      .from('projects')
      .insert([projectData])
      .select()
      .single();

    if (error) {
      console.error('Supabase error creating project:', error);
      console.error('Error details:', JSON.stringify(error, null, 2));
      return NextResponse.json({ 
        error: `Failed to create project: ${error.message}`,
        details: error 
      }, { status: 500 });
    }

    return NextResponse.json({ project }, { status: 201 });
  } catch (error) {
    console.error('Catch block error:', error);
    return NextResponse.json({ 
      error: `Internal server error: ${error instanceof Error ? error.message : 'Unknown error'}` 
    }, { status: 500 });
  }
} 