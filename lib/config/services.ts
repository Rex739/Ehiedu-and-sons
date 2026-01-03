// src/config/services.ts
export type BusinessSector = {
  id: string
  title: string
  description: string
  href: string
  image: string
  features: string[]
}

export const sectors: BusinessSector[] = [
  {
    id: "real-estate",
    title: "Real Estate & Property Management",
    description:
      "Development, sale, lease, and acquisition of landed properties.",
    href: "/real-estate",
    image: "/images/real-estate.jpg", // Replace with your actual assets
    features: [
      "Valuation",
      "Consultancy",
      "Estate Agency",
      "Property Sale & Lease",
    ],
  },
  {
    id: "construction",
    title: "Civil Engineering & Construction",
    description:
      "Building residential, industrial, and institutional structures.",
    href: "/construction",
    image: "/images/construction.jpg",
    features: ["Roads & Bridges", "Structural Engineering", "Drainage Systems"],
  },
  {
    id: "hospitality",
    title: "Hospitality & Tourism",
    description:
      "Management of hotels, resorts, event centers, and luxury lounges.",
    href: "/hospitality",
    image: "/images/hospitality.jpg",
    features: ["Resort Management", "Event Centers", "Restaurant Operations"],
  },
  {
    id: "medical",
    title: "Medical Support & Logistics",
    description:
      "Specialized hospital design, equipment maintenance, and medical waste management.",
    href: "/medical",
    image: "/images/medical.jpg",
    features: ["Equipment Supply", "Hospital Furnishing", "Medical Logistics"],
  },
  {
    id: "procurement",
    title: "Procurement & General Contracts",
    description:
      "Global supply chain solutions, importing/exporting, and manufacturers' representation.",
    href: "/procurement",
    image: "/images/procurement.jpg",
    features: ["Global Sourcing", "Import & Export", "Merchant Services"],
  },
]
