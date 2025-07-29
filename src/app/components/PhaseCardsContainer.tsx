"use client";

import { useState, useEffect, useCallback } from 'react';
import { useSession } from 'next-auth/react';

interface ProjectPhase {
  number: string;
  name: string;
  description: string;
  status: 'completed' | 'in-progress' | 'pending';
  progress: number;
}

interface PhaseCardsContainerProps {
  refreshTrigger?: number;
}

export default function PhaseCardsContainer({ refreshTrigger }: PhaseCardsContainerProps) {
  const { data: session } = useSession();
  const [hasProjects, setHasProjects] = useState(false);
  const [loading, setLoading] = useState(true);

  // Date pentru când există proiecte (date reale)
  const phasesWithProjects: ProjectPhase[] = [
    { 
      number: "01", 
      name: "DISCOVERY", 
      description: "Research & Planning",
      status: 'completed',
      progress: 100
    },
    { 
      number: "02", 
      name: "DESIGN", 
      description: "UI/UX & Wireframes",
      status: 'completed',
      progress: 100
    },
    { 
      number: "03", 
      name: "DEVELOPMENT", 
      description: "Coding & Testing",
      status: 'in-progress',
      progress: 75
    },
    { 
      number: "04", 
      name: "LAUNCH", 
      description: "Deployment & Go-live",
      status: 'pending',
      progress: 0
    }
  ];

  // Date pentru când nu există proiecte (toate la zero)
  const phasesEmpty: ProjectPhase[] = [
    { 
      number: "01", 
      name: "DISCOVERY", 
      description: "Research & Planning",
      status: 'pending',
      progress: 0
    },
    { 
      number: "02", 
      name: "DESIGN", 
      description: "UI/UX & Wireframes",
      status: 'pending',
      progress: 0
    },
    { 
      number: "03", 
      name: "DEVELOPMENT", 
      description: "Coding & Testing",
      status: 'pending',
      progress: 0
    },
    { 
      number: "04", 
      name: "LAUNCH", 
      description: "Deployment & Go-live",
      status: 'pending',
      progress: 0
    }
  ];

  const checkProjects = useCallback(async () => {
    if (!session?.user?.email) {
      setLoading(false);
      return;
    }

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
  }, [session?.user?.email]);

  useEffect(() => {
    checkProjects();
  }, [checkProjects, refreshTrigger]);

  const phases = hasProjects ? phasesWithProjects : phasesEmpty;
  const overallProgress = hasProjects ? 68 : 0;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'in-progress':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'pending':
        return hasProjects ? 'bg-gray-100 text-gray-500 border-gray-200' : 'bg-gray-50 text-gray-400 border-gray-100';
      default:
        return 'bg-gray-100 text-gray-500 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return '✓';
      case 'in-progress':
        return '○';
      case 'pending':
        return '○';
      default:
        return '○';
    }
  };

  // Loading skeleton
  if (loading) {
    return (
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
        <div className="animate-pulse">
          {/* Header skeleton */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-5 h-5 bg-gray-200 rounded-lg"></div>
            <div className="h-4 bg-gray-200 rounded w-32"></div>
          </div>
          
          {/* Cards skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="p-4 rounded-lg border border-gray-200 bg-gray-50">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gray-200 rounded"></div>
                    <div className="w-8 h-6 bg-gray-200 rounded"></div>
                  </div>
                  <div className="w-8 h-4 bg-gray-200 rounded"></div>
                </div>
                <div className="mb-3">
                  <div className="h-4 bg-gray-200 rounded w-20 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-full"></div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2"></div>
              </div>
            ))}
          </div>

          {/* Footer skeleton */}
          <div className="mt-3 pt-3 border-t border-gray-200 text-center">
            <div className="h-4 bg-gray-200 rounded w-32 mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-5 h-5 bg-purple-100 rounded-lg flex items-center justify-center">
          <svg className="w-3 h-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m0 0h2m0 0h2a2 2 0 002-2V7a2 2 0 00-2-2h-2m0 0V3m0 0h2m-2 0h-2" />
          </svg>
        </div>
        <h3 className="text-sm font-semibold text-gray-900 uppercase">Project Phases</h3>
      </div>
      
      {/* Grid Layout - 4 columns for full width */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {phases.map((phase, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg border flex flex-col ${getStatusColor(phase.status)}`}
          >
            {/* Header with icon and number */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className={`text-lg font-bold ${!hasProjects ? 'opacity-50' : ''}`}>
                  {getStatusIcon(phase.status)}
                </span>
                <span className={`font-bold text-xl ${!hasProjects ? 'opacity-50' : ''}`}>
                  {phase.number}
                </span>
              </div>
              <span className={`text-sm font-bold ${!hasProjects ? 'opacity-50' : ''}`}>
                {phase.progress}%
              </span>
            </div>

            {/* Phase name and description */}
            <div className="flex-1 mb-3">
              <h4 className={`font-bold text-sm uppercase mb-2 ${!hasProjects ? 'opacity-50' : ''}`}>
                {phase.name}
              </h4>
              <p className={`text-xs opacity-75 leading-relaxed ${!hasProjects ? 'opacity-40' : ''}`}>
                {phase.description}
              </p>
            </div>

            {/* Progress bar at bottom */}
            <div className="mt-auto">
              <div className="w-full bg-white rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${
                    phase.status === 'completed' ? 'bg-green-500' :
                    phase.status === 'in-progress' ? 'bg-blue-500' : 'bg-gray-300'
                  } ${!hasProjects ? 'opacity-50' : ''}`}
                  style={{ width: `${phase.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Footer */}
      <div className="mt-3 pt-3 border-t border-gray-200 text-center">
        <div className={`text-xs text-gray-600 ${!hasProjects ? 'opacity-50' : ''}`}>
          <span className="font-medium">
            {hasProjects 
              ? `Overall Progress: ${overallProgress}%` 
              : 'No project data available'
            }
          </span>
        </div>
      </div>
    </div>
  );
} 