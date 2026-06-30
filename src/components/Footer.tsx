import { Link } from "@tanstack/react-router";

const LOGO_URL = "/logo.png";

const NAV_LINKS = [
  { label: "Home", to: "/" as const },
  { label: "Services", to: "/services" as const },
  { label: "About", to: "/about" as const },
  { label: "Gallery", to: "/gallery" as const },
  { label: "Blog", to: "/blog" as const },
  { label: "Contact", to: "/contact" as const },
];

const SERVICES = [
  "Invisible Aligners",
  "Dental Implants",
  "Orthodontics",
  "Cosmetic Dentistry",
  "Pediatric Dentistry",
  "Emergency Care",
];

export function Footer() {
  return (
    <footer className="bg-[#0A0F1E] text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-[#0EA5E9] blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-display text-base font-bold tracking-[0.18em] text-white">
                DR. ASSEFA DENT
              </span>
              <img src={LOGO_URL} alt="Dr. Assefa Dent" className="h-11 w-auto" />
            </div>
            <p className="font-body text-sm text-white/70 leading-relaxed mb-6">
              Where Specialty Meets Compassion. Premium specialty dentistry in the heart of Addis Ababa.
            </p>
            <div className="flex gap-3">
              {["facebook", "instagram", "twitter", "linkedin"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#0EA5E9] hover:border-[#0EA5E9] transition-all duration-300 text-sm"
                >
                  {s[0].toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-sub font-semibold uppercase tracking-wider text-sm text-[#0EA5E9] mb-5">
              Navigate
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-body text-sm text-white/70 hover:text-[#0EA5E9] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-sub font-semibold uppercase tracking-wider text-sm text-[#0EA5E9] mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="font-body text-sm text-white/70 hover:text-[#0EA5E9] transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sub font-semibold uppercase tracking-wider text-sm text-[#0EA5E9] mb-5">
              Visit Us
            </h3>
            <ul className="space-y-4 font-body text-sm text-white/70">
              <li className="flex gap-3">
                <span className="text-[#0EA5E9] shrink-0">📍</span>
                <span>


                  Addis Ababa, Ethiopia
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0EA5E9] shrink-0">📞</span>
                <a href="tel:+251911673365" className="hover:text-[#0EA5E9] transition-colors">
                  +251 911 673 365 / 0910 727 441
                </a>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0EA5E9] shrink-0">🕒</span>
                <span>
                  Mon – Sat: 9:00 AM – 6:00 PM<br />
                  Sunday: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/50">
            © {new Date().getFullYear()} Dr. Assefa Dent. All rights reserved.
          </p>
          <div className="flex gap-6 font-body text-xs text-white/50">
            <a href="#" className="hover:text-[#0EA5E9] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#0EA5E9] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
