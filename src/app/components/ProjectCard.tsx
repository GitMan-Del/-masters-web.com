import Image from "next/image";

export default function ProjectCard() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      {/* Header with status indicator */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">AB</span>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <h3 className="text-2xl text-gray-900">AutoBots.com</h3>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-600 font-medium">Live</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-medium">SaaS Platform</span>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">Next.js</span>
            </div>
          </div>
        </div>
        
        <div className="text-right">
          <div className="text-lg font-bold text-green-600">€2,500</div>
          <div className="text-xs text-gray-500">Project Value</div>
        </div>
      </div>
      
      {/* Project Description */}
      <p className="text-sm text-gray-600 leading-relaxed mb-4">
        AutoBots oferă afacerilor locale superputeri — automatizează rezervările, mesajele și marketingul fără cod necesar. Platformă SaaS cu AI integration pentru creșterea business-ului.
      </p>

      {/* Project Metrics */}
      <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-gray-50 rounded-lg">
        <div className="text-center">
          <div className="text-lg font-bold text-gray-900">98.5%</div>
          <div className="text-xs text-gray-500">Uptime</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-gray-900">2.1s</div>
          <div className="text-xs text-gray-500">Load Time</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-gray-900">450+</div>
          <div className="text-xs text-gray-500">Users</div>
        </div>
      </div>

      {/* Progress and Timeline */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Project Progress</span>
          <span className="text-sm font-bold text-green-600">95%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-300" style={{ width: '95%' }}></div>
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>Started: Jan 15, 2024</span>
          <span>Est. completion: Feb 20, 2024</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between">
        <div className="flex space-x-2">
          <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-2M7 7l10 10M17 7l-10 10" />
            </svg>
            Visit Project
          </button>
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 hover:text-white transition-colors flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Analytics
          </button>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="flex -space-x-2">
            <Image src="/daniel.png" alt="Daniel" width={24} height={24} className="w-6 h-6 rounded-full border-2 border-white" />
            <Image src="/roxi.png" alt="Roxi" width={24} height={24} className="w-6 h-6 rounded-full border-2 border-white" />
          </div>
          <span className="text-xs text-gray-500">Team</span>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-xs text-gray-600">Last deployment: 2 hours ago</span>
          </div>
          <span className="text-xs text-purple-600 font-medium hover:underline cursor-pointer">View Details →</span>
        </div>
      </div>
    </div>
  );
}