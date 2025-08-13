import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/common/Toaster";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Chat App",
    template: "%s | Chat App",
  },
  description: "Ứng dụng chat thời gian thực - giao diện mẫu với Next.js & Tailwind",
  keywords: ["Chat", "Next.js", "TypeScript", "Tailwind", "UI"],
  authors: [{ name: "Chat App Team" }],
  creator: "Chat App Team",
  publisher: "Chat App",
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
    title: "Chat App",
    description: "Ứng dụng chat thời gian thực - giao diện mẫu với Next.js & Tailwind",
    siteName: "Chat App",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chat App",
    description: "Ứng dụng chat thời gian thực - giao diện mẫu với Next.js & Tailwind",
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
  // Dark mode toggle sẽ được thêm sau
  return (
    <html lang="vi" suppressHydrationWarning className="">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased bg-background text-foreground transition-colors duration-300`}>
        <Providers>
          <div>
            {children}
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
