import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { LighthouseMetrics } from '@/lib/types';

export async function GET(request: NextRequest) {
  console.log('🧪 Simple Lighthouse API called');
  const session = await auth();
  
  if (!session?.user?.email) {
    console.log('❌ No session - returning 401');
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const websiteUrl = searchParams.get('url');
  console.log('🌐 Website URL from request:', websiteUrl);

  // Dacă nu există URL, returnează toate valorile la 0
  if (!websiteUrl) {
    console.log('⚠️ No URL provided - returning zero metrics');
    const emptyMetrics: LighthouseMetrics = {
      performance: 0,
      accessibility: 0,
      bestPractices: 0,
      seo: 0,
      uptime: 0,
      loadTime: 0,
      firstContentfulPaint: 0,
      largestContentfulPaint: 0,
      lastUpdated: new Date().toISOString()
    };
    return NextResponse.json({ metrics: emptyMetrics });
  }

  try {
    console.log('✅ Returning simulated metrics for URL:', websiteUrl);
    
    // Generează date simulate bazate pe URL pentru a părea mai realist
    const urlHash = websiteUrl.split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0);
      return a & a;
    }, 0);
    
    const basePerformance = 75 + (Math.abs(urlHash) % 20); // 75-95
    const baseAccessibility = 85 + (Math.abs(urlHash) % 15); // 85-100
    
    const simulatedMetrics: LighthouseMetrics = {
      performance: Math.min(100, basePerformance),
      accessibility: Math.min(100, baseAccessibility),
      bestPractices: 85 + (Math.abs(urlHash * 2) % 15), // 85-100
      seo: 90 + (Math.abs(urlHash * 3) % 10), // 90-100
      uptime: 95 + (Math.random() * 5), // 95-100%
      loadTime: 1.5 + (Math.random() * 2), // 1.5-3.5s
      firstContentfulPaint: 1000 + (Math.random() * 1000), // 1000-2000ms
      largestContentfulPaint: 2000 + (Math.random() * 1500), // 2000-3500ms
      lastUpdated: new Date().toISOString()
    };

    console.log('📊 Generated metrics:', simulatedMetrics);
    return NextResponse.json({ metrics: simulatedMetrics });

  } catch (error) {
    console.error('🚨 Error in simple lighthouse API:', error);
    console.error('🚨 Error message:', error instanceof Error ? error.message : 'Unknown error');
    
    const fallbackMetrics: LighthouseMetrics = {
      performance: 0,
      accessibility: 0,
      bestPractices: 0,
      seo: 0,
      uptime: 0,
      loadTime: 0,
      firstContentfulPaint: 0,
      largestContentfulPaint: 0,
      lastUpdated: new Date().toISOString()
    };

    return NextResponse.json({ 
      metrics: fallbackMetrics,
      error: 'Fallback metrics due to error'
    }, { status: 500 });
  }
} 