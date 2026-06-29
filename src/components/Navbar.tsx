import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const LOGO = "/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#0A0F1E]/85 backdrop-blur-xl border-b border-white/15 shadow-2xl shadow-[#0A0F1E]/50 py-1" : "bg-transparent py-3"}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="font-display text-base font-bold tracking-[0.18em] text-white md:text-lg group-hover:text-[#38BDF8] transition-colors">
            DR. ASSEFA DENT
          </span>
          <img src={LOGO} alt="Dr. Assefa Dent" style={{ height: 40, marginLeft: 8, paddingBottom: 6 }} className="w-auto transform group-hover:scale-105 transition-transform duration-300" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="font-sub nc-link-underline text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/appointment"
            className="font-sub nc-cta-glow inline-flex items-center justify-center rounded-full bg-[#0EA5E9] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0EA5E9]/30 transition-all hover:bg-[#38BDF8]"
          >
            Book Appointment
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="relative flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-6 bg-white"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="block h-0.5 w-6 bg-white"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-6 bg-white"
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 280, damping: 30 }}
            className="fixed right-0 top-0 z-40 flex h-screen w-72 flex-col gap-2 bg-[#0A0F1E] pt-24 shadow-2xl lg:hidden"
          >
            {links.map((l, i) => (
              <motion.div
                key={l.to}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 * i }}
              >
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="font-sub block px-8 py-3 text-base font-medium text-white/90 hover:bg-white/5"
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
            <Link
              to="/appointment"
              onClick={() => setOpen(false)}
              className="font-sub mx-8 mt-4 inline-flex justify-center rounded-full bg-[#0EA5E9] px-6 py-3 text-sm font-semibold text-white"
            >
              Book Appointment
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
