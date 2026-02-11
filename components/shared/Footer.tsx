"use client"

import Link from "next/link"
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  ArrowRight,
  Send,
} from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-blue-950 text-slate-300 relative overflow-hidden">
      {/* 1. Background Texture (Blueprint Grid) */}
      <div
        className="absolute inset-0 opacity-[0.009] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Top Border Accent */}
      <div className="w-full h-1 bg-linear-to-r from-blue-900 via-amber-500 to-blue-900" />

      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* COLUMN 1: Brand & Newsletter */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative h-10 w-10 bg-white rounded-sm flex items-center justify-center">
                <Image
                  src="https://res.cloudinary.com/dcxghlgre/image/upload/v1770449762/DeEhiedu%27s/logo_xlpnec.png"
                  width={32}
                  height={32}
                  alt="De Ehiedu's Logo"
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white uppercase leading-none">
                De Ehiedu&apos;s <br />
                <span className="text-[10px] tracking-[0.3em] text-amber-500 font-bold block mt-1">
                  Global Services
                </span>
              </span>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed font-medium max-w-xs">
              A premier diversified conglomerate delivering excellence across
              Real Estate, Civil Engineering, Hospitality, and Global
              Procurement.
            </p>

            {/* Newsletter Mini-Form */}
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-white">
                Stay Updated
              </p>
              <div className="flex gap-2">
                <Input
                  placeholder="Email Address"
                  className="bg-blue-900/50 border-blue-800 text-white placeholder:text-slate-500 focus-visible:ring-amber-500 rounded-none h-10 text-xs"
                />
                <Button
                  size="icon"
                  className="bg-amber-500 hover:bg-amber-600 text-blue-900 rounded-none h-10 w-10 shrink-0"
                >
                  <Send size={16} />
                </Button>
              </div>
            </div>
          </div>

          {/* COLUMN 2: Business Sectors */}
          <div>
            <h3 className="mb-8 text-xs font-black uppercase tracking-[0.2em] text-white flex items-center gap-2">
              <div className="w-8 h-0.5 bg-amber-500" />
              Sectors
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              {[
                { name: "Real Estate Development", href: "/real-estate" },
                { name: "Civil Engineering", href: "/construction" },
                { name: "Hospitality & Resorts", href: "/hospitality" },
                { name: "Medical Logistics", href: "/medical" },
                { name: "General Procurement", href: "/procurement" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-slate-400 transition-colors duration-300 hover:text-amber-500"
                  >
                    {/* Animated Arrow */}
                    <span className="max-w-0 overflow-hidden opacity-0 -translate-x-2 transition-all duration-300 ease-out group-hover:max-w-4 group-hover:opacity-100 group-hover:translate-x-0 mr-0 group-hover:mr-2">
                      <ArrowRight className="h-3 w-3 text-amber-500" />
                    </span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Corporate Links */}
          <div>
            <h3 className="mb-8 text-xs font-black uppercase tracking-[0.2em] text-white flex items-center gap-2">
              <div className="w-8 h-0.5 bg-amber-500" />
              Corporate
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              {[
                { name: "About De Ehiedu's", href: "/about" },
                { name: "Global Partners", href: "/partners" },
                { name: "Careers", href: "/careers" },
                { name: "Investor Relations", href: "/investors" },
                { name: "Sustainability", href: "/sustainability" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-slate-400 transition-colors duration-300 hover:text-amber-500"
                  >
                    {/* Animated Arrow */}
                    <span className="max-w-0 overflow-hidden opacity-0 -translate-x-2 transition-all duration-300 ease-out group-hover:max-w-4 group-hover:opacity-100 group-hover:translate-x-0 mr-0 group-hover:mr-2">
                      <ArrowRight className="h-3 w-3 text-amber-500" />
                    </span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: Contact Info */}
          <div>
            <h3 className="mb-8 text-xs font-black uppercase tracking-[0.2em] text-white flex items-center gap-2">
              <div className="w-8 h-0.5 bg-amber-500" />
              Headquarters
            </h3>
            <ul className="space-y-6 text-sm font-medium">
              <li className="flex items-start gap-4 text-slate-400 group">
                <div className="p-2 bg-blue-900 rounded-sm group-hover:bg-amber-500 transition-colors">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <span className="leading-relaxed">
                  11 Rehoboth closed off <br />
                  Dr Wilson Street, <br />
                  <span className="text-white font-bold">Asaba, Nigeria</span>
                </span>
              </li>

              <li className="flex items-center gap-4 text-slate-400 group">
                <div className="p-2 bg-blue-900 rounded-sm group-hover:bg-amber-500 transition-colors">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <span className="hover:text-white transition-colors cursor-pointer">
                  +234 (0) 816 380 2826
                </span>
              </li>

              <li className="flex items-center gap-4 text-slate-400 group">
                <div className="p-2 bg-blue-900 rounded-sm group-hover:bg-amber-500 transition-colors">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <Link
                  href="mailto:contact@deehiedus.com"
                  className="hover:text-white transition-colors border-b border-transparent hover:border-amber-500 pb-0.5"
                >
                  contact@deehiedus.com
                </Link>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-2 mt-8">
              {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center border border-blue-800 bg-blue-900 text-slate-400 transition-all hover:border-amber-500 hover:bg-amber-500 hover:text-blue-900 rounded-sm"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 border-t border-blue-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">
          <p>&copy; {currentYear} De Ehiedu&apos;s Nigeria LTD.</p>

          <div className="flex gap-8">
            <Link
              href="/terms"
              className="hover:text-amber-500 transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="hover:text-amber-500 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/cookies"
              className="hover:text-amber-500 transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
