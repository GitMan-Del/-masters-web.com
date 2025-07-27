'use client'

import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const cards = [
  {
    title: 'Local Services',
    desc: 'Optimized websites for small businesses that convert local visitors into real clients.',
    image: '/1.png',
  },
  {
    title: 'SaaS applications',
    desc: 'Scalable, fast, and secure platforms built to launch and grow your product.',
    image: '/2.png',
  },
  {
    title: 'Games Website',
    desc: 'Dynamic pages with immersive design, trailers, and integrated player features.',
    image: '/3.png',
  },
  {
    title: 'Online Services',
    desc: 'Clean and modern sites that automate workflow and capture leads.',
    image: '/4.png',
  },
  {
    title: 'E-commerce',
    desc: 'Custom online stores with blazing speed and secure payment integration.',
    image: '/5.png',
  },
  {
    title: 'Portfolio',
    desc: 'Elegant portfolios to showcase your work, skills, and client testimonials.',
    image: '/6.png',
  },
]

export default function CardCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    const container = scrollRef.current
    if (!container) return
    const scrollAmount = container.offsetWidth * 0.8
    container.scrollBy({
      left: dir === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <div className="relative bg py-10 sm:py-20 px-2 sm:px-0 overflow-hidden">
      {/* Carusel */}
      <div
        ref={scrollRef}
        className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth no-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onWheel={e => e.preventDefault()}
        tabIndex={-1}
      >
        {cards.concat(cards).map((card, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[180px] sm:w-[250px] rounded-xl bg-white overflow-hidden shadow-md pointer-events-auto"
          >
            <div className="h-[180px] overflow-hidden">
              <Image 
                width={250} 
                height={180} 
                src={card.image} 
                alt={`${card.title} - ${card.desc}`}
                className="object-cover w-full h-full"
                priority={i === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading={i === 0 ? "eager" : "lazy"}
              />
            </div>
            <div className="bg-[#BB00FF] text-white p-2 sm:p-4 h-[110px] sm:h-[160px] flex flex-col justify-end">
              <h3 className="text-lg sm:text-2xl">{card.title}</h3>
              <p className="text-xs sm:text-xs">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Controls */}
      <div className="hidden md:absolute left-2 sm:left-6 bottom-2 sm:bottom-6 md:flex gap-2 sm:gap-4 z-90">
        <button
          onClick={() => scroll('left')}
          className="rounded-full border border-[{var(--white)}] text-2 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg hover:bg-white hover:text-black transition"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => scroll('right')}
          className="rounded-full border border-[{var(--white)}] text-2 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg hover:bg-white hover:text-black transition"
        >
          <ChevronRight />
        </button>
      </div>
      <style jsx global>{`
      .no-scrollbar {
        scrollbar-width: none !important;
        -ms-overflow-style: none !important;
      }
      .no-scrollbar::-webkit-scrollbar {
        display: none !important;
      }
    `}</style>
    </div>
  )
}
