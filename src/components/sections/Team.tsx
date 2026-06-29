import { motion } from "framer-motion";
import { useRef, useState } from "react";

export type Doctor = {
  name: string;
  role: string;
  specialty: string;
  years: string;
  bio: string;
  tags: string[];
  initials: string;
};

export const DOCTORS: Doctor[] = [
  {
    name: "Dr. Assefa Haile",
    role: "Lead Specialist & Founder",
    specialty: "Restorative & Cosmetic Dentistry",
    years: "15+ years",
    bio: "Founder of Dr. Assefa Dent. Smile design and full-mouth restoration specialist.",
    tags: ["Cosmetic", "Restorative", "Smile Design"],
    initials: "NH",
  },
  {
    name: "Dr. Mekdes Alemu",
    role: "Orthodontist",
    specialty: "Braces & Invisible Aligners",
    years: "10+ years",
    bio: "Certified orthodontist treating all ages with modern bracket and clear-aligner systems.",
    tags: ["Braces", "Aligners"],
    initials: "MA",
  },
  {
    name: "Dr. Yonas Bekele",
    role: "Oral Surgeon",
    specialty: "Implants & Oral Surgery",
    years: "9+ years",
    bio: "Surgical placement of dental implants and complex extractions, including wisdom teeth.",
    tags: ["Implants", "Surgery"],
    initials: "YB",
  },
  {
    name: "Dr. Hiwot Tadesse",
    role: "Pediatric Dentist",
    specialty: "Children's Dentistry",
    years: "8+ years",
    bio: "Gentle, child-focused dentistry from the first tooth through the teenage years.",
    tags: ["Pediatric", "Preventive"],
    initials: "HT",
  },
  {
    name: "Dr. Solomon Girma",
    role: "Periodontist",
    specialty: "Gum Disease & Deep Cleaning",
    years: "7+ years",
    bio: "Specialist in periodontal therapy, deep cleaning and gum-tissue regeneration.",
    tags: ["Periodontics", "Gums"],
    initials: "SG",
  },
  {
    name: "Dr. Tigist Mengistu",
    role: "Cosmetic Dentist",
    specialty: "Teeth Whitening & Smile Design",
    years: "6+ years",
    bio: "Cosmetic dentistry with a focus on whitening, veneers and minimally invasive aesthetics.",
    tags: ["Whitening", "Veneers"],
    initials: "TM",
  },
];

function TiltCard({ doctor, index }: { doctor: Doctor; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: -py * 12, y: px * 12 });
  };
  const reset = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: (index % 3) * 0.15, duration: 0.6 }}
      style={{ perspective: 900 }}
    >
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={reset}
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: tilt.x === 0 && tilt.y === 0 ? "transform 0.6s ease" : "transform 0.1s",
        }}
        className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white p-7 shadow-sm hover:shadow-[0_25px_50px_rgba(14,165,233,0.3)]"
      >
        <span className="font-sub absolute right-4 top-4 rounded-full bg-[#0EA5E9]/10 px-3 py-1 text-xs font-semibold text-[#0EA5E9]">
          {doctor.years}
        </span>
        <div
          className="font-display flex h-20 w-20 items-center justify-center rounded-full text-2xl font-semibold text-white"
          style={{ background: "linear-gradient(135deg, #0EA5E9, #38BDF8)" }}
        >
          {doctor.initials}
        </div>
        <h3 className="font-display mt-5 text-xl font-semibold text-[#1A1A2E]">{doctor.name}</h3>
        <p className="font-sub text-sm font-medium text-[#0EA5E9]">{doctor.role}</p>
        <p className="font-body mt-1 text-sm text-[#1A1A2E]/60">{doctor.specialty}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {doctor.tags.map((t) => (
            <span
              key={t}
              className="font-sub rounded-full bg-[#0EA5E9]/10 px-3 py-1 text-xs font-medium text-[#0EA5E9]"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-[#0A0F1E] p-6 text-sm text-white/90 transition-transform duration-300 group-hover:translate-y-0">
          {doctor.bio}
        </div>
      </div>
    </motion.div>
  );
}

export function Team() {
  return (
    <section className="relative bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="font-sub text-xs uppercase tracking-[0.2em] text-[#0EA5E9]">The team</p>
          <h2 className="font-display mt-3 text-4xl font-semibold text-[#1A1A2E] md:text-5xl">
            Our Specialist Team
          </h2>
          <p className="font-body mx-auto mt-4 max-w-2xl text-[#1A1A2E]/60">
            Six certified specialists working together for your best smile.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {DOCTORS.map((d, i) => (
            <TiltCard key={d.name} doctor={d} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
