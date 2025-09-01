"use client";

interface EmptyProjectCardProps {
  onCreateProject: () => void;
}

export default function EmptyProjectCard({ onCreateProject }: EmptyProjectCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-dashed border-gray-300 hover:border-purple-400 transition-all duration-300 group cursor-pointer h-full"
         onClick={onCreateProject}>
      
      {/* Icon */}
      <div className="flex justify-center mb-4">
        <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-colors">
          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Create Your First Project
        </h3>
        <p className="text-gray-500 text-xs mb-6 leading-relaxed">
          Start by adding a new project to view your progress and metrics in the dashboard.
        </p>

        {/* Features */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center text-xs text-gray-600">
            <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Real-time progress monitoring</span>
          </div>
          <div className="flex items-center text-xs text-gray-600">
            <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Detailed performance analytics</span>
          </div>
        </div>

        {/* CTA Button */}
        <button className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors group-hover:scale-105 transform">
          Create New Project
        </button>
      </div>

      {/* Bottom decoration */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex justify-center space-x-2">
          <div className="w-2 h-2 bg-purple-200 rounded-full group-hover:bg-purple-400 transition-colors"></div>
          <div className="w-2 h-2 bg-purple-300 rounded-full group-hover:bg-purple-500 transition-colors"></div>
          <div className="w-2 h-2 bg-purple-200 rounded-full group-hover:bg-purple-400 transition-colors"></div>
        </div>
      </div>
    </div>
  );
} 
