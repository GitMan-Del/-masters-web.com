import type { Metadata } from "next";
import { Koulen, Poppins } from "next/font/google";
import "./globals.css";

const koulen = Koulen({
  variable: "--font-koulen",
  subsets: ["khmer"],
  weight: "400"
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "200"
});

export const metadata: Metadata = {
  metadataBase: new URL('https://masters-web.vercel.app'),
  title: { default: 'MastersWeb', template: '%s | MastersWeb' },
  description: 'MastersWeb - Modern Web Development Services',
  keywords: ['web development', 'modern websites', 'MastersWeb'],
  authors: [{ name: 'MastersWeb' }],
  alternates: {
    canonical: 'https://masters-web.vercel.app',
    languages: {
      'en-US': 'https://masters-web.vercel.app/en-US',
    }
  },
  openGraph: {
    title: 'MastersWeb',
    description: 'MastersWeb - Modern Web Development Services',
    url: 'https://masters-web.vercel.app',
    siteName: 'MastersWeb',
    images: ['/og.png'],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@mastersweb',
    creator: '@mastersweb',
    title: 'MastersWeb',
    description: 'MastersWeb - Modern Web Development Services',
    images: ['/og.png'],
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${koulen.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
