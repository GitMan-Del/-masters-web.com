"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { MessageCircle, Clock, Bell, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ChatSidebar() {
  const { data: session } = useSession();
  console.log(session);

  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail("");
      // Here you would typically send the email to your backend
      console.log("Subscribed email:", email);
    }
  };

  return (
    <div className="w-80 bg-white shadow-sm border-l border-gray-200 h-screen flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-purple-100 rounded-lg">
            <MessageCircle className="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Support Chat</h3>
            <p className="text-xs text-gray-500">Live assistance</p>
          </div>
        </div>
      </div>

      {/* Coming Soon Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        {/* Main Icon */}
        <div className="relative mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center mb-4">
            <MessageCircle className="w-10 h-10 text-purple-600" />
          </div>
          <div className="absolute -top-2 -right-2">
            <div className="bg-yellow-100 border border-yellow-200 rounded-full p-1">
              <Clock className="w-4 h-4 text-yellow-600" />
            </div>
          </div>
        </div>

        {/* Coming Soon Badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-4 py-2 rounded-full mb-6">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-medium">Coming Soon</span>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Live Support Chat
        </h2>

        {/* Description */}
                 <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-xs">
           We&apos;re building an amazing support experience for you. Get instant help from our expert team with real-time chat, file sharing, and quick responses.
         </p>

        {/* Features List */}
        <div className="space-y-3 mb-8 w-full max-w-xs">
          <div className="flex items-center gap-3 text-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-700">Real-time messaging</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-700">File & image sharing</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-700">Quick response times</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-700">Expert technical support</span>
          </div>
        </div>

        {/* Notification Signup */}
        {!isSubscribed ? (
          <div className="w-full max-w-xs">
            <div className="flex items-center gap-2 mb-3">
              <Bell className="w-4 h-4 text-gray-500" />
                             <span className="text-sm font-medium text-gray-700">Get notified when it&apos;s ready</span>
            </div>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button
                onClick={handleSubscribe}
                disabled={!email.trim()}
                className="bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-xs">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
                             <p className="text-sm font-medium text-green-800">You&apos;ll be notified!</p>
               <p className="text-xs text-green-600 mt-1">We&apos;ll let you know when chat is available</p>
            </div>
          </div>
        )}

        {/* Alternative Contact */}
        <div className="mt-8 pt-6 border-t border-gray-200 w-full">
          <p className="text-xs text-gray-500 mb-3">Need help now?</p>
          <div className="space-y-2">
            <Link
              href="mailto:masterswebcom@gmail.com"
              className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Support
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Contact Form
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <div className="text-center">
          <p className="text-xs text-gray-500">
            Expected launch: <span className="font-medium">Q1 2024</span>
          </p>
        </div>
      </div>
    </div>
  );
}