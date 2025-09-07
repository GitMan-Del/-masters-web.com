"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useSession } from 'next-auth/react';
import { Project, LighthouseMetrics } from '@/lib/types';

interface DashboardContextType {
  projects: Project[];
  lighthouseData: LighthouseMetrics | null;
  loading: boolean;
  error: string | null;
  hasProjects: boolean;
  refreshData: () => void;
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  const [projects, setProjects] = useState<Project[]>([]);
  const [lighthouseData, setLighthouseData] = useState<LighthouseMetrics | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchLighthouseData = useCallback(async (url: string) => {
    try {
      // Use working lighthouse API
      const apiUrl = `/api/lighthouse?url=${encodeURIComponent(url)}`;
      
      const response = await fetch(apiUrl);
      
      if (response.ok) {
        const data = await response.json();
        setLighthouseData(data.metrics);
      } else {
        console.error('❌ Lighthouse API response not OK:', response.status);
        // Set fallback data instead of null for better UX
        setLighthouseData({
          performance: 0,
          accessibility: 0,
          bestPractices: 0,
          seo: 0,
          uptime: 0,
          loadTime: 0,
          firstContentfulPaint: 0,
          largestContentfulPaint: 0,
          lastUpdated: new Date().toISOString()
        });
      }
    } catch (error) {
      console.error('Error fetching lighthouse data:', error);
      // Set fallback data instead of null
      setLighthouseData({
        performance: 0,
        accessibility: 0,
        bestPractices: 0,
        seo: 0,
        uptime: 0,
        loadTime: 0,
        firstContentfulPaint: 0,
        largestContentfulPaint: 0,
        lastUpdated: new Date().toISOString()
      });
    }
  }, []);

  const fetchProjects = useCallback(async () => {
    if (!session?.user?.email) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      
      const response = await fetch('/api/projects');
      
      if (response.ok) {
        const data = await response.json();
        const fetchedProjects = data.projects || [];
        setProjects(fetchedProjects);
        setError(null);
        
        // Set loading to false immediately after projects are loaded
        setLoading(false);
        
        // Fetch lighthouse data in background (non-blocking)
        if (fetchedProjects.length > 0 && fetchedProjects[0].website_url) {
          // Don't await - let it run in background
          fetchLighthouseData(fetchedProjects[0].website_url);
        } else {
          setLighthouseData({
            performance: 0,
            accessibility: 0,
            bestPractices: 0,
            seo: 0,
            uptime: 0,
            loadTime: 0,
            firstContentfulPaint: 0,
            largestContentfulPaint: 0,
            lastUpdated: new Date().toISOString()
          });
        }
      } else {
        setError('Failed to fetch projects');
        setLoading(false);
      }
    } catch (err) {
      console.error('Error fetching projects:', err);
      setError('Error loading projects');
      setLoading(false);
    }
  }, [session?.user?.email, fetchLighthouseData]);

  const refreshData = useCallback(() => {
    fetchProjects();
  }, [fetchProjects]);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const value: DashboardContextType = {
    projects,
    lighthouseData,
    loading,
    error,
    hasProjects: projects.length > 0,
    refreshData
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
}
