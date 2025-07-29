import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { LighthouseMetrics } from '@/lib/types';

export async function GET(request: NextRequest) {
  console.log('🧪 Test Lighthouse API called');
  const session = await auth();
  
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Returnează date simulate pentru test
  const testMetrics: LighthouseMetrics = {
    performance: 87,
    accessibility: 94,
    bestPractices: 91,
    seo: 96,
    uptime: 99.2,
    loadTime: 1.8,
    firstContentfulPaint: 1100,
    largestContentfulPaint: 2200,
    lastUpdated: new Date().toISOString()
  };

  console.log('✅ Returning test metrics');
  return NextResponse.json({ metrics: testMetrics });
} 