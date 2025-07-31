import Image from "next/image"
import NavBar from "../components/Navbar"
import Footer from "../components/Footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Contact Us - Masters Web',
  description: 'Get in touch with Masters Web. We are always ready to help you and answer your questions about web development, design, and digital solutions.',
  keywords: ['contact', 'web development contact', 'get in touch', 'masters web contact', 'web design inquiry'],
}

export default function Contact() {
  const testimonials1 = [
    {
      id: 1,
      rating: 5,
      name: "Camille Dufresne",
      occupation: "startup founder",
      testimonial: "Super fast delivery and clear communication. I got exactly what I needed.",
      height: 220
    },
    {
      id: 2,
      rating: 5,
      name: "Jason Lee",
      occupation: "CTO @ FinSync",
      testimonial: "Masters Web helped us launch in under 5 days. Design is clean and fast.",
      height: 340
    },
    {
      id: 3,
      rating: 5,
      name: "Sophie Laurent",
      occupation: "Brand Manager",
      testimonial: "No fluff, no drag-and-drop mess. Just real code and real results.",
      height: 260
    },
    {
      id: 4,
      rating: 5,
      name: "Daniel Kim",
      occupation: "Product Owner",
      testimonial: "Our SaaS dashboard looks and performs better than we imagined.",
      height: 180
    },
    {
      id: 5,
      rating: 5,
      name: "Louis",
      occupation: "eCommerce owner",
      testimonial: "Clean design, great structure, fast delivery — highly recommend.",
      height: 320
    }
  ];
  
  const testimonials2 = [
    {
      id: 6,
      rating: 5,
      name: "Liam Roy",
      occupation: "Freelancer",
      testimonial: "Everything was handled from start to finish — I didn't worry about anything.",
      height: 300
    },
    {
      id: 7,
      rating: 5,
      name: "Emma Wilson",
      occupation: "Marketing Director",
      testimonial: "The team delivered exactly what we needed, on time and within budget.",
      height: 180
    },
    {
      id: 8,
      rating: 5,
      name: "Michael Chen",
      occupation: "Tech Lead",
      testimonial: "Professional work with attention to detail. Highly recommend their services.",
      height: 400
    },
    {
      id: 9,
      rating: 5,
      name: "Sarah Johnson",
      occupation: "Business Owner",
      testimonial: "Fast turnaround and excellent communication throughout the entire process.",
      height: 220
    },
    {
      id: 10,
      rating: 5,
      name: "Alex Rodriguez",
      occupation: "Startup CEO",
      testimonial: "They helped us create a website that truly represents our brand vision.",
      height: 250
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <div className="w-full min-h-fit mx-auto flex flex-col justify-center p-0 m-0 text-main">
        {/* Hero Section */}
        <header id="home" className="w-full h-screen flex flex-col md:flex-row items-center justify-between relative bg-main">
          <div className="flex-2 bg-transparent w-full h-full lg:px-[120px] px-1 py-5 flex flex-col items-center md:items-left gap-5 justify-between relative z-50">
            <NavBar/>          
            <div className="flex flex-col gap-3 items-center md:items-start text-center md:text-left">
              <div className="flex flex-row gap-2 justify-center md:justify-start" role="banner" aria-label="Company highlight">
                <div className="w-5 h-5 rounded-[5px] flex items-center justify-center p-3 font-bold bg-btn-active" aria-hidden="true">
                  <span className="text-btn">1</span>
                </div>
                <p>Let&apos;s talk about your project</p>
              </div>
              <h1 className="text-main text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-special">LET&apos;S TALK </span>
                ABOUT YOUR NEXT WEBSITE BUILT
                <span className="text-special"> FAST</span>, DESIGNED TO PERFORM, AND 
                <span className="text-special"> DELIVERED WITH CARE</span>.
              </h1>
              <p className="text-sec max-w-xs sm:max-w-md md:max-w-2xl text-base sm:text-lg mx-auto md:mx-0">Whether it&apos;s a landing page, SaaS platform, or something custom, we&apos;ll help you launch smarter. Get in touch today.</p>
              <div className="flex flex-col sm:flex-row gap-5 items-center mt-6">
              <a
                href="https://wa.me/+40737484701"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-modern w-full sm:w-auto flex items-center gap-5 min-h-[56px]"
                aria-label="Contact us on WhatsApp"
              >
                <span className="btn-text-content">Contact us on WhatsApp</span>
                <span className="inline-block w-2" aria-hidden="true"></span>
                <div className="btn-circle">
                  <span>→</span>
                </div>
              </a>
                <div className="flex flex-row items-center justify-center -space-x-3 sm:-space-x-5 mt-4 sm:mt-0" role="group" aria-label="Team members">
                  <div className="w-14 h-14 sm:w-12 sm:h-12 rounded-full bg-btn shadow-2xs">
                    <Image src="/daniel.png" alt="Daniel - Web Developer at Masters Web" width={148} height={148} className="object-cover w-full h-full rounded-full shadow-2xs hover:scale-110 transition-all duration-300 hover:cursor-pointer hover:z-20 cursor-pointer" />
                  </div>
                  <div className="w-14 h-14 sm:w-12 sm:h-12 rounded-full bg-btn shadow-2xs">
                    <Image src="/Delia.png" alt="Delia - Designer at Masters Web" width={148} height={148} className="object-cover w-full h-full rounded-full shadow-2xs hover:scale-110 transition-all duration-300 hover:cursor-pointer hover:z-20 cursor-pointer" />
                </div>
                  <div className="w-14 h-14 sm:w-12 sm:h-12 rounded-full bg-btn shadow-2xs">
                    <Image src="/roxi.png" alt="Roxi - Frontend Developer at Masters Web" width={148} height={148} className="object-cover w-full h-full rounded-full shadow-2xs hover:scale-110 transition-all duration-300 hover:cursor-pointer hover:z-20 cursor-pointer" />
                </div>
                  <div className="w-14 h-14 sm:w-12 sm:h-12 rounded-full bg-btn shadow-2xs">
                    <Image src="/david.png" alt="David - Backend Developer at Masters Web" width={148} height={148} className="object-cover w-full h-full rounded-full shadow-2xs hover:scale-110 transition-all duration-300 hover:cursor-pointer hover:z-20 cursor-pointer" />
                </div>
                </div>
              </div>
            </div>
            {/* Stats: Contact focused */}
            <div className="flex flex-row gap-3 md:gap-8 mb-8 z-50 w-full justify-start md:justify-start overflow-x-auto no-scrollbar py-2 px-4 md:px-0">
              <div className="min-w-[80px] bg-white/80 rounded-xl shadow p-3 flex flex-col items-center justify-center flex-shrink-0">
                <div className="text-3xl sm:text-4xl md:text-6xl font-black text-main">+150</div>
                <div className="max-w-[300px] text-sec text-xs sm:text-sm text-center mt-1">We&apos;re contacted daily for web projects, redesigns, and ongoing support. We&apos;re responsive, clear, and always ready to help.</div>
          </div> 
              <div className="min-w-[80px] bg-white/80 rounded-xl shadow p-3 flex flex-col items-center justify-center flex-shrink-0">
                <div className="text-3xl sm:text-4xl md:text-6xl font-black text-main">1h Avg.</div>
                <div className="max-w-[300px] text-sec text-xs sm:text-sm text-center mt-1">Whether it&apos;s through email or our contact form, we respond fast — because time matters.</div>
            </div>
              <div className="min-w-[80px] bg-white/80 rounded-xl shadow p-3 flex flex-col items-center justify-center flex-shrink-0">
                <div className="text-3xl sm:text-4xl md:text-6xl font-black text-main">3.</div>
                <div className="max-w-[300px] text-sec text-xs sm:text-sm text-center mt-1">Call, email, or use the contact form — pick what suits you best, and get a fast reply.</div>
            </div>
            </div>
            <div className="w-10 h-10 items-center justify-center rounded-full bg-transparent border border-[var(--text-main)] absolute bottom-5 right-1/2 p-3 hidden md:flex">
            <p className="animate-bounce text-4xl w-full h-full flex items-center justify-center">▾</p>
          </div>
        </div> 
          {/* Cards section only on md+ */}
          <div className="hidden md:flex md:flex-1 bg-transparent w-full h-full z-20 mt-8 md:mt-0">
            <div className="w-full h-full flex flex-col md:flex-row justify-between gap-4 mx-auto">
              {/* Column 1 */}
              <div className="max-w-[400px] w-full overflow-hidden h-full bg-transparent p-2 mx-auto md:mx-0">
                <div className="flex flex-col gap-4 scroll-down cursor-pointer">
                {[...testimonials1, ...testimonials1].map((testimonial, index) => (
                  <div
                    key={`c1-${index}`}
                      className="relative w-full rounded-xl overflow-hidden mb-4 shadow-lg cursor-pointer bg-white/90 p-6 flex flex-col justify-center"
                    style={{ height: testimonial.height }}
                  >
                    {/* Rating */}
                    <div className="flex justify-center mb-3">
                      {renderStars(testimonial.rating)}
                    </div>
                    
                    {/* Name */}
                    <h3 className="text-main text-2xl text-center mb-1">
                      {testimonial.name}
                    </h3>
                    
                    {/* Occupation */}
                    <p className="text-special text-sm text-center mb-4">
                      {testimonial.occupation}
                    </p>
                    
                    {/* Testimonial */}
                    <blockquote className="text-sec text-sm leading-relaxed text-center">
                      &ldquo;{testimonial.testimonial}&rdquo;
                    </blockquote>
                  </div>
                ))}
              </div>
            </div>
              {/* Column 2 */}
              <div className="max-w-[400px] w-full overflow-hidden h-full bg-transparent p-2 mx-auto md:mx-0">
                <div className="flex flex-col gap-4 scroll-up cursor-pointer">
                {[...testimonials2, ...testimonials2].map((testimonial, index) => (
                  <div
                    key={`c2-${index}`}
                      className="relative w-full rounded-xl overflow-hidden mb-4 shadow-lg cursor-pointer bg-white/90 p-6 flex flex-col justify-center"
                    style={{ height: testimonial.height }}
                  >
                    {/* Rating */}
                    <div className="flex justify-center mb-3">
                      {renderStars(testimonial.rating)}
                    </div>
                    
                    {/* Name */}
                    <h3 className="text-main text-2xl text-center mb-1">
                      {testimonial.name}
                    </h3>
                    
                    {/* Occupation */}
                    <p className="text-special text-sm text-center mb-4">
                      {testimonial.occupation}
                    </p>
                    
                    {/* Testimonial */}
                    <blockquote className="text-sec text-sm leading-relaxed text-center">
                      &ldquo;{testimonial.testimonial}&rdquo;
                    </blockquote>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        </header>

        {/* Map Section */}
        <section id="main-content" className="w-full h-64 sm:h-80 md:h-96 bg-gray-200 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.681138079049!2d-73.98933968459396!3d40.748441779328085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1641234567890!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="opacity-80"
            title="Masters Web Location Map"
          ></iframe>
        </section>

        <Footer />
      </div>
    </>
  );
} 