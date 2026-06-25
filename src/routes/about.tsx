import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/PageShell";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Nejashi Care — Specialty Dental Clinic in Addis Ababa" },
      { name: "description", content: "Learn about Nejashi Care: our mission, values, and team of specialty dentists serving Addis Ababa with compassion." },
      { property: "og:title", content: "About Nejashi Care" },
      { property: "og:description", content: "Where Specialty Meets Compassion." },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: "🎯", title: "Excellence", text: "Specialist-led care with measurable outcomes and rigorous standards." },
  { icon: "❤️", title: "Compassion", text: "We treat patients the way we'd want our own families treated." },
  { icon: "🔬", title: "Innovation", text: "Modern equipment, AI-assisted workflows and evidence-based protocols." },
  { icon: "🤝", title: "Trust", text: "Transparent pricing, honest advice, and lasting patient relationships." },
];

const MILESTONES = [
  { year: "2018", title: "Founded", text: "Nejashi Care opens beside Kolfe Keraniyo Court, Addis Ababa." },
  { year: "2020", title: "Specialist Team", text: "Welcomed orthodontists, periodontists and oral surgeons." },
  { year: "2022", title: "10,000 Patients", text: "Crossed 10,000 lifetime patient visits with 99% satisfaction." },
  { year: "2025", title: "AI-Powered Care", text: "Launched AI-assisted diagnostics and patient assistant Nejashi." },
];

function AboutPage() {
  return (
    <PageShell>
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0A0F1E] via-[#0A0F1E] to-[#0EA5E9]/30 pt-32 pb-20">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 70% 30%, #38BDF8 0%, transparent 50%)" }} />
          <div className="relative mx-auto max-w-7xl px-6">
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="font-sub text-sm uppercase tracking-[0.3em] text-[#38BDF8]">
              About Us
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-4 font-display text-5xl font-semibold text-white md:text-7xl">
              Where Specialty<br />Meets Compassion
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-6 max-w-2xl font-body text-lg text-white/70">
              Nejashi Care is Addis Ababa's destination for specialty dentistry — a clinic built around board-certified specialists, modern technology, and the belief that every patient deserves to feel cared for.
            </motion.p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="font-sub text-sm uppercase tracking-[0.3em] text-[#0EA5E9]">Our Mission</p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-[#1A1A2E] md:text-5xl">
                Specialty dentistry, made human.
              </h2>
              <div className="mt-6 space-y-4 font-body text-lg leading-relaxed text-[#1A1A2E]/70">
                <p>
                  We founded Nejashi Care to fill a gap in Ethiopian dental care: world-class specialty treatment delivered with the warmth of a family practice.
                </p>
                <p>
                  Our team includes orthodontists, periodontists, prosthodontists, oral surgeons and pediatric specialists — all working under one roof so you never have to be referred elsewhere for complex care.
                </p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=1000&q=80"
                alt="Specialist consulting with patient"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E]/40 to-transparent" />
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-[#F8FAFC] py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="font-display text-3xl font-semibold text-[#1A1A2E] md:text-5xl">Our values</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {VALUES.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <span className="text-3xl">{v.icon}</span>
                  <h3 className="mt-4 font-display text-xl text-[#1A1A2E]">{v.title}</h3>
                  <p className="mt-2 font-body text-sm text-[#1A1A2E]/60">{v.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="font-display text-3xl font-semibold text-[#1A1A2E] md:text-5xl">Our journey</h2>
            <div className="mt-12 space-y-8">
              {MILESTONES.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 border-l-2 border-[#0EA5E9]/20 pl-6"
                >
                  <div>
                    <span className="font-display text-3xl font-bold text-[#0EA5E9]">{m.year}</span>
                    <h3 className="mt-1 font-display text-xl text-[#1A1A2E]">{m.title}</h3>
                    <p className="mt-1 font-body text-[#1A1A2E]/60">{m.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0A0F1E] py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="font-display text-3xl font-semibold text-white md:text-5xl">
              Meet the team that will care for you
            </h2>
            <Link
              to="/appointment"
              className="nc-cta-glow mt-8 inline-flex items-center justify-center rounded-full bg-[#0EA5E9] px-8 py-4 font-sub font-semibold text-white"
            >
              Book Your Visit
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </PageShell>
  );
}
