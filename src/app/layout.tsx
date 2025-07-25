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
  metadataBase: new URL('https://example.com'),
  title: { default: 'My Site', template: '%s | My Site' },
  description: 'Welcome to My Site',
  alternates: {
    canonical: 'https://example.com',
    languages: {
      'en-US': 'https://example.com/en-US',
      'de-DE': 'https://example.com/de-DE'
    }
  },
  openGraph: {
    title: 'My Site',
    description: 'Welcome to My Site',
    url: 'https://example.com',
    siteName: 'My Site',
    images: [{ url: 'https://example.com/og.png' }]
  },
}

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
