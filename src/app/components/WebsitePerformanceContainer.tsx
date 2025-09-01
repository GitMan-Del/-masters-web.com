"use client";

import React from 'react';
import { useDashboard } from '../contexts/DashboardContext';

interface PerformanceScore {
  label: string;
  score: number;
  color: string;
  unit?: string;
}

export default React.memo(function WebsitePerformanceContainer() {
  const { projects, lighthouseData, loading, hasProjects, } = useDashboard();

  const projectUrl =
    hasProjects && projects.length > 0 && projects[0].website_url
      ? projects[0].website_url
      : null;

  // Check if we're still loading lighthouse data (projects loaded but lighthouse data not yet)
  const isLighthouseLoading = hasProjects && !lighthouseData;

  // Generate performance data based on Lighthouse results
  const getPerformanceData = (): PerformanceScore[] => {
    // If no projects exist, show zero data
    if (!hasProjects) {
      return [
        { label: "Performance", score: 0, color: "#E5E7EB" },
        { label: "Accessibility", score: 0, color: "#E5E7EB" },
        { label: "Best Practices", score: 0, color: "#E5E7EB" },
        { label: "SEO", score: 0, color: "#E5E7EB" },
        { label: "Uptime", score: 0, color: "#E5E7EB", unit: "%" },
        { label: "Load Time", score: 0, color: "#E5E7EB", unit: "s" },
      ];
    }

    // If lighthouseData is null (still loading), show temporary zero data
    if (!lighthouseData) {
      return [
        { label: "Performance", score: 0, color: "#E5E7EB" },
        { label: "Accessibility", score: 0, color: "#E5E7EB" },
        { label: "Best Practices", score: 0, color: "#E5E7EB" },
        { label: "SEO", score: 0, color: "#E5E7EB" },
      ];
    }

    const getScoreColor = (score: number) => {
      if (score >= 90) return "#10B981"; // Verde
      if (score >= 50) return "#F59E0B"; // Galben
      return "#EF4444"; // Roșu
    };

    return [
      {
        label: "Performance",
        score: lighthouseData.performance,
        color: getScoreColor(lighthouseData.performance),
      },
      {
        label: "Accessibility",
        score: lighthouseData.accessibility,
        color: getScoreColor(lighthouseData.accessibility),
      },
      {
        label: "Best Practices",
        score: lighthouseData.bestPractices,
        color: getScoreColor(lighthouseData.bestPractices),
      },
      {
        label: "SEO",
        score: lighthouseData.seo,
        color: getScoreColor(lighthouseData.seo),
      },
    ];
  };

  const performanceData = getPerformanceData();

  // SVG circles mai mici: radius 32, viewBox 0 0 70 70, container w-16 h-16
  const CircularProgress = ({
    score,
    color,
    unit,
  }: {
    score: number;
    color: string;
    unit?: string;
  }) => {
    const radius = 32;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (score / 100) * circumference;

    return (
      <div className="relative w-16 h-16 flex items-center justify-center">
        <svg
          className="w-16 h-16 transform -rotate-90"
          viewBox="0 0 70 70"
        >
          {/* Background circle */}
          <circle
            cx="35"
            cy="35"
            r={radius}
            stroke="#E5E7EB"
            strokeWidth="6"
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx="35"
            cy="35"
            r={radius}
            stroke={color}
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-300 ease-in-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className={`text-base font-bold ${
              hasProjects ? "text-gray-900" : "text-gray-400"
            }`}
          >
            {unit === "s" ? score : Math.round(score)}
            {unit || ""}
          </span>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="animate-pulse">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-6 h-6 bg-gray-200 rounded-lg"></div>
            <div className="h-6 bg-gray-200 rounded w-48"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[1, 2, 3, 4].map((index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-gray-200 rounded-full mb-3"></div>
                <div className="h-4 bg-gray-200 rounded w-16"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Show loading state while fetching Lighthouse data
  if (isLighthouseLoading) {
    return (
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center">
            <svg
              className="w-4 h-4 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </div>
          <h3 className="text-2xl text-gray-900">Website Performance</h3>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {["Performance", "Accessibility", "Best Practices", "SEO"].map(
            (label, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                {/* Animated skeleton circle */}
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border-6 border-gray-200 animate-pulse"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-blue-600 border-t-transparent"></div>
                  </div>
                </div>
                <span className="mt-3 text-sm font-medium text-gray-500">
                  {label}
                </span>
              </div>
            )
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <div className="animate-pulse h-4 w-32 bg-gray-200 rounded"></div>
            </span>
            <div className="animate-pulse h-4 w-24 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center">
          <svg
            className="w-4 h-4 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        </div>
        <h3 className="text-2xl text-gray-900">Website Performance</h3>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {performanceData.map((metric, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center"
          >
            <CircularProgress
              score={metric.score}
              color={metric.color}
              unit={metric.unit}
            />
            <span
              className={`mt-3 text-sm font-medium ${
                hasProjects ? "text-gray-700" : "text-gray-400"
              }`}
            >
              {metric.label}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>
            {lighthouseData?.lastUpdated
              ? `Last scan: ${new Date(
                  lighthouseData.lastUpdated
                ).toLocaleString("ro-RO")}`
              : "No data available - Add a project with URL to see metrics"}
          </span>
          <p
            className={`font-medium hover:underline cursor-pointer ${
              projectUrl
                ? "text-purple-600 hover:text-purple-700"
                : "text-gray-400 cursor-not-allowed"
            }`}
          >
          </p>
        </div>
      </div>
    </div>
  );
});
