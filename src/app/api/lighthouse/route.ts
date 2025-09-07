import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { LighthouseMetrics, GoogleLighthouseResponse } from '@/lib/types';

const GOOGLE_API_KEY = process.env.GOOGLE_PAGESPEED_API_KEY;

// Cache pentru rezultatele Lighthouse (în memory pentru început)
const lighthouseCache = new Map<string, { data: LighthouseMetrics; timestamp: number }>();
const CACHE_DURATION = 60 * 60 * 1000; // 1 oră în ms

export async function GET(request: NextRequest) {
  
  try {
    const session = await auth();
   
    
    if (!session?.user?.email) {
      return NextResponse.json({ 
        error: 'Unauthorized',
        details: 'No valid session found'
      }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const websiteUrl = searchParams.get('url');

    // Dacă nu există URL, returnează toate valorile la 0
    if (!websiteUrl) {
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

    // Verifică cache-ul
    const cached = lighthouseCache.get(websiteUrl);
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
      return NextResponse.json({ metrics: cached.data });
    }


    // Verifică dacă API key-ul există
   
    
    if (!GOOGLE_API_KEY) {
      console.error('❌ Google PageSpeed API key not configured');
      return NextResponse.json({ 
        error: 'Google PageSpeed API key not configured',
        details: 'Please configure GOOGLE_PAGESPEED_API_KEY environment variable'
      }, { status: 500 });
    }

    // Face request la Google PageSpeed Insights API
    const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(websiteUrl)}&key=${GOOGLE_API_KEY}&category=performance&category=accessibility&category=best-practices&category=seo&strategy=desktop`;
    
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      console.error('🚨 Google API error:', response.status, response.statusText);
      const errorText = await response.text();
      console.error('🚨 Google API error details:', errorText);
      
      return NextResponse.json({ 
        error: 'Failed to fetch Lighthouse data from Google API',
        details: `Google API returned ${response.status}: ${response.statusText}`
      }, { status: 500 });
    }

    const data: GoogleLighthouseResponse = await response.json();

    // Procesează datele Lighthouse
  
    
    const metrics: LighthouseMetrics = {
      performance: Math.round((data.lighthouseResult.categories.performance?.score || 0) * 100),
      accessibility: Math.round((data.lighthouseResult.categories.accessibility?.score || 0) * 100),
      bestPractices: Math.round((data.lighthouseResult.categories['best-practices']?.score || 0) * 100),
      seo: Math.round((data.lighthouseResult.categories.seo?.score || 0) * 100),
      uptime: 0, // Nu avem date pentru uptime din Google API
      loadTime: Math.round((data.lighthouseResult.audits['first-contentful-paint']?.numericValue || 0) / 1000 * 10) / 10,
      firstContentfulPaint: Math.round(data.lighthouseResult.audits['first-contentful-paint']?.numericValue || 0),
      largestContentfulPaint: Math.round(data.lighthouseResult.audits['largest-contentful-paint']?.numericValue || 0),
      lastUpdated: new Date().toISOString()
    };

    // Salvează în cache
    lighthouseCache.set(websiteUrl, {
      data: metrics,
      timestamp: Date.now()
    });

    return NextResponse.json({ metrics });

  } catch (error) {
    console.error('🚨 Critical error in Lighthouse API:', error);
    console.error('🚨 Error message:', error instanceof Error ? error.message : 'Unknown error');
    console.error('🚨 Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    
    return NextResponse.json({ 
      error: 'Failed to fetch Lighthouse data',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
} 