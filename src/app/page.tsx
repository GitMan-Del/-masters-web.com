import Image from "next/image"
import NavBar from "./components/Navbar"
import Footer from "./components/Footer";
import AuthErrorToast from "./components/AuthErrorToast";
import Link from "next/link";

export default function Home() {

  const cards1 = [
    { id: 1, src: "/1.png", alt: "Local Services website preview showing business optimization", height: 220 },
    { id: 2, src: "/2.png", alt: "SaaS application interface with modern dashboard design", height: 340 },
    { id: 3, src: "/3.png", alt: "Gaming website with immersive design and interactive elements", height: 260 },
    { id: 4, src: "/4.png", alt: "Online Services platform with clean workflow automation", height: 180 },
    { id: 5, src: "/5.png", alt: "E-commerce store with fast loading and secure payments", height: 320 },
  ];
  
  const cards2 = [
    { id: 6, src: "/6.png", alt: "Portfolio website showcasing creative work and skills", height: 300 },
    { id: 7, src: "/2.png", alt: "SaaS platform with scalable architecture", height: 180 },
    { id: 8, src: "/3.png", alt: "Interactive gaming website with modern UI", height: 400 },
    { id: 9, src: "/2.png", alt: "Business dashboard with data visualization", height: 220 },
    { id: 10, src: "/1.png", alt: "Local business website with conversion optimization", height: 250 },
  ];

  return (
    <>
      <Link href="#main-content" className="skip-link">Skip to main content</Link>
      <AuthErrorToast />
      <div className="w-full min-h-fit mx-auto flex flex-col justify-center p-0 m-0 text-main">
        {/* Hero Section */}
        <header id="home" className="w-full h-[100svh] md:h-screen flex flex-col md:flex-row items-center justify-between relative bg-main">
          <div className="flex-2 bg-transparent w-full h-full lg:px-[120px] px-1 flex flex-col items-center md:items-left justify-between relative z-50">
          <NavBar/>          
            <div className="flex flex-col gap-3 items-center md:items-start text-center md:text-left">
              <div className="flex flex-row gap-2 justify-center md:justify-start items-center" role="banner" aria-label="Company highlight">
                <div className="w-5 h-5 rounded-[5px] flex items-center justify-center p-3 font-bold bg-btn-active" aria-hidden="true">
                  <span className="text-btn text-sm">1</span>
                </div>
              <p className="text-sm">Built with care and speed</p>
            </div>
              <h1 className="text-main text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                <span className="text-special">Every project is </span>
              different. But the goal is 
                <span className="text-special"> always </span>
              the same: make it work
                <span className="text-special"> beautifully</span>.
              </h1>
              <p className="text-sec max-w-xs sm:max-w-md md:max-w-2xl text-base sm:text-md mx-auto md:mx-0">We turn clear ideas into fast, reliable digital products with structure, precision, and modern tools that scale.</p>
              <div className="flex flex-col sm:flex-row gap-5 items-center mt-6">
                <Link href="/contact" className="btn-modern w-full sm:w-auto flex items-center gap-5 min-h-[56px]" aria-label="Start your web development project">
                  <span className="btn-text-content">Start your project</span>
                  <span className="inline-block w-2" aria-hidden="true"></span>
                  <div className="btn-circle">
                    <span>→</span>
                  </div>
                </Link>
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
            {/* Stats: horizontal scroll on mobile, row on md+ */}
            <div className="flex flex-row gap-3 md:gap-8 mb-8 z-50 w-full justify-start md:justify-start overflow-x-auto no-scrollbar py-2 px-4 md:px-0">
              <div className="max-w-[230px] bg-white/80 rounded-xl shadow p-3 flex flex-col items-center justify-center flex-shrink-0">
                <div className="text-3xl sm:text-4xl md:text-4xl font-black text-main">99%</div>
                <div className="max-w-[300px] text-sec text-xs text-center mt-1">delivery rate , because we plan, execute and communicate with clarity.</div>
          </div> 
              <div className="max-w-[230px] bg-white/80 rounded-xl shadow p-3 flex flex-col items-center justify-center flex-shrink-0">
                <div className="text-3xl sm:text-4xl md:text-4xl font-black text-main">200+</div>
                <div className="max-w-[300px] text-sec text-xs  text-center mt-1">Over 200 projects delivered with cohesion, speed, and consistent client clarity.</div>
            </div>
              <div className="max-w-[230px] bg-white/80 rounded-xl shadow p-3 flex flex-col items-center justify-center flex-shrink-0">
                <div className="text-3xl sm:text-4xl md:text-4xl font-black text-main">1.</div>
                <div className="max-w-[300px] text-sec text-xs text-center mt-1">1 clear goal: to help you launch fast, with clarity and confidence without wasting time, budget or energy.</div>
            </div>
            </div>
        </div> 
          {/* Cards section - Mobile: 4 columns background, Desktop: 2 columns interactive */}
          <div className="md:hidden absolute inset-0 w-full h-full z-10 pointer-events-none overflow-hidden">
          <div className="w-full h-full bg-white/30 backdrop-blur-2xl absolute top-0 left-0 z-20"></div>
            {/* Mobile: 4 columns non-interactive background */}
            <div className="w-full h-full flex justify-between gap-5 transform rotate-6 scale-110">
              {/* Mobile Column 1 - scroll-down */}
              <div className="w-1/4 overflow-hidden h-full bg-transparent">
                <div className="flex flex-col gap-2 scroll-down">
                {[...cards1, ...cards1, ...cards1].map((card, index) => (
                  <div
                    key={`m1-${index}`}
                    className="relative w-full rounded-lg overflow-hidden mb-2 shadow-sm"
                    style={{ height: card.height * 0.4 }}
                  >
                    <Image
                      fill
                      src={card.src}
                      alt=""
                      className="object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
              {/* Mobile Column 2 - scroll-up */}
              <div className="w-1/4 overflow-hidden h-full bg-transparent">
                <div className="flex flex-col gap-2 scroll-up">
                {[...cards2, ...cards2, ...cards2].map((card, index) => (
                  <div
                    key={`m2-${index}`}
                    className="relative w-full rounded-lg overflow-hidden mb-2 shadow-sm"
                    style={{ height: card.height * 0.4 }}
                  >
                    <Image
                      fill
                      src={card.src}
                      alt=""
                      className="object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
              {/* Mobile Column 3 - scroll-down */}
              <div className="w-1/4 overflow-hidden h-full bg-transparent">
                <div className="flex flex-col gap-2 scroll-down">
                {[...cards1, ...cards1, ...cards1].map((card, index) => (
                  <div
                    key={`m3-${index}`}
                    className="relative w-full rounded-lg overflow-hidden mb-2 shadow-sm"
                    style={{ height: card.height * 0.4 }}
                  >
                    <Image
                      fill
                      src={card.src}
                      alt=""
                      className="object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
              {/* Mobile Column 4 - scroll-up */}
              <div className="w-1/4 overflow-hidden h-full bg-transparent">
                <div className="flex flex-col gap-2 scroll-up">
                {[...cards2, ...cards2, ...cards2].map((card, index) => (
                  <div
                    key={`m4-${index}`}
                    className="relative w-full rounded-lg overflow-hidden mb-2 shadow-sm"
                    style={{ height: card.height * 0.4 }}
                  >
                    <Image
                      fill
                      src={card.src}
                      alt=""
                      className="object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
            </div>
          </div>
          
          {/* Desktop: Interactive 2 columns */}
          <div className="hidden md:flex md:flex-1 bg-transparent w-full h-full z-20 mt-8 md:mt-0">
            <div className="w-full h-full flex flex-col md:flex-row justify-between gap-4 mx-auto">
              {/* Desktop Column 1 */}
              <div className="max-w-[400px] w-full overflow-hidden h-full bg-transparent p-2 mx-auto md:mx-0">
                <div className="flex flex-col gap-4 scroll-down cursor-pointer">
                {[...cards1, ...cards1].map((card, index) => (
                  <div
                    key={`d1-${index}`}
                      className="relative w-full rounded-xl overflow-hidden mb-4 shadow-lg cursor-pointer"
                    style={{ height: card.height }}
                  >
                    <Image
                      fill
                      src={card.src}
                      alt={card.alt}
                      className="object-cover rounded-xl"
                    />
                  </div>
                ))}
              </div>
            </div>
              {/* Desktop Column 2 */}
              <div className="max-w-[400px] w-full overflow-hidden h-full bg-transparent p-2 mx-auto md:mx-0">
                <div className="flex flex-col gap-4 scroll-up cursor-pointer">
                {[...cards2, ...cards2].map((card, index) => (
                  <div
                    key={`d2-${index}`}
                      className="relative w-full rounded-xl overflow-hidden mb-4 shadow-lg cursor-pointer"
                    style={{ height: card.height }}
                  >
                    <Image
                      fill
                      src={card.src}
                      alt={card.alt}
                      className="object-cover rounded-xl"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        </header>
      {/* Our Process */}
        <section id="process" className="w-full h-fit bg-main text-center flex items-center justify-center flex-col gap-3 p-4 sm:p-10">
        <div className="flex flex-row gap-2 justify-center items-center">
            <div className="w-5 h-5 rounded-[5px] flex items-center justify-center p-3 font-bold bg-btn-active text-btn text-sm">2</div>
             <p className="text-sm">Our Process</p>
         </div>
        <h2 className="text-main text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
           We <span className="text-special"> help you </span>
           go from idea<span className="text-special"> to launch </span> <br />
           <span className="text-special"> with clarity </span>and speed.</h2>
      </section>

      {/* Process Steps */}
      <section className="w-full h-fit bg-main text-main p-4 sm:p-10 text-center items-center justify-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full max-w-5xl mx-auto">
          <div className="flex flex-col gap-2 text-center hover:scale-110 duration-200 hover:cursor-pointer cursor-pointer bg-white/80 rounded-xl p-4">
            <h2 className="text-5xl sm:text-5xl md:text-5xl font-black font-poppins">01</h2>
            <p className="text-xl sm:text-2xl font-semibold font-poppins">Discovery</p>
            <p className="max-w-md text-sec mx-auto text-xs sm:text-sm">
              We clarify your goals and gather all project requirements.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-center hover:scale-110 duration-200 hover:cursor-pointer cursor-pointer bg-white/80 rounded-xl p-4">
            <h2 className="text-5xl sm:text-5xl md:text-5xl font-black font-poppins">0<span className="text-special">2</span></h2>
            <p className="text-xl sm:text-2xl font-semibold font-poppins">
              <span className="text-special">Lock</span> the <span className="text-special">Deal</span>
            </p>
            <p className="max-w-md text-sec mx-auto text-xs sm:text-sm">
              We agree on scope, timeline, and budget to start the project.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-center hover:scale-110 duration-200 hover:cursor-pointer cursor-pointer bg-white/80 rounded-xl p-4">
            <h2 className="text-5xl sm:text-5xl md:text-5xl font-black font-poppins">03</h2>
            <p className="text-xl sm:text-2xl font-semibold font-poppins">Design</p>
            <p className="max-w-md text-sec mx-auto text-xs sm:text-sm">
              We create modern, user-friendly designs for your brand.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-center hover:scale-110 duration-200 hover:cursor-pointer cursor-pointer bg-white/80 rounded-xl p-4">
            <h2 className="text-5xl sm:text-5xl md:text-5xl font-black font-poppins">0<span className="text-special">4</span></h2>
            <p className="text-xl sm:text-2xl font-semibold font-poppins">
              <span className="text-special">Build</span> & <span className="text-special">Launch</span>
            </p>
            <p className="max-w-md text-sec mx-auto text-xs sm:text-sm">
              We develop, test, and launch your website quickly and smoothly.
            </p>
          </div>
        </div>
      </section>

      

      {/* Type of project we can build */}
      <section id="projects" className="w-full bg-main text-main py-16 px-4 sm:px-8 lg:px-[120px]">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Side - Text */}
          <div className="text-center lg:text-left min-w-md">
            <div className="flex flex-row gap-2 mb-6 justify-center lg:justify-start">
              <div className="w-5 h-5 rounded-[5px] flex items-center justify-center p-3 font-bold bg-btn-active text-btn text-sm">3</div>
              <p className="text-sec text-sm">Type of project we can build</p>
            </div>
            
            <h2 className="text-main text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              WE <span className="text-special">DESIGN</span> AND BUILD FAST,
              <span className="text-special"> MODERN WEBSITES</span>, <br/> AND WE
              ALREADY DID IT.
            </h2>
            
            <p className="text-sec text-base sm:text-md max-w-md mx-auto lg:mx-0 mb-8">
              We don&apos;t just promise performance and clean code,
              we&apos;ve delivered it on real projects that made a difference.
            </p>
            
            <Link href="/contact" className="btn-modern w-fit mx-auto lg:mx-0 flex items-center gap-5 min-h-[56px]" aria-label="Contact us for your web development project">
              <span className="btn-text-content">Contact us</span>
              <span className="inline-block w-2" aria-hidden="true"></span>
              <div className="btn-circle">
                <span>→</span>
              </div>
            </Link>
          </div>

          {/* Right Side - Project Cards */}
          <div className="relative">
            <div className="flex md:flex-row flex-col items-center md:-space-x-10 max-w-full mx-auto">
              
              <div className="relative bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl p-4 text-white w-full max-w-xs transform rotate-2 hover:rotate-0 transition-all duration-300 shadow-lg">
                <div className="bg-white rounded-xl p-2 mb-3 h-32 overflow-hidden">
                  <Image 
                    src="/og-image.png" 
                    alt="AutoBots website preview" 
                    width={250} 
                    height={120}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-bold mb-2">AutoBots</h3>
                <p className="text-purple-100 text-xs mb-3 leading-relaxed">
                  AutoBots oferă afacerilor locale superputeri automatizează rezervările, mesajele și...
                </p>
                <div className="text-white text-xs font-medium hover:underline cursor-pointer">
                <Link target="_blank" href="https://autobots-three.vercel.app/">
                  See more <span>→</span>
                  </Link>
                </div>
              </div>

              <div className="relative bg-gradient-to-br from-pink-500 to-indigo-600 rounded-2xl p-4 text-white w-full max-w-xs transform -rotate-2 hover:rotate-0 transition-all duration-300 shadow-lg">
                <div className="bg-white rounded-xl p-2 mb-3 h-32 overflow-hidden">
                  <Image 
                    src="/opengraf-image.png" 
                    alt="AnimeAstral website preview" 
                    width={250} 
                    height={120}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-bold mb-2">AnimeAstral</h3>
                <p className="text-pink-100 text-xs mb-3 leading-relaxed">
                  AnimeAstral is your gateway to free anime streaming. Enjoy a huge library of anime titles, all for free, with a clean and modern interface.
                </p>
                <div className="text-white text-xs font-medium hover:underline cursor-pointer">
                <Link target="_blank" href="https://animeastral.com/">
                  See more <span>→</span>
                  </Link>
                </div>
              </div>

              {/* InvityHub Card - Mobile */}
              <div className="relative bg-gradient-to-br from-gray-800 to-black rounded-2xl p-4 text-white w-full max-w-xs transform rotate-2 hover:rotate-0 transition-all duration-300 shadow-lg">
                <div className="bg-white rounded-xl p-2 mb-3 h-32 overflow-hidden">
                  <Image 
                    src="/landing-page.png" 
                    alt="InvityHub website preview" 
                    width={250} 
                    height={120}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-bold mb-2">InvityHub</h3>
                <p className="text-gray-300 text-xs mb-3 leading-relaxed">
                  Create, Send, and Track Beautiful Invitations Effortlessly...
                </p>
                <div className="text-white text-xs font-medium hover:underline cursor-pointer">
                  <Link target="_blank" href="https://inviltyhub-invitlyhubs-projects.vercel.app/">
                  See more <span>→</span>
                  </Link>
                </div>
              </div>

            </div>

          
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="w-full h-fit bg-white py-16 px-4 sm:px-10 md:px-[120px]">
          {/* Header */}
          <div className="flex flex-col items-center justify-center text-center mb-16">
            <div className="flex flex-row gap-2 justify-center items-center mb-6">
              <div className="w-5 h-5 rounded-[5px] flex items-center justify-center p-3 font-bold bg-btn-active text-btn text-sm">
                4
              </div>
              <p className="text-main text-sm">Our plans</p>
            </div>
            <h2 className="text-main text-4xl sm:text-5xl md:text-6xl mb-6 flex flex-col items-center justify-center text-center">
              <span>
                Choose the <span className="text-special">perfect solution</span>
              </span>
              <span>
                for <span className="text-special">your business</span>
              </span>
            </h2>
            <p className="text-sec max-w-2xl mx-auto text-base sm:text-sm">
              From landing pages to complex web applications, we deliver tailored solutions that help your business grow and succeed online.
            </p>
          </div>
          {/* Plans Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 py-16">
            {/* SIMPLE */}
            <div className="group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200/50 overflow-hidden">
              <div className="relative flex items-center justify-between mb-6">
                <div className="w-14 h-14 bg-[var(--text-special)] rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className="text-special font-bold text-xl">€200 setup</span>
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-3">SIMPLE</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                One-page website, delivered in 2 days. Perfect for a quick online presence.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs bg-purple-100 text-special px-3 py-1 rounded-full font-medium">1 Page</span>
                <span className="text-xs bg-purple-100 text-special px-3 py-1 rounded-full font-medium">Fast Delivery</span>
                <span className="text-xs bg-purple-100 text-special px-3 py-1 rounded-full font-medium">Basic SEO</span>
              </div>
              <Link
                href="/pricing"
                className="inline-flex items-center text-special font-semibold group-hover:text-purple-900 transition-colors duration-300"
              >
                View Pricing
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            {/* BUSINESS */}
            <div className="group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-dashed border-purple-300/50">
              <div className="relative flex items-center justify-between mb-6">
                <div className="w-14 h-14 bg-[var(--text-special)] rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="3" y="7" width="18" height="13" rx="2" strokeWidth={2} stroke="currentColor" fill="none"/>
                    <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" strokeWidth={2} stroke="currentColor" fill="none"/>
                    <path d="M3 13h18" strokeWidth={2} stroke="currentColor" fill="none"/>
                  </svg>
                </div>
                <span className="text-special font-bold text-xl">€750 setup</span>
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-3">BUSINESS</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                Minimum 5 pages, visual identity, and basic SEO. Ideal for growing businesses.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs bg-purple-100 text-special px-3 py-1 rounded-full font-medium">5+ Pages</span>
                <span className="text-xs bg-purple-100 text-special px-3 py-1 rounded-full font-medium">Visual Identity</span>
                <span className="text-xs bg-purple-100 text-special px-3 py-1 rounded-full font-medium">Basic SEO</span>
              </div>
              <a
                href="/pricing"
                className="inline-flex items-center text-special font-semibold group-hover:text-purple-900 transition-colors duration-300"
              >
                View Pricing
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            {/* PREMIUM */}
            <div className="group relative bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-purple-300/50 overflow-hidden">
              <div className="relative flex items-center justify-between mb-6 mt-4">
                <div className="w-14 h-14 bg-[var(--text-special)] rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 17l3-9 6 6 6-6 3 9"
                    />
                    <circle cx="12" cy="6" r="2" fill="currentColor" />
                  </svg>
                </div>
                <span className="text-special font-bold text-xl">€1,790 setup</span>
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-3">PREMIUM</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                10 pages, marketing campaigns, and monthly maintenance. For ambitious brands.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs bg-purple-200 text-special px-3 py-1 rounded-full font-medium">10 Pages</span>
                <span className="text-xs bg-purple-200 text-special px-3 py-1 rounded-full font-medium">Campaigns</span>
                <span className="text-xs bg-purple-200 text-special px-3 py-1 rounded-full font-medium">Monthly Maintenance</span>
              </div>
              <a
                href="/pricing"
                className="inline-flex items-center text-special font-semibold group-hover:text-purple-900 transition-colors duration-300"
              >
                View Pricing
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="flex flex-col items-center justify-center text-center">
            <p className="text-sec mb-6 text-sm">
              Not sure which solution fits your needs?
            </p>
            <Link
              href="/contact"
              className="btn-modern inline-flex items-center gap-5 min-h-[56px] justify-center"
              aria-label="Get free consultation about web development services">
              <span className="btn-text-content">Get free consultation</span>
              <span className="inline-block w-2"></span>
              <div className="btn-circle">
                <span>→</span>
              </div>
            </Link>
          </div>
       </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full h-fit bg-white py-16 px-4 sm:px-10 md:px-[120px]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center justify-center text-center mb-16">
            <div className="flex flex-row gap-2 justify-center items-center mb-6">
              <div className="w-5 h-5 rounded-[5px] flex items-center justify-center p-3 font-bold bg-btn-active text-btn text-sm">
                5
              </div>
              <p className="text-main text-sm">Client testimonials</p>
            </div>
            <h2 className="text-main text-4xl sm:text-5xl md:text-6xl mb-6 flex flex-col items-center justify-center text-center">
              <span>
                Don&rsquo;t take our <span className="text-special">word for it</span>.
              </span>
              <span>
                <span className="text-special">Trust our customers</span>
              </span>
            </h2>
            <p className="text-sec max-w-2xl mx-auto text-base sm:text-sm">
              Over 200 successful projects delivered. Here&rsquo;s what our clients say about working with Masters Web for their web development needs.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="flex text-btn-active">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <blockquote className="text-main mb-4 leading-relaxed">
                &ldquo;Masters Web delivered our ecommerce site in just 2 weeks. The design is clean, fast, and already driving sales. Highly recommend!&rdquo;
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-btn-active rounded-full flex items-center justify-center text-btn font-bold text-sm mr-3">
                  AB
                </div>
                <div>
                  <div className="font-semibold text-main">Annette Black</div>
                  <div className="text-sec text-sm">@annetteblack35</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="flex text-btn-active">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <blockquote className="text-main mb-4 leading-relaxed">
                &ldquo;The landing page they built converted 3x better than our previous one. Clear communication and fast delivery.&rdquo;
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-btn-active rounded-full flex items-center justify-center text-btn font-bold text-sm mr-3">
                  MM
                </div>
                <div>
                  <div className="font-semibold text-main">Marvin McKinney</div>
                  <div className="text-sec text-sm">@marvinmckinney45</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="flex text-btn-active">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <blockquote className="text-main mb-4 leading-relaxed">
                &ldquo;Professional team, modern design, and excellent support. Our business website exceeded all expectations.&rdquo;
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-btn-active rounded-full flex items-center justify-center text-btn font-bold text-sm mr-3">
                  JC
                </div>
                <div>
                  <div className="font-semibold text-main">Jane Cooper</div>
                  <div className="text-sec text-sm">@janecooper95</div>
                </div>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="flex text-btn-active">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <blockquote className="text-main mb-4 leading-relaxed">
                &ldquo;Custom SaaS development that perfectly fits our workflow. It&rsquo;s truly been a game-changer for our business! 😊&rdquo;
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-btn-active rounded-full flex items-center justify-center text-btn font-bold text-sm mr-3">
                  RR
                </div>
                <div>
                  <div className="font-semibold text-main">Ronald Richards</div>
                  <div className="text-sec text-sm">@ronaldrichards47</div>
                </div>
              </div>
            </div>

            {/* Testimonial 5 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="flex text-btn-active">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <blockquote className="text-main mb-4 leading-relaxed">
                &ldquo;Fast, reliable, and scalable web development. Masters Web delivered exactly what we needed for our startup launch.&rdquo;
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-btn-active rounded-full flex items-center justify-center text-btn font-bold text-sm mr-3">
                  SW
                </div>
                <div>
                  <div className="font-semibold text-main">Sarah Wilson</div>
                  <div className="text-sec text-sm">@sarahwilson88</div>
                </div>
              </div>
            </div>

            {/* Testimonial 6 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="flex text-btn-active">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <blockquote className="text-main mb-4 leading-relaxed">
                &ldquo;Exceptional web development service. Clean code, modern design, and ongoing support. Couldn&rsquo;t be happier with the results.&rdquo;
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-btn-active rounded-full flex items-center justify-center text-btn font-bold text-sm mr-3">
                  DK
                </div>
                <div>
                  <div className="font-semibold text-main">Daniel Kim</div>
                  <div className="text-sec text-sm">@danielkim42</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="flex flex-col items-center justify-center text-center mt-16">
            <p className="text-sec mb-6 text-sm">
              Ready to join our satisfied clients?
            </p>
            <Link
              href="/contact"
              className="btn-modern inline-flex items-center gap-5 min-h-[56px] justify-center"
              aria-label="Start your web development project with Masters Web"
            >
              <span className="btn-text-content">Start your project</span>
              <span className="inline-block w-2"></span>
              <div className="btn-circle">
                <span>→</span>
              </div>
            </Link>
          </div>
        </div>
       </section>
        
      {/* Trusted by Companies */}
      <section className="w-full bg-main py-16 px-4 sm:px-10">
        <div className="max-w-6xl mx-auto text-center">
        <div className="flex flex-row gap-2 justify-center items-center mb-6">
              <div className="w-5 h-5 rounded-[5px] flex items-center justify-center p-3 font-bold bg-btn-active text-btn text-sm">
                6
              </div>
              <p className="text-main tetx-sm">Trusted by</p>
            </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-special">TRUSTED BY</span> FAST-GROWING <span className="text-special">STARTUPS</span> AND<br />
            BOLD <span className="text-special">ENTREPRENEURS</span>
          </h2>
          <p className="text-sec text-sm sm:text-sm max-w-4xl mx-auto mb-12">
            Over 200 businesses have trusted Masters Web to build fast, scalable, and conversion-focused 
            websites. We partner with visionaries across Europe and beyond to turn ideas into digital reality 
            with clarity, structure, and speed.
          </p>
          
          {/* Company Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {/* Row 1 */}
            <div className="bg-gray-200 rounded-lg h-24 sm:h-32 flex items-center justify-center hover:scale-105 transition-all duration-300">
              <span className="text-gray-400 text-xs">Logo 1</span>
            </div>
            <div className="bg-gray-200 rounded-lg h-24 sm:h-32 flex items-center justify-center hover:scale-105 transition-all duration-300">
              <span className="text-gray-400 text-xs">Logo 2</span>
            </div>
            <div className="bg-gray-200 rounded-lg h-24 sm:h-32 flex items-center justify-center hover:scale-105 transition-all duration-300">
              <span className="text-gray-400 text-xs">Logo 3</span>
            </div>
            <div className="bg-gray-200 rounded-lg h-24 sm:h-32 flex items-center justify-center hover:scale-105 transition-all duration-300">
              <span className="text-gray-400 text-xs">Logo 4</span>
            </div>
            
            {/* Row 2 */}
            <div className="bg-gray-200 rounded-lg h-24 sm:h-32 flex items-center justify-center hover:scale-105 transition-all duration-300">
              <span className="text-gray-400 text-xs">Logo 5</span>
            </div>
            <div className="bg-gray-200 rounded-lg h-24 sm:h-32 flex items-center justify-center hover:scale-105 transition-all duration-300">
              <span className="text-gray-400 text-xs">Logo 6</span>
            </div>
            <div className="bg-gray-200 rounded-lg h-24 sm:h-32 flex items-center justify-center hover:scale-105 transition-all duration-300">
              <span className="text-gray-400 text-xs">Logo 7</span>
            </div>
            <div className="bg-gray-200 rounded-lg h-24 sm:h-32 flex items-center justify-center hover:scale-105 transition-all duration-300">
              <span className="text-gray-400 text-xs">Logo 8</span>
            </div>
          </div>
        </div>
       </section>

      {/* Services Section - Keep Website Fast, Secure, and Up to Date */}
      <section className="w-full bg-main py-16 px-4 sm:px-10 md:px-[120px]">
        <div className="w-full">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Left Side - Service Cards */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Security Updates Card */}
                <div className="bg-black rounded-2xl p-6 text-white relative overflow-hidden">
                  <h3 className="text-xl font-bold mb-3">Security Updates</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Comprehensive infrastructure security patches and system upgrades.
                  </p>
                  
                </div>

                {/* Performance Optimization Card */}
                <div className="bg-transparent border border-black/50 rounded-2xl p-6 text-black relative overflow-hidden">
                  <h3 className="text-xl font-bold mb-3">Performance Optimization</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    We keep your website fast and responsive with speed checks and improvements.
                  </p>
                 
                </div>

                {/* Content & Edits Card */}
                <div className="bg-transparent border border-black/50 rounded-2xl p-6 text-black relative overflow-hidden">
                  <h3 className="text-xl font-bold mb-3">Content & Edits</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    Need to change text, images, or layouts? We handle it fast and reliably.
                  </p>
                </div>

                {/* Priority Support Card */}
                <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl p-6 text-white relative overflow-hidden">
                  <h3 className="text-xl font-bold mb-3">Priority Support</h3>
                  <p className="text-purple-100 text-sm mb-4">
                    Get expert help within 24h - Whatever you need: updates, fixes, or advice.
                  </p>
                  
                </div>

              </div>
            </div>

            {/* Right Side - Text */}
            <div className="flex-1 text-center lg:text-right">
              <div className="flex flex-row gap-2 mb-6 justify-center lg:justify-end">
                <div className="w-5 h-5 rounded-[5px] flex items-center justify-center p-3 font-bold bg-btn-active text-btn text-sm">7</div>
                <p className="text-sec text-sm">Website Maintenance</p>
              </div>
              
              <h2 className="text-main text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
                <span className="text-special">KEEP</span> YOUR <span className="text-special">WEBSITE</span> FAST, SECURE,<br />
                AND <span className="text-special">UP TO DATE</span>.
              </h2>
              
              <p className="text-sec text-base sm:text-sm max-w-md mx-auto lg:mx-0 lg:ml-auto mb-8">
                From technical updates to content changes, our maintenance plans ensure your website stays online, optimized, and ready to convert every day.
              </p>
              
              <div className="flex justify-center lg:justify-end">
                <Link href="/contact" className="btn-modern w-fit flex items-center gap-5 min-h-[56px]" aria-label="Contact us about maintenance services">
                  <span className="btn-text-content">Contact us</span>
                  <span className="inline-block w-2" aria-hidden="true"></span>
                  <div className="btn-circle">
                    <span>→</span>
                  </div>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="stack" className="w-full h-fit py-8 bg-main text-main relative flex flex-col justify-center items-center px-4 sm:px-10 md:px-[120px]">
        {/* Scattered avatar images, each with a tooltip on hover */}
        {/* On mobile, stack avatars in a row at the top */}
        <div className="flex flex-row flex-wrap gap-4 justify-center md:hidden mb-8">
          <Image 
            src="/vercel.jpeg" 
            width={48} 
            height={48} 
            alt="Vercel deployment platform" 
            className="bg-btn rounded-xl h-10 w-10 object-contain shadow-lg animate-float" 
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bccXvdm3KyRQQhgeWOo+Jqcq/wAAdxCSVBIdh9A1hPrDqzmuPs="
            quality={75}
          />
          <Image 
            src="/typescript.png" 
            width={48} 
            height={48} 
            alt="TypeScript programming language" 
            className="bg-btn rounded-xl h-10 w-10 object-contain shadow-lg animate-float" 
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bccXvdm3KyRQQhgeWOo+Jqcq/wAAdxCSVBIdh9A1hPrDqzmuPs="
            quality={75}
          />
          <Image 
            src="/tailwind.png" 
            width={48} 
            height={48} 
            alt="Tailwind CSS framework" 
            className="bg-btn rounded-xl h-10 w-10 object-contain shadow-lg animate-float" 
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bccXvdm3KyRQQhgeWOo+Jqcq/wAAdxCSVBIdh9A1hPrDqzmuPs="
            quality={75}
          />
          <Image 
            src="/nextjs.png" 
            width={48} 
            height={48} 
            alt="Next.js React framework" 
            className="bg-btn rounded-xl h-10 w-10 object-contain shadow-lg animate-float" 
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bccXvdm3KyRQQhgeWOo+Jqcq/wAAdxCSVBIdh9A1hPrDqzmuPs="
            quality={75}
          />
          <Image 
            src="/github.png" 
            width={48} 
            height={48} 
            alt="GitHub version control" 
            className="bg-btn rounded-xl h-10 w-10 object-contain shadow-lg animate-float" 
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bccXvdm3KyRQQhgeWOo+Jqcq/wAAdxCSVBIdh9A1hPrDqzmuPs="
            quality={75}
          />
        </div>
        {/* On desktop, keep absolute scattered avatars */}
        <div className="hidden md:block">
          <div className="group absolute top-[18%] left-[22%] z-30">
            <Image 
              src="/vercel.jpeg" 
              width={48} 
              height={48} 
              alt="Vercel deployment platform" 
              className="bg-btn rounded-xl h-10 w-10 object-contain rotate-[8deg] shadow-lg animate-float" 
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bccXvdm3KyRQQhgeWOo+Jqcq/wAAdxCSVBIdh9A1hPrDqzmuPs="
              quality={75}
            />
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute left-1/2 -translate-x-1/2 -top-10 bg-main text-btn text-xs px-3 py-1 rounded shadow-lg pointer-events-none whitespace-nowrap z-50">
              <span className="font-bold">Vercel </span> - Ensures seamless CI/CD, fast global deployment, <br /> and optimal performance, especially for Next.js projects.
            </div>
          </div>
          <div className="group absolute bottom-[40%] left-[17%] z-20">
            <Image 
              src="/typescript.png" 
              width={48} 
              height={48} 
              alt="TypeScript programming language" 
              className="bg-btn rounded-xl h-10 w-10 object-contain -rotate-[15deg] animate-float" 
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bccXvdm3KyRQQhgeWOo+Jqcq/wAAdxCSVBIdh9A1hPrDqzmuPs="
              quality={75}
            />
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute left-1/2 -translate-x-1/2 -top-10 bg-main text-btn text-xs px-3 py-1 rounded shadow-lg pointer-events-none whitespace-nowrap z-50 text-center">
              <span className="font-bold">TypeScript </span> - Implemented to ensure code quality, <br /> reduce runtime errors, and support maintainable, large-scale applications.
            </div>
          </div>
          <div className="group absolute bottom-[30%] left-[68%] z-40">
            <Image 
              src="/tailwind.png" 
              width={48} 
              height={48} 
              alt="Tailwind CSS framework" 
              className="bg-btn rounded-xl h-10 w-10 object-contain rotate-[15deg] animate-float" 
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bccXvdm3KyRQQhgeWOo+Jqcq/wAAdxCSVBIdh9A1hPrDqzmuPs="
              quality={75}
            />
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute left-1/2 -translate-x-1/2 -top-10 bg-main text-btn text-xs px-3 py-1 rounded shadow-lg pointer-events-none whitespace-nowrap z-50 text-center">
              <span className="font-bold">Tailwind CSS </span> - Used to create clean, responsive designs <br /> with maximum speed and consistency across all components.
            </div>
          </div>
          <div className="group absolute top-[12%] right-[26%] z-30">
            <Image 
              src="/nextjs.png" 
              width={48} 
              height={48} 
              alt="Next.js React framework" 
              className="bg-btn rounded-xl h-10 w-10 object-contain -rotate-[9deg] animate-float" 
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bccXvdm3KyRQQhgeWOo+Jqcq/wAAdxCSVBIdh9A1hPrDqzmuPs="
              quality={75}
            />
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute left-1/2 -translate-x-1/2 -top-10 bg-main text-btn text-xs px-3 py-1 rounded shadow-lg pointer-events-none whitespace-nowrap z-50 text-center">
              <span className="font-bold">Next.js</span> - Chosen for its performance, SEO capabilities, <br /> and server-side rendering, enabling fast, reliable user experiences.
            </div>
          </div>
          <div className="group absolute bottom-[18%] left-[54%] z-20">
            <Image 
              src="/github.png" 
              width={48} 
              height={48} 
              alt="GitHub version control" 
              className="bg-btn rounded-xl h-10 w-10 object-contain rotate-[18deg] animate-float" 
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bccXvdm3KyRQQhgeWOo+Jqcq/wAAdxCSVBIdh9A1hPrDqzmuPs="
              quality={75}
            />
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute left-1/2 -translate-x-1/2 -top-10 bg-main text-btn text-xs px-3 py-1 rounded shadow-lg pointer-events-none whitespace-nowrap z-50 text-center">
              <span className="font-bold">GitHub </span> - Used for version control, code reviews, and <br /> deployment automation ensuring transparency and team efficiency.
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-2 mb-3">
          <div className="w-5 h-5 rounded-[5px] flex items-center justify-center p-3 font-bold bg-btn-active text-btn">8</div>
          <p>Our Tech Stack</p>
          </div>
        <h2 className="text-main text-4xl sm:text-5xl md:text-6xl text-center">We use <span className="text-special">modern</span>, <span className="text-special"> scalable</span>, and lightning-fast <span className="text-special"> technologies to build your product </span> the right way.</h2>
        <p className="text-sec max-w-xs sm:max-w-md md:max-w-[700px] text-center mx-auto">Built with the exact same tools used by top startups, agencies, and product teams to ship fast, scale efficiently, and stay ahead of the curve.</p>
        <Link href="/contact" className="btn-modern w-fit  flex items-center gap-5 min-h-[56px] mt-4" aria-label="Contact us for your web development project">
              <span className="btn-text-content">Contact us</span>
              <span className="inline-block w-2" aria-hidden="true"></span>
              <div className="btn-circle">
                <span>→</span>
              </div>
            </Link>
       </section>
      
      {/* Banner mov */}
      <div style={{ width: "100%", height: "40px", background: "var(--bg-btn-active)", zIndex: 100, position: "relative", overflow: "hidden", display: "flex", alignItems: "center" }}>
        <div
          style={{
            whiteSpace: "nowrap",
            display: "inline-block",
            animation: "marquee 28s linear infinite",
            fontFamily: "'Poppins', Arial, sans-serif",
            color: "#fff",
            fontSize: "16px",
            fontWeight: 400,
            letterSpacing: "0.02em",
          }}
        >
          {Array(6)
            .fill(
              <>
                Build with us now{" "}
                <span style={{ display: "inline-block", verticalAlign: "middle", margin: "0 8px" }}>
                  <svg width="6" height="6" viewBox="0 0 16 16" fill="#fff" xmlns="http://www.w3.org/2000/svg" style={{ display: "inline" }}>
                    <circle cx="8" cy="8" r="6" />
                  </svg>
                </span>
                Start your project today{" "}
                <span style={{ display: "inline-block", verticalAlign: "middle", margin: "0 8px" }}>
                  <svg width="6" height="6" viewBox="0 0 16 16" fill="#fff" xmlns="http://www.w3.org/2000/svg" style={{ display: "inline" }}>
                    <circle cx="8" cy="8" r="6" />
                  </svg>
                </span>
                Launch with us  fast &amp; clean{" "}
                <span style={{ display: "inline-block", verticalAlign: "middle", margin: "0 8px" }}>
                  <svg width="6" height="6" viewBox="0 0 16 16" fill="#fff" xmlns="http://www.w3.org/2000/svg" style={{ display: "inline" }}>
                    <circle cx="8" cy="8" r="6" />
                  </svg>
                </span>
                Your vision, our code.{" "}
                <span style={{ display: "inline-block", verticalAlign: "middle", margin: "0 8px" }}>
                  <svg width="6" height="6" viewBox="0 0 16 16" fill="#fff" xmlns="http://www.w3.org/2000/svg" style={{ display: "inline" }}>
                    <circle cx="8" cy="8" r="6" />
                  </svg>
                </span>
              </>
            )
            .map((el, idx) => (
              <span key={idx}>{el}</span>
            ))}
      </div>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
       </div>

        <Footer />
      </div>
    </>
  );
}
