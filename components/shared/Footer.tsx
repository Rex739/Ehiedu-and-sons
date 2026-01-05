import Link from "next/link"
import {
  Building2,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  ArrowRight,
} from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-slate-200 bg-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* 1. Company Bio */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-blue-900 p-1.5 shadow-sm">
                <Building2 className="h-6 w-6 text-amber-500" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-blue-900 uppercase">
                De Ehiedu&apos;s
              </span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              A premier diversified conglomerate delivering excellence across
              Real Estate, Civil Engineering, Luxury Hospitality, Medical
              Logistics, and Global Procurement.
            </p>
            <div className="flex space-x-3">
              {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center border border-slate-200 text-slate-400 transition-all hover:border-amber-500 hover:bg-amber-500 hover:text-white"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* 2. Business Sectors */}
          <div>
            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-blue-900">
              Our Business Sectors
            </h3>
            <ul className="space-y-3 text-sm font-bold uppercase tracking-tight">
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
                    className="group flex items-center text-slate-500 transition-colors hover:text-amber-500"
                  >
                    <ArrowRight className="mr-2 h-3 w-3 opacity-0 transition-all group-hover:opacity-100" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Quick Links */}
          <div>
            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-blue-900">
              Corporate
            </h3>
            <ul className="space-y-3 text-sm font-medium">
              {[
                { name: "About De Ehiedu's", href: "/about" },
                { name: "Global Partners", href: "/partners" },
                { name: "Careers", href: "/careers" },
                { name: "Latest News", href: "/news" },
                { name: "Privacy Policy", href: "/privacy" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-500 transition-colors hover:text-blue-900"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Contact Info */}
          <div>
            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-blue-900">
              Global Headquarters
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-start gap-3 text-slate-500">
                <MapPin className="h-5 w-5 shrink-0 text-amber-500" />
                <span>
                  11 Rehoboth closed off Dr Wilson Street
                  <br />
                  Asaba, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-3 text-slate-500">
                <Phone className="h-4 w-4 text-amber-500" />

                <span>+234 (0) 816 380 2826</span>
              </li>
              <li className="flex items-center gap-3 text-slate-500">
                <Mail className="h-4 w-4 text-amber-500" />
                <span>contact@deehiedus.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-400">
          <p>
            © {currentYear} De Ehiedu&apos;s Nigerian Limited. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/terms"
              className="hover:text-amber-500 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="hover:text-amber-500 transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
