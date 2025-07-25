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
  metadataBase: new URL('https://mastersweb.com'),
  title: { default: 'MastersWeb', template: '%s | MastersWeb' },
  description: 'MastersWeb',
  alternates: {
    canonical: 'https://mastersweb.com',
    languages: {
      'en-US': 'https://mastersweb.com/en-US',
    }
  },
  openGraph: {
    title: 'MastersWeb',
    description: 'MastersWeb',
    url: 'https://mastersweb.com',
    siteName: 'MastersWeb',
    images: [
      {
        url: 'https://mastersweb.com/og.png',
        width: 1200,
        height: 630,
        alt: 'MastersWeb - Modern Web Development',
        type: 'image/png',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@mastersweb',
    creator: '@mastersweb',
    title: 'MastersWeb',
    description: 'MastersWeb',
    images: ['https://mastersweb.com/og.png'],
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
