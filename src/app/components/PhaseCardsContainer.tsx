"use client";

import React from 'react';
import { useDashboard } from '../contexts/DashboardContext';

interface ProjectPhase {
  number: string;
  name: string;
  description: string;
  status: 'completed' | 'in-progress' | 'pending';
  progress: number;
}

export default React.memo(function PhaseCardsContainer() {
  const { hasProjects, loading, projects } = useDashboard();

  // Function to calculate phases based on overall progress
  const calculatePhases = (overallProgress: number): ProjectPhase[] => {
    const phaseTemplates = [
      { 
        number: "01", 
        name: "DISCOVERY", 
        description: "Research & Planning",
        threshold: 25 // Complete la 25%
      },
      { 
        number: "02", 
        name: "DESIGN", 
        description: "UI/UX & Wireframes",
        threshold: 50 // Complete la 50%
      },
      { 
        number: "03", 
        name: "DEVELOPMENT", 
        description: "Coding & Testing",
        threshold: 80 // Complete la 80%
      },
      { 
        number: "04", 
        name: "LAUNCH", 
        description: "Deployment & Go-live",
        threshold: 100 // Complete la 100%
      }
    ];

    return phaseTemplates.map((template, index) => {
      const prevThreshold = index === 0 ? 0 : phaseTemplates[index - 1].threshold;
      const currentThreshold = template.threshold;
      
      let status: 'completed' | 'in-progress' | 'pending';
      let progress: number;

      if (overallProgress >= currentThreshold) {
        // Phase is complete
        status = 'completed';
        progress = 100;
      } else if (overallProgress > prevThreshold) {
        // Phase is in progress
        status = 'in-progress';
        // Calculate progress within the phase
        const phaseRange = currentThreshold - prevThreshold;
        const phaseProgress = overallProgress - prevThreshold;
        progress = Math.round((phaseProgress / phaseRange) * 100);
      } else {
        // Phase is pending
        status = 'pending';
        progress = 0;
      }

      return {
        number: template.number,
        name: template.name,
        description: template.description,
        status,
        progress
      };
    });
  };

  // Data for when no projects exist (all at zero)
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



  // Get current project's overall progress
  const currentProject = hasProjects && projects.length > 0 ? projects[0] : null;
  const overallProgress = currentProject?.progress || 0;
  
  // Calculate phases based on overall progress
  const phases = hasProjects ? calculatePhases(overallProgress) : phasesEmpty;

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
        <h3 className="text-xl text-gray-900 uppercase">Project Phases</h3>
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
}); 