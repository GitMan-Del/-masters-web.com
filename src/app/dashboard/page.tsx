"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Sidebar from "../components/Sidebar";
import ProjectCardContainer from "../components/ProjectCardContainer";
import CreateProjectModal from "../components/CreateProjectModal";
import WebsitePerformanceContainer from "../components/WebsitePerformanceContainer";
import PhaseCardsContainer from "../components/PhaseCardsContainer";
import RecentPaymentsContainer from "../components/RecentPaymentsContainer";
import ChatSidebar from "../components/ChatSidebar";
import Toast from "../components/Toast";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [showBetaToast, setShowBetaToast] = useState(false);

  // Redirect la homepage dacă nu este autentificat
  useEffect(() => {
    if (status === 'unauthenticated') {
      console.log('❌ User not authenticated - redirecting to home');
      router.push('/?error=auth_required');
    }
  }, [status, router]);

  // Afișează loading dacă sesiunea se încarcă
  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Nu afișa nimic dacă nu este autentificat (va fi redirectat)
  if (status === 'unauthenticated') {
    return null;
  }

  const handleCreateProject = () => {
    setIsModalOpen(true);
  };

  const handleProjectCreated = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  const handleRefreshDashboard = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  const handleShowBetaToast = () => {
    setShowBetaToast(true);
  };

  console.log(session);

  return (
    <div className="h-screen bg-gray-50 flex overflow-hidden">
      {/* Left Sidebar - Hidden on mobile */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="flex-1 p-3 lg:p-4 overflow-y-auto">
        <div className="h-full max-w-7xl mx-auto flex flex-col">
          {/* Mobile Header */}
          <div className="lg:hidden mb-4 bg-white rounded-xl p-4 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Image
                  src="/Logo.svg"
                  alt="Masters Web Logo"
                  width={32}
                  height={13}
                  className="h-4 w-auto"
                />
                <span className="font-semibold text-sm text-gray-900">Masters Web</span>
              </div>
              <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            
            {/* Mobile Dashboard Title */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-xs text-gray-500">Project overview & analytics</p>
              </div>
              <div className="flex gap-1">
                <button 
                  onClick={handleRefreshDashboard}
                  className="bg-gray-100 text-gray-700 px-2 py-2 rounded-lg text-sm hover:bg-gray-200 transition-colors"
                  title="Refresh"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>
                <button 
                  onClick={handleCreateProject}
                  className="bg-purple-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-purple-700 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Compact Desktop Header */}
          <div className="hidden lg:block mb-4">
            <div className="flex items-center justify-between">
              <div>
                <nav className="flex text-xs text-gray-500 mb-1">
                  <span>Dashboard</span>
                  <span className="mx-1">/</span>
                  <span className="text-gray-900">Overview</span>
                </nav>
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={handleRefreshDashboard}
                  className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-sm hover:bg-gray-200 transition-colors"
                  title="Refresh dashboard data"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>
                <button 
                  onClick={handleCreateProject}
                  className="bg-purple-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-purple-700 transition-colors"
                >
                  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  New Project
                </button>
              </div>
            </div>
          </div>

          {/* Main Dashboard Grid - Responsive Layout */}
          <div className="flex-1 flex flex-col gap-3 lg:gap-4 min-h-0">
            
            {/* Mobile Layout - Single Column Stack */}
            <div className="lg:hidden space-y-4">
              {/* Project Card - Full width on mobile */}
              <div className="h-auto">
                <ProjectCardContainer 
                  onCreateProject={handleCreateProject}
                  refreshTrigger={refreshTrigger}
                />
              </div>

              {/* Website Performance - Full width on mobile */}
              <div className="h-auto">
                <WebsitePerformanceContainer refreshTrigger={refreshTrigger} />
              </div>

              {/* Recent Payments - Compact on mobile */}
              <div className="h-64">
                <RecentPaymentsContainer refreshTrigger={refreshTrigger} />
              </div>

              {/* Project Phases - Mobile optimized */}
              <div className="h-fit">
                <PhaseCardsContainer refreshTrigger={refreshTrigger} />
              </div>
            </div>

            {/* Desktop Layout - CSS Grid 9x5 */}
            <div className="hidden lg:grid lg:grid-cols-9 lg:grid-rows-5 lg:gap-2 lg:h-full lg:min-h-0">
              {/* div1 - Project Card */}
              <div className="col-start-1 col-end-4 row-start-1 row-end-4">
                <ProjectCardContainer 
                  onCreateProject={handleCreateProject}
                  refreshTrigger={refreshTrigger}
                />
              </div>

              {/* div2 - Website Performance */}
              <div className="col-start-4 col-end-7 row-start-1 row-end-4">
                <WebsitePerformanceContainer refreshTrigger={refreshTrigger} />
              </div>

              {/* div3 - Recent Payments */}
              <div className="col-start-7 col-end-10 row-start-1 row-end-4">
                <RecentPaymentsContainer refreshTrigger={refreshTrigger} />
              </div>

              {/* div4 - Project Phases */}
              <div className="col-start-1 col-end-10 row-start-4 row-end-6">
                <PhaseCardsContainer refreshTrigger={refreshTrigger} />
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Right Chat Sidebar - Hidden on mobile and tablet */}
      <div className="hidden xl:block">
        <ChatSidebar />
      </div>

      {/* Create Project Modal */}
      <CreateProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onProjectCreated={handleProjectCreated}
        onShowBetaToast={handleShowBetaToast}
      />

      {/* Beta Toast */}
      <Toast
        message="🚀 Aplicația este în BETA! Momentan poți crea doar 1 proiect per cont. Funcționalitatea completă va fi disponibilă în curând!"
        type="warning"
        isVisible={showBetaToast}
        onClose={() => setShowBetaToast(false)}
        duration={6000}
      />
    </div>
  );
}
