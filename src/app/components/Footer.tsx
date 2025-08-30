"use client";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Clock } from "lucide-react";
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
    }
    // For route navigation (/contact), Link component will handle it
  };

  return (
    <footer className="w-full bg-main  pt-16 pb-6 px-4 md:px-16 relative z-10 text-main">
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
            <Link
              href="https://www.instagram.com/masterswebcom/" 
              className="bg-social-btn p-2 rounded-full hover-social-btn transition"
              aria-label="Visit MastersWeb on Instagram"
            >
              <Instagram className="w-5 h-5 text-main hover:text-btn-text transition" />
            </Link>
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
            <li><Link href="/contact" className="hover:text-special transition cursor-pointer">Contact</Link></li>
          </ul>
        </div>
        {/* Contact */}
        <div>
          <h3 className="text-lg mb-3">Contact</h3>
          <ul className="flex flex-col gap-2 text-sec text-sm">
            <li><Link href="mailto:masterswebcom@gmail.com" className="hover:text-special transition hover:underline hover:cursor-pointer">masterswebcom@gmail.com</Link></li>
            <li><Link href="tel:+40728191220" className="hover:text-special transition hover:underline hover:cursor-pointer">+40728191220</Link></li>
            <li><Link href="https://www.google.com/maps/place/54-56+Avenue+Hoche/@48.8833333,2.3166667,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66e145a7892e1:0x818236856b889e46!8m2!3d48.8833333!4d2.3166667!16s%2Fg%2F11c48t4kgb?entry=ttu&g_ep=EgoyMDI1MDIyMi4wIKXMDSoASAFQAw%3D%3D" className="hover:text-special transition hover:underline hover:cursor-pointer">54-56 avenue Hoche 75008 Paris
            REGUS PARIS SAS</Link></li>
            <li><Link href="https://www.instagram.com/masterswebcom/" className="hover:text-special transition hover:underline hover:cursor-pointer">Instagram</Link></li>
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
        © 2025 MastersWeb. All rights reserved.
      </div>
    </footer>
  );
}
