"use client"

import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import LogOut from "./siverside/LogOut";

interface SidebarProps {
  onCloseMobile?: () => void;
  isMobile?: boolean;
}

export default function Sidebar({ onCloseMobile, isMobile = false }: SidebarProps) {

  const { data: session } = useSession();
  console.log(session);

  const navItems = [
    { 
      icon: "/home-agreement 1.svg", 
      label: "Dashboard", 
      href: "/dashboard", 
      active: true 
    },
    { 
      icon: "/plus 1.svg", 
      label: "Projects", 
      href: "/projects", 
      active: false 
    }
  ];

  return (
    <div className="w-64 bg-white shadow-sm border-r border-gray-200 h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image 
              src="/Logo.svg" 
              alt="Masters Web Logo"
              width={40} 
              height={17} 
              className="h-6 w-auto"
            />
            <span className="font-semibold text-lg text-gray-900">Masters Web</span>
          </div>
          {/* Close button for mobile */}
          {isMobile && (
            <button
              onClick={onCloseMobile}
              className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                onClick={isMobile ? onCloseMobile : undefined}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors relative ${
                  item.active
                    ? "bg-purple-50 text-purple-700 border border-purple-200"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                {/* Purple square indicator for active item */}
                {item.active && (
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-purple-600 rounded-r"></div>
                )}
                <Image 
                  src={item.icon} 
                  alt={item.label}
                  width={20} 
                  height={20} 
                  className="w-5 h-5"
                />
                <span className="font-medium">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-300">
              <Image 
                src={session?.user?.image || "/daniel.png"} 
                alt={session?.user?.name || "User"} 
                width={48} 
                height={48} 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Green online indicator */}
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-lg font-semibold text-gray-900 truncate">{session?.user?.name}</p>
            <p className="text-sm text-gray-500 truncate">{session?.user?.email}</p>
          </div>
        </div>
        
        {/* Logout Button */}
        <LogOut />
      </div>
    </div>
  );
}