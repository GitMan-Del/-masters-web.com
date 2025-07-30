"use client";

import React from 'react';
import RecentPayments from './RecentPayments';

export default React.memo(function RecentPaymentsContainer() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 h-full flex flex-col">
      {/* Header simplu pentru useri */}
      <div className="p-3 border-b border-gray-200 flex-shrink-0">
        <h3 className="text-xl text-gray-900">Recent Payments</h3>
        <p className="text-sm text-gray-500 mt-1">Istoricul plăților tale</p>
      </div>
      
      {/* Recent Payments component */}
      <div className="flex-1 overflow-hidden">
        <RecentPayments />
      </div>
    </div>
  );
}); 