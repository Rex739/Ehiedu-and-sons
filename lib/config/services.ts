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
    // Bright, high-end modern residential architecture
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
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
    // Large scale industrial/civil engineering project
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
    features: ["Roads & Bridges", "Structural Engineering", "Drainage Systems"],
  },
  {
    id: "hospitality",
    title: "Hospitality & Tourism",
    description:
      "Management of hotels, resorts, event centers, and luxury lounges.",
    href: "/hospitality",
    // Luxury resort pool area with amber sunset tones
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
    features: ["Resort Management", "Event Centers", "Restaurant Operations"],
  },
  {
    id: "medical",
    title: "Medical Support & Logistics",
    description:
      "Specialized hospital design, equipment maintenance, and medical waste management.",
    href: "/medical",
    // High-tech, bright medical facility / laboratory
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop",
    features: ["Equipment Supply", "Hospital Furnishing", "Medical Logistics"],
  },
  {
    id: "procurement",
    title: "Procurement & General Contracts",
    description:
      "Global supply chain solutions, importing/exporting, and manufacturers' representation.",
    href: "/procurement",
    // Global logistics port at golden hour
    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070&auto=format&fit=crop",
    features: ["Global Sourcing", "Import & Export", "Merchant Services"],
  },
]
