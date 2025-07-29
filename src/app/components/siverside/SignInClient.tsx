"use client"

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

export default function SignInClient() {
  const { data: session } = useSession();

  const handleSignIn = () => {
    signIn("google", { callbackUrl: "/dashboard" });
  };

  // If user is already logged in, show dashboard link
  if (session) {
    return (
      <Link
        href="/dashboard"
        className="
          btn-no-animation
          w-full md:w-auto
          bg-gradient-to-r from-gray-900 to-black hover:from-gray-800 hover:to-gray-900
          text-white font-semibold
          px-6 md:px-4 py-4 md:py-3
          text-lg md:text-base
          rounded-2xl md:rounded-full
          shadow-lg hover:shadow-xl
          transition-all duration-300
          flex items-center justify-center gap-3 md:gap-2
          min-h-[56px] md:min-h-[48px]
          hover:scale-[1.02] md:hover:scale-100
          active:scale-[0.98]
          md:btn-modern
        "
      >
        <span className="flex items-center gap-2 md:btn-text-content">
          <svg className="w-6 h-6 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          <span>Dashboard</span>
        </span>
        <div className="btn-circle hidden md:flex">
          <span>→</span>
        </div>
      </Link>
    );
  }

  return (
    <button
      onClick={handleSignIn}
      className="
        btn-no-animation
        w-full md:w-auto
        bg-gradient-to-r from-gray-900 to-black hover:from-gray-800 hover:to-gray-900
        text-white font-semibold
        px-6 md:px-4 py-4 md:py-3
        text-lg md:text-base
        rounded-2xl md:rounded-full
        shadow-lg hover:shadow-xl
        transition-all duration-300
        flex items-center justify-center gap-3 md:gap-2
        min-h-[56px] md:min-h-[48px]
        hover:scale-[1.02] md:hover:scale-100
        active:scale-[0.98]
        md:btn-modern
      "
    >
      <span className="flex items-center gap-3 md:gap-2 md:btn-text-content">
        <svg className="w-6 h-6 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        <span className="md:hidden">Sign in with Google</span>
        <span className="hidden md:inline">Sign in</span>
      </span>
      <div className="btn-circle hidden md:flex">
        <span>→</span>
      </div>
    </button>
  );
}