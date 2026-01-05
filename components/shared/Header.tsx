"use client"

import React, { FC } from "react"
import Link from "next/link"
import { Menu, Building2, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navLinks = [
  { name: "Real Estate", href: "/real-estate" },
  { name: "Construction", href: "/construction" },
  { name: "Hospitality", href: "/hospitality" },
  { name: "Medical", href: "/medical" },
  { name: "Procurement", href: "/procurement" },
]

const Header: FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* 1. Logo Section - Matching the Footer Style */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="bg-blue-900 p-1.5 shadow-sm transition-transform group-hover:scale-105">
            <Building2 className="h-6 w-6 text-amber-500" />
          </div>
          <span className="text-xl md:text-2xl font-black tracking-tighter text-blue-900 uppercase">
            De Ehiedu&apos;s
          </span>
        </Link>

        {/* 2. Desktop Navigation - Industrial Style Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500 transition-colors hover:text-blue-900"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* 3. Desktop CTA & Quick Contact */}
        <div className="hidden md:flex items-center gap-6">
          <div className="hidden xl:flex items-center gap-2 text-blue-900">
            <Phone size={16} className="text-amber-500" />
            <span className="text-sm font-bold">+234 800 123 4567</span>
          </div>

          <Button
            variant="amber"
            size="lg"
            className="rounded-none font-bold uppercase tracking-widest px-8 h-12 shadow-sm"
          >
            Get a quote
          </Button>
        </div>

        {/* 4. Mobile Navigation (Sheet) */}
        <div className="lg:hidden flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-blue-900">
            <Phone size={20} className="text-amber-500" />
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-blue-900">
                <Menu className="h-7 w-7" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:w-100 border-l-4 border-amber-500 bg-white"
            >
              <SheetHeader className="text-left border-b border-slate-100 pb-6">
                <SheetTitle className="flex items-center space-x-2">
                  <div className="bg-blue-900 p-1">
                    <Building2 className="h-5 w-5 text-amber-500" />
                  </div>
                  <span className="font-black uppercase tracking-tighter text-blue-900">
                    De Ehiedu&apos;s
                  </span>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-6 py-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-xl font-black uppercase tracking-widest text-blue-900 hover:text-amber-500 transition-colors border-b border-slate-50 pb-2"
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="mt-8 space-y-4">
                  <Button
                    variant="amber"
                    className="w-full h-14 rounded-none font-bold uppercase tracking-widest text-lg"
                  >
                    Get a quote
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full h-14 rounded-none border-blue-900 text-blue-900 font-bold uppercase tracking-widest"
                  >
                    Contact Office
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Header
