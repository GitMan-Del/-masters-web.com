import NavBar from "../components/Navbar"
import Footer from "../components/Footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Multi-Page Website Development - Masters Web',
  description: 'Professional multi-page website development for growing businesses. Complete websites with CMS, SEO optimization, and all essential features.',
  keywords: ['multi-page website', 'business website', 'CMS', 'website development', 'responsive website'],
}

export default function MultiPageWebsite() {
  const features = [
    "Custom Design",
    "Responsive Across Devices",
    "Intuitive Navigation",
    "SEO-Optimized Structure",
    "Content Management System (CMS)",
    "Contact Forms & CTAs",
    "Blog Integration",
    "Social Media Integration",
    "Fast Page Load Speeds",
    "Analytics Dashboard",
    "Security Features", 
    "Ecommerce Ready",
    "Portfolio or Case Studies",
    "Multilingual Support",
    "Maintenance & Support"
  ];

  const benefits = [
    {
      title: "Complete Online Presence",
      description: "Get a full website with multiple pages to showcase your business, services, team, and more. Perfect for establishing credibility and authority."
    },
    {
      title: "Easy Content Management",
      description: "Update your website content easily with our user-friendly CMS. Add new pages, blog posts, and media without technical knowledge."
    },
    {
      title: "SEO Optimized",
      description: "Each page is optimized for search engines with proper structure, meta tags, and performance optimization to rank higher in Google."
    },
    {
      title: "Scalable Foundation",
      description: "Built to grow with your business. Easily add new features, pages, and functionality as your needs evolve."
    }
  ];

  const pageTypes = [
    {
      name: "Homepage",
      description: "Compelling hero section, value proposition, and overview of your business"
    },
    {
      name: "About Us",
      description: "Tell your story, showcase your team, and build trust with visitors"
    },
    {
      name: "Services/Products",
      description: "Detailed pages for each service or product you offer"
    },
    {
      name: "Portfolio/Case Studies",
      description: "Showcase your work and success stories to build credibility"
    },
    {
      name: "Blog",
      description: "Content marketing hub to attract visitors and demonstrate expertise"
    },
    {
      name: "Contact",
      description: "Multiple contact options and forms to make it easy for customers to reach you"
    }
  ];

  const technologies = [
    {
      name: "Next.js",
      description: "Modern React framework for optimal performance"
    },
    {
      name: "Headless CMS",
      description: "Easy content management with Sanity or Strapi"
    },
    {
      name: "Tailwind CSS",
      description: "Utility-first CSS for custom, responsive designs"
    },
    {
      name: "Analytics",
      description: "Google Analytics and conversion tracking setup"
    }
  ];

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <div className="w-full min-h-fit mx-auto flex flex-col justify-center p-0 m-0 text-main">
        {/* Hero Section */}
        <header id="home" className="w-full h-screen flex flex-col items-center justify-center relative bg-main">
          <div className="w-full h-full lg:px-[120px] px-4 py-5 flex flex-col items-center gap-5 justify-between relative z-50">
            <NavBar/>          
            <div className="flex flex-col gap-6 items-center text-center max-w-4xl">
              <div className="flex flex-row gap-2 justify-center items-center" role="banner">
                <div className="w-5 h-5 rounded-[5px] flex items-center justify-center p-3 font-bold bg-btn-active text-btn">
                  MP
                </div>
                <p>Multi-Page Website Development</p>
              </div>
              
              <h1 className="text-main text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-special">COMPLETE WEBSITES</span> FOR
                <span className="text-special"> GROWING BUSINESSES</span>
              </h1>
              
              <p className="text-sec max-w-2xl text-base sm:text-lg">
                Get a professional multi-page website with CMS, SEO optimization, and all the features your business needs to succeed online.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 items-center mt-6">
                <a
                  href="/contact"
                  className="btn-modern w-full sm:w-auto flex items-center gap-5 min-h-[56px]"
                  aria-label="Start your website project"
                >
                  <span className="btn-text-content">Start Your Project - From €900</span>
                  <span className="inline-block w-2"></span>
                  <div className="btn-circle">
                    <span>→</span>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="w-10 h-10 items-center justify-center rounded-full bg-transparent border border-[var(--text-main)] p-3 hidden md:flex">
              <p className="animate-bounce text-4xl w-full h-full flex items-center justify-center">▾</p>
            </div>
          </div> 
        </header>

        {/* Page Types Section */}
        <section id="main-content" className="w-full bg-white py-16 px-4 sm:px-10 md:px-[120px]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-main mb-4">
                <span className="text-special">Essential Pages</span> for Your Business
              </h2>
              <p className="text-sec text-lg max-w-2xl mx-auto">
                We create all the pages your business needs to establish a strong online presence and convert visitors into customers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pageTypes.map((page, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-main mb-3">{page.name}</h3>
                  <p className="text-sec">{page.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full bg-gray-50 py-16 px-4 sm:px-10 md:px-[120px]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-main mb-4">
                Everything <span className="text-special">Included</span>
              </h2>
              <p className="text-sec text-lg max-w-2xl mx-auto">
                Your multi-page website comes with all the features needed for a successful online presence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-6 h-6 rounded-full bg-btn-active flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-btn" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-main font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full bg-white py-16 px-4 sm:px-10 md:px-[120px]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-main mb-4">
                Why Choose Our <span className="text-special">Multi-Page Websites</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-main mb-4">{benefit.title}</h3>
                  <p className="text-sec leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="w-full bg-gray-50 py-16 px-4 sm:px-10 md:px-[120px]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-main mb-4">
                <span className="text-special">Modern Technologies</span> We Use
              </h2>
              <p className="text-sec text-lg max-w-2xl mx-auto">
                Built with the latest technologies for optimal performance, security, and scalability.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white p-6 rounded-xl text-center shadow-sm">
                  <h3 className="text-xl font-bold text-main mb-3">{tech.name}</h3>
                  <p className="text-sec text-sm">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-main py-16 px-4 sm:px-10 md:px-[120px]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-main mb-6">
              Ready to <span className="text-special">Grow Your Business</span> Online?
            </h2>
            <p className="text-sec text-lg mb-8 max-w-2xl mx-auto">
              Get a complete multi-page website that establishes your online presence and drives business growth. Starting from €900 with full CMS and support.
            </p>
            <a
              href="/contact"
              className="btn-modern inline-flex items-center gap-5 min-h-[56px]"
              aria-label="Start your website project now"
            >
              <span className="btn-text-content">Start Your Project Today</span>
              <span className="inline-block w-2"></span>
              <div className="btn-circle">
                <span>→</span>
              </div>
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
} 