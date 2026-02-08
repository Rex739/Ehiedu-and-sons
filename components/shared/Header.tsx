"use client"

import React, { FC } from "react"
import Link from "next/link"
import { Menu, Phone, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"

const navLinks = [
  { name: "Real Estate", href: "/real-estate" },
  { name: "Construction", href: "/construction" },
  { name: "Hospitality", href: "/hospitality" },
  { name: "Medical", href: "/medical" },
  { name: "Procurement", href: "/procurement" },
]

const Header: FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-6 xl:px-8">
        {/* 1. LOGO SECTION - Scaled for tighter screens */}
        <Link href="/" className="flex items-center space-x-2 shrink-0 group">
          <div className="relative">
            <Image
              src="https://res.cloudinary.com/dcxghlgre/image/upload/v1770449762/DeEhiedu%27s/logo_xlpnec.png"
              width={50}
              height={45}
              alt="logo"
              className="w-[40px] h-[36px] lg:w-[45px] lg:h-[40px] xl:w-[55px] xl:h-[50px]"
            />
          </div>
          <span className="text-base md:text-lg lg:text-base xl:text-2xl font-black tracking-tighter text-blue-900 uppercase">
            De Ehiedu&apos;s
          </span>
        </Link>

        {/* 2. DESKTOP NAVIGATION - Visible from 1024px (lg) upwards */}
        <nav className="hidden lg:flex items-center lg:gap-x-4 xl:gap-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="lg:text-[10px] xl:text-xs font-bold uppercase lg:tracking-[0.1em] xl:tracking-[0.15em] text-slate-500 transition-colors hover:text-blue-900 whitespace-nowrap"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* 3. ACTIONS SECTION */}
        <div className="flex items-center lg:gap-4 xl:gap-6">
          {/* Quick Contact - Shortened text for 1024px */}
          <div className="hidden lg:flex items-center gap-2 text-blue-900">
            <Phone size={14} className="text-amber-500 xl:w-4 xl:h-4" />
            <span className="lg:text-[10px] xl:text-sm font-bold whitespace-nowrap">
              <span className="lg:hidden xl:inline">+234 </span>800 123 4567
            </span>
          </div>

          {/* CTA Button - Adaptive padding for 1024px */}
          <Button
            variant="amber"
            className="hidden md:flex rounded-none font-bold uppercase tracking-widest h-10 xl:h-12 px-4 xl:px-8 text-[10px] xl:text-xs shadow-sm"
          >
            Get a quote
          </Button>

          {/* 4. MOBILE/TABLET TRIGGER - Visible below 1024px */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="tel:+2348001234567"
              className="md:hidden p-2 text-blue-900"
            >
              <Phone size={20} className="text-amber-500" />
            </a>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-blue-900 hover:bg-slate-50"
                >
                  <Menu className="h-7 w-7" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full sm:max-w-[400px] border-l-4 border-amber-500 bg-white p-0"
              >
                <div className="flex flex-col h-full">
                  <SheetHeader className="text-left border-b border-slate-100 p-6">
                    <SheetTitle className="flex items-center space-x-2">
                      <Image
                        src="https://res.cloudinary.com/dcxghlgre/image/upload/v1770449762/DeEhiedu%27s/logo_xlpnec.png"
                        width={40}
                        height={40}
                        alt="logo"
                      />
                      <span className="font-black uppercase tracking-tighter text-blue-900">
                        De Ehiedu&apos;s
                      </span>
                    </SheetTitle>
                  </SheetHeader>

                  <div className="flex flex-col gap-1 py-6 px-2">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="group flex items-center justify-between px-4 py-4 text-lg font-black uppercase tracking-widest text-blue-900 hover:bg-slate-50 transition-colors border-b border-slate-50"
                      >
                        {link.name}
                        <ChevronRight className="w-5 h-5 text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    ))}
                  </div>

                  <div className="mt-auto p-6 space-y-4 bg-slate-50">
                    <Button
                      variant="amber"
                      className="w-full h-14 rounded-none font-bold uppercase tracking-widest text-base shadow-lg"
                    >
                      Get a quote
                    </Button>
                    <div className="flex items-center justify-center gap-3 text-blue-900 font-bold py-2">
                      <Phone size={18} className="text-amber-500" />
                      <span>+234 800 123 4567</span>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
