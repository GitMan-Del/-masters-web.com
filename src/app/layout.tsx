import type { Metadata } from "next";
import { Koulen, Poppins } from "next/font/google";
import "./globals.css";

const koulen = Koulen({
  variable: "--font-koulen",
  subsets: ["khmer"],
  weight: "400",
  display: "swap"
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "200",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL('https://masters-web.com'),
  title: { 
    default: 'Masters Web - Modern Websites Delivered Fast, Designed to Perform', 
    template: '%s | Masters Web' 
  },
  description: 'Masters Web builds fast, modern websites with clean design and scalable code. We create high-performance web experiences for businesses: landing pages, SaaS platforms, e-commerce, and custom web applications.',
  keywords: [
    'web development', 'modern websites', 'web design', 'frontend development',
    'react development', 'nextjs development', 'responsive design', 'SEO optimization',
    'fast websites', 'web applications', 'custom websites', 'business websites',
    'landing pages', 'e-commerce development', 'SaaS development', 'portfolio websites'
  ],
  authors: [{ name: 'Masters Web', url: 'https://masters-web.com' }],
  creator: 'Masters Web',
  publisher: 'Masters Web',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: 'Web Development',
  classification: 'Business',
  alternates: {
    canonical: 'https://masters-web.com',
    languages: {
      'en-US': 'https://masters-web.com/en-US',
    }
  },
  openGraph: {
    title: 'Masters Web - Modern Websites Delivered Fast, Designed to Perform',
    description: 'Masters Web builds fast, modern websites with clean design and scalable code. We create high-performance web experiences for businesses: landing pages, SaaS platforms, e-commerce, and custom web applications.',
    url: 'https://masters-web.com',
    siteName: 'Masters Web',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Masters Web - Modern Websites Delivered Fast, Designed to Perform',
        type: 'image/png',
      },
    ],
    locale: 'en-US, ro-RO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@mastersweb',
    creator: '@mastersweb',
    title: 'Masters Web - Modern Websites Delivered Fast',
    description: 'Masters Web builds fast, modern websites with clean design and scalable code. We create high-performance web experiences for businesses.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Masters Web - Modern Websites Delivered Fast, Designed to Perform',
        type: 'image/png',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
  manifest: '/site.webmanifest',
  other: {
    'google-site-verification': 'google-verification-code',
    'msvalidate.01': 'bing-verification-code',
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Masters Web",
  "description": "Masters Web builds fast, modern websites with clean design and scalable code. We create high-performance web experiences for businesses.",
  "url": "https://masters-web.com",
  "logo": "https://masters-web.com/Logo.svg",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "url": "https://masters-web.com/contact"
  },
  "sameAs": [
    "https://twitter.com/mastersweb",
    "https://linkedin.com/company/masters-web"
  ],
  "offers": {
    "@type": "Offer",
    "category": "Web Development Services",
    "description": "Custom website development, web applications, e-commerce solutions, and digital marketing services."
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "47",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Sarah Johnson"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Masters Web delivered exactly what we needed. Fast, professional, and the website performs beautifully. Highly recommend!",
      "datePublished": "2024-01-15"
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Mike Chen"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Outstanding work on our e-commerce platform. The team was responsive and delivered on time with excellent results.",
      "datePublished": "2024-01-10"
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Emma Rodriguez"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Professional service from start to finish. Our new website is fast, modern, and exactly what we envisioned.",
      "datePublished": "2024-01-05"
    }
  ]
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="color-scheme" content="light dark" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${koulen.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
