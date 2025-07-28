"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Process", href: "#process" },
  { name: "Services", href: "#services" },
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
    
    if (href.startsWith('/')) {
      // Route navigation to different pages
      window.location.href = href;
    } else if (href.startsWith('#')) {
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
    } else {
      // Fallback for any other links
      window.location.href = href;
    }
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
              <a
                key={link.name}
                className="text-main hover:text-special transition text-base sm:text-lg cursor-pointer"
                onClick={() => handleLinkClick(link.href)}
              >
                {link.name}
              </a>
            ))}
          </li>
        </ul>
        <a href="/contact" className="hidden md:flex btn-modern">
          <span className="btn-text-content">Meet Us</span>
          <div className="btn-circle">
            <span>→</span>
          </div>
        </a>
        {/* Mobile menu button */}
        {!open && (
          <button
            className="md:hidden flex items-center justify-center p-3 rounded-full bg-btn text-btn min-w-[48px] min-h-[48px]"
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
          className="fixed inset-0 z-[53] bg-black/40 backdrop-blur-sm transition-opacity"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-11/12 max-w-xs bg-main shadow-2xl z-[100] flex flex-col justify-between transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ transitionProperty: "transform" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-5 border-b border-btn/10">
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
            className="p-3 rounded-full bg-btn text-btn min-w-[48px] min-h-[48px] flex items-center justify-center"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X color="white" className="w-5 h-5" />
          </button>
        </div>
        {/* Links */}
        <nav className="flex-1 flex flex-col gap-1 px-4 sm:px-8 py-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              className="text-main text-lg py-4 px-3 rounded-lg hover:bg-btn/10 transition font-medium cursor-pointer min-h-[48px] flex items-center"
              onClick={() => handleLinkClick(link.href)}
            >
              {link.name}
            </a>
          ))}
        </nav>
        {/* Button at bottom */}
        <div className="px-4 sm:px-8 pb-8">
          <a href="/contact" className="btn-modern w-full flex min-h-[56px]">
            <span className="btn-text-content">Meet Us</span>
            <div className="btn-circle">
              <span>→</span>
            </div>
          </a>
        </div>
      </aside>
    </>
  );
}