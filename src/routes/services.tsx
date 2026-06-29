import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/PageShell";
import { Footer } from "@/components/Footer";
import { SERVICES } from "@/data/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Specialty Dental Services — Dr. Assefa Dent, Addis Ababa" },
      { name: "description", content: "Explore 13+ specialty dental services at Dr. Assefa Dent: implants, aligners, orthodontics, cosmetic dentistry, oral surgery and more." },
      { property: "og:title", content: "Specialty Dental Services — Dr. Assefa Dent" },
      { property: "og:description", content: "13+ specialty services delivered by certified specialists in Addis Ababa." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <PageShell>
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0A0F1E] via-[#0A0F1E] to-[#0EA5E9]/30 pt-32 pb-20">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 30% 20%, #38BDF8 0%, transparent 50%)" }} />
          <div className="relative mx-auto max-w-7xl px-6">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-sub text-sm uppercase tracking-[0.3em] text-[#38BDF8]"
            >
              Specialty Care
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-4 font-display text-5xl font-semibold text-white md:text-7xl"
            >
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 max-w-2xl font-body text-lg text-white/70"
            >
              From everyday checkups to advanced specialty procedures — every treatment delivered by board-certified specialists with compassion at the core.
            </motion.p>
          </div>
        </section>

        {/* Services grid */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s, i) => (
                <motion.div
                  key={s.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: (i % 3) * 0.08 }}
                >
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="group block overflow-hidden rounded-2xl border border-[#1A1A2E]/10 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-[#0EA5E9] hover:shadow-2xl hover:shadow-[#0EA5E9]/20"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={s.image}
                        alt={s.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E]/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-xl font-semibold text-[#1A1A2E] transition-colors group-hover:text-[#0EA5E9]">
                        {s.name}
                      </h3>
                      <p className="mt-2 font-body text-sm leading-relaxed text-[#1A1A2E]/60">
                        {s.short}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 font-sub text-sm font-semibold text-[#0EA5E9]">
                        Learn more
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#F8FAFC] py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="font-display text-3xl font-semibold text-[#1A1A2E] md:text-5xl">
              Not sure which service is right for you?
            </h2>
            <p className="mt-4 font-body text-[#1A1A2E]/60">
              Book a consultation with our specialists — we'll guide you to the best treatment.
            </p>
            <Link
              to="/appointment"
              className="nc-cta-glow mt-8 inline-flex items-center justify-center rounded-full bg-[#0EA5E9] px-8 py-4 font-sub font-semibold text-white transition-transform"
            >
              Book Consultation
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </PageShell>
  );
}
