import Image from "next/image"
import NavBar from "./components/Navbar"
import CardCarousel from "./components/CardCarousel";
import Footer from "./components/Footer";

export default function Home() {

  const cards1 = [
    { id: 1, src: "/1.png", alt: "Image 1", height: 220 },
    { id: 2, src: "/2.png", alt: "Image 2", height: 340 },
    { id: 3, src: "/3.png", alt: "Image 3", height: 260 },
    { id: 4, src: "/4.png", alt: "Image 4", height: 180 },
    { id: 5, src: "/5.png", alt: "Image 5", height: 320 },
  ];
  
  const cards2 = [
    { id: 6, src: "/6.png", alt: "Image 6", height: 300 },
    { id: 7, src: "/2.png", alt: "Image 7", height: 180 },
    { id: 8, src: "/3.png", alt: "Image 8", height: 400 },
    { id: 9, src: "/2.png", alt: "Image 9", height: 220 },
    { id: 10, src: "/1.png", alt: "Image 10", height: 250 },
  ];

  return (
    <div className="w-full min-h-fit mx-auto flex flex-col justify-center p-0 m-0 text-main">
      {/* Hero */}
      <div id="home" className="w-full h-screen flex flex-col md:flex-row items-center justify-between relative bg-transparent">
        <div className="flex-2 bg-transparent w-full h-full lg:px-[120px] px-1 py-5 flex flex-col items-center md:items-left gap-5 justify-between relative z-50">
          <NavBar/>
          <div className="flex flex-col gap-3 items-center md:items-start text-center md:text-left">
            <div className="flex flex-row gap-2 justify-center md:justify-start">
              <div className="w-5 h-5 rounded-[5px] flex items-center justify-center p-3 font-bold bg-btn-active"><p className="text-btn">1</p></div>
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
              <button className="px-6 py-3 rounded-full btn-text bg-btn w-full sm:w-auto">Start your project →</button>
              <div className="flex flex-row items-center justify-center -space-x-5 mt-4 sm:mt-0">
                <div className="w-12 h-12 rounded-full bg-btn shadow-2xs">
                  <Image src="/daniel.png" alt="avatar" width={148} height={148} className="object-cover w-full h-full rounded-full shadow-2xs hover:scale-110 transition-all duration-300 hover:cursor-pointer hover:z-20 cursor-pointer" />
                </div>
                <div className="w-12 h-12 rounded-full bg-btn shadow-2xs">
                  <Image src="/Delia.png" alt="avatar" width={148} height={148} className="object-cover w-full h-full rounded-full shadow-2xs hover:scale-110 transition-all duration-300 hover:cursor-pointer hover:z-20 cursor-pointer" />
                </div>
                <div className="w-12 h-12 rounded-full bg-btn shadow-2xs">
                  <Image src="/roxi.png" alt="avatar" width={148} height={148} className="object-cover w-full h-full rounded-full shadow-2xs hover:scale-110 transition-all duration-300 hover:cursor-pointer hover:z-20 cursor-pointer" />
                </div>
                <div className="w-12 h-12 rounded-full bg-btn shadow-2xs">
                  <Image src="/david.png" alt="avatar" width={148} height={148} className="object-cover w-full h-full rounded-full shadow-2xs hover:scale-110 transition-all duration-300 hover:cursor-pointer hover:z-20 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          {/* Stats: horizontal scroll on mobile, row on md+ */}
          <div className="flex flex-row md:flex-row gap-2 md:gap-8 mb-8 z-50 w-full justify-center md:justify-start overflow-x-auto no-scrollbar py-2 ml-0 px-0">
            <div className="min-w-[140px] bg-white/80 rounded-xl shadow p-4 flex flex-col items-center justify-center ml-10 md:ml-0">
              <div className="text-4xl sm:text-5xl md:text-7xl font-black text-main">99%</div>
              <div className="text-sec text-xs sm:text-base text-center mt-1">delivery rate — because we plan, execute and communicate with clarity.</div>
            </div>
            <div className="min-w-[140px] bg-white/80 rounded-xl shadow p-4 flex flex-col items-center justify-center">
              <div className="text-4xl sm:text-5xl md:text-7xl font-black text-main">200+</div>
              <div className="text-sec text-xs sm:text-base text-center mt-1">Over 200 projects delivered with cohesion, speed, and consistent client clarity.</div>
            </div>
            <div className="min-w-[140px] bg-white/80 rounded-xl shadow p-4 flex flex-col items-center justify-center">
              <div className="text-4xl sm:text-5xl md:text-7xl font-black text-main">1.</div>
              <div className="text-sec text-xs sm:text-base text-center mt-1">1 clear goal: to help you launch fast, with clarity and confidence without wasting time, budget or energy.</div>
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
                {[...cards1, ...cards1].map((card, index) => (
                  <div
                    key={`c1-${index}`}
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
            {/* Column 2 */}
            <div className="max-w-[400px] w-full overflow-hidden h-full bg-transparent p-2 mx-auto md:mx-0">
              <div className="flex flex-col gap-4 scroll-up cursor-pointer">
                {[...cards2, ...cards2].map((card, index) => (
                  <div
                    key={`c2-${index}`}
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
      </div>
      {/* Our Goal */}
      <section id="about" className="w-full h-fit bg-main text-center flex flex-col gap-3 p-4 sm:p-10">
        <div className="flex flex-row gap-2 justify-center">
          <div className="w-5 h-5 rounded-[5px] flex items-center justify-center p-3 font-bold bg-btn-active text-btn">2</div>
          <p>Our goal</p>
         </div>
        <h2 className="text-main text-4xl sm:text-5xl md:text-7xl">
           We <span className="text-special"> help you </span>
           go from idea<span className="text-special"> to launch </span> <br />
           <span className="text-special"> with clarity </span>and speed.</h2>
      </section>
      {/* Proces */}
      <section id="process" className="w-full h-fit bg-main text-main p-4 sm:p-10 flex justify-center py-10">
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
          <button className="px-6 py-3 rounded-full btn-text bg-btn mt-5 w-full sm:w-auto">Start your project</button>
        </div>
        <div className="w-full md:w-1/2 overflow-hidden mt-8 md:mt-0">
         <CardCarousel />
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
        <button className="px-6 py-3 rounded-full btn-text bg-btn mt-5 w-full sm:w-auto">Start your project</button>
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
  );
}
