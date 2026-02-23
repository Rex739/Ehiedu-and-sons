
import Hero from "@/components/sectors/home/Hero"
import AboutSection from "@/components/sectors/home/About"
import FinalCTA from "@/components/sectors/home/FinalCTA"
import SectorsGrid from "@/components/sectors/home/SectorsGrid"
import Stats from "@/components/sectors/home/Stats"
import Testimonials from "@/components/sectors/home/Testimonials"
import TrustBar from "@/components/sectors/home/TrustBar"
import WhyChooseUs from "@/components/sectors/home/WhyChooseUs"

export default function HomePage() {


  return (
    <main className="flex flex-col min-h-screen bg-white text-slate-900">
      {/* 1. Hero: Priority LCP Section */}
      <Hero />
      {/* 2. Key Performance Indicators */}
      <Stats />
      {/* 3. Social Proof: Animated Trust Bar */}
      <TrustBar />
      {/* 4. Core Business Offerings */}
      <SectorsGrid />
      {/* 5. Value Proposition & Certifications */}
      <WhyChooseUs />
      {/* 6. Social Proof: Client Testimonials */}
      <Testimonials />
      {/* 7. Detailed Identity & Leadership */}
      <AboutSection />
      {/* 8. Conversion: Lead Generation */}
      <FinalCTA />
    </main>
  )
}
