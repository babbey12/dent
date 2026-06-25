import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SERVICES } from "@/data/services";

export function Services() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="font-sub text-xs uppercase tracking-[0.2em] text-[#0EA5E9]">
            What we treat
          </p>
          <h2 className="font-display mt-3 text-4xl font-semibold text-[#1A1A2E] md:text-5xl">
            Our Speciality Services
          </h2>
          <p className="font-body mx-auto mt-4 max-w-2xl text-[#1A1A2E]/60">
            Specialist-led dental care across 13 disciplines, all under one roof in Addis Ababa.
          </p>
        </motion.div>

        <div className="-mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3">
          {SERVICES.filter((s) => s.slug !== "preventive-care").map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ y: 70, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 6) * 0.08, duration: 0.55, ease: "easeOut" }}
              className="group relative w-[80%] flex-shrink-0 snap-start overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_30px_60px_-20px_rgba(14,165,233,0.45)] md:w-auto"
            >
              <span className="absolute inset-x-0 top-0 z-10 block h-[3px] origin-left scale-x-0 bg-[#0EA5E9] transition-transform duration-500 group-hover:scale-x-100" />
              <div className="relative h-48 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#0EA5E9]/0 transition-colors duration-500 group-hover:bg-[#0EA5E9]/30" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-[#1A1A2E]">{s.name}</h3>
                <p className="font-body mt-2 text-sm leading-relaxed text-[#1A1A2E]/60">
                  {s.short}
                </p>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="font-sub mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#0EA5E9]"
                >
                  <span className="-ml-5 opacity-0 transition-all duration-300 group-hover:ml-0 group-hover:opacity-100">
                    →
                  </span>
                  Learn More
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
