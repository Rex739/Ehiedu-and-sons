import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Header from "@/components/shared/Header"
import Footer from "@/components/shared/Footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "De Ehiedu's | Leading Multi-Sector Conglomerate in Nigeria",
    template: "%s | De Ehiedu's",
  },
  description:
    "De Ehiedu's is a premier Nigerian conglomerate specializing in Real Estate, Civil Construction, Hospitality, Medical Logistics, and Global Procurement. Building excellence through integrity and innovation.",
  keywords: [
    "De Ehiedu's Nigeria LTD",
    "Real Estate Developers Nigeria",
    "Construction Company Lagos",
    "Medical Logistics Services",
    "Procurement and Supply Chain",
    "Hospitality Management Nigeria",
  ],
  authors: [{ name: "De Ehiedu's Nigeria LTD" }],
  creator: "De Ehiedu's",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://de-ehiedus.com", // Replace with your actual domain
    siteName: "De Ehiedu's Nigeria LTD",
    title: "De Ehiedu's | Building Excellence Across Industries",
    description:
      "Architecting innovation in Real Estate, Construction, Medical Logistics, and more.",
    images: [
      {
        url: "/og-image.png", // Ensure you add an OG image to your public folder
        width: 1200,
        height: 630,
        alt: "De Ehiedu's Conglomerate",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      {/* Added the font variables to the body so they work site-wide */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <Header />
        {/* Removed min-h-screen from here because it's usually handled by the sections inside */}
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
