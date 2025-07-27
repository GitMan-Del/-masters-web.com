"use client";
import Image from "next/image";
import { Github, Twitter, Linkedin, Instagram, Clock } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const handleLinkClick = (href: string) => {
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
    } else {
      // Regular link navigation
      window.location.href = href;
    }
  };

  return (
    <footer className="w-full bg-main border-t border-btn/30 pt-16 pb-6 px-4 md:px-16 relative z-10 text-main">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo & Description */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex items-center justify-center relative">
              <Image src="/Logo.svg" alt="Logo" width={20} height={20} className="w-20 h-20" />
            </div>
          </div>
          <p className="text-sec text-sm leading-relaxed max-w-xs">
            Need a modern, fast website? We build custom websites with clean design and scalable tech. From idea to launch stress-free.
          </p>
          <div className="flex gap-3 mt-2">
            <a href="#" className="bg-social-btn p-2 rounded-full hover-social-btn transition">
              <Github className="w-5 h-5 text-main hover:text-btn-text transition" />
            </a>
            <a href="#" className="bg-social-btn p-2 rounded-full hover-social-btn transition">
              <Twitter className="w-5 h-5 text-main hover:text-btn-text transition" />
            </a>
            <a href="#" className="bg-social-btn p-2 rounded-full hover-social-btn transition">
              <Linkedin className="w-5 h-5 text-main hover:text-btn-text transition" />
            </a>
            <a href="#" className="bg-social-btn p-2 rounded-full hover-social-btn transition">
              <Instagram className="w-5 h-5 text-main hover:text-btn-text transition" />
            </a>
          </div>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="text-lg mb-3">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-sec text-sm">
            <li><a onClick={() => handleLinkClick('#home')} className="hover:text-special transition cursor-pointer">Home</a></li>
            <li><a onClick={() => handleLinkClick('#process')} className="hover:text-special transition cursor-pointer">Process</a></li>
            <li><a onClick={() => handleLinkClick('#services')} className="hover:text-special transition cursor-pointer">Services</a></li>
            <li><a onClick={() => handleLinkClick('#stack')} className="hover:text-special transition cursor-pointer">Stack</a></li>
            <li><a href="/contact" className="hover:text-special transition cursor-pointer">Contact</a></li>
          </ul>
        </div>
        {/* Contact */}
        <div>
          <h3 className="text-lg mb-3">Contact</h3>
          <ul className="flex flex-col gap-2 text-sec text-sm">
            <li><a href="mailto:hello@webdtf.com" className="hover:text-special transition">hello@webdtf.com</a></li>
            <li><a href="#" className="hover:text-special transition">Twitter</a></li>
            <li><a href="#" className="hover:text-special transition">LinkedIn</a></li>
            <li><a href="#" className="hover:text-special transition">Instagram</a></li>
          </ul>
        </div>
        {/* Working hours */}
        <div className="flex flex-col gap-3">
          <h3 className="text-lg mb-3 flex items-center gap-2"><Clock className="w-5 h-5 text-special" />Working hours</h3>
          <div className="text-main text-xl font-bold">Nonstop</div>
          <div className="text-sec text-sm">We are available whenever you need us. Reach out anytime!</div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="mt-12 border-t border-btn/30 pt-4 text-xs text-sec text-center">
        © 2025 WebDTF. All rights reserved.
      </div>
    </footer>
  );
}
