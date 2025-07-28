import NavBar from "../components/Navbar"
import Footer from "../components/Footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Custom Project Development - Masters Web',
  description: 'Complex custom web development projects with advanced features and dedicated support. Fully tailored solutions for unique business requirements.',
  keywords: ['custom web development', 'complex projects', 'advanced features', 'tailored solutions', 'enterprise development'],
}

export default function CustomProject() {
  const features = [
    "Custom",
    "Tailored Functionality",
    "Scalable Framework",
    "Cross-Platform Compatibility",
    "Unique User Experience",
    "Third-Party Integrations",
    "Advanced Security",
    "Data Analytics & Insights",
    "Agile Development Process",
    "Custom Workflows",
    "Dedicated Support",
    "Scalable Hosting",
    "Compliance Readiness",
    "Prototype & Testing",
    "Training & Documentation",
    "Future-Proof Design"
  ];

  const projectTypes = [
    {
      title: "Enterprise Platforms",
      description: "Large-scale systems for enterprise organizations",
      examples: ["ERP Systems", "Data Management", "Workflow Automation", "Business Intelligence"],
      complexity: "High",
      timeline: "6-12 months"
    },
    {
      title: "Industry Solutions",
      description: "Specialized platforms for specific industries",
      examples: ["Healthcare Systems", "Financial Platforms", "Education Tools", "Legal Software"],
      complexity: "High",
      timeline: "4-10 months"
    },
    {
      title: "Integration Projects",
      description: "Complex integrations and system migrations",
      examples: ["API Development", "Data Migration", "System Integration", "Legacy Modernization"],
      complexity: "Medium-High",
      timeline: "3-8 months"
    },
    {
      title: "Advanced Web Apps",
      description: "Feature-rich web applications with unique requirements",
      examples: ["Real-time Apps", "AI/ML Integration", "IoT Dashboards", "Advanced Analytics"],
      complexity: "High",
      timeline: "4-9 months"
    }
  ];

  const capabilities = [
    {
      category: "Advanced Technologies",
      items: ["AI/ML Integration", "Real-time Processing", "Blockchain", "IoT Connectivity", "Advanced Analytics"]
    },
    {
      category: "Enterprise Features",
      items: ["Single Sign-On", "Role Management", "Audit Trails", "Compliance Tools", "Multi-tenancy"]
    },
    {
      category: "Integration & APIs",
      items: ["Third-party APIs", "Custom APIs", "Webhooks", "Data Sync", "Legacy Systems"]
    },
    {
      category: "Scalability & Performance",
      items: ["Load Balancing", "Caching Systems", "CDN Setup", "Database Optimization", "Auto-scaling"]
    }
  ];

  const benefits = [
    {
      title: "Unlimited Possibilities",
      description: "No constraints or limitations. We build exactly what you envision, no matter how complex or unique your requirements are."
    },
    {
      title: "Expert Team",
      description: "Dedicated team of senior developers, architects, and specialists with expertise in cutting-edge technologies and complex systems."
    },
    {
      title: "Agile Process",
      description: "Regular demos, feedback sessions, and iterative development ensure your project stays on track and meets your expectations."
    },
    {
      title: "Long-term Partnership",
      description: "Ongoing support, maintenance, and enhancement services to ensure your custom solution continues to serve your business as it grows."
    }
  ];

  const process = [
    {
      phase: "Discovery",
      duration: "2-4 weeks",
      activities: ["Requirements Analysis", "Technical Assessment", "Architecture Planning", "Team Assembly"]
    },
    {
      phase: "Design & Planning",
      duration: "2-3 weeks", 
      activities: ["System Design", "UX/UI Design", "Technical Specification", "Project Roadmap"]
    },
    {
      phase: "Development",
      duration: "12-40 weeks",
      activities: ["Agile Sprints", "Regular Demos", "Quality Assurance", "Performance Testing"]
    },
    {
      phase: "Deployment",
      duration: "1-2 weeks",
      activities: ["Production Setup", "Security Audit", "Go-Live Support", "Team Training"]
    },
    {
      phase: "Support",
      duration: "Ongoing",
      activities: ["Maintenance", "Updates", "Feature Additions", "Technical Support"]
    }
  ];

  const industries = [
    "Healthcare & Medical",
    "Financial Services", 
    "Education & E-learning",
    "Real Estate",
    "Manufacturing",
    "Logistics & Supply Chain",
    "Government & Public Sector",
    "Non-profit Organizations"
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
                  CP
                </div>
                <p>Custom Project Development</p>
              </div>
              
              <h1 className="text-main text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-special">COMPLEX PROJECTS</span> WITH
                <span className="text-special"> UNLIMITED POSSIBILITIES</span>
              </h1>
              
              <p className="text-sec max-w-2xl text-base sm:text-lg">
                From enterprise platforms to industry-specific solutions, we tackle the most complex web development projects with advanced features and dedicated expert support.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 items-center mt-6">
                <a
                  href="/contact"
                  className="btn-modern w-full sm:w-auto flex items-center gap-5 min-h-[56px]"
                  aria-label="Start your custom project"
                >
                  <span className="btn-text-content">Start Your Custom Project</span>
                  <span className="inline-block w-2"></span>
                  <div className="btn-circle">
                    <span>→</span>
                  </div>
                </a>
              </div>
              
              <div className="flex items-center gap-4 mt-4 text-sm text-sec">
                <span>Enterprise-Grade</span>
                <span>•</span>
                <span>Dedicated Team</span>
                <span>•</span>
                <span>Unlimited Scope</span>
              </div>
            </div>
            
            <div className="w-10 h-10 items-center justify-center rounded-full bg-transparent border border-[var(--text-main)] p-3 hidden md:flex">
              <p className="animate-bounce text-4xl w-full h-full flex items-center justify-center">▾</p>
            </div>
          </div> 
        </header>

        {/* Project Types Section */}
        <section id="main-content" className="w-full bg-white py-16 px-4 sm:px-10 md:px-[120px]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-main mb-4">
                <span className="text-special">Complex Projects</span> We Handle
              </h2>
              <p className="text-sec text-lg max-w-2xl mx-auto">
                No project is too complex. We specialize in building sophisticated solutions that other agencies can&apos;t handle.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projectTypes.map((type, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-xl">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-main">{type.title}</h3>
                    <div className="text-right">
                      <div className="text-sm text-special font-medium">Complexity: {type.complexity}</div>
                      <div className="text-sm text-sec">Timeline: {type.timeline}</div>
                    </div>
                  </div>
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

        {/* Capabilities Section */}
        <section className="w-full bg-gray-50 py-16 px-4 sm:px-10 md:px-[120px]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-main mb-4">
                <span className="text-special">Advanced Capabilities</span>
              </h2>
              <p className="text-sec text-lg max-w-2xl mx-auto">
                We have the expertise and technology stack to handle the most demanding requirements.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-bold text-main mb-4">{capability.category}</h3>
                  <ul className="space-y-2">
                    {capability.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2 text-sm text-sec">
                        <div className="w-1.5 h-1.5 bg-btn-active rounded-full flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
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
                Why Choose Us for <span className="text-special">Complex Projects</span>
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

        {/* Process Section */}
        <section className="w-full bg-gray-50 py-16 px-4 sm:px-10 md:px-[120px]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-main mb-4">
                Our <span className="text-special">Development Process</span>
              </h2>
              <p className="text-sec text-lg max-w-2xl mx-auto">
                A proven methodology for delivering complex projects on time and within scope.
              </p>
            </div>
            
            <div className="space-y-8">
              {process.map((phase, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-center gap-4 mb-2 md:mb-0">
                      <div className="w-12 h-12 bg-btn-active text-btn rounded-full flex items-center justify-center text-lg font-bold">
                        {index + 1}
                      </div>
                      <h3 className="text-2xl font-bold text-main">{phase.phase}</h3>
                    </div>
                    <div className="text-special font-medium">{phase.duration}</div>
                  </div>
                  <div className="ml-16 md:ml-16">
                    <div className="flex flex-wrap gap-3">
                      {phase.activities.map((activity, activityIndex) => (
                        <span key={activityIndex} className="bg-gray-100 text-main px-3 py-1 rounded-lg text-sm">
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="w-full bg-white py-16 px-4 sm:px-10 md:px-[120px]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-main mb-4">
                <span className="text-special">Industries</span> We Serve
              </h2>
              <p className="text-sec text-lg max-w-2xl mx-auto">
                We have experience across various industries and understand their unique challenges and requirements.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {industries.map((industry, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                  <span className="text-main font-medium">{industry}</span>
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

        {/* CTA Section */}
        <section className="w-full bg-main py-16 px-4 sm:px-10 md:px-[120px]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-main mb-6">
              Ready to Tackle Your <span className="text-special">Complex Project</span>?
            </h2>
            <p className="text-sec text-lg mb-8 max-w-2xl mx-auto">
              No matter how complex or unique your requirements, our expert team is ready to turn your vision into reality. Let&apos;s discuss your project today.
            </p>
            <a
              href="/contact"
              className="btn-modern inline-flex items-center gap-5 min-h-[56px]"
              aria-label="Start your complex project consultation"
            >
              <span className="btn-text-content">Start Your Project</span>
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