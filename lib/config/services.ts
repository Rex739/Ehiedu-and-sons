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
      "https://res.cloudinary.com/dcxghlgre/image/upload/v1770529166/DeEhiedu%27s/b1d9c963-5b25-40aa-84bd-17b1c54b8165.png",
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
      "https://res.cloudinary.com/dcxghlgre/image/upload/v1770459710/DeEhiedu%27s/424d25c8-3c6a-4c0a-8ec9-26876ca189e1.png",
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
      "https://res.cloudinary.com/dcxghlgre/image/upload/v1770529187/DeEhiedu%27s/986c753e-7f2e-450d-9e35-0e4fb78dd2e2.png",
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
      "https://res.cloudinary.com/dcxghlgre/image/upload/v1770529234/DeEhiedu%27s/4d0980ea-1252-43c4-9301-25bbebec325b.png",
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
      "https://res.cloudinary.com/dcxghlgre/image/upload/v1770529219/DeEhiedu%27s/aa5c00e4-23e1-4b62-8958-16615378ba74.png",
    features: ["Global Sourcing", "Import & Export", "Merchant Services"],
  },
]
