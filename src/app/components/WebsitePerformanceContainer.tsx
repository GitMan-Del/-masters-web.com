"use client";

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

interface PerformanceScore {
  label: string;
  score: number;
  color: string;
}

interface WebsitePerformanceContainerProps {
  refreshTrigger?: number;
}

export default function WebsitePerformanceContainer({ refreshTrigger }: WebsitePerformanceContainerProps) {
  const { data: session } = useSession();
  const [hasProjects, setHasProjects] = useState(false);
  const [loading, setLoading] = useState(true);

  // Date pentru când există proiecte (vor fi implementate mai târziu cu date reale)
  const performanceDataWithProjects: PerformanceScore[] = [
    { label: "Performance", score: 99, color: "#10B981" },
    { label: "Accessibility", score: 100, color: "#10B981" },
    { label: "Best Practices", score: 100, color: "#10B981" },
    { label: "SEO", score: 92, color: "#10B981" }
  ];

  // Date pentru când nu există proiecte
  const performanceDataEmpty: PerformanceScore[] = [
    { label: "Performance", score: 0, color: "#E5E7EB" },
    { label: "Accessibility", score: 0, color: "#E5E7EB" },
    { label: "Best Practices", score: 0, color: "#E5E7EB" },
    { label: "SEO", score: 0, color: "#E5E7EB" }
  ];

  const checkProjects = async () => {
    if (!session?.user?.id) return;

    try {
      const response = await fetch('/api/projects');
      if (response.ok) {
        const data = await response.json();
        setHasProjects(data.projects && data.projects.length > 0);
      }
    } catch (error) {
      console.error('Error checking projects:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkProjects();
  }, [session, refreshTrigger]);

  const performanceData = hasProjects ? performanceDataWithProjects : performanceDataEmpty;

  const CircularProgress = ({ score, color }: { score: number; color: string }) => {
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
            {score}
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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
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
            <CircularProgress score={metric.score} color={metric.color} />
            <span className={`mt-3 text-sm font-medium ${hasProjects ? 'text-gray-700' : 'text-gray-400'}`}>
              {metric.label}
            </span>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>
            {hasProjects ? 'Latest scan: 2 hours ago' : 'No data available - Add a project to see metrics'}
          </span>
          <p className={`font-medium hover:underline cursor-pointer ${
            hasProjects ? 'text-purple-600 hover:text-purple-700' : 'text-gray-400 cursor-not-allowed'
          }`}>
            {hasProjects ? 'View full report →' : 'No report available'}
          </p>
        </div>
      </div>
    </div>
  );
} 