import Image from "next/image"
import NavBar from "../components/Navbar"
import Footer from "../components/Footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'SaaS & Custom Development - Masters Web',
  description: 'Custom SaaS development and tailored web applications. Scalable solutions built for your unique business requirements and vision.',
  keywords: ['SaaS development', 'custom web application', 'software as a service', 'web app development', 'custom software'],
}

export default function SaaSCustom() {
  const features = [
    "Custom-Built Solution",
    "Scalable Architecture",
    "User-Friendly Interface",
    "Subscription Management",
    "Secure Data Storage",
    "API Integrations",
    "Role-Based Access",
    "Real-Time Analytics",
    "Automated Workflows",
    "Mobile Accessibility",
    "Regular Updates",
    "24/7 Customer Support",
    "White-Label Option",
    "High Uptime Guarantee",
    "Onboarding & Training"
  ];

  const saasTypes = [
    {
      title: "Customer Management",
      description: "CRM systems, customer portals, and relationship management tools",
      examples: ["CRM Platforms", "Customer Portals", "Support Ticketing", "Lead Management"]
    },
    {
      title: "Business Operations",
      description: "Tools to streamline your business processes and operations",
      examples: ["Project Management", "Inventory Systems", "HR Platforms", "Workflow Automation"]
    },
    {
      title: "Analytics & Reporting",
      description: "Data visualization and business intelligence platforms",
      examples: ["Dashboard Tools", "Reporting Systems", "Data Analytics", "KPI Tracking"]
    },
    {
      title: "Industry-Specific",
      description: "Specialized solutions for your industry requirements",
      examples: ["Healthcare Platforms", "Education Tools", "Real Estate CRM", "Financial Services"]
    }
  ];

  const benefits = [
    {
      title: "Tailored to Your Vision",
      description: "Every feature is built specifically for your business needs. No compromises, no limitations - just a solution that works exactly how you want it to."
    },
    {
      title: "Scalable Architecture",
      description: "Built to handle growth from day one. Whether you have 10 users or 10,000, your platform will perform flawlessly as you scale."
    },
    {
      title: "Competitive Advantage",
      description: "Stand out from competitors with unique features and capabilities that off-the-shelf solutions simply can't provide."
    },
    {
      title: "Full Ownership",
      description: "You own the code, the data, and the platform. No vendor lock-in, no monthly fees to third parties, complete control over your solution."
    }
  ];

  const technologies = [
    {
      name: "Frontend",
      tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      description: "Modern, responsive user interfaces"
    },
    {
      name: "Backend",
      tech: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
      description: "Robust, scalable server architecture"
    },
    {
      name: "Infrastructure", 
      tech: ["AWS", "Docker", "Kubernetes", "CDN"],
      description: "Enterprise-grade hosting and deployment"
    },
    {
      name: "Integration",
      tech: ["REST APIs", "GraphQL", "Webhooks", "Third-party"],
      description: "Seamless connectivity with existing tools"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Discovery & Planning",
      description: "Deep dive into your business requirements, user needs, and technical specifications to create a comprehensive development plan."
    },
    {
      step: "2",
      title: "Architecture & Design",
      description: "Design the system architecture, user experience, and technical foundation that will support your growing business."
    },
    {
      step: "3",
      title: "Agile Development",
      description: "Build your platform in iterative sprints with regular demos and feedback sessions to ensure we're on the right track."
    },
    {
      step: "4",
      title: "Testing & Deployment",
      description: "Comprehensive testing, security audits, and deployment to production with monitoring and support systems in place."
    },
    {
      step: "5",
      title: "Growth & Optimization",
      description: "Ongoing support, feature additions, and optimizations based on user feedback and business growth."
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
                  S
                </div>
                <p>SaaS & Custom Development</p>
              </div>
              
              <h1 className="text-main text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-special">CUSTOM SAAS</span> &
                <span className="text-special"> WEB APPLICATIONS</span> TAILORED TO YOUR VISION
              </h1>
              
              <p className="text-sec max-w-2xl text-base sm:text-lg">
                Get a custom-built SaaS platform or web application designed specifically for your business needs. Scalable, secure, and built to give you a competitive advantage.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 items-center mt-6">
                <a
                  href="/contact"
                  className="btn-modern w-full sm:w-auto flex items-center gap-5 min-h-[56px]"
                  aria-label="Discuss your custom project"
                >
                  <span className="btn-text-content">Discuss Your Project</span>
                  <span className="inline-block w-2"></span>
                  <div className="btn-circle">
                    <span>→</span>
                  </div>
                </a>
              </div>
              
              <div className="flex items-center gap-4 mt-4 text-sm text-sec">
                <span>Custom Quote</span>
                <span>•</span>
                <span>Tailored Solution</span>
                <span>•</span>
                <span>Full Ownership</span>
              </div>
            </div>
            
            <div className="w-10 h-10 items-center justify-center rounded-full bg-transparent border border-[var(--text-main)] p-3 hidden md:flex">
              <p className="animate-bounce text-4xl w-full h-full flex items-center justify-center">▾</p>
            </div>
          </div> 
        </header>

        {/* SaaS Types Section */}
        <section id="main-content" className="w-full bg-white py-16 px-4 sm:px-10 md:px-[120px]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-main mb-4">
                <span className="text-special">SaaS Solutions</span> We Build
              </h2>
              <p className="text-sec text-lg max-w-2xl mx-auto">
                From CRM systems to industry-specific platforms, we create custom SaaS solutions that solve real business problems.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {saasTypes.map((type, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-main mb-3">{type.title}</h3>
                  <p className="text-sec mb-4">{type.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {type.examples.map((example, exampleIndex) => (
                      <span key={exampleIndex} className="text-xs bg-btn-active text-btn px-3 py-1 rounded-full">
                        {example}
                      </span>
                    ))}
                  </div>
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
                Why Choose <span className="text-special">Custom Development</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                  <h3 className="text-2xl font-bold text-main mb-4">{benefit.title}</h3>
                  <p className="text-sec leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="w-full bg-white py-16 px-4 sm:px-10 md:px-[120px]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-main mb-4">
                <span className="text-special">Enterprise-Grade</span> Technologies
              </h2>
              <p className="text-sec text-lg max-w-2xl mx-auto">
                We use proven, scalable technologies to build SaaS platforms that can handle enterprise-level demands.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technologies.map((category, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-main mb-3">{category.name}</h3>
                  <p className="text-sec text-sm mb-4">{category.description}</p>
                  <div className="space-y-1">
                    {category.tech.map((tech, techIndex) => (
                      <div key={techIndex} className="text-sm text-main font-medium">
                        {tech}
                      </div>
                    ))}
                  </div>
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
              <p className="text-sec text-lg max-w-2xl mx-auto">
                From concept to launch and beyond, we follow a proven process to deliver exceptional custom solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-btn-active text-btn rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-main mb-3">{step.title}</h3>
                  <p className="text-sec text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-main py-16 px-4 sm:px-10 md:px-[120px]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-main mb-6">
              Ready to Build Your <span className="text-special">Custom Solution</span>?
            </h2>
            <p className="text-sec text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and create a custom SaaS platform or web application that gives you a competitive edge in your market.
            </p>
            <a
              href="/contact"
              className="btn-modern inline-flex items-center gap-5 min-h-[56px]"
              aria-label="Schedule consultation for custom project"
            >
              <span className="btn-text-content">Schedule Consultation</span>
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