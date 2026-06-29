import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type Testimonial = {
  name: string;
  role: string;
  text: string;
  rating: number;
  initial: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sara Tesfaye",
    role: "Invisible Aligner Patient",
    text: "I was nervous about treatment, but the team made me feel completely at ease. My new smile has changed everything — I can't stop grinning!",
    rating: 5,
    initial: "S",
  },
  {
    name: "Daniel Bekele",
    role: "Dental Implant Patient",
    text: "The expertise here is unmatched in Addis. From consultation to recovery, every detail was handled with precision and genuine care.",
    rating: 5,
    initial: "D",
  },
  {
    name: "Helen Girma",
    role: "Cosmetic Dentistry",
    text: "Truly world-class. The clinic feels like a five-star spa, and Dr. Assefa's attention to aesthetics is extraordinary.",
    rating: 5,
    initial: "H",
  },
  {
    name: "Yonas Alemu",
    role: "Family Patient",
    text: "We bring our whole family here. The pediatric care is gentle, the technology is modern, and the staff treats you like family.",
    rating: 5,
    initial: "Y",
  },
  {
    name: "Mekdes Hailu",
    role: "Orthodontics Patient",
    text: "After years of hiding my teeth, I finally have the confidence to smile in photos. Worth every birr — life-changing service.",
    rating: 5,
    initial: "M",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(t);
  }, []);

  const t = TESTIMONIALS[index];

  return (
    <section className="relative py-24 md:py-32 bg-[#0A0F1E] overflow-hidden">
      {/* Background ornament */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#0EA5E9] blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-[#38BDF8] blur-[120px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-sub text-[#0EA5E9] text-xs uppercase tracking-[0.25em] mb-4">
            ✦ Patient Stories ✦
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-white leading-tight">
            Smiles That Speak <em className="text-[#0EA5E9] not-italic">Volumes</em>
          </h2>
        </motion.div>

        <div className="relative min-h-[320px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="text-7xl text-[#0EA5E9]/30 font-display leading-none mb-4">
                "
              </div>
              <p className="font-body text-xl md:text-2xl text-white/90 leading-relaxed mb-8 italic">
                {t.text}
              </p>
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-[#0EA5E9] text-xl">
                    ★
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0EA5E9] to-[#38BDF8] flex items-center justify-center text-white font-display text-2xl">
                  {t.initial}
                </div>
                <div className="text-left">
                  <p className="font-sub font-semibold text-white">{t.name}</p>
                  <p className="font-body text-sm text-white/60">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-12">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`View testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-10 bg-[#0EA5E9]" : "w-2 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
