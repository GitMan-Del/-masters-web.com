"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/home" },
  { name: "Stack", href: "/Stack" },
  { name: "Services", href: "/Services" },
  { name: "About", href: "#" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

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

  return (
    <>
      {/* Navbar */}
      <div className="w-full py-3 sm:py-5 h-fit flex flex-row justify-between items-center relative z-[90] px-2 sm:px-0">
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
                className="text-main hover:text-special transition text-base sm:text-lg"
                href={link.href}
              >
                {link.name}
              </a>
            ))}
          </li>
        </ul>
        <button className="hidden md:block bg-btn px-6 py-1 rounded-full btn-text hover:bg-btn-active transition text-base sm:text-lg">
          Meet Us →
        </button>
        {/* Mobile menu button */}
        {!open && (
          <button
            className="md:hidden flex items-center justify-center p-2 rounded-full bg-btn text-btn"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu color="white" className="w-7 h-7" />
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
            className="p-2 rounded-full bg-btn text-btn"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X color="white" className="w-6 h-6" />
          </button>
        </div>
        {/* Links */}
        <nav className="flex-1 flex flex-col gap-2 px-4 sm:px-8 py-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-main text-lg py-3 px-2 rounded-lg hover:bg-btn/10 transition font-medium"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>
        {/* Button at bottom */}
        <div className="px-4 sm:px-8 pb-8">
          <button className="w-full bg-btn px-6 py-3 rounded-full btn-text text-lg hover:bg-btn-active transition">
            Meet Us →
          </button>
        </div>
      </aside>
    </>
  );
}