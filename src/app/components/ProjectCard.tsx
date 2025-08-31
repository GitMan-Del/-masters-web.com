import Image from "next/image";
import { Project, LighthouseMetrics } from '@/lib/types';
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
  lighthouseData?: LighthouseMetrics | null;
}

export default function ProjectCard({ project, lighthouseData }: ProjectCardProps) {
  console.log('🎯 ProjectCard received lighthouseData:', lighthouseData);
  // Helper function pentru generarea inițialelor
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  // Helper function pentru statusul proiectului
  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'completed':
        return { color: 'bg-green-500', text: 'text-green-600', label: 'Completed' };
      case 'development':
        return { color: 'bg-blue-500', text: 'text-blue-600', label: 'Development' };
      case 'testing':
        return { color: 'bg-yellow-500', text: 'text-yellow-600', label: 'Testing' };
      case 'deployment':
        return { color: 'bg-purple-500', text: 'text-purple-600', label: 'Deployment' };
      case 'maintenance':
        return { color: 'bg-gray-500', text: 'text-gray-600', label: 'Maintenance' };
      default:
        return { color: 'bg-orange-500', text: 'text-orange-600', label: 'Planning' };
    }
  };

  // Helper function pentru formatarea datei
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ro-RO', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const statusInfo = getStatusInfo(project.status);

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      {/* Header with status indicator */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">{getInitials(project.name)}</span>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <h3 className="text-2xl text-gray-900">{project.name}</h3>
              <div className="flex items-center space-x-1">
                <div className={`w-2 h-2 ${statusInfo.color} rounded-full animate-pulse`}></div>
                <span className={`text-xs ${statusInfo.text} font-medium`}>{statusInfo.label}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {project.project_type && (
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-medium">
                  {project.project_type}
                </span>
              )}

            </div>
          </div>
        </div>
        
        <div className="text-right">
          <div className="text-lg font-bold text-green-600">
            {project.project_value ? `€${project.project_value.toLocaleString()}` : '€0'}
          </div>
          <div className="text-xs text-gray-500">Project Value</div>
        </div>
      </div>
      
      {/* Project Description */}
      <p className="text-sm text-gray-600 leading-relaxed mb-4">
        {project.description || 'No description available for this project.'}
      </p>

      {/* Project Metrics - Uptime, Load Time, Performance */}
      <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-gray-50 rounded-lg">
        <div className="text-center">
          <div className="text-lg font-bold text-gray-900">
            {lighthouseData ? `${Math.round(lighthouseData.uptime)}%` : '0%'}
          </div>
          <div className="text-xs text-gray-500">Uptime</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-gray-900">
            {lighthouseData ? `${Math.round(lighthouseData.loadTime * 10) / 10}s` : '0s'}
          </div>
          <div className="text-xs text-gray-500">Load Time</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-gray-900">
            {lighthouseData ? `${Math.round(lighthouseData.performance)}%` : '0%'}
          </div>
          <div className="text-xs text-gray-500">Performance</div>
        </div>
      </div>

      {/* Progress and Timeline */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Project Progress</span>
          <span className="text-sm font-bold text-green-600">{project.progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-300" 
            style={{ width: `${project.progress}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>Started: {formatDate(project.start_date)}</span>
          {project.estimated_completion_date && (
            <span>Est. completion: {formatDate(project.estimated_completion_date)}</span>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between">
        <div className="flex space-x-2">
          {project.website_url ? (
            <a 
              href={project.website_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors flex items-center gap-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <title>Visit Project</title>
                <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth={2} fill="none" />
                <path
                  d="M8 16L16 8M12 8h4v4"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Visit Project
            </a>
          ) : (
            <button 
              disabled
              className="bg-gray-300 text-gray-500 px-4 py-2 rounded-lg text-sm font-medium cursor-not-allowed flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-2M7 7l10 10M17 7l-10 10" />
              </svg>
              No URL
            </button>
          )}
          <Link
            href="tel:+336594692" 
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 hover:text-black transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 8V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2v-1M21 8l-9 6-9-6" />
            </svg>
            Contact Us
          </Link>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="flex -space-x-2">
            <Image src="/Logo.svg" alt="Daniel" width={24} height={24} className="w-6 h-6 rounded-full border-2 border-white" />
            <Image src="/Logo_colaborator.png" alt="Partener" width={24} height={24} className="w-6 h-6 rounded-full border-2 border-white" />
          </div>
          <span className="text-xs text-gray-500">Team</span>
        </div>
      </div>

      {/* Project Info */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <span className="text-xs text-gray-600">Creat: {formatDate(project.created_at)}</span>
        </div>
      </div>
    </div>
  );
}
