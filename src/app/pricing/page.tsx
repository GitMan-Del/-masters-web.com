"use client";
import NavBar from "../components/Navbar"
import Footer from "../components/Footer"
import { useEffect } from "react"

export default function PricingPage() {
  useEffect(() => {
    document.title = 'Pricing Plans - Masters Web';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Choose the perfect plan for your web development needs. From free basic plans to professional enterprise solutions.');
    }
  }, []);
  return (
    <div className="min-h-screen bg-main px-4 sm:px-10 md:px-[120px]">
      <NavBar />
      
      <main className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
                         <p className="text-special font-semibold text-sm tracking-wide uppercase mb-2">PRICING</p>
             <h1 className="text-3xl md:text-4xl font-bold text-main mb-8">
               Choose the perfect plan for<br />
               your web development project.
             </h1>
            
            
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                         {/* Landing Page Plan */}
             <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg hover:shadow-xl transition-all duration-300">
               <div className="mb-6">
                 <div className="flex items-center mb-2">
                   <div className="w-4 h-4 bg-btn-active rounded-full mr-3"></div>
                   <h3 className="text-lg font-semibold text-main">Landing Page</h3>
                 </div>
                 <p className="text-sm text-sec mb-6">
                   High-converting single pages designed to capture leads and drive sales. Perfect for marketing campaigns.
                 </p>
                                   <div className="mb-6">
                    <span className="text-4xl font-bold text-main">€400</span>
                    <p className="text-sm text-sec mt-1">Starting Price</p>
                  </div>
               </div>
               
               {/* Features */}
               <ul className="space-y-3 mb-8">
                 <li className="flex items-center text-sm text-sec">
                   <svg className="w-4 h-4 text-special mr-3" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                   </svg>
                   Conversion-Driven Design
                 </li>
                 <li className="flex items-center text-sm text-sec">
                   <svg className="w-4 h-4 text-special mr-3" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                   </svg>
                   Fast Load Times
                 </li>
                 <li className="flex items-center text-sm text-sec">
                   <svg className="w-4 h-4 text-special mr-3" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                   </svg>
                   SEO Ready
                 </li>
                 <li className="flex items-center text-sm text-sec">
                   <svg className="w-4 h-4 text-special mr-3" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                   </svg>
                   Mobile Responsive
                 </li>
               </ul>
               
               <button className="w-full py-3 px-4 bg-btn-active text-btn font-medium rounded-lg hover:bg-btn transition-colors">
                 Choose Plan
               </button>
             </div>

                         {/* Multi-page Website Plan */}
             <div className="bg-btn-active rounded-2xl p-6 shadow-lg relative transform scale-105 hover:shadow-2xl transition-all duration-300">
               <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                 <span className="bg-btn text-2 text-xs font-medium px-3 py-1 rounded-full">Most Popular</span>
               </div>
               
               <div className="mb-6">
                 <div className="flex items-center mb-2">
                   <div className="w-4 h-4 bg-white rounded-full mr-3"></div>
                   <h3 className="text-lg font-semibold text-white">Multi-page Website</h3>
                 </div>
                 <p className="text-sm text-white/80 mb-6">
                   Complete business websites with CMS, multiple pages, and all features growing companies need.
                 </p>
                                                                     <div className="mb-6">
                     <span className="text-4xl font-bold text-white">€900</span>
                     <p className="text-sm text-white/70 mt-1">Starting Price</p>
                   </div>
               </div>
               
               {/* Features */}
               <ul className="space-y-3 mb-8">
                 <li className="flex items-center text-sm text-white/90">
                   <svg className="w-4 h-4 text-white mr-3" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                   </svg>
                   CMS Included
                 </li>
                 <li className="flex items-center text-sm text-white/90">
                   <svg className="w-4 h-4 text-white mr-3" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                   </svg>
                   Blog Ready
                 </li>
                 <li className="flex items-center text-sm text-white/90">
                   <svg className="w-4 h-4 text-white mr-3" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                   </svg>
                   Scalable
                 </li>
                 <li className="flex items-center text-sm text-white/90">
                   <svg className="w-4 h-4 text-white mr-3" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                   </svg>
                   SEO Optimized
                 </li>
               </ul>
               
               <button className="w-full py-3 px-4 bg-white text-main font-medium rounded-lg hover:bg-gray-100 transition-colors">
                 Choose Plan
               </button>
             </div>

                         {/* Ecommerce Plan */}
             <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg hover:shadow-xl transition-all duration-300">
               <div className="mb-6">
                 <div className="flex items-center mb-2">
                   <div className="w-4 h-4 bg-btn-active rounded-full mr-3"></div>
                   <h3 className="text-lg font-semibold text-main">Ecommerce Store</h3>
                 </div>
                 <p className="text-sm text-sec mb-6">
                   Full-featured online stores with secure payments, inventory management, and everything you need to sell online.
                 </p>
                                                                     <div className="mb-6">
                     <span className="text-4xl font-bold text-main">€1500</span>
                     <p className="text-sm text-sec mt-1">Starting Price</p>
                   </div>
               </div>
               
               {/* Features */}
               <ul className="space-y-3 mb-8">
                 <li className="flex items-center text-sm text-sec">
                   <svg className="w-4 h-4 text-special mr-3" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                   </svg>
                   Secure Payments
                 </li>
                 <li className="flex items-center text-sm text-sec">
                   <svg className="w-4 h-4 text-special mr-3" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                   </svg>
                   Inventory
                 </li>
                 <li className="flex items-center text-sm text-sec">
                   <svg className="w-4 h-4 text-special mr-3" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                   </svg>
                   Analytics
                 </li>
                 <li className="flex items-center text-sm text-sec">
                   <svg className="w-4 h-4 text-special mr-3" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                   </svg>
                   SEO Optimized
                 </li>
               </ul>
               
               <button className="w-full py-3 px-4 bg-btn-active text-btn font-medium rounded-lg hover:bg-btn transition-colors mb-4">
                 Choose Plan
               </button>
             </div>

                         {/* SaaS & Custom Apps Plan */}
             <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg hover:shadow-xl transition-all duration-300">
               <div className="mb-6">
                 <div className="flex items-center mb-2">
                   <div className="w-4 h-4 bg-btn-active rounded-full mr-3"></div>
                   <h3 className="text-lg font-semibold text-main">SaaS & Custom Apps</h3>
                 </div>
                 <p className="text-sm text-sec mb-6">
                   Custom web applications and SaaS platforms built specifically for your business needs and requirements.
                 </p>
                                  <div className="mb-6">
                    <span className="text-4xl font-bold text-main">Custom Quote</span>
                    <p className="text-sm text-sec mt-1">Contact for Pricing</p>
                    <p className="text-xs text-sec mt-1">Starting from €3000</p>
                  </div>
               </div>
               
               {/* Features */}
               <ul className="space-y-3 mb-8">
                 <li className="flex items-center text-sm text-sec">
                   <svg className="w-4 h-4 text-special mr-3" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                   </svg>
                   Custom Development
                 </li>
                 <li className="flex items-center text-sm text-sec">
                   <svg className="w-4 h-4 text-special mr-3" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                   </svg>
                   SaaS Platforms
                 </li>
                                  <li className="flex items-center text-sm text-sec">
                    <svg className="w-4 h-4 text-special mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Advanced Integrations
                  </li>
                 <li className="flex items-center text-sm text-sec">
                   <svg className="w-4 h-4 text-special mr-3" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                   </svg>
                   Ongoing Support
                 </li>
               </ul>
               
               <button className="w-full py-3 px-4 bg-btn-active text-btn font-medium rounded-lg hover:bg-btn transition-colors mb-4">
                 Contact Us
               </button>
             
             </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
} 