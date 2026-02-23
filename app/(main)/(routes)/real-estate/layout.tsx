import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Real Estate & Property Solutions | De Ehiedu's Group",
  description:
    "Comprehensive real estate ecosystem: from land acquisition and architectural development to professional valuation and asset management.",
  keywords: [
    "Real Estate Development",
    "Property Valuation Lagos",
    "Asset Management",
    "Landed Properties",
    "Architectural Development",
    "Real Estate Consultancy",
  ],
  openGraph: {
    title: "Integrated Property Solutions | De Ehiedu's",
    description:
      "Expert property valuation and real estate development services tailored for global investors.",
    url: "https://deehiedus.com/real-estate",
    siteName: "De Ehiedu's Group",
    images: [
      {
        url: "https://res.cloudinary.com/dcxghlgre/image/upload/v1770459710/DeEhiedu%27s/real-estate-og.png",
        width: 1200,
        height: 630,
        alt: "Modern Architectural Development by De Ehiedu's",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "De Ehiedu's Real Estate | Building the Future",
    description:
      "Professional property valuation and infrastructure development.",
    images: [
      "https://res.cloudinary.com/dcxghlgre/image/upload/v1770459710/DeEhiedu%27s/real-estate-og.png",
    ],
  },
}

export default function RealEstateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // This layout wraps your "use client" page.tsx
    // You can add section-specific Navbars or Footers here
    <div className="selection:bg-amber-500 selection:text-white">
      {children}
    </div>
  )
}
