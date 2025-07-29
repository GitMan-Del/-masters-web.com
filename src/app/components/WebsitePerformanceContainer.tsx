"use client";

import { useState, useEffect, useCallback } from 'react';
import { useSession } from 'next-auth/react';
import { LighthouseMetrics } from '@/lib/types';

interface PerformanceScore {
  label: string;
  score: number;
  color: string;
  unit?: string;
}

interface WebsitePerformanceContainerProps {
  refreshTrigger?: number;
}

export default function WebsitePerformanceContainer({ refreshTrigger }: WebsitePerformanceContainerProps) {
  const { data: session } = useSession();
  const [hasProjects, setHasProjects] = useState(false);
  const [loading, setLoading] = useState(true);
  const [lighthouseData, setLighthouseData] = useState<LighthouseMetrics | null>(null);
  const [projectUrl, setProjectUrl] = useState<string | null>(null);

  // Generează datele de performanță pe baza rezultatelor Lighthouse
  const getPerformanceData = (): PerformanceScore[] => {
    console.log('📈 getPerformanceData called');
    console.log('🏠 hasProjects:', hasProjects);
    console.log('🔗 projectUrl:', projectUrl);
    console.log('💡 lighthouseData:', lighthouseData);
    console.log('⏳ loading:', loading);
    
    // Dacă nu există proiecte, afișează date zero
    if (!hasProjects) {
      console.log('❌ No projects - returning zero data');
      return [
        { label: "Performance", score: 0, color: "#E5E7EB" },
        { label: "Accessibility", score: 0, color: "#E5E7EB" },
        { label: "Best Practices", score: 0, color: "#E5E7EB" },
        { label: "SEO", score: 0, color: "#E5E7EB" },
        { label: "Uptime", score: 0, color: "#E5E7EB", unit: "%" },
        { label: "Load Time", score: 0, color: "#E5E7EB", unit: "s" }
      ];
    }
    
    // Dacă lighthouseData este null (încă se încarcă), afișează date zero temporar
    if (!lighthouseData) {
      console.log('⏳ Lighthouse data still loading - returning zero data temporarily');
      return [
        { label: "Performance", score: 0, color: "#E5E7EB" },
        { label: "Accessibility", score: 0, color: "#E5E7EB" },
        { label: "Best Practices", score: 0, color: "#E5E7EB" },
        { label: "SEO", score: 0, color: "#E5E7EB" }
      ];
    }
    
    console.log('✅ Using lighthouse data for display');

    const getScoreColor = (score: number) => {
      if (score >= 90) return "#10B981"; // Verde
      if (score >= 50) return "#F59E0B"; // Galben
      return "#EF4444"; // Roșu
    };

    return [
      { 
        label: "Performance", 
        score: lighthouseData.performance, 
        color: getScoreColor(lighthouseData.performance) 
      },
      { 
        label: "Accessibility", 
        score: lighthouseData.accessibility, 
        color: getScoreColor(lighthouseData.accessibility) 
      },
      { 
        label: "Best Practices", 
        score: lighthouseData.bestPractices, 
        color: getScoreColor(lighthouseData.bestPractices) 
      },
      { 
        label: "SEO", 
        score: lighthouseData.seo, 
        color: getScoreColor(lighthouseData.seo) 
      }
    ];
     };

  const fetchLighthouseData = useCallback(async (url: string | null) => {
    console.log('🔍 fetchLighthouseData called with URL:', url);
    try {
      // TEMPORARY: Use simple lighthouse for debugging
      const apiUrl = url 
        ? `/api/lighthouse-simple?url=${encodeURIComponent(url)}`
        : '/api/lighthouse-simple';
      console.log('🔧 WebsitePerformance using simple lighthouse API');
      
      console.log('📡 Making request to:', apiUrl);
      const response = await fetch(apiUrl);
      console.log('📊 Response status:', response.status, response.ok);
      
      if (response.ok) {
        const data = await response.json();
        console.log('✅ Lighthouse data received:', data);
        console.log('📈 Setting lighthouse data:', data.metrics);
        setLighthouseData(data.metrics);
        console.log('🔄 Component should re-render now with new data');
      } else {
        console.error('❌ Response not OK:', response.status);
      }
    } catch (error) {
      console.error('🚨 Error fetching Lighthouse data:', error);
      // Setează date goale în caz de eroare
      setLighthouseData({
        performance: 0,
        accessibility: 0,
        bestPractices: 0,
        seo: 0,
        uptime: 0,
        loadTime: 0,
        firstContentfulPaint: 0,
        largestContentfulPaint: 0,
        lastUpdated: new Date().toISOString()
      });
    }
  }, []);

  const checkProjects = useCallback(async () => {
    console.log('🔍 checkProjects called, session email:', session?.user?.email);
    if (!session?.user?.email) {
      setLoading(false);
      return;
    }

    try {
      console.log('📡 Fetching projects...');
      const response = await fetch('/api/projects');
      console.log('📊 Projects response:', response.status, response.ok);
      
      if (response.ok) {
        const data = await response.json();
        console.log('📦 Projects data:', data);
        const hasProjectsData = data.projects && data.projects.length > 0;
        setHasProjects(hasProjectsData);
        
        // Dacă există proiecte, încearcă să obții URL-ul primului proiect
        if (hasProjectsData && data.projects[0]?.website_url) {
          console.log('🌐 Found project URL:', data.projects[0].website_url);
          setProjectUrl(data.projects[0].website_url);
        } else {
          console.log('⚠️ No project URL found');
          setProjectUrl(null);
        }
      } else {
        console.error('❌ Projects response not OK:', response.status);
      }
    } catch (error) {
      console.error('🚨 Error checking projects:', error);
    } finally {
      setLoading(false);
    }
  }, [session?.user?.email]);

  useEffect(() => {
    console.log('🔄 checkProjects useEffect triggered, refreshTrigger:', refreshTrigger);
    checkProjects();
  }, [checkProjects, refreshTrigger]);

  useEffect(() => {
    console.log('🔄 fetchLighthouseData useEffect triggered');
    console.log('⏳ loading:', loading);
    console.log('🔗 projectUrl:', projectUrl);
    if (!loading) {
      fetchLighthouseData(projectUrl);
    }
  }, [projectUrl, loading, fetchLighthouseData]);

  const performanceData = getPerformanceData();

  const CircularProgress = ({ score, color, unit }: { score: number; color: string; unit?: string }) => {
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (score / 100) * circumference;

    return (
      <div className="relative w-24 h-24 flex items-center justify-center">
        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="#E5E7EB"
            strokeWidth="8"
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke={color}
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-300 ease-in-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-xl font-bold ${hasProjects ? 'text-gray-900' : 'text-gray-400'}`}>
            {unit === 's' ? score : Math.round(score)}{unit || ''}
          </span>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="animate-pulse">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-6 h-6 bg-gray-200 rounded-lg"></div>
            <div className="h-6 bg-gray-200 rounded w-48"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mb-3"></div>
                <div className="h-4 bg-gray-200 rounded w-16"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center">
          <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <h3 className="text-2xl text-gray-900">Website Performance</h3>
      </div>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {performanceData.map((metric, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <CircularProgress score={metric.score} color={metric.color} unit={metric.unit} />
            <span className={`mt-3 text-sm font-medium ${hasProjects ? 'text-gray-700' : 'text-gray-400'}`}>
              {metric.label}
            </span>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>
            {lighthouseData?.lastUpdated 
              ? `Last scan: ${new Date(lighthouseData.lastUpdated).toLocaleString('ro-RO')}`
              : 'No data available - Add a project with URL to see metrics'
            }
          </span>
          <p className={`font-medium hover:underline cursor-pointer ${
            projectUrl ? 'text-purple-600 hover:text-purple-700' : 'text-gray-400 cursor-not-allowed'
          }`}>
            {projectUrl ? (
              <button 
                onClick={() => {
                  console.log('Manual refresh triggered for URL:', projectUrl);
                  fetchLighthouseData(projectUrl);
                }}
                className="hover:text-purple-800 transition-colors"
              >
                Refresh data →
              </button>
            ) : (
              'No URL available'
            )}
          </p>
        </div>
      </div>
    </div>
  );
} 