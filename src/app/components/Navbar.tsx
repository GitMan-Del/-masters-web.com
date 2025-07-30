"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SignInClient from "./siverside/SignInClient";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Process", href: "#process" },
  { name: "Projects", href: "#projects" },
  { name: "Stack", href: "#stack" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Contact", href: "/contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const sidebarNavRef = useRef<HTMLElement>(null);
  const [sidebarActiveIndicator, setSidebarActiveIndicator] = useState({ top: 0, height: 0, opacity: 0 });

  // Prevent scroll when sidebar is open
  useEffect(() => {
    if (open) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [open]);

  // Function to get active link index
  const getActiveLinkIndex = useCallback(() => {
    if (pathname === '/dashboard') return navLinks.findIndex(link => link.href === '/dashboard');
    if (pathname === '/contact') return navLinks.findIndex(link => link.href === '/contact');
    if (pathname === '/projects') return navLinks.findIndex(link => link.href === '#projects');
    if (pathname.startsWith('/projects')) return navLinks.findIndex(link => link.href === '#projects');
    if (pathname === '/' || pathname === '') {
      // Check if we're scrolled to a specific section
      const hash = window.location.hash;
      if (hash) {
        const linkIndex = navLinks.findIndex(link => link.href === hash);
        return linkIndex !== -1 ? linkIndex : 0;
      }
      return 0; // Default to Home
    }
    return -1;
  }, [pathname]);

  // Update sidebar active indicator position
  const updateSidebarActiveIndicator = useCallback(() => {
    if (!sidebarNavRef.current || !open) return;
    
    const activeIndex = getActiveLinkIndex();
    if (activeIndex === -1) {
      setSidebarActiveIndicator({ top: 0, height: 0, opacity: 0 });
      return;
    }

    const linkElements = sidebarNavRef.current.querySelectorAll('[data-sidebar-link]');
    const activeElement = linkElements[activeIndex] as HTMLElement;
    
    if (activeElement) {
      const navRect = sidebarNavRef.current.getBoundingClientRect();
      const activeRect = activeElement.getBoundingClientRect();
      
      setSidebarActiveIndicator({
        top: activeRect.top - navRect.top,
        height: activeRect.height,
        opacity: 1
      });
    }
  }, [getActiveLinkIndex, open]);

  // Update indicator when pathname changes or sidebar opens
  useEffect(() => {
    if (open) {
      const timer = setTimeout(updateSidebarActiveIndicator, 300); // Wait for sidebar animation
      return () => clearTimeout(timer);
    }
  }, [updateSidebarActiveIndicator, open]);

  const handleLinkClick = (href: string) => {
    setOpen(false);
    
    if (href.startsWith('#')) {
      // Anchor navigation
      if (pathname === '/') {
        // We're on homepage, scroll to section
        const element = document.querySelector(href);
        if (element instanceof HTMLElement) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // We're on another page, navigate to homepage with anchor
        window.location.href = '/' + href;
      }
    }
    // For route navigation (/contact), Link component will handle it
  };

  return (
    <>
      {/* Navbar */}
      <div className="w-full py-0 h-fit flex flex-row justify-between items-center relative z-[90] px-2 sm:px-0 ">
        {/* LOGO - adaugă logo-ul aici pentru desktop */}
        <div className="flex items-center">
          <Image
            src="/Logo.svg"
            alt="logo"
            width={40}
            height={40}
            className="w-20 h-20 block"
            priority
            unoptimized={false}
            onError={(e) => {
              // fallback pentru debugging
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
        {/* Desktop links */}
        <ul className="hidden md:flex p-2">
          <li className="space-x-5 text-sec text-md flex items-center">
            {navLinks.map((link) => (
              link.href.startsWith('/') ? (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-main hover:text-special transition text-base sm:text-lg cursor-pointer"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  className="text-main hover:text-special transition text-base sm:text-lg cursor-pointer"
                  onClick={() => handleLinkClick(link.href)}
                >
                  {link.name}
                </a>
              )
            ))}
          </li>
        </ul>
        <div className="hidden md:block">
          <SignInClient />
        </div>
        {/* Mobile menu button */}
        {!open && (
          <button
            className="md:hidden flex items-center justify-center p-3 rounded-full bg-btn text-btn min-w-[48px] min-h-[48px] hover:scale-110 hover:rotate-180 transition-all duration-300 ease-in-out"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu color="white" className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Sidebar Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[53] bg-black/40 backdrop-blur-sm transition-opacity duration-300 ease-out"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-11/12 max-w-xs bg-main shadow-2xl z-[100] flex flex-col justify-between transition-all duration-500 ease-in-out ${
          open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        {/* Header */}
        <div className={`flex items-center justify-between px-4 sm:px-6 py-5 border-b border-btn/10 transition-all duration-300 delay-200 ${
          open ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
        }`}>
          {/* LOGO - verifică dacă fișierul există și calea este corectă */}
          <Image
            src="/Logo.svg"
            alt="logo"
            width={40}
            height={40}
            className="w-20 h-20 block"
            priority
            unoptimized={false}
            onError={(e) => {
              // fallback pentru debugging
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <button
            className="p-3 rounded-full bg-btn text-btn min-w-[48px] min-h-[48px] flex items-center justify-center hover:scale-105 transition-transform duration-200"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X color="white" className="w-5 h-5" />
          </button>
        </div>
        {/* Links */}
        <nav ref={sidebarNavRef} className="flex-1 flex flex-col gap-1 px-4 sm:px-8 py-8 relative">
          {/* Animated Active Indicator for Sidebar */}
          <div 
            className="absolute left-0 w-1 bg-gradient-to-b from-purple-500 to-purple-700 rounded-r-full transition-all duration-500 ease-out z-10"
            style={{
              top: `${sidebarActiveIndicator.top}px`,
              height: `${sidebarActiveIndicator.height}px`,
              opacity: sidebarActiveIndicator.opacity,
            }}
          />
          
          {navLinks.map((link, index) => {
            const isActive = getActiveLinkIndex() === index;
            
            return link.href.startsWith('/') ? (
              <Link
                key={link.name}
                href={link.href}
                data-sidebar-link
                className={`text-main text-lg py-4 px-3 rounded-lg hover:bg-btn/10 hover:translate-x-2 transition-all duration-300 font-medium cursor-pointer min-h-[48px] flex items-center relative ${
                  open ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                } ${
                  isActive ? 'bg-purple-50 text-purple-600 border-l-4 border-purple-500' : ''
                }`}
                style={{
                  transitionDelay: open ? `${200 + index * 100}ms` : '0ms'
                }}
                onClick={() => setOpen(false)}
              >
                {link.name}
                {isActive && (
                  <div className="absolute right-3 w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                )}
              </Link>
            ) : (
              <a
                key={link.name}
                data-sidebar-link
                className={`text-main text-lg py-4 px-3 rounded-lg hover:bg-btn/10 hover:translate-x-2 transition-all duration-300 font-medium cursor-pointer min-h-[48px] flex items-center relative ${
                  open ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                } ${
                  isActive ? 'bg-purple-50 text-purple-600 border-l-4 border-purple-500' : ''
                }`}
                style={{
                  transitionDelay: open ? `${200 + index * 100}ms` : '0ms'
                }}
                onClick={() => handleLinkClick(link.href)}
              >
                {link.name}
                {isActive && (
                  <div className="absolute right-3 w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                )}
              </a>
            );
          })}
        </nav>
        {/* Button at bottom */}
        <div className={`px-4 sm:px-8 pb-8 transition-all duration-300 delay-700 ${
          open ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
        }`}>
          <SignInClient />
        </div>
      </aside>
    </>
  );
}