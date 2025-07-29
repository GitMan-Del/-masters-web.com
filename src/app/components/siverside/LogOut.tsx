"use client"

import { signOut } from "next-auth/react";

export default function LogOut() {
  const handleLogout = () => {
    signOut({
      callbackUrl: '/' // Redirect to home page after logout
    });
  };

  return (
    <button
      onClick={handleLogout}
      className="btn-no-animation w-full mt-3 flex items-center justify-center space-x-2 px-3 py-2 text-sm font-medium text-red-600 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 hover:text-red-700 transition-colors"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
      </svg>
      <span>Sign Out</span>
    </button>
  );
}
