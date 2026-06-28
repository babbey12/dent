import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";

const HERO_BG = "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=2000&q=80";
const HEADLINE = ["Where", "Specialty", "Meets", "Compassion"];
const SUBTITLE = "Advanced specialty dentistry beside Kolfe Keraniyo Court, Addis Ababa";

function Particles() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const dots = useMemo(
    () =>
      Array.from({ length: 20 }).map((_, i) => ({
        size: 3 + Math.random() * 4,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 8 + Math.random() * 8,
        key: i,
      })),
    [],
  );
  if (!mounted) return null;
  return (
    <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden">
      {dots.map((d) => (
        <span
          key={d.key}
          className="absolute bottom-0 rounded-full bg-[#0EA5E9]"
          style={{
            width: d.size,
            height: d.size,
            left: `${d.left}%`,
            opacity: 0.15,
            animation: `nc-float-up ${d.duration}s linear ${d.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export function Hero() {
  const [typed, setTyped] = useState("");
  const [typingDone, setTypingDone] = useState(false);
  const [scrolledFar, setScrolledFar] = useState(false);
  const headlineDuration = HEADLINE.length * 0.1 + 0.6;

  useEffect(() => {
    const start = window.setTimeout(() => {
      let i = 0;
      const id = window.setInterval(() => {
        i += 1;
        setTyped(SUBTITLE.slice(0, i));
        if (i >= SUBTITLE.length) {
          window.clearInterval(id);
          setTypingDone(true);
        }
      }, 35);
    }, (0.3 + headlineDuration) * 1000);
    return () => window.clearTimeout(start);
  }, [headlineDuration]);

  useEffect(() => {
    const onScroll = () => setScrolledFar(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <img
        src={HERO_BG}
        alt=""
        aria-hidden
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
      />
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(135deg, rgba(10,15,30,0.75) 0%, rgba(10,15,30,0.50) 100%)",
        }}
      />
      <Particles />

      <div className="relative z-[2] mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-32 pb-40">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="font-sub mb-6 text-xs uppercase text-[#0EA5E9]"
          style={{ letterSpacing: "0.15em" }}
        >
          ✦ Specialty Dental Clinic · Addis Ababa ✦
        </motion.p>

        <h1
          className="font-display max-w-4xl font-semibold leading-[1.15] text-white"
          style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
        >
          {HEADLINE.map((word, i) => (
            <motion.span
              key={i}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.6, ease: "easeOut" }}
              className="mr-3 inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <p
          className={`mt-6 max-w-xl text-base text-white/85 md:text-lg ${typingDone ? "" : "nc-typing-cursor"}`}
        >
          {typed}
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + headlineDuration + (SUBTITLE.length * 0.035), duration: 0.5 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            to="/appointment"
            className="font-sub nc-cta-glow inline-flex items-center justify-center rounded-full bg-[#0EA5E9] px-8 py-4 text-sm font-semibold text-white transition-transform"
          >
            Book Appointment
          </Link>
          <Link
            to="/services"
            className="font-sub group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-white px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/15"
          >
            Explore Services
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 + headlineDuration + (SUBTITLE.length * 0.035), duration: 0.5 }}
          className="mt-6 text-white/90"
        >
          📞 <a href="tel:0911673365" className="hover:text-[#38BDF8]">0911673365/0910727441</a>
        </motion.p>
      </div>

      {/* scroll indicator */}
      <motion.div
        animate={{ opacity: scrolledFar ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-32 left-1/2 z-[3] -translate-x-1/2 text-center text-white/80"
      >
        <div
          className="text-2xl"
          style={{ animation: "nc-scroll-bounce 1.6s ease-in-out infinite" }}
        >
          ↓
        </div>
        <p className="font-sub mt-2 text-xs uppercase tracking-widest text-white/60">
          Scroll to explore
        </p>
      </motion.div>

      {/* bottom fade to white */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-[120px]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
        }}
      />
    </section>
  );
}
