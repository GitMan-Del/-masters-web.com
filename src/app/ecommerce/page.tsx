import Image from "next/image"
import NavBar from "../components/Navbar"
import Footer from "../components/Footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Ecommerce Website Development - Masters Web',
  description: 'Professional ecommerce development for online stores. Robust platforms with secure payments, inventory management, and all features to sell online.',
  keywords: ['ecommerce development', 'online store', 'shopping cart', 'payment gateway', 'inventory management'],
}

export default function Ecommerce() {
  const features = [
    "User-Friendly Storefront",
    "Secure Payment Gateway",
    "Mobile-Optimized Shopping",
    "Product Filtering & Search",
    "Cart & Checkout Optimization",
    "Inventory Management",
    "SEO for Product Pages",
    "Customer Accounts",
    "Discount & Promo Codes",
    "Shipping Integration",
    "Order Tracking",
    "Analytics & Reporting",
    "Cross-Selling & Upselling",
    "Secure Hosting & SSL",
    "Post-Launch Support"
  ];

  const benefits = [
    {
      title: "Start Selling Immediately",
      description: "Get your online store live quickly with a complete ecommerce solution that includes everything you need to start selling products online."
    },
    {
      title: "Secure & Reliable",
      description: "Built with security in mind, featuring SSL certificates, secure payment processing, and PCI compliance to protect your customers' data."
    },
    {
      title: "Mobile Commerce Ready",
      description: "Over 70% of online shopping happens on mobile. Your store will provide a seamless shopping experience across all devices."
    },
    {
      title: "Scalable Growth",
      description: "From 10 to 10,000 products, our ecommerce platforms scale with your business without compromising performance."
    }
  ];

  const ecommerceFeatures = [
    {
      category: "Product Management",
      features: ["Unlimited Products", "Product Variants", "Digital Downloads", "Inventory Tracking", "Bulk Import/Export"]
    },
    {
      category: "Payments & Checkout",
      features: ["Multiple Payment Methods", "Secure Checkout", "Guest Checkout", "Abandoned Cart Recovery", "Tax Calculations"]
    },
    {
      category: "Shipping & Orders",
      features: ["Shipping Zones", "Real-time Rates", "Order Management", "Automated Notifications", "Returns Management"]
    },
    {
      category: "Marketing & SEO",
      features: ["Discount Codes", "Email Marketing", "SEO Optimization", "Social Media Integration", "Analytics Dashboard"]
    }
  ];

  const platforms = [
    {
      name: "Shopify",
      description: "Perfect for quick launch with built-in features",
      bestFor: "Small to medium businesses"
    },
    {
      name: "WooCommerce",
      description: "Flexible WordPress-based solution",
      bestFor: "Content-heavy stores"
    },
    {
      name: "Custom Solution",
      description: "Tailored platform for unique requirements",
      bestFor: "Large businesses with specific needs"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Planning & Strategy",
      description: "We analyze your products, target market, and competitors to create an ecommerce strategy that converts."
    },
    {
      step: "2",
      title: "Design & UX",
      description: "Create an intuitive shopping experience with conversion-optimized design and user-friendly navigation."
    },
    {
      step: "3",
      title: "Development & Integration",
      description: "Build your store with secure payments, inventory management, and all necessary integrations."
    },
    {
      step: "4",
      title: "Testing & Launch",
      description: "Thorough testing of all features, payment processing, and performance before going live."
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
                  EC
                </div>
                <p>Ecommerce Development</p>
              </div>
              
              <h1 className="text-main text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-special">ONLINE STORES</span> THAT
                <span className="text-special"> SELL & SCALE</span>
              </h1>
              
              <p className="text-sec max-w-2xl text-base sm:text-lg">
                Get a robust ecommerce platform with secure payments, inventory management, and all the features you need to sell online and grow your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 items-center mt-6">
                <a
                  href="/contact"
                  className="btn-modern w-full sm:w-auto flex items-center gap-5 min-h-[56px]"
                  aria-label="Start your ecommerce project"
                >
                  <span className="btn-text-content">Start Your Store - From €1500</span>
                  <span className="inline-block w-2"></span>
                  <div className="btn-circle">
                    <span>→</span>
                  </div>
                </a>
              </div>
              
              <div className="flex items-center gap-4 mt-4 text-sm text-sec">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Most Popular Choice
                </span>
                <span>•</span>
                <span>Complete Ecommerce Solution</span>
              </div>
            </div>
            
            <div className="w-10 h-10 items-center justify-center rounded-full bg-transparent border border-[var(--text-main)] p-3 hidden md:flex">
              <p className="animate-bounce text-4xl w-full h-full flex items-center justify-center">▾</p>
            </div>
          </div> 
        </header>

        {/* Benefits Section */}
        <section id="main-content" className="w-full bg-white py-16 px-4 sm:px-10 md:px-[120px]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-main mb-4">
                Why Choose Our <span className="text-special">Ecommerce Solutions</span>
              </h2>
              <p className="text-sec text-lg max-w-2xl mx-auto">
                Built for performance, security, and growth. Everything you need to succeed in online retail.
              </p>
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

        {/* Features Section */}
        <section className="w-full bg-gray-50 py-16 px-4 sm:px-10 md:px-[120px]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-main mb-4">
                <span className="text-special">Complete Ecommerce</span> Features
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {ecommerceFeatures.map((category, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-main mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-sec">
                        <div className="w-1.5 h-1.5 bg-btn-active rounded-full flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="w-full bg-white py-16 px-4 sm:px-10 md:px-[120px]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-main mb-4">
                <span className="text-special">Platform Options</span> for Every Business
              </h2>
              <p className="text-sec text-lg max-w-2xl mx-auto">
                We work with the best ecommerce platforms to match your specific needs and budget.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {platforms.map((platform, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-xl text-center">
                  <h3 className="text-2xl font-bold text-main mb-4">{platform.name}</h3>
                  <p className="text-sec mb-4">{platform.description}</p>
                  <div className="text-sm text-special font-medium">
                    Best for: {platform.bestFor}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Features List */}
        <section className="w-full bg-gray-50 py-16 px-4 sm:px-10 md:px-[120px]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-main mb-4">
                Everything <span className="text-special">Included</span>
              </h2>
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

        {/* Process Section */}
        <section className="w-full bg-white py-16 px-4 sm:px-10 md:px-[120px]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-main mb-4">
                Our <span className="text-special">Development Process</span>
              </h2>
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
              Ready to <span className="text-special">Start Selling Online</span>?
            </h2>
            <p className="text-sec text-lg mb-8 max-w-2xl mx-auto">
              Launch your ecommerce store with a complete solution that includes everything you need to sell products online and grow your business.
            </p>
            <a
              href="/contact"
              className="btn-modern inline-flex items-center gap-5 min-h-[56px]"
              aria-label="Start your ecommerce project now"
            >
              <span className="btn-text-content">Launch Your Store Today</span>
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