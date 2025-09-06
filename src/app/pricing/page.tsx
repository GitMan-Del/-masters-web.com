"use client";
import NavBar from "../components/Navbar"
import Footer from "../components/Footer"
import Link from "next/link";
import { useEffect } from "react"

export default function PricingPage() {
  useEffect(() => {
    document.title = 'Plans Tarifaires - Masters Web';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Choisissez le plan parfait pour vos besoins de développement web. Des pages d\'atterrissage simples aux solutions d\'entreprise premium.');
    }
  }, []);
  return (
    <div className="min-h-screen bg-main px-4 sm:px-10 md:px-[120px]">
      <NavBar />
      
      <main className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-special font-semibold text-sm tracking-wide uppercase mb-2">TARIFS</p>
            <h1 className="text-5xl md:text-2xl font-bold text-main mb-8">
              Choisissez le plan parfait pour<br />
              votre projet de développement web.
            </h1>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* START Plan */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <div className="w-4 h-4 bg-btn-active rounded-full mr-3"></div>
                  <h3 className="text-lg font-semibold text-main">START</h3>
                </div>
                <p className="text-sm text-sec mb-6">
                  Site simple, 1 page, livraison en 2 jours
                </p>
                <div className="mb-6">
                  <span className="text-2xl font-bold text-main">€200</span>
                  <p className="text-sm text-sec mt-1">Installation</p>
                  <span className="text-2xl font-bold text-main">€59</span>
                  <p className="text-sm text-sec mt-1">Mensuel</p>
                </div>
              </div>
              
              {/* Features */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm text-sec">
                  <svg className="w-4 h-4 text-special mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Site Web d&apos;Une Page
                </li>
                <li className="flex items-center text-sm text-sec">
                  <svg className="w-4 h-4 text-special mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Livraison Rapide (2 jours)
                </li>
                <li className="flex items-center text-sm text-sec">
                  <svg className="w-4 h-4 text-special mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Responsive Mobile
                </li>
                <li className="flex items-center text-sm text-sec">
                  <svg className="w-4 h-4 text-special mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  SEO de Base
                </li>
              </ul>
              
              <button className="btn-modern w-full flex items-center gap-5 min-h-[56px]" aria-label="Commencer avec le plan START">
                <span className="btn-text-content">Commencer</span>
                <div className="btn-circle">
                  <span>→</span>
                </div>
              </button>
            </div>

            {/* BUSINESS Plan */}
            <div className="bg-btn-active rounded-2xl p-6 shadow-lg relative transform scale-105 hover:shadow-2xl transition-all duration-300">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-btn text-2 text-xs font-medium px-3 py-1 rounded-full">Le Plus Populaire</span>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <div className="w-4 h-4 bg-white rounded-full mr-3"></div>
                  <h3 className="text-lg font-semibold text-white">BUSINESS</h3>
                </div>
                <p className="text-sm text-white/80 mb-6">
                  Min 5 pages + identité visuelle + SEO de base
                </p>
                <div className="mb-6">
                  <span className="text-2xl font-bold text-white">€750</span>
                  <p className="text-sm text-white/70 mt-1">Installation</p>
                  <span className="text-2xl font-bold text-white">€119</span>
                  <p className="text-sm text-white/70 mt-1">Mensuel</p>
                </div>
              </div>
              
              {/* Features */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm text-white/90">
                  <svg className="w-4 h-4 text-white mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Minimum 5 Pages
                </li>
                <li className="flex items-center text-sm text-white/90">
                  <svg className="w-4 h-4 text-white mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Identité Visuelle
                </li>
                <li className="flex items-center text-sm text-white/90">
                  <svg className="w-4 h-4 text-white mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Basic SEO
                </li>
                <li className="flex items-center text-sm text-white/90">
                  <svg className="w-4 h-4 text-white mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  CMS Inclus
                </li>
              </ul>
              
              <button className="btn-modern w-full flex items-center gap-5 min-h-[56px]" aria-label="Commencer avec le plan BUSINESS">
                <span className="btn-text-content">Commencer</span>
                <div className="btn-circle">
                  <span>→</span>
                </div>
              </button>
            </div>

            {/* PREMIUM Plan */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <div className="w-4 h-4 bg-btn-active rounded-full mr-3"></div>
                  <h3 className="text-lg font-semibold text-main">PREMIUM</h3>
                </div>
                <p className="text-sm text-sec mb-6">
                  10 pages + campagnes + maintenance mensuelle
                </p>
                <div className="mb-6">
                  <span className="text-2xl font-bold text-main">€1,790</span>
                  <p className="text-sm text-sec mt-1">Installation</p>
                  <span className="text-2xl font-bold text-main">€249</span>
                  <p className="text-sm text-sec mt-1">Mensuel</p>
                </div>
              </div>
              
              {/* Features */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm text-sec">
                  <svg className="w-4 h-4 text-special mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Site Web 10 Pages
                </li>
                <li className="flex items-center text-sm text-sec">
                  <svg className="w-4 h-4 text-special mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Campagnes Marketing
                </li>
                <li className="flex items-center text-sm text-sec">
                  <svg className="w-4 h-4 text-special mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Maintenance Mensuelle
                </li>
                <li className="flex items-center text-sm text-sec">
                  <svg className="w-4 h-4 text-special mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  SEO Avancé
                </li>
              </ul>
              
              <button className="btn-modern w-full flex items-center gap-5 min-h-[56px]" aria-label="Commencer avec le plan PREMIUM">
                <span className="btn-text-content">Commencer</span>
                <div className="btn-circle">
                  <span>→</span>
                </div>
              </button>
            </div>

            {/* CUSTOM Plan */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <div className="w-4 h-4 bg-btn-active rounded-full mr-3"></div>
                  <h3 className="text-lg font-semibold text-main">CUSTOM</h3>
                </div>
                <p className="text-sm text-sec mb-6">
                  Solutions sur mesure pour des besoins d&apos;entreprise complexes et des exigences d&apos;entreprise.
                </p>
                <div className="mb-6">
                  <span className="text-2xl font-bold text-main">Devis Personnalisé</span>
                  <p className="text-sm text-sec mt-1">Contactez pour les Tarifs</p>
                  <p className="text-xs text-sec mt-1">À partir de €4,000</p>
                </div>
              </div>
              
              {/* Features */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm text-sec">
                  <svg className="w-4 h-4 text-special mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Développement Personnalisé
                </li>
                <li className="flex items-center text-sm text-sec">
                  <svg className="w-4 h-4 text-special mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Fonctionnalités d&apos;Entreprise
                </li>
                <li className="flex items-center text-sm text-sec">
                  <svg className="w-4 h-4 text-special mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Intégrations Avancées
                </li>
                <li className="flex items-center text-sm text-sec">
                  <svg className="w-4 h-4 text-special mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Support Dédié
                </li>
              </ul>
              
              <button className="btn-modern w-full flex items-center gap-5 min-h-[56px]" aria-label="Contactez-nous pour les tarifs du plan CUSTOM">
                <span className="btn-text-content">Contactez-nous</span>
                <div className="btn-circle">
                  <span>→</span>
                </div>
              </button>
            </div>
          </div>
          
          {/* Contact Section - Full Width Card */}
          <div className="mt-8 w-full">
            <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-btn-active rounded-full mr-3"></div>
                  <h3 className="text-lg sm:text-5xl font-semibold text-main">Besoin de Quelque Chose de Spécial ?</h3>
                </div>
                                  <p className="text-sm text-sec">
                    Vous avez un projet unique ou besoin d&apos;une solution personnalisée ? Discutons de vos exigences et créons le plan parfait pour vous.
                  </p>
                
                {/* Features in horizontal layout */}
                <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-sec">
                  <div className="flex items-center">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-special mr-1 sm:mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Développement Personnalisé
                  </div>
                  <div className="flex items-center">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-special mr-1 sm:mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Solutions d&apos;Entreprise
                  </div>
                  <div className="flex items-center">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-special mr-1 sm:mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Support Dédié
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <span className="text-2xl sm:text-5xl font-bold text-main">Parlons-en</span>
                    <p className="text-sm text-sec">Obtenez un devis personnalisé</p>
                  </div>
                  <Link
                    href="tel:336594692"
                    className="btn-modern flex items-center gap-3 sm:gap-5 min-h-[48px] sm:min-h-[56px] w-full sm:w-auto justify-center sm:justify-start"
                    aria-label="Appelez-nous pour les tarifs de projet personnalisé"
                  >
                    <span className="btn-text-content text-sm sm:text-base">Contactez-nous</span>
                    <div className="btn-circle">
                      <span>→</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
} 
