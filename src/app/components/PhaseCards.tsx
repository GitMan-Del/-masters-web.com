interface ProjectPhase {
  number: string;
  name: string;
  description: string;
  status: 'completed' | 'in-progress' | 'pending';
  progress: number;
}

export default function PhaseCards() {
  const phases: ProjectPhase[] = [
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'in-progress':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'pending':
        return 'bg-gray-100 text-gray-500 border-gray-200';
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

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 ">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-5 h-5 bg-purple-100 rounded-lg flex items-center justify-center">
          <svg className="w-3 h-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m0 0h2m0 0h2a2 2 0 002-2V7a2 2 0 00-2-2h-2m0 0V3m0 0h2m-2 0h-2" />
          </svg>
        </div>
        <h3 className="text-xl  text-gray-900 uppercase">Project Phases</h3>
      </div>
      
      {/* Grid Layout - Now 4 columns for full width */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {phases.map((phase, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg border flex flex-col ${getStatusColor(phase.status)}`}
          >
            {/* Header with icon and number */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold">{getStatusIcon(phase.status)}</span>
                <span className="font-bold text-xl">{phase.number}</span>
              </div>
              <span className="text-sm font-bold">{phase.progress}%</span>
            </div>

            {/* Phase name and description */}
            <div className="flex-1 mb-3">
              <h4 className="font-bold text-sm uppercase mb-2">{phase.name}</h4>
              <p className="text-xs opacity-75 leading-relaxed">{phase.description}</p>
            </div>

            {/* Progress bar at bottom */}
            <div className="mt-auto">
              <div className="w-full bg-white rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${
                    phase.status === 'completed' ? 'bg-green-500' :
                    phase.status === 'in-progress' ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                  style={{ width: `${phase.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Footer - simplified */}
      <div className="mt-3 pt-3 border-t border-gray-200 text-center">
        <div className="text-xs text-gray-600">
          <span className="font-medium">Overall Progress: 68%</span>
        </div>
      </div>
    </div>
  );
}