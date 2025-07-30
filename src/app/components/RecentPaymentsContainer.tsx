"use client";

import React, { useState } from 'react';
import RecentPayments from './RecentPayments';
import CreatePaymentLinkModal from './CreatePaymentLinkModal';
import { StripePaymentLinkData } from '@/lib/types';
import { Plus } from 'lucide-react';

export default React.memo(function RecentPaymentsContainer() {
  const [isCreatePaymentModalOpen, setIsCreatePaymentModalOpen] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const handlePaymentLinkCreated = (data: StripePaymentLinkData) => {
    console.log('Payment link created:', data);
    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 5000);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 h-full flex flex-col">
      {/* Header cu buton pentru creare payment link */}
      <div className="p-3 border-b border-gray-200 flex-shrink-0">
        <div className="flex items-center justify-between">
          <h3 className="text-xl text-gray-900">Recent Payments</h3>
          <button
            onClick={() => setIsCreatePaymentModalOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Creează Payment Link
          </button>
        </div>
      </div>
      
      {/* Recent Payments component */}
      <div className="flex-1 overflow-hidden">
        <RecentPayments />
      </div>

      {/* Modal pentru crearea payment link-urilor */}
      <CreatePaymentLinkModal
        isOpen={isCreatePaymentModalOpen}
        onClose={() => setIsCreatePaymentModalOpen(false)}
        onPaymentLinkCreated={handlePaymentLinkCreated}
      />

      {/* Toast pentru succes */}
      {showSuccessToast && (
        <div className="fixed top-4 right-4 z-50 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg shadow-lg">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Payment link creat cu succes!
          </div>
        </div>
      )}
    </div>
  );
}); 