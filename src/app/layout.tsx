import type { Metadata } from "next";
import { Londrina_Solid, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./components/siverside/Providers";

const koulen = Londrina_Solid({
  variable: "--font-koulen",
  subsets: ["latin"],
  weight: "400",
  display: "swap"
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "400",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL('https://masters-web.com'),
  title: { 
    default: 'Masters Web - Sites Web Modernes Livrés Rapidement, Conçus pour Perform', 
    template: '%s | Masters Web' 
  },
  description: 'Masters Web construit des sites web rapides et modernes avec un design propre et un code évolutif. Nous créons des expériences web haute performance pour les entreprises : pages d\'atterrissage, plateformes SaaS, e-commerce et applications web personnalisées.',
  keywords: [
    'développement web', 'sites web modernes', 'design web', 'développement frontend',
    'développement react', 'développement nextjs', 'design responsive', 'optimisation SEO',
    'sites web rapides', 'applications web', 'sites web personnalisés', 'sites web d\'entreprise',
    'pages d\'atterrissage', 'développement e-commerce', 'développement SaaS', 'sites web portfolio'
  ],
  authors: [{ name: 'Masters Web', url: 'https://masters-web.com' }],
  creator: 'Masters Web',
  publisher: 'Masters Web',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: 'Développement Web',
  classification: 'Business',
  alternates: {
    canonical: 'https://masters-web.com',
    languages: {
      'en-US': 'https://masters-web.com/en-US',
    }
  },
  openGraph: {
    title: 'Masters Web - Sites Web Modernes Livrés Rapidement, Conçus pour Perform',
    description: 'Masters Web construit des sites web rapides et modernes avec un design propre et un code évolutif. Nous créons des expériences web haute performance pour les entreprises : pages d\'atterrissage, plateformes SaaS, e-commerce et applications web personnalisées.',
    url: 'https://masters-web.com',
    siteName: 'Masters Web',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Masters Web - Sites Web Modernes Livrés Rapidement, Conçus pour Perform',
        type: 'image/png',
      },
    ],
    locale: 'fr-FR, en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@mastersweb',
    creator: '@mastersweb',
    title: 'Masters Web - Sites Web Modernes Livrés Rapidement',
    description: 'Masters Web construit des sites web rapides et modernes avec un design propre et un code évolutif. Nous créons des expériences web haute performance pour les entreprises.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Masters Web - Sites Web Modernes Livrés Rapidement, Conçus pour Perform',
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
  "description": "Masters Web construit des sites web rapides et modernes avec un design propre et un code évolutif. Nous créons des expériences web haute performance pour les entreprises.",
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
    "category": "Services de Développement Web",
    "description": "Développement de sites web personnalisés, applications web, solutions e-commerce et services de marketing numérique."
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
      "reviewBody": "Masters Web a livré exactement ce dont nous avions besoin. Rapide, professionnel et le site web fonctionne magnifiquement. Je recommande vivement !",
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
      "reviewBody": "Travail exceptionnel sur notre plateforme e-commerce. L'équipe était réactive et a livré à temps avec d'excellents résultats.",
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
      "reviewBody": "Service professionnel du début à la fin. Notre nouveau site web est rapide, moderne et exactement ce que nous avions imaginé.",
      "datePublished": "2024-01-05"
    }
  ]
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr">
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
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
