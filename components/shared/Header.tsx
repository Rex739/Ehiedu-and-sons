"use client"

import React, { FC, useEffect, useState } from "react"
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
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Real Estate", href: "/real-estate" },
  { name: "Construction", href: "/construction" },
  { name: "Hospitality", href: "/hospitality" },
  { name: "Medical", href: "/medical" },
  { name: "Procurement", href: "/procurement" },
]

const Header: FC = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [isAtTop, setIsAtTop] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  // State to control mobile menu visibility
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 100) {
        setIsAtTop(true)
        setIsVisible(true)
      } else {
        setIsAtTop(false)
        setIsVisible(currentScrollY < lastScrollY)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <>
      {/* Spacer pushes content down only on mobile */}
      <div className="h-20 w-full lg:hidden" />

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out",
          isVisible ? "translate-y-0" : "-translate-y-full",

          // --- TARGETED STYLE LOGIC ---
          isAtTop
            ? cn(
                "max-lg:bg-white/70 max-lg:backdrop-blur-md max-lg:border-b max-lg:border-white/20 max-lg:shadow-sm",
                "lg:bg-transparent lg:border-transparent py-0",
              )
            : cn(
                "bg-white/95 lg:bg-white lg:backdrop-blur-none border-b border-slate-100 shadow-md py-0",
              ),
        )}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-6 xl:px-8">
          {/* 1. LOGO SECTION */}
          <Link href="/" className="flex items-center space-x-2 shrink-0 group">
            <div className="relative">
              <Image
                src="https://res.cloudinary.com/dcxghlgre/image/upload/v1770449762/DeEhiedu%27s/logo_xlpnec.png"
                width={50}
                height={45}
                alt="logo"
                className={cn(
                  "w-10 h-9 lg:w-11 xl:w-14 xl:h-12 transition-all duration-300",
                  isAtTop
                    ? "lg:brightness-0 lg:invert"
                    : "brightness-100 invert-0",
                )}
              />
            </div>
            <span
              className={cn(
                "text-base md:text-lg lg:text-base xl:text-2xl font-black tracking-tighter uppercase transition-colors duration-300",
                isAtTop ? "text-blue-900 lg:text-white" : "text-blue-900",
              )}
            >
              De Ehiedu&apos;s
            </span>
          </Link>

          {/* 2. DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center lg:gap-x-4 xl:gap-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "lg:text-[10px] xl:text-xs font-bold uppercase lg:tracking-widest xl:tracking-[0.15em] transition-colors whitespace-nowrap",
                  isAtTop
                    ? "text-white/80 hover:text-amber-400"
                    : "text-slate-500 hover:text-blue-900",
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* 3. ACTIONS SECTION */}
          <div className="flex items-center lg:gap-4 xl:gap-6">
            <div
              className={cn(
                "hidden lg:flex items-center gap-2 transition-colors duration-300",
                isAtTop ? "text-white" : "text-blue-900",
              )}
            >
              <a href="tel:+2348163802826" className="flex items-center gap-2">
                <Phone size={14} className="text-amber-500 xl:w-4 xl:h-4" />
                <span className="lg:text-[10px] xl:text-sm font-bold whitespace-nowrap">
                  <span className="lg:hidden xl:inline">+234 </span>(0) 816 380
                  2826
                </span>
              </a>
            </div>

            <Button
              variant="amber"
              className={cn(
                "hidden md:flex rounded-none font-bold uppercase tracking-widest h-10 xl:h-12 px-4 xl:px-8 text-[10px] xl:text-xs shadow-sm transition-all",
                isAtTop
                  ? "lg:bg-white lg:text-blue-900 lg:hover:bg-amber-500 lg:hover:text-white"
                  : "",
              )}
            >
              Get a quote
            </Button>

            {/* 4. MOBILE TRIGGER & SHEET */}
            <div className="lg:hidden flex items-center gap-2">
              <a
                href="tel:+2348163802826"
                className="p-2 transition-colors text-blue-900"
              >
                <Phone size={20} className="text-amber-500" />
              </a>

              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-blue-900 hover:bg-transparent"
                  >
                    <Menu className="h-7 w-7" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-full sm:max-w-100 border-l-4 border-amber-500 bg-white p-0 z-60"
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
                          onClick={() => setIsOpen(false)} // CLOSES MENU ON CLICK
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
                        onClick={() => setIsOpen(false)} // OPTIONAL: ALSO CLOSES ON BUTTON CLICK
                      >
                        Get a quote
                      </Button>

                      <a
                        href="tel:+2348163802826"
                        className="flex items-center justify-center gap-3 text-blue-900 font-bold py-2"
                      >
                        <Phone size={18} className="text-amber-500" />
                        <span>+234 (0) 816 380 2826</span>
                      </a>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
