"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

function AuthErrorToastInner() {
  const searchParams = useSearchParams();
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (searchParams.get('error') === 'auth_required') {
      setShowError(true);
      // Auto-hide après 7 secondes
      const timer = setTimeout(() => setShowError(false), 7000);
      return () => clearTimeout(timer);
    }
  }, [searchParams]);

  if (!showError) return null;

  return (
    <div className="fixed top-4 right-4 z-50 max-w-sm w-full bg-red-50 border border-red-200 rounded-lg shadow-lg p-4 animate-slide-in">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="ml-3 w-0 flex-1">
          <p className="text-sm font-medium text-red-800">
            🔐 Accès Restreint
          </p>
          <p className="text-sm text-red-600 mt-1">
            Vous devez vous authentifier pour accéder au tableau de bord.
          </p>
        </div>
        <div className="ml-4 flex-shrink-0 flex">
          <button
            className="bg-red-50 rounded-md inline-flex text-red-400 hover:text-red-500 focus:outline-none"
            onClick={() => setShowError(false)}
          >
            <span className="sr-only">Fermer</span>
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AuthErrorToast() {
  return (
    <Suspense fallback={null}>
      <AuthErrorToastInner />
    </Suspense>
  );
} 
