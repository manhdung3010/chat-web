import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Base Code - Next.js TypeScript",
    template: "%s | Base Code",
  },
  description: "Một base code chuẩn cho dự án Next.js với TypeScript",
  keywords: ["Next.js", "TypeScript", "React", "Base Code"],
  authors: [{ name: "Base Code Team" }],
  creator: "Base Code Team",
  publisher: "Base Code",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  ),
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "/",
    title: "Base Code - Next.js TypeScript",
    description: "Một base code chuẩn cho dự án Next.js với TypeScript",
    siteName: "Base Code",
  },
  twitter: {
    card: "summary_large_image",
    title: "Base Code - Next.js TypeScript",
    description: "Một base code chuẩn cho dự án Next.js với TypeScript",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="light">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
