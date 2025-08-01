"use client";

import React from 'react';
import { useDashboard } from '../contexts/DashboardContext';
import ProjectCard from './ProjectCard';
import EmptyProjectCard from './EmptyProjectCard';

interface ProjectCardContainerProps {
  onCreateProject: () => void;
}

export default React.memo(function ProjectCardContainer({ 
  onCreateProject
}: ProjectCardContainerProps) {
  const { projects, lighthouseData, loading, error, refreshData } = useDashboard();

  

  if (loading) {
    return (
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="animate-pulse">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gray-200 rounded-xl"></div>
              <div>
                <div className="h-6 bg-gray-200 rounded w-32 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-24"></div>
              </div>
            </div>
            <div className="h-6 bg-gray-200 rounded w-16"></div>
          </div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-xl p-6 shadow-sm border border-red-200">
        <div className="text-center">
          <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-3">
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Eroare la încărcare</h3>
          <p className="text-sm text-gray-500 mb-4">{error}</p>
          <button 
            onClick={refreshData}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition-colors"
          >
            Încearcă din nou
          </button>
        </div>
      </div>
    );
  }

      // If no projects exist, show the creation card
  if (projects.length === 0) {
    return <EmptyProjectCard onCreateProject={onCreateProject} />;
  }

  // For the first project, show ProjectCard with real data
  const activeProject = projects[0];
  return <ProjectCard project={activeProject} lighthouseData={lighthouseData} />;
}); 