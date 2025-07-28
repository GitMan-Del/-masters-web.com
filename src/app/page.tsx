import Image from "next/image"
import NavBar from "./components/Navbar"
import CardCarousel from "./components/CardCarousel";
import Footer from "./components/Footer";


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
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <div className="w-full min-h-fit mx-auto flex flex-col justify-center p-0 m-0 text-main">
        {/* Hero Section */}
        <header id="home" className="w-full h-[100svh] md:h-screen flex flex-col md:flex-row items-center justify-between relative bg-main">
          <div className="flex-2 bg-transparent w-full h-full lg:px-[120px] px-1 flex flex-col items-center md:items-left justify-between relative z-50">
            <NavBar/>          
            <div className="flex flex-col gap-3 items-center md:items-start text-center md:text-left">
                            <div className="flex flex-row gap-2 justify-center md:justify-start" role="banner" aria-label="Company highlight">
                <div className="w-5 h-5 rounded-[5px] flex items-center justify-center p-3 font-bold bg-btn-active" aria-hidden="true">
                  <span className="text-btn">1</span>
                </div>
                <p>Built with care and speed</p>
              </div>
              <h1 className="text-main text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-special">Every project is </span>
              different. But the goal is 
                <span className="text-special"> always </span>
              the same: make it work
                <span className="text-special"> beautifully</span>.
              </h1>
              <p className="text-sec max-w-xs sm:max-w-md md:max-w-2xl text-base sm:text-lg mx-auto md:mx-0">We turn clear ideas into fast, reliable digital products with structure, precision, and modern tools that scale.</p>
              <div className="flex flex-col sm:flex-row gap-5 items-center mt-6">
                <a href="/contact" className="btn-modern w-full sm:w-auto flex items-center gap-5 min-h-[56px]" aria-label="Start your web development project">
                  <span className="btn-text-content">Start your project</span>
                  <span className="inline-block w-2" aria-hidden="true"></span>
                  <div className="btn-circle">
                    <span>→</span>
                  </div>
                </a>
                <div className="flex flex-row items-center justify-center -space-x-3 sm:-space-x-5 mt-4 sm:mt-0" role="group" aria-label="Team members">
                  <div className="w-14 h-14 sm:w-12 sm:h-12 rounded-full bg-btn shadow-2xs">
                    <Image 
                      src="/daniel.png" 
                      alt="Daniel - Web Developer at Masters Web" 
                      width={148} 
                      height={148} 
                      className="object-cover w-full h-full rounded-full shadow-2xs hover:scale-110 transition-all duration-300 hover:cursor-pointer hover:z-20 cursor-pointer" 
                      priority
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bccXvdm3KyRQQhgeWOo+Jqcq/wAAdxCSVBIdh9A1hPrDqzmuPs="
                      quality={80}
                    />
                  </div>
                  <div className="w-14 h-14 sm:w-12 sm:h-12 rounded-full bg-btn shadow-2xs">
                    <Image 
                      src="/Delia.png" 
                      alt="Delia - Designer at Masters Web" 
                      width={148} 
                      height={148} 
                      className="object-cover w-full h-full rounded-full shadow-2xs hover:scale-110 transition-all duration-300 hover:cursor-pointer hover:z-20 cursor-pointer" 
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bccXvdm3KyRQQhgeWOo+Jqcq/wAAdxCSVBIdh9A1hPrDqzmuPs="
                      quality={80}
                    />
                </div>
                  <div className="w-14 h-14 sm:w-12 sm:h-12 rounded-full bg-btn shadow-2xs">
                    <Image 
                      src="/roxi.png" 
                      alt="Roxi - Frontend Developer at Masters Web" 
                      width={148} 
                      height={148} 
                      className="object-cover w-full h-full rounded-full shadow-2xs hover:scale-110 transition-all duration-300 hover:cursor-pointer hover:z-20 cursor-pointer" 
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bccXvdm3KyRQQhgeWOo+Jqcq/wAAdxCSVBIdh9A1hPrDqzmuPs="
                      quality={80}
                    />
                </div>
                  <div className="w-14 h-14 sm:w-12 sm:h-12 rounded-full bg-btn shadow-2xs">
                    <Image 
                      src="/david.png" 
                      alt="David - Backend Developer at Masters Web" 
                      width={148} 
                      height={148} 
                      className="object-cover w-full h-full rounded-full shadow-2xs hover:scale-110 transition-all duration-300 hover:cursor-pointer hover:z-20 cursor-pointer" 
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bccXvdm3KyRQQhgeWOo+Jqcq/wAAdxCSVBIdh9A1hPrDqzmuPs="
                      quality={80}
                    />
                </div>
                </div>
              </div>
            {/* Stats: horizontal scroll on mobile, row on md+ */}
            <div className="flex flex-row gap-3 md:gap-8 mb-8 z-50 w-full justify-start md:justify-start overflow-x-auto no-scrollbar py-2 px-4 md:px-0">
              <div className="min-w-[80px] bg-white/80 rounded-xl shadow p-3 flex flex-col items-center justify-center flex-shrink-0">
                <div className="text-3xl sm:text-4xl md:text-6xl font-black text-main">99%</div>
                <div className="max-w-[300px] text-sec text-xs sm:text-sm text-center mt-1">delivery rate — because we plan, execute and communicate with clarity.</div>
          </div> 
              <div className="min-w-[80px] bg-white/80 rounded-xl shadow p-3 flex flex-col items-center justify-center flex-shrink-0">
                <div className="text-3xl sm:text-4xl md:text-6xl font-black text-main">200+</div>
                <div className="max-w-[300px] text-sec text-xs sm:text-sm text-center mt-1">Over 200 projects delivered with cohesion, speed, and consistent client clarity.</div>
            </div>
              <div className="min-w-[80px] bg-white/80 rounded-xl shadow p-3 flex flex-col items-center justify-center flex-shrink-0">
                <div className="text-3xl sm:text-4xl md:text-6xl font-black text-main">1.</div>
                <div className="max-w-[300px] text-sec text-xs sm:text-sm text-center mt-1">1 clear goal: to help you launch fast, with clarity and confidence without wasting time, budget or energy.</div>
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
                      priority
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bccXvdm3KyRQQhgeWOo+Jqcq/wAAdxCSVBIdh9A1hPrDqzmuPs="
                      quality={80}
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
                      priority
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bccXvdm3KyRQQhgeWOo+Jqcq/wAAdxCSVBIdh9A1hPrDqzmuPs="
                      quality={80}
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
                      priority
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bccXvdm3KyRQQhgeWOo+Jqcq/wAAdxCSVBIdh9A1hPrDqzmuPs="
                      quality={80}
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
                      priority
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bccXvdm3KyRQQhgeWOo+Jqcq/wAAdxCSVBIdh9A1hPrDqzmuPs="
                      quality={80}
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
                      priority
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bccXvdm3KyRQQhgeWOo+Jqcq/wAAdxCSVBIdh9A1hPrDqzmuPs="
                      quality={80}
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
                      priority
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bccXvdm3KyRQQhgeWOo+Jqcq/wAAdxCSVBIdh9A1hPrDqzmuPs="
                      quality={80}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        </header>
      {/* Our Goal */}
        <section id="about" className="w-full h-fit bg-main text-center flex items-center justify-center flex-col gap-3 p-4 sm:p-10">
        <div className="flex flex-row gap-2 justify-center">
            <div className="w-5 h-5 rounded-[5px] flex items-center justify-center p-3 font-bold bg-btn-active text-btn">2</div>
          <p>Our goal</p>
         </div>
          <h2 className="text-main text-4xl sm:text-5xl md:text-7xl">
             We <span className="text-special"> help you </span>
             go from idea<span className="text-special"> to launch </span> <br />
             <span className="text-special"> with clarity </span>and speed.</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full max-w-5xl">
                  <div className="flex flex-col gap-2 text-center hover:scale-110 duration-200 hover:cursor-pointer cursor-pointer bg-white/80 rounded-xl p-4">
                    <h2 className="text-5xl sm:text-5xl md:text-7xl font-black font-popins">01</h2>
                    <p className="text-xl sm:text-2xl font-semibold font-popins">Discovery</p>
                    <p className="max-w-md text-sec mx-auto text-xs sm:text-base">We discuss your goals and gather key info for the project.</p>
                  </div>
                  <div className="flex flex-col gap-2 text-center hover:scale-110 duration-200 hover:cursor-pointer cursor-pointer bg-white/80 rounded-xl p-4">
                    <h2 className="text-5xl sm:text-5xl md:text-7xl font-black font-popins">0<span className="text-special">2</span></h2>
                    <p className="text-xl sm:text-2xl font-semibold font-popins"><span className="text-special">Lock</span> the <span className="text-special">Deal</span></p>
                    <p className="max-w-md text-sec mx-auto text-xs sm:text-base">We discuss your goals and gather key info for the project.</p>
              </div>
                  <div className="flex flex-col gap-2 text-center hover:scale-110 duration-200 hover:cursor-pointer cursor-pointer bg-white/80 rounded-xl p-4">
                    <h2 className="text-5xl sm:text-5xl md:text-7xl font-black font-popins">03</h2>
                    <p className="text-xl sm:text-2xl font-semibold font-popins">Design</p>
                    <p className="max-w-md text-sec mx-auto text-xs sm:text-base">We discuss your goals and gather key info for the project.</p>
              </div>
                  <div className="flex flex-col gap-2 text-center hover:scale-110 duration-200 hover:cursor-pointer cursor-pointer bg-white/80 rounded-xl p-4">
                    <h2 className="text-5xl sm:text-5xl md:text-7xl font-black font-popins">0<span className="text-special">4</span></h2>
                    <p className="text-xl sm:text-2xl font-semibold font-popins"><span className="text-special">Build</span> & <span className="text-special">Launch</span></p>
                    <p className="max-w-md text-sec mx-auto text-xs sm:text-base">We discuss your goals and gather key info for the project.</p>
              </div>
              </div>
      </section>
      {/* Proces */}
        <section id="services" className="w-full bg-main text-main h-fit flex flex-col md:flex-row items-center gap-3 md:pl-[120px] py-10">
        {/* Text / left side */}
          <div className="flex-1 items-center justify-center flex flex-col md:items-start md:justify-center text-center md:text-left px-2">
           <div className="flex flex-row gap-2 mb-3 justify-center md:justify-start">
                 <div className="w-5 h-5 rounded-[5px] flex items-center justify-center p-3 font-bold bg-btn-active text-btn">3</div>
                <p>Type of project we can build</p>
              </div>
            <h2 className="text-main text-4xl sm:text-5xl md:text-7xl">We <span className="text-special"> design and </span> build fast, <br />
             modern websites that <span className="text-special"> grow </span> <br /> your  <span className="text-special"> business </span></h2>
            <p className="text-sec max-w-xs sm:max-w-md md:max-w-[500px] mx-auto md:mx-0">No drag-and-drop templates. No bloated builders. Just clean code, smart structure, and design that actually serves your goals.</p>
            <a href="/contact" className="btn-modern w-full sm:w-auto flex items-center gap-5 min-h-[56px] mt-4" aria-label="Start your web development project">
                  <span className="btn-text-content">Start your project</span>
                  <span className="inline-block w-2" aria-hidden="true"></span>
                  <div className="btn-circle">
                    <span>→</span>
                  </div>
                </a>
          </div>
          <div className="w-full md:w-1/2 overflow-hidden mt-8 md:mt-0">
           <CardCarousel />
          </div>
        </section>

      {/* Plans */}
      <section id="plans" className="w-full h-fit bg-white py-16 px-4 sm:px-10 md:px-[120px]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center justify-center text-center mb-16">
            <div className="flex flex-row gap-2 justify-center items-center mb-6">
              <div className="w-5 h-5 rounded-[5px] flex items-center justify-center p-3 font-bold bg-btn-active text-btn">
                5
              </div>
              <p className="text-main">Our services</p>
            </div>
            <h2 className="text-main text-4xl sm:text-5xl md:text-7xl mb-6 flex flex-col items-center justify-center text-center">
              <span>
                Choose the <span className="text-special">perfect solution</span>
              </span>
              <span>
                for <span className="text-special">your business</span>
              </span>
            </h2>
            <p className="text-sec max-w-2xl mx-auto text-base sm:text-lg">
              From landing pages to complex web applications, we deliver tailored solutions that help your business grow and succeed online.
            </p>
          </div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {/* Landing Page */}
            <div className="group bg-gray-50 hover:bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-btn-active/20">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-btn-active rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-btn" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className="text-special font-bold text-lg">From €400</span>
              </div>
              <h3 className="text-2xl font-bold text-main mb-3">Landing Page</h3>
              <p className="text-sec mb-6 leading-relaxed">
                High-converting single pages designed to capture leads and drive sales. Perfect for marketing campaigns and product launches.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs bg-btn-active/10 text-main px-3 py-1 rounded-full">Conversion-Driven</span>
                <span className="text-xs bg-btn-active/10 text-main px-3 py-1 rounded-full">Fast Load</span>
                <span className="text-xs bg-btn-active/10 text-main px-3 py-1 rounded-full">SEO Ready</span>
              </div>
              <a 
                href="/pricing" 
                className="inline-flex items-center text-main font-medium group-hover:text-special transition-colors duration-300"
              >
                View Pricing 
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Multi-Page Website */}
            <div className="group bg-gray-50 hover:bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-btn-active/20">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-btn-active rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-btn" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <span className="text-special font-bold text-lg">From €900</span>
              </div>
              <h3 className="text-2xl font-bold text-main mb-3">Multi-Page Website</h3>
              <p className="text-sec mb-6 leading-relaxed">
                Complete business websites with CMS, multiple pages, and all the features growing companies need to establish their online presence.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs bg-btn-active/10 text-main px-3 py-1 rounded-full">CMS Included</span>
                <span className="text-xs bg-btn-active/10 text-main px-3 py-1 rounded-full">Blog Ready</span>
                <span className="text-xs bg-btn-active/10 text-main px-3 py-1 rounded-full">Scalable</span>
              </div>
              <a 
                href="/pricing" 
                className="inline-flex items-center text-main font-medium group-hover:text-special transition-colors duration-300"
              >
                View Pricing 
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Ecommerce - Featured */}
            <div className="group bg-gradient-to-br from-btn-active/5 to-btn-active/10 hover:from-btn-active/10 hover:to-btn-active/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-btn-active/30 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-btn-active text-btn px-4 py-1 rounded-full text-sm font-bold">Most Popular</span>
              </div>
              <div className="flex items-center justify-between mb-6 mt-2">
                <div className="w-12 h-12 bg-btn-active rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-btn" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <span className="text-special font-bold text-lg">From €1500</span>
              </div>
              <h3 className="text-2xl font-bold text-main mb-3">Ecommerce Store</h3>
              <p className="text-sec mb-6 leading-relaxed">
                Full-featured online stores with secure payments, inventory management, and everything you need to sell products online and scale your business.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs bg-btn-active/20 text-main px-3 py-1 rounded-full">Secure Payments</span>
                <span className="text-xs bg-btn-active/20 text-main px-3 py-1 rounded-full">Inventory</span>
                <span className="text-xs bg-btn-active/20 text-main px-3 py-1 rounded-full">Analytics</span>
              </div>
              <a 
                href="/pricing" 
                className="inline-flex items-center text-main font-medium group-hover:text-special transition-colors duration-300"
              >
                View Pricing 
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Additional Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* SaaS / Custom */}
            <div className="group bg-gray-50 hover:bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-btn-active/20">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-btn-active rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-btn" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <span className="text-special font-bold text-lg">Custom Quote</span>
              </div>
              <h3 className="text-2xl font-bold text-main mb-3">SaaS & Custom Apps</h3>
              <p className="text-sec mb-6 leading-relaxed">
                Custom web applications and SaaS platforms built specifically for your business needs and requirements.
              </p>
              <a 
                href="/pricing" 
                className="inline-flex items-center text-main font-medium group-hover:text-special transition-colors duration-300"
              >
                View Pricing 
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Custom Projects */}
            <div className="group bg-gray-50 hover:bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-btn-active/20">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-btn-active rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-btn" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <span className="text-special font-bold text-lg">Enterprise</span>
              </div>
              <h3 className="text-2xl font-bold text-main mb-3">Complex Projects</h3>
              <p className="text-sec mb-6 leading-relaxed">
                Enterprise-level solutions with advanced features, integrations, and dedicated support for complex business requirements.
              </p>
              <a 
                href="/pricing" 
                className="inline-flex items-center text-main font-medium group-hover:text-special transition-colors duration-300"
              >
                View Pricing 
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="flex flex-col items-center justify-center text-center">
            <p className="text-sec mb-6 text-lg">
              Not sure which solution fits your needs?
            </p>
            <a
              href="/contact"
              className="btn-modern inline-flex items-center gap-5 min-h-[56px] justify-center"
              aria-label="Get free consultation about web development services"
            >
              <span className="btn-text-content">Get free consultation</span>
              <span className="inline-block w-2"></span>
              <div className="btn-circle">
                <span>→</span>
              </div>
            </a>
          </div>
        </div>
      </section>

    {/* Testimonials Section */}
    <section id="testimonials" className="w-full h-fit bg-white py-16 px-4 sm:px-10 md:px-[120px]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="flex flex-row gap-2 justify-center items-center mb-6">
            <div className="w-5 h-5 rounded-[5px] flex items-center justify-center p-3 font-bold bg-btn-active text-btn">
              6
            </div>
            <p className="text-main">Client testimonials</p>
          </div>
          <h2 className="text-main text-4xl sm:text-5xl md:text-7xl mb-6 flex flex-col items-center justify-center text-center">
            <span>
              Don&rsquo;t take our <span className="text-special">word for it</span>.
            </span>
            <span>
              <span className="text-special">Trust our customers</span>
            </span>
          </h2>
          <p className="text-sec max-w-2xl mx-auto text-base sm:text-lg">
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
          <p className="text-sec mb-6 text-lg">
            Ready to join our satisfied clients?
          </p>
          <a
            href="/contact"
            className="btn-modern inline-flex items-center gap-5 min-h-[56px] justify-center"
            aria-label="Start your web development project with Masters Web"
          >
            <span className="btn-text-content">Start your project</span>
            <span className="inline-block w-2"></span>
            <div className="btn-circle">
              <span>→</span>
            </div>
          </a>
        </div>
      </div>
    </section>

        <section id="stack" className="w-full h-fit py-8 bg-main text-main relative flex flex-col justify-center items-center px-4 sm:px-10 md:px-[120px]">
          {/* Scattered avatar images, each with a tooltip on hover */}
          {/* On mobile, stack avatars in a row at the top */}
          <div className="flex flex-row flex-wrap gap-4 justify-center md:hidden mb-8">
            <Image src="/vercel.jpeg" width={48} height={48} alt="avatar" className="bg-btn rounded-xl h-10 w-10 object-contain shadow-lg animate-float" />
            <Image src="/typescript.png" width={48} height={48} alt="avatar" className="bg-btn rounded-xl h-10 w-10 object-contain shadow-lg animate-float" />
            <Image src="/tailwind.png" width={48} height={48} alt="avatar" className="bg-btn rounded-xl h-10 w-10 object-contain shadow-lg animate-float" />
            <Image src="/nextjs.png" width={48} height={48} alt="avatar" className="bg-btn rounded-xl h-10 w-10 object-contain shadow-lg animate-float" />
            <Image src="/github.png" width={48} height={48} alt="avatar" className="bg-btn rounded-xl h-10 w-10 object-contain shadow-lg animate-float" />
          </div>
          {/* On desktop, keep absolute scattered avatars */}
          <div className="hidden md:block">
            <div className="group absolute top-[18%] left-[22%] z-30">
              <Image src="/vercel.jpeg" width={48} height={48} alt="avatar" className="bg-btn rounded-xl h-10 w-10 object-contain rotate-[8deg] shadow-lg animate-float" />
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute left-1/2 -translate-x-1/2 -top-10 bg-main text-btn text-xs px-3 py-1 rounded shadow-lg pointer-events-none whitespace-nowrap z-50">
                <span className="font-bold">Vercel </span> - Ensures seamless CI/CD, fast global deployment, <br /> and optimal performance, especially for Next.js projects.
              </div>
            </div>
            <div className="group absolute bottom-[40%] left-[17%] z-20">
              <Image src="/typescript.png" width={48} height={48} alt="avatar" className="bg-btn rounded-xl h-10 w-10 object-contain -rotate-[15deg] animate-float" />
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute left-1/2 -translate-x-1/2 -top-10 bg-main text-btn text-xs px-3 py-1 rounded shadow-lg pointer-events-none whitespace-nowrap z-50 text-center">
                <span className="font-bold">TypeScript </span> - Implemented to ensure code quality, <br /> reduce runtime errors, and support maintainable, large-scale applications.
              </div>
            </div>
            <div className="group absolute bottom-[30%] left-[68%] z-40">
              <Image src="/tailwind.png" width={48} height={48} alt="avatar" className="bg-btn rounded-xl h-10 w-10 object-contain rotate-[15deg] animate-float" />
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute left-1/2 -translate-x-1/2 -top-10 bg-main text-btn text-xs px-3 py-1 rounded shadow-lg pointer-events-none whitespace-nowrap z-50 text-center">
                <span className="font-bold">Tailwind CSS </span> - Used to create clean, responsive designs <br /> with maximum speed and consistency across all components.
              </div>
            </div>
            <div className="group absolute top-[12%] right-[26%] z-30">
              <Image src="/nextjs.png" width={48} height={48} alt="avatar" className="bg-btn rounded-xl h-10 w-10 object-contain -rotate-[9deg] animate-float" />
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute left-1/2 -translate-x-1/2 -top-10 bg-main text-btn text-xs px-3 py-1 rounded shadow-lg pointer-events-none whitespace-nowrap z-50 text-center">
                <span className="font-bold">Next.js</span> - Chosen for its performance, SEO capabilities, <br /> and server-side rendering, enabling fast, reliable user experiences.
              </div>
            </div>
            <div className="group absolute bottom-[18%] left-[54%] z-20">
              <Image src="/github.png" width={48} height={48} alt="avatar" className="bg-btn rounded-xl h-10 w-10 object-contain rotate-[18deg] animate-float" />
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute left-1/2 -translate-x-1/2 -top-10 bg-main text-btn text-xs px-3 py-1 rounded shadow-lg pointer-events-none whitespace-nowrap z-50 text-center">
                <span className="font-bold">GitHub </span> - Used for version control, code reviews, and <br /> deployment automation ensuring transparency and team efficiency.
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-2 mb-3">
            <div className="w-5 h-5 rounded-[5px] flex items-center justify-center p-3 font-bold bg-btn-active text-btn">4</div>
            <p>Our Tech Stack</p>
            </div>
          <h2 className="text-main text-4xl sm:text-5xl md:text-7xl text-center">We use <span className="text-special">modern</span>, <span className="text-special"> scalable</span>, and lightning-fast <span className="text-special"> technologies to build your product </span> the right way.</h2>
          <p className="text-sec max-w-xs sm:max-w-md md:max-w-[700px] text-center mx-auto">Built with the exact same tools used by top startups, agencies, and product teams to ship fast, scale efficiently, and stay ahead of the curve.</p>
          <a href="/contact" className="btn-modern w-full sm:w-auto flex items-center gap-5 min-h-[56px] mt-4" aria-label="Start your web development project">
                  <span className="btn-text-content">Start your project</span>
                  <span className="inline-block w-2" aria-hidden="true"></span>
                  <div className="btn-circle">
                    <span>→</span>
                  </div>
                </a>
        </section>
        
        {/* Banner mov la final */}
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
