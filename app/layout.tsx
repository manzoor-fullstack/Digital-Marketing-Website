import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PageTransition from "@/components/PageTransition";
import Providers from "./providers"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ProPhecy | Digital Agency & IT Solutions",
  description:
    "ProPhecy is a forward-thinking digital agency delivering software development, AI solutions, cloud services, and modern UI/UX design to help businesses grow and scale.",

  keywords: [
    "ProPhecy",
    "Digital Agency",
    "Software Development",
    "AI Solutions",
    "Cloud Services",
    "UI UX Design",
    "IT Consulting",
  ],

  authors: [{ name: "ProPhecy Team" }],
  creator: "ProPhecy",

  openGraph: {
    title: "ProPhecy | Digital Agency",
    description:
      "We predict possibilities and build powerful digital solutions — from AI to cloud and modern web experiences.",
    url: "https://yourdomain.com", // update later
    siteName: "ProPhecy",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ProPhecy Digital Agency",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ProPhecy | Digital Agency",
    description:
      "Modern digital agency building scalable products, AI systems, and cloud solutions.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en" suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>
          <PageTransition>
            {children}
          </PageTransition>
        </Providers>
      </body>
    </html>
  );
}
