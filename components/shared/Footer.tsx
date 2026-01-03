import Link from "next/link"
import {
  Building2,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react"



const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Bio */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Building2 className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">CORP NAME</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A diversified conglomerate specializing in real estate,
              construction, hospitality, medical logistics, and general
              procurement services.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Business Sectors */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Our Sectors
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/real-estate"
                  className="text-muted-foreground hover:text-primary"
                >
                  Real Estate Development
                </Link>
              </li>
              <li>
                <Link
                  href="/construction"
                  className="text-muted-foreground hover:text-primary"
                >
                  Civil Engineering
                </Link>
              </li>
              <li>
                <Link
                  href="/hospitality"
                  className="text-muted-foreground hover:text-primary"
                >
                  Hospitality & Resorts
                </Link>
              </li>
              <li>
                <Link
                  href="/medical"
                  className="text-muted-foreground hover:text-primary"
                >
                  Medical Support Services
                </Link>
              </li>
              <li>
                <Link
                  href="/procurement"
                  className="text-muted-foreground hover:text-primary"
                >
                  General Contracts
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-muted-foreground hover:text-primary"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-muted-foreground hover:text-primary"
                >
                  Latest News
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-primary"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 shrink-0 text-primary" />
                <span>
                  123 Business Avenue, Suite 500
                  <br />
                  Lagos, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+234 (0) 800 123 4567</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>contact@corpname.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Corp Name International. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
