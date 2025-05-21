import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Horex Nakliyat - Güvenilir Evden Eve Nakliyat ve Lojistik Hizmetleri",
  description: "Türkiye'nin her noktasında profesyonel evden eve nakliyat, şehirler arası nakliyat, ofis taşıma ve eşya depolama hizmetleri sunuyoruz.",
  keywords: "evden eve nakliyat, şehirler arası nakliyat, ofis taşıma, parça eşya taşıma, ev taşıma, fabrika taşımacılığı, fuar taşımacılığı, eşya depolama, İstanbul nakliyat, güvenilir nakliyat",
  openGraph: {
    title: "Horex Nakliyat - Güvenilir Evden Eve Nakliyat ve Lojistik Hizmetleri",
    description: "Türkiye'nin her noktasında profesyonel evden eve nakliyat, şehirler arası nakliyat, ofis taşıma ve eşya depolama hizmetleri sunuyoruz.",
    url: "https://horex.com.tr",
    siteName: "Horex Nakliyat",
    images: [
      {
        url: "https://horex.com.tr/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Horex Nakliyat - Profesyonel Taşımacılık Hizmetleri",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={`${inter.className} overflow-x-hidden`}>
        <Header />
        <main className="min-h-screen pt-[120px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
