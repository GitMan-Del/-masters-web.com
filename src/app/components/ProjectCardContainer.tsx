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

  // Smaller skeleton loader
  if (loading) {
    return (
      <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200">
        <div className="animate-pulse">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 bg-gray-200 rounded-lg"></div>
              <div>
                <div className="h-3 bg-gray-200 rounded w-20 mb-1"></div>
                <div className="h-2 bg-gray-200 rounded w-14"></div>
              </div>
            </div>
            <div className="h-3 bg-gray-200 rounded w-10"></div>
          </div>
          <div className="space-y-1.5">
            <div className="h-2 bg-gray-200 rounded"></div>
            <div className="h-2 bg-gray-200 rounded w-2/3"></div>
          </div>
        </div>
      </div>
    );
  }

  // Smaller error card
  if (error) {
    return (
      <div className="bg-white rounded-lg p-3 shadow-sm border border-red-200">
        <div className="text-center">
          <div className="w-7 h-7 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-2">
            <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-base font-medium text-gray-900 mb-1">Eroare la încărcare</h3>
          <p className="text-xs text-gray-500 mb-2">{error}</p>
          <button 
            onClick={refreshData}
            className="bg-purple-600 text-white px-3 py-1.5 rounded-md text-xs hover:bg-purple-700 transition-colors"
          >
            Încearcă din nou
          </button>
        </div>
      </div>
    );
  }

  // If no projects exist, show the creation card (pass a prop to make it small if needed)
  if (projects.length === 0) {
    return <EmptyProjectCard onCreateProject={onCreateProject} />;
  }

  // For the first project, show ProjectCard with real data, but pass a "small" prop to make everything smaller
  const activeProject = projects[0];
  return <ProjectCard project={activeProject} lighthouseData={lighthouseData} />;
}); 
