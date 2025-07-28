import Image from "next/image"
import NavBar from "../components/Navbar"
import Footer from "../components/Footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Landing Page Development - Masters Web',
  description: 'Professional landing page development focused on conversion. Get a high-converting single-page website designed to turn visitors into customers.',
  keywords: ['landing page', 'conversion optimization', 'lead generation', 'single page website', 'marketing website'],
}

export default function LandingPage() {
  const features = [
    "Conversion-Driven Design",
    "Mobile-Responsive Layout", 
    "Fast Load Times",
    "Customizable Lead Forms",
    "SEO Optimization",
    "Compelling Visuals",
    "A/B Testing Integration",
    "Analytics Tracking",
    "Brand Consistency",
    "Social Proof Elements",
    "Secure Hosting",
    "Integration with Marketing Tools",
    "Clear Value Proposition",
    "Cross-Browser Compatibility",
    "Post-Launch Support"
  ];

  const benefits = [
    {
      title: "Higher Conversion Rates",
      description: "Every element is strategically placed to guide visitors toward your goal - whether that's capturing leads, making sales, or driving sign-ups."
    },
    {
      title: "Lightning Fast Performance",
      description: "Optimized code and modern techniques ensure your page loads in under 3 seconds, keeping visitors engaged and reducing bounce rates."
    },
    {
      title: "Mobile-First Design",
      description: "With over 60% of traffic coming from mobile devices, your landing page will look perfect and perform flawlessly on all screen sizes."
    },
    {
      title: "SEO Optimized",
      description: "Built with search engines in mind, your landing page will rank higher and attract more organic traffic from day one."
    }
  ];

  const process = [
    {
      step: "1",
      title: "Strategy & Planning",
      description: "We analyze your target audience, competition, and goals to create a conversion-focused strategy."
    },
    {
      step: "2", 
      title: "Design & Copy",
      description: "Our designers and copywriters work together to create compelling visuals and persuasive content."
    },
    {
      step: "3",
      title: "Development & Testing",
      description: "We build your landing page with clean code and test every element for optimal performance."
    },
    {
      step: "4",
      title: "Launch & Optimize",
      description: "After launch, we monitor performance and provide optimization recommendations."
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
                  LP
                </div>
                <p>Landing Page Development</p>
              </div>
              
              <h1 className="text-main text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-special">LANDING PAGES</span> THAT
                <span className="text-special"> CONVERT VISITORS</span> INTO 
                <span className="text-special"> CUSTOMERS</span>
              </h1>
              
              <p className="text-sec max-w-2xl text-base sm:text-lg">
                Get a high-converting landing page designed to capture leads and drive sales. Built with modern technology, optimized for speed, and focused on your business goals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 items-center mt-6">
                <a
                  href="/contact"
                  className="btn-modern w-full sm:w-auto flex items-center gap-5 min-h-[56px]"
                  aria-label="Start your landing page project"
                >
                  <span className="btn-text-content">Start Your Project - From €400</span>
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

        {/* Features Section */}
        <section id="main-content" className="w-full bg-white py-16 px-4 sm:px-10 md:px-[120px]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-main mb-4">
                Everything Your <span className="text-special">Landing Page</span> Needs
              </h2>
              <p className="text-sec text-lg max-w-2xl mx-auto">
                Our landing pages include all the essential features to maximize your conversion rates and grow your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
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
        <section className="w-full bg-gray-50 py-16 px-4 sm:px-10 md:px-[120px]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-main mb-4">
                Why Choose Our <span className="text-special">Landing Pages</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold text-main mb-4">{benefit.title}</h3>
                  <p className="text-sec leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="w-full bg-white py-16 px-4 sm:px-10 md:px-[120px]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-main mb-4">
                Our <span className="text-special">Development Process</span>
              </h2>
              <p className="text-sec text-lg max-w-2xl mx-auto">
                From strategy to launch, we follow a proven process to deliver landing pages that convert.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-btn-active text-btn rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-main mb-3">{step.title}</h3>
                  <p className="text-sec">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-main py-16 px-4 sm:px-10 md:px-[120px]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-main mb-6">
              Ready to <span className="text-special">Boost Your Conversions</span>?
            </h2>
            <p className="text-sec text-lg mb-8 max-w-2xl mx-auto">
              Get a professional landing page that turns visitors into customers. Starting from just €400, with fast delivery and ongoing support.
            </p>
            <a
              href="/contact"
              className="btn-modern inline-flex items-center gap-5 min-h-[56px]"
              aria-label="Start your landing page project now"
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