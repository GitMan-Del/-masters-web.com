import React from 'react';

const PriceComponent = () => {
  const pricingPlans = [
    {
      id: 1,
      title: "Local Services",
      subtitle: "Perfect for local businesses",
      price: "From €500",
      description: "Ideal for restaurants, salons, medical practices, and other local services",
      features: [
        "Custom & unique design",
        "Optimized code implementation",
        "Maximum speed optimization",
        "Complete local SEO",
        "Google Maps integration",
        "Advanced contact forms",
        "Responsive photo gallery",
        "Mobile optimization",
        "SSL certificate included",
        "3 months free support"
      ],
      isPopular: false,
      buttonText: "Start project"
    },
    {
      id: 2,
      title: "Business Solutions",
      subtitle: "E-commerce & advanced features",
      price: "From €1200",
      description: "For online stores, booking platforms and complex web applications",
      features: [
        "Everything from Local Services",
        "Secure online payment system",
        "Complete admin dashboard",
        "Product/service management",
        "User management system",
        "Analytics and reports",
        "Third-party API integrations",
        "Daily automatic backup",
        "Conversion optimization",
        "6 months priority support"
      ],
      isPopular: true,
      buttonText: "Most popular"
    },
    {
      id: 3,
      title: "Custom Project",
      subtitle: "Whatever you imagine, we build",
      price: "On request",
      description: "Complex projects with unique functionalities, built to order",
      features: [
        "Free complete consultation",
        "Custom scalable architecture",
        "Any type of functionality",
        "Complex API integrations",
        "Advanced databases",
        "Authentication systems",
        "Custom dashboards",
        "Progressive web apps (PWA)",
        "Performance optimization",
        "Dedicated long-term support"
      ],
      isPopular: false,
      buttonText: "Discuss project"
    }
  ];

  return (
    <section id="pricing" className="w-full h-fit bg-main text-main py-16 px-4 sm:px-10 md:px-[120px]">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex flex-row gap-2 justify-center mb-6">
          <div className="w-5 h-5 rounded-[5px] flex items-center justify-center p-3 font-bold bg-btn-active text-btn">
            5
          </div>
          <p>Our pricing plans</p>
        </div>
        <h2 className="text-main text-4xl sm:text-5xl md:text-7xl mb-6">
          Choose the <span className="text-special">perfect plan</span> for 
          <span className="text-special"> your project</span>
        </h2>
        <p className="text-sec max-w-2xl mx-auto text-base sm:text-lg">
          Whether you need a simple website or a complex platform, we have the right solution for every budget and requirement.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            className={`relative bg-white/80 rounded-2xl p-8 shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer ${
              plan.isPopular 
                ? 'ring-2 ring-btn-active scale-105 md:scale-110' 
                : 'hover:shadow-xl'
            }`}
          >
            {/* Popular Badge */}
            {plan.isPopular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-btn-active text-btn px-6 py-2 rounded-full text-sm font-semibold">
                  Most popular
                </div>
              </div>
            )}

            {/* Plan Header */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-main mb-2">{plan.title}</h3>
              <p className="text-sec text-sm mb-4">{plan.subtitle}</p>
              <div className="text-4xl font-black text-main mb-2">{plan.price}</div>
              <p className="text-sec text-sm max-w-xs mx-auto">{plan.description}</p>
            </div>

            {/* Features List */}
            <div className="mb-8">
              <ul className="space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-btn-active flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-btn" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-main text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <div className="mt-auto">
              <a 
                href="/contact" 
                className={`btn-modern w-full flex items-center justify-center gap-3 min-h-[56px] ${
                  plan.isPopular ? 'bg-btn-active text-btn' : ''
                }`}
                aria-label={`Start ${plan.title} project`}
              >
                <span className="btn-text-content">{plan.buttonText}</span>
                <div className="btn-circle">
                  <span>→</span>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16">
        <p className="text-sec mb-6">
          Not sure which plan fits your needs? 
        </p>
        <a 
          href="/contact" 
          className="btn-modern inline-flex items-center gap-5 min-h-[56px]"
          aria-label="Get personalized consultation"
        >
          <span className="btn-text-content">Free consultation</span>
          <span className="inline-block w-2"></span>
          <div className="btn-circle">
            <span>→</span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default PriceComponent; 