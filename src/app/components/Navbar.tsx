"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SignInClient from "./siverside/SignInClient";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Process", href: "#process" },
  { name: "Projects", href: "#projects" },
  { name: "Stack", href: "#stack" },
  { name: "Contact", href: "/contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

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
          <li className="space-x-5 text-sec text-sm flex items-center">
            {navLinks.map((link) => (
              link.href.startsWith('/') ? (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-main hover:text-special transition cursor-pointer"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  className="text-main hover:text-special transition  cursor-pointer"
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
          {/* LOGO - check if file exists and path is correct */}
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
        <nav className="flex-1 flex flex-col gap-1 px-4 sm:px-8 py-8">
          {navLinks.map((link, index) => (
            link.href.startsWith('/') ? (
              <Link
                key={link.name}
                href={link.href}
                className={`text-main text-lg py-4 px-3 rounded-lg hover:bg-btn/10 hover:translate-x-2 transition-all duration-300 font-medium cursor-pointer min-h-[48px] flex items-center ${
                  open ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                }`}
                style={{
                  transitionDelay: open ? `${200 + index * 100}ms` : '0ms'
                }}
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                className={`text-main text-lg py-4 px-3 rounded-lg hover:bg-btn/10 hover:translate-x-2 transition-all duration-300 font-medium cursor-pointer min-h-[48px] flex items-center ${
                  open ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                }`}
                style={{
                  transitionDelay: open ? `${200 + index * 100}ms` : '0ms'
                }}
                onClick={() => handleLinkClick(link.href)}
              >
                {link.name}
              </a>
            )
          ))}
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
