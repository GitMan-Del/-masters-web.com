"use client"

import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import LogOut from "./siverside/LogOut";

interface SidebarProps {
  onCloseMobile?: () => void;
  isMobile?: boolean;
}

export default function Sidebar({ onCloseMobile, isMobile = false }: SidebarProps) {

  const { data: session } = useSession();
  const pathname = usePathname();
  const navRef = useRef<HTMLUListElement>(null);
  const [activeIndicator, setActiveIndicator] = useState({ top: 0, height: 0, opacity: 0 });

  console.log(session);

  const navItems = useMemo(() => [
    { 
      icon: "/home-agreement 1.svg", 
      label: "Tableau de Bord", 
      href: "/dashboard"
    },
    { 
      icon: "/plus 1.svg", 
      label: "Projets", 
      href: "/projects"
    }
  ], []);

  // Function to get active link index based on current pathname
  const getActiveLinkIndex = useCallback(() => {
    return navItems.findIndex(item => {
      if (item.href === '/dashboard') {
        return pathname === '/dashboard';
      }
      if (item.href === '/projects') {
        return pathname === '/projects' || pathname.startsWith('/projects');
      }
      return pathname === item.href;
    });
  }, [pathname, navItems]);

  // Function to check if a nav item is active
  const isItemActive = (item: typeof navItems[0]) => {
    if (item.href === '/dashboard') {
      return pathname === '/dashboard';
    }
    if (item.href === '/projects') {
      return pathname === '/projects' || pathname.startsWith('/projects');
    }
    return pathname === item.href;
  };

  // Update active indicator position
  const updateActiveIndicator = useCallback(() => {
    if (!navRef.current) return;
    
    const activeIndex = getActiveLinkIndex();
    if (activeIndex === -1) {
      setActiveIndicator({ top: 0, height: 0, opacity: 0 });
      return;
    }

    const linkElements = navRef.current.querySelectorAll('[data-nav-item]');
    const activeElement = linkElements[activeIndex] as HTMLElement;
    
    if (activeElement) {
      const navRect = navRef.current.getBoundingClientRect();
      const activeRect = activeElement.getBoundingClientRect();
      
      setActiveIndicator({
        top: activeRect.top - navRect.top,
        height: activeRect.height,
        opacity: 1
      });
    }
  }, [getActiveLinkIndex]);

  // Update indicator when pathname changes
  useEffect(() => {
    const timer = setTimeout(updateActiveIndicator, 100);
    return () => clearTimeout(timer);
  }, [updateActiveIndicator]);

  // Update indicator on window resize
  useEffect(() => {
    const handleResize = () => updateActiveIndicator();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [updateActiveIndicator]);

  return (
    <div className="w-48 bg-white shadow-sm border-r border-gray-200 h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image 
              src="/Logo.svg" 
              alt="Masters Web Logo"
              width={40} 
              height={17} 
              className="h-4 w-auto"
            />
            <span className="font-semibold text-sm text-gray-900">Masters Web</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul ref={navRef} className="space-y-2 relative">
          {/* Animated Active Indicator */}
          <div 
            className="absolute left-0 w-1 bg-gradient-to-b from-purple-500 to-purple-700 rounded-r transition-all duration-500 ease-out z-10"
            style={{
              top: `${activeIndicator.top}px`,
              height: `${activeIndicator.height}px`,
              opacity: activeIndicator.opacity,
            }}
          />
          
          {navItems.map((item, index) => {
            const isActive = isItemActive(item);
            
            return (
              <li key={index}>
                <Link
                  href={item.href}
                  data-nav-item
                  onClick={isMobile ? onCloseMobile : undefined}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-300 relative ${
                    isActive
                      ? "bg-purple-50 text-special border border-purple-200 transform translate-x-1"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 hover:translate-x-0.5"
                  }`}
                >
                  {/* Static purple indicator for active item - now hidden since we have animated one */}
                  {isActive && (
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-transparent rounded-r"></div>
                  )}
                  <Image 
                    src={item.icon} 
                    alt={item.label}
                    width={20} 
                    height={20} 
                    className="w-3 h-3 relative z-20"
                  />
                  <span className="font-medium relative z-20">{item.label}</span>
                  
               
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-300">
              <Image 
                src={session?.user?.image || "/daniel.png"} 
                alt={session?.user?.name || "User"} 
                width={48} 
                height={48} 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Green online indicator */}
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-md font-semibold text-gray-900 truncate">{session?.user?.name}</p>
            <p className="text-xs text-gray-500 truncate">{session?.user?.email}</p>
          </div>
        </div>
        
        {/* Logout Button */}
        <LogOut />
      </div>
    </div>
  );
}
