import Image from "next/image"
import NavBar from "./components/Navbar"
import Footer from "./components/Footer";
import AuthErrorToast from "./components/AuthErrorToast";
import Link from "next/link";

export default function Home() {

  const cards1 = [
    { id: 1, src: "/1.png", alt: "Local Services website preview showing business optimization", height: 200 },
    { id: 2, src: "/2.png", alt: "SaaS application interface with modern dashboard design", height: 200 },
    { id: 3, src: "/3.png", alt: "Gaming website with immersive design and interactive elements", height: 200 },
    { id: 4, src: "/4.png", alt: "Online Services platform with clean workflow automation", height: 200 },
    { id: 5, src: "/5.png", alt: "E-commerce store with fast loading and secure payments", height: 200 },
  ];
  
  const cards2 = [
    { id: 6, src: "/6.png", alt: "Portfolio website showcasing creative work and skills", height: 200 },
    { id: 7, src: "/2.png", alt: "SaaS platform with scalable architecture", height: 200 },
    { id: 8, src: "/3.png", alt: "Interactive gaming website with modern UI", height: 200 },
    { id: 9, src: "/2.png", alt: "Business dashboard with data visualization", height: 200 },
    { id: 10, src: "/1.png", alt: "Local business website with conversion optimization", height: 200 },
  ];

  return (
    <>
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
              <p className="text-sm">Construit avec soin et rapidité</p>
            </div>
              <h1 className="text-main text-4xl sm:text-5xl md:text-6xl font-bold ">
                <span className="text-special">Chaque projet est </span>
              différent. Mais l&apos;objectif est 
                <span className="text-special"> toujours </span>
              le même : le faire fonctionner
                <span className="text-special"> magnifiquement</span>.
              </h1>
              <p className="text-sec max-w-xs sm:max-w-md md:max-w-2xl text-base sm:text-md mx-auto md:mx-0">Nous transformons des idées claires en produits numériques rapides et fiables avec structure, précision et des outils modernes qui évoluent.</p>
              <div className="flex flex-col sm:flex-row gap-5 items-center mt-6">
                <Link href="/contact" className="btn-modern w-full sm:w-auto flex items-center gap-5 min-h-[56px]" aria-label="Commencer votre projet de développement web">
                  <span className="btn-text-content">Commencer votre projet</span>
                  <span className="inline-block w-2" aria-hidden="true"></span>
                  <div className="btn-circle">
                    <span>→</span>
                  </div>
                </Link>
                <div className="flex flex-row items-center justify-center -space-x-3 sm:-space-x-5 mt-4 sm:mt-0" role="group" aria-label="Membres de l'équipe">
                  <div className="w-14 h-14 sm:w-12 sm:h-12 rounded-full bg-btn shadow-2xs">
                    <Image src="/daniel.png" alt="Daniel - Développeur Web chez Masters Web" width={148} height={148} className="object-cover w-full h-full rounded-full shadow-2xs hover:scale-110 transition-all duration-300 hover:cursor-pointer hover:z-20 cursor-pointer" />
                  </div>
                  <div className="w-14 h-14 sm:w-12 sm:h-12 rounded-full bg-btn shadow-2xs">
                    <Image src="/Delia.png" alt="Delia - Designer chez Masters Web" width={148} height={148} className="object-cover w-full h-full rounded-full shadow-2xs hover:scale-110 transition-all duration-300 hover:cursor-pointer hover:z-20 cursor-pointer" />
                </div>
                  <div className="w-14 h-14 sm:w-12 sm:h-12 rounded-full bg-btn shadow-2xs">
                    <Image src="/roxi.png" alt="Roxi - Développeuse Frontend chez Masters Web" width={148} height={148} className="object-cover w-full h-full rounded-full shadow-2xs hover:scale-110 transition-all duration-300 hover:cursor-pointer hover:z-20 cursor-pointer" />
                </div>
                  <div className="w-14 h-14 sm:w-12 sm:h-12 rounded-full bg-btn shadow-2xs">
                    <Image src="/david.png" alt="David - Développeur Backend chez Masters Web" width={148} height={148} className="object-cover w-full h-full rounded-full shadow-2xs hover:scale-110 transition-all duration-300 hover:cursor-pointer hover:z-20 cursor-pointer" />
                </div>
                </div>
              </div>
            </div>
            {/* Stats: horizontal scroll on mobile, row on md+ */}
            <div className="flex flex-row gap-3 md:gap-8 mb-8 z-50 w-full justify-start md:justify-start overflow-x-auto no-scrollbar py-2 px-4 md:px-0">
              <div className="max-w-[230px] bg-white/80 rounded-xl shadow p-3 flex flex-col items-center justify-center flex-shrink-0">
                <div className="text-3xl sm:text-4xl md:text-4xl font-black text-main">99%</div>
                <div className="max-w-[300px] text-sec text-xs text-center mt-1">taux de livraison, car nous planifions, exécutons et communiquons avec clarté.</div>
          </div> 
              <div className="max-w-[230px] bg-white/80 rounded-xl shadow p-3 flex flex-col items-center justify-center flex-shrink-0">
                <div className="text-3xl sm:text-4xl md:text-4xl font-black text-main">200+</div>
                <div className="max-w-[300px] text-sec text-xs  text-center mt-1">Plus de 200 projets livrés avec cohésion, rapidité et clarté client constante.</div>
            </div>
              <div className="max-w-[230px] bg-white/80 rounded-xl shadow p-3 flex flex-col items-center justify-center flex-shrink-0">
                <div className="text-3xl sm:text-4xl md:text-4xl font-black text-main">1.</div>
                <div className="max-w-[300px] text-sec text-xs text-center mt-1">1 objectif clair : vous aider à lancer rapidement, avec clarté et confiance sans perdre de temps, budget ou énergie.</div>
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
             <p className="text-sm">Notre Processus</p>
         </div>
        <h2 className="text-main text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
           Nous <span className="text-special"> vous aidons </span>
           à passer de l&apos;idée<span className="text-special"> au lancement </span> <br />
           <span className="text-special"> avec clarté </span>et rapidité.</h2>
      </section>

      {/* Process Steps */}
      <section className="w-full h-fit bg-main text-main p-4 sm:p-10 text-center items-center justify-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full max-w-5xl mx-auto items-center">
          <div className="flex flex-col gap-2 text-center hover:scale-110 duration-200 hover:cursor-pointer cursor-pointer bg-white/80 rounded-xl p-4">
            <h2 className="text-5xl sm:text-5xl md:text-5xl font-black font-poppins">01</h2>
            <p className="text-xl sm:text-2xl font-semibold font-poppins">Découverte</p>
            <p className="max-w-md text-sec mx-auto text-xs sm:text-sm">
              Nous clarifions vos objectifs et rassemblons tous les besoins du projet.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-center hover:scale-110 duration-200 hover:cursor-pointer cursor-pointer bg-white/80 rounded-xl p-4">
            <h2 className="text-5xl sm:text-5xl md:text-5xl font-black font-poppins">0<span className="text-special">2</span></h2>
            <p className="text-xl sm:text-2xl font-semibold font-poppins">
              <span className="text-special">Conclure</span> l&apos;<span className="text-special">Accord</span>
            </p>
            <p className="max-w-md text-sec mx-auto text-xs sm:text-sm">
              Nous nous accordons sur le périmètre, le calendrier et le budget pour démarrer le projet.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-center hover:scale-110 duration-200 hover:cursor-pointer cursor-pointer bg-white/80 rounded-xl p-4">
            <h2 className="text-5xl sm:text-5xl md:text-5xl font-black font-poppins">03</h2>
            <p className="text-xl sm:text-2xl font-semibold font-poppins">Design</p>
            <p className="max-w-md text-sec mx-auto text-xs sm:text-sm">
              Nous créons des designs modernes et conviviaux pour votre marque.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-center hover:scale-110 duration-200 hover:cursor-pointer cursor-pointer bg-white/80 rounded-xl p-4">
            <h2 className="text-5xl sm:text-5xl md:text-5xl font-black font-poppins">0<span className="text-special">4</span></h2>
            <p className="text-xl sm:text-2xl font-semibold font-poppins">
              <span className="text-special">Développement</span> & <span className="text-special">Lancement</span>
            </p>
            <p className="max-w-md text-sec mx-auto text-xs sm:text-sm">
              Nous développons, testons et lançons votre site web rapidement et en douceur.
            </p>
          </div>
        </div>
      </section>

      

      {/* Type of project we can build */}
      <section id="projects" className="w-full bg-main text-main py-16 px-4 sm:px-8 lg:px-[120px]">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Side - Text */}
          <div className="text-center lg:text-left md:min-w-md w-full">
            <div className="flex flex-row gap-2 mb-6 justify-center lg:justify-start">
              <div className="w-5 h-5 rounded-[5px] flex items-center justify-center p-3 font-bold bg-btn-active text-btn text-sm">3</div>
              <p className="text-sec text-sm w-fit">Types de projets que nous pouvons construire</p>
            </div>
            
            <h2 className="text-main text-4xl sm:text-5xl md:text-5xl font-bold mb-6">
              NOUS <span className="text-special">CONCEVONS</span> ET CONSTRUISONS RAPIDEMENT,
              <span className="text-special"> DES SITES WEB MODERNES</span>, <br/> ET NOUS
              L&apos;AVONS DÉJÀ FAIT.
            </h2>
            
            <p className="text-sec text-base sm:text-md max-w-md mx-auto lg:mx-0 mb-8">
              Nous ne promettons pas seulement performance et code propre,
              nous l&apos;avons livré sur de vrais projets qui ont fait la différence.
            </p>
            
            <Link href="/contact" className="btn-modern w-fit mx-auto lg:mx-0 flex items-center gap-5 min-h-[56px]" aria-label="Contactez-nous pour votre projet de développement web">
              <span className="btn-text-content">Contactez-nous</span>
              <span className="inline-block w-2" aria-hidden="true"></span>
              <div className="btn-circle">
                <span>→</span>
              </div>
            </Link>
          </div>

          {/* Right Side - Project Cards */}
          <div className="relative">
            <div className="flex md:flex-row flex-col items-center md:-space-x-40 max-w-full mx-auto">
              
              <div className="relative bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl p-4 text-white w-[90%] md:w-fit transform rotate-2 hover:rotate-0 transition-all duration-300 shadow-lga">
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
                  AutoBots offre aux entreprises locales des superpouvoirs <br/> qui automatisent...
                </p>
                <div className="text-white text-xs font-medium hover:underline cursor-pointer">
                <Link target="_blank" href="https://autobots-three.vercel.app/">
                  Voir plus <span>→</span>
                  </Link>
                </div>
              </div>

              <div className="relative bg-gradient-to-br from-pink-500 to-indigo-600 rounded-2xl p-4 text-white transform w-[90%] md:w-fit -rotate-2 hover:rotate-0 transition-all duration-300 shadow-lga">
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
                  AnimeAstral est votre passerelle vers le streaming d&apos;anime gratuit. <br /> Profitez d&apos;une...
                </p>
                <div className="text-white text-xs font-medium hover:underline cursor-pointer">
                <Link target="_blank" href="https://animeastral.com/">
                  Voir plus <span>→</span>
                  </Link>
                </div>
              </div>

              {/* InvityHub Card - Mobile */}
              <div className="relative bg-gradient-to-br from-gray-800 to-black rounded-2xl p-4 text-white w-[90%] md:w-fit transform rotate-2 hover:rotate-0 transition-all duration-300 shadow-lg ">
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
                  Créez, envoyez et suivez de belles invitations sans effort...
                </p>
                <div className="text-white text-xs font-medium hover:underline cursor-pointer">
                  <Link target="_blank" href="https://inviltyhub-invitlyhubs-projects.vercel.app/">
                  Voir plus <span>→</span>
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
              <p className="text-main text-sm">Nos plans</p>
            </div>
            <h2 className="text-main text-4xl sm:text-5xl md:text-6xl mb-6 flex flex-col items-center justify-center text-center">
              <span>
                Choisissez la <span className="text-special">solution parfaite</span>
              </span>
              <span>
                pour <span className="text-special">votre entreprise</span>
              </span>
            </h2>
            <p className="text-sec max-w-2xl mx-auto text-base sm:text-sm">
              Des pages d&apos;atterrissage aux applications web complexes, nous livrons des solutions sur mesure qui aident votre entreprise à grandir et réussir en ligne.
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
                <span className="text-special font-bold text-xl">€200 installation</span>
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-3">SIMPLE</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                Site web d&apos;une page, livré en 2 jours. Parfait pour une présence en ligne rapide.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs bg-purple-100 text-special px-3 py-1 rounded-full font-medium">1 Page</span>
                <span className="text-xs bg-purple-100 text-special px-3 py-1 rounded-full font-medium">Livraison Rapide</span>
                <span className="text-xs bg-purple-100 text-special px-3 py-1 rounded-full font-medium">SEO de Base</span>
              </div>
              <Link
                href="/pricing"
                className="inline-flex items-center text-special font-semibold group-hover:text-purple-900 transition-colors duration-300"
              >
                Voir les Tarifs
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
                <span className="text-special font-bold text-xl">€750 installation</span>
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-3">BUSINESS</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                Minimum 5 pages, identité visuelle et SEO de base. Idéal pour les entreprises en croissance.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs bg-purple-100 text-special px-3 py-1 rounded-full font-medium">5+ Pages</span>
                <span className="text-xs bg-purple-100 text-special px-3 py-1 rounded-full font-medium">Identité Visuelle</span>
                <span className="text-xs bg-purple-100 text-special px-3 py-1 rounded-full font-medium">SEO de Base</span>
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
                <span className="text-special font-bold text-xl">€1,790 installation</span>
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-3">PREMIUM</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                10 pages, campagnes marketing et maintenance mensuelle. Pour les marques ambitieuses.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs bg-purple-200 text-special px-3 py-1 rounded-full font-medium">10 Pages</span>
                <span className="text-xs bg-purple-200 text-special px-3 py-1 rounded-full font-medium">Campagnes</span>
                <span className="text-xs bg-purple-200 text-special px-3 py-1 rounded-full font-medium">Maintenance Mensuelle</span>
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
              Pas sûr quelle solution correspond à vos besoins ?
            </p>
            <Link
              href="/contact"
              className="btn-modern inline-flex items-center gap-5 min-h-[56px] justify-center"
              aria-label="Obtenez une consultation gratuite sur les services de développement web">
              <span className="btn-text-content">Obtenez une consultation gratuite</span>
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
              <p className="text-main text-sm">Témoignages clients</p>
            </div>
            <h2 className="text-main text-4xl sm:text-5xl md:text-6xl mb-6 flex flex-col items-center justify-center text-center">
              <span>
                Ne nous croyez pas <span className="text-special">sur parole</span>.
              </span>
              <span>
                <span className="text-special">Faites confiance à nos clients</span>
              </span>
            </h2>
            <p className="text-sec max-w-2xl mx-auto text-base sm:text-sm">
              Plus de 200 projets réussis livrés. Voici ce que nos clients disent de travailler avec Masters Web pour leurs besoins de développement web.
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
                &ldquo;Masters Web a livré notre site e-commerce en seulement 2 semaines. Le design est propre, rapide et génère déjà des ventes. Je recommande vivement !&rdquo;
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
                &ldquo;La page d&apos;atterrissage qu&apos;ils ont construite convertit 3 fois mieux que notre précédente. Communication claire et livraison rapide.&rdquo;
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
              Prêt à rejoindre nos clients satisfaits ?
            </p>
            <Link
              href="/contact"
              className="btn-modern inline-flex items-center gap-5 min-h-[56px] justify-center"
              aria-label="Commencer votre projet de développement web avec Masters Web"
            >
              <span className="btn-text-content">Commencer votre projet</span>
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
              <p className="text-main tetx-sm">Fait confiance par</p>
            </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-special">FAIT CONFIANCE PAR</span> DES <span className="text-special">STARTUPS</span> EN CROISSANCE RAPIDE ET<br />
            DES <span className="text-special">ENTREPRENEURS</span> AUDACIEUX
          </h2>
          <p className="text-sec text-sm sm:text-sm max-w-4xl mx-auto mb-12">
            Plus de 200 entreprises ont fait confiance à Masters Web pour construire des sites web rapides, évolutifs et axés sur la conversion. 
            Nous nous associons avec des visionnaires à travers l&apos;Europe et au-delà pour transformer les idées en réalité numérique 
            avec clarté, structure et rapidité.
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
                  <h3 className="text-xl font-bold mb-3">Mises à Jour de Sécurité</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Correctifs de sécurité d&apos;infrastructure complets et mises à niveau système.
                  </p>
                  
                </div>

                {/* Performance Optimization Card */}
                <div className="bg-transparent border border-black/50 rounded-2xl p-6 text-black relative overflow-hidden">
                  <h3 className="text-xl font-bold mb-3">Optimisation des Performances</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    Nous gardons votre site web rapide et réactif avec des vérifications de vitesse et des améliorations.
                  </p>
                 
                </div>

                {/* Content & Edits Card */}
                <div className="bg-transparent border border-black/50 rounded-2xl p-6 text-black relative overflow-hidden">
                  <h3 className="text-xl font-bold mb-3">Contenu et Modifications</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    Besoin de changer du texte, des images ou des mises en page ? Nous nous en occupons rapidement et de manière fiable.
                  </p>
                </div>

                {/* Priority Support Card */}
                <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl p-6 text-white relative overflow-hidden">
                  <h3 className="text-xl font-bold mb-3">Support Prioritaire</h3>
                  <p className="text-purple-100 text-sm mb-4">
                    Obtenez une aide experte en 24h - Tout ce dont vous avez besoin : mises à jour, corrections ou conseils.
                  </p>
                  
                </div>

              </div>
            </div>

            {/* Right Side - Text */}
            <div className="flex-1 text-center lg:text-right">
              <div className="flex flex-row gap-2 mb-6 justify-center lg:justify-end">
                <div className="w-5 h-5 rounded-[5px] flex items-center justify-center p-3 font-bold bg-btn-active text-btn text-sm">7</div>
                <p className="text-sec text-sm">Maintenance de Site Web</p>
              </div>
              
              <h2 className="text-main text-4xl sm:text-5xl md:text-6xl font-bold  mb-6">
                <span className="text-special">GARDEZ</span> VOTRE <span className="text-special">SITE WEB</span> RAPIDE, SÉCURISÉ,<br />
                ET <span className="text-special">À JOUR</span>.
              </h2>
              
              <p className="text-sec text-base sm:text-sm max-w-md mx-auto lg:mx-0 lg:ml-auto mb-8">
                Des mises à jour techniques aux changements de contenu, nos plans de maintenance garantissent que votre site web reste en ligne, optimisé et prêt à convertir chaque jour.
              </p>
              
              <div className="flex justify-center lg:justify-end">
                <Link href="/contact" className="btn-modern w-fit flex items-center gap-5 min-h-[56px]" aria-label="Contactez-nous pour les services de maintenance">
                  <span className="btn-text-content">Contactez-nous</span>
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
              <span className="font-bold">Vercel </span> - Assure un CI/CD transparent, un déploiement global rapide, <br /> et des performances optimales, surtout pour les projets Next.js.
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
              <span className="font-bold">TypeScript </span> - Implémenté pour assurer la qualité du code, <br /> réduire les erreurs d&apos;exécution et supporter des applications maintenables à grande échelle.
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
              <span className="font-bold">Tailwind CSS </span> - Utilisé pour créer des designs propres et responsifs <br /> avec une vitesse maximale et une cohérence à travers tous les composants.
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
              <span className="font-bold">Next.js</span> - Choisi pour ses performances, capacités SEO, <br /> et rendu côté serveur, permettant des expériences utilisateur rapides et fiables.
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
              <span className="font-bold">GitHub </span> - Utilisé pour le contrôle de version, les revues de code et <br /> l&apos;automatisation du déploiement assurant transparence et efficacité d&apos;équipe.
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-2 mb-3">
          <div className="w-5 h-5 rounded-[5px] flex items-center justify-center p-3 font-bold bg-btn-active text-btn">8</div>
          <p>Notre Stack Technologique</p>
          </div>
        <h2 className="text-main text-4xl sm:text-5xl md:text-6xl text-center">Nous utilisons des <span className="text-special">technologies modernes</span>, <span className="text-special">évolutives</span> et ultra-rapides <span className="text-special">pour construire votre produit</span> de la bonne façon.</h2>
        <p className="text-sec max-w-xs sm:max-w-md md:max-w-[700px] text-center mx-auto">Construit avec les mêmes outils utilisés par les meilleures startups, agences et équipes produit pour livrer rapidement, évoluer efficacement et rester en avance sur la courbe.</p>
        <Link href="/contact" className="btn-modern w-fit  flex items-center gap-5 min-h-[56px] mt-4" aria-label="Contactez-nous pour votre projet de développement web">
              <span className="btn-text-content">Contactez-nous</span>
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
                Construisez avec nous maintenant{" "}
                <span style={{ display: "inline-block", verticalAlign: "middle", margin: "0 8px" }}>
                  <svg width="6" height="6" viewBox="0 0 16 16" fill="#fff" xmlns="http://www.w3.org/2000/svg" style={{ display: "inline" }}>
                    <circle cx="8" cy="8" r="6" />
                  </svg>
                </span>
                Commencez votre projet aujourd&apos;hui{" "}
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
                Votre vision, notre code.{" "}
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
