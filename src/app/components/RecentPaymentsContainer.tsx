"use client";

import { useState, useEffect, useCallback } from 'react';
import { useSession } from 'next-auth/react';

interface Payment {
  description: string;
  amount: string;
  status: 'Paid' | 'Pending';
}

interface RecentPaymentsContainerProps {
  refreshTrigger?: number;
}

export default function RecentPaymentsContainer({ refreshTrigger }: RecentPaymentsContainerProps) {
  const { data: session } = useSession();
  const [hasProjects, setHasProjects] = useState(false);
  const [loading, setLoading] = useState(true);

  // Date pentru când există proiecte (date reale)
  const paymentsWithProjects: Payment[] = [
    { description: "AutoBots SaaS", amount: "€2,500", status: "Paid" },
    { description: "E-commerce Store", amount: "€1,500", status: "Paid" },
    { description: "Landing Page", amount: "€400", status: "Pending" },
    { description: "Website Redesign", amount: "€900", status: "Paid" },
    { description: "Mobile App UI", amount: "€1,200", status: "Paid" },
    { description: "Brand Identity", amount: "€800", status: "Pending" },
    { description: "Dashboard Analytics", amount: "€600", status: "Paid" },
    { description: "SEO Optimization", amount: "€300", status: "Paid" }
  ];

  // Date pentru când nu există proiecte (empty state)
  const paymentsEmpty: Payment[] = [];

  const checkProjects = useCallback(async () => {
    if (!session?.user?.email) {
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/projects');
      if (response.ok) {
        const data = await response.json();
        setHasProjects(data.projects && data.projects.length > 0);
      }
    } catch (error) {
      console.error('Error checking projects:', error);
    } finally {
      setLoading(false);
    }
  }, [session?.user?.email]);

  useEffect(() => {
    checkProjects();
  }, [checkProjects, refreshTrigger]);

  const payments = hasProjects ? paymentsWithProjects : paymentsEmpty;

  const totalAmount = payments.reduce((sum, payment) => {
    return sum + parseInt(payment.amount.replace('€', '').replace(',', ''));
  }, 0);

  // Loading skeleton
  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 h-full flex flex-col">
        <div className="animate-pulse">
          {/* Header skeleton */}
          <div className="p-3 border-b border-gray-200 flex-shrink-0">
            <div className="h-6 bg-gray-200 rounded w-32"></div>
          </div>
          
          {/* Content skeleton */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2 max-h-80">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 rounded w-24 mb-1"></div>
                  <div className="h-3 bg-gray-200 rounded w-16"></div>
                </div>
                <div className="w-12 h-5 bg-gray-200 rounded-full"></div>
              </div>
            ))}
          </div>

          {/* Footer skeleton */}
          <div className="p-3 border-t border-gray-200 flex-shrink-0">
            <div className="h-4 bg-gray-200 rounded w-20 mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  // Empty state
  if (!hasProjects) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 h-full flex flex-col">
        <div className="p-3 border-b border-gray-200 flex-shrink-0">
          <h3 className="text-xl text-gray-900">Recent Payments</h3>
        </div>
        
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h4 className="text-sm font-medium text-gray-900 mb-1">No Payments Yet</h4>
            <p className="text-xs text-gray-500">Start a project to see payment history</p>
          </div>
        </div>

        <div className="p-3 border-t border-gray-200 flex-shrink-0">
          <div className="text-xs text-gray-400 text-center">
            <span className="font-medium">Total: €0</span>
          </div>
        </div>
      </div>
    );
  }

  // With data
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 h-full flex flex-col">
      <div className="p-3 border-b border-gray-200 flex-shrink-0">
        <h3 className="text-xl text-gray-900">Recent Payments</h3>
      </div>
      
      <div className="flex-1 overflow-y-auto p-3 space-y-2 max-h-80">
        {payments.map((payment, index) => (
          <div key={index} className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg flex-shrink-0">
            <div>
              <div className="text-xs font-medium text-gray-900">{payment.description}</div>
              <div className="text-xs text-gray-500">{payment.amount}</div>
            </div>
            <span className={`text-xs px-2 py-1 rounded-full font-medium ${
              payment.status === 'Paid' 
                ? 'bg-green-100 text-green-700' 
                : 'bg-yellow-100 text-yellow-700'
            }`}>
              {payment.status}
            </span>
          </div>
        ))}
      </div>

      <div className="p-3 border-t border-gray-200 flex-shrink-0">
        <div className="text-xs text-gray-600 text-center">
          <span className="font-medium">Total: €{totalAmount.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
} 