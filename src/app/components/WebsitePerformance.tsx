"use client";

interface PerformanceScore {
  label: string;
  score: number;
  color: string;
}

export default function WebsitePerformance() {
  const performanceData: PerformanceScore[] = [
    { label: "Performance", score: 99, color: "#10B981" },
    { label: "Accessibility", score: 100, color: "#10B981" },
    { label: "Best Practices", score: 100, color: "#10B981" },
    { label: "SEO", score: 92, color: "#10B981" }
  ];

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
            cx="30"
            cy="30"
            r={radius}
            stroke="#E5E7EB"
            strokeWidth="8"
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx="30"
            cy="30"
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
          <span className="text-xl font-bold text-gray-900">{score}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center">
          <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <h3 className="text-md text-gray-900">Website Performance</h3>
      </div>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {performanceData.map((metric, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <CircularProgress score={metric.score} color={metric.color} />
            <span className="mt-3 text-sm font-medium text-gray-700">{metric.label}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>Latest scan: 2 hours ago</span>
          <p className="text-purple-600 hover:text-purple-700 font-medium hover:underline cursor-pointer">
            View full report →
          </p>
        </div>
      </div>
    </div>
  );
}
