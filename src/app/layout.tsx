import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AudioProvider } from '@/context/AudioContext';
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Lung Auscultation Interactive Learning Tool',
  description: 'An educational web application for medical students and healthcare professionals to learn about lung auscultation, breath sounds, and their clinical significance.',
  metadataBase: new URL('https://lung-auscultation-demo.vercel.app'),
  openGraph: {
    title: 'Lung Auscultation Interactive Learning Tool',
    description: 'Learn about lung auscultation through interactive sound samples and visual guides',
    url: 'https://lung-auscultation-demo.vercel.app',
    siteName: 'Lung Auscultation Demo',
    images: [
      {
        url: '/og-image.png', // Make sure to create this image
        width: 1200,
        height: 630,
        alt: 'Lung Auscultation Interactive Learning Tool',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lung Auscultation Interactive Learning Tool',
    description: 'Learn about lung auscultation through interactive sound samples and visual guides',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' }, // Move to root public folder for better compatibility
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', type: 'image/png' },
    ],
    other: [
      {
        rel: 'manifest',
        url: '/site.webmanifest', // Move to root public folder
      },
    ],
  },
  manifest: '/site.webmanifest', // Keep reference consistent
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AudioProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </AudioProvider>
      </body>
    </html>
  );
}
