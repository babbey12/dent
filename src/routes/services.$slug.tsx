import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/PageShell";
import { Footer } from "@/components/Footer";
import { SERVICES } from "@/data/services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    if (!s) return { meta: [{ title: "Service — Dr. Assefa Dent" }] };
    return {
      meta: [
        { title: `${s.name} — Dr. Assefa Dent` },
        { name: "description", content: s.short },
        { property: "og:title", content: `${s.name} — Dr. Assefa Dent` },
        { property: "og:description", content: s.short },
      ],
    };
  },
  notFoundComponent: () => (
    <PageShell>
      <main className="flex min-h-screen items-center justify-center bg-white pt-32">
        <div className="text-center">
          <h1 className="font-display text-4xl text-[#1A1A2E]">Service not found</h1>
          <Link to="/services" className="mt-4 inline-block font-sub text-[#0EA5E9]">← Back to all services</Link>
        </div>
      </main>
    </PageShell>
  ),
  errorComponent: ({ error }) => (
    <PageShell>
      <main className="flex min-h-screen items-center justify-center bg-white pt-32 px-6">
        <div className="text-center max-w-md">
          <h1 className="font-display text-3xl text-[#1A1A2E]">Something went wrong</h1>
          <p className="mt-2 font-body text-[#1A1A2E]/60">{error.message}</p>
          <Link to="/services" className="mt-4 inline-block font-sub text-[#0EA5E9]">← Back to all services</Link>
        </div>
      </main>
    </PageShell>
  ),
  component: ServiceDetailPage,
});

const BENEFITS = [
  { icon: "✓", title: "Specialist-Led", text: "Treatment delivered by board-certified specialists, not generalists." },
  { icon: "✓", title: "Modern Equipment", text: "Latest digital imaging, sterilization and treatment technology." },
  { icon: "✓", title: "Pain Management", text: "Comfort-first protocols including sedation when appropriate." },
  { icon: "✓", title: "Transparent Pricing", text: "Clear estimates with flexible payment plans available." },
];

const PROCESS = [
  { step: "01", title: "Consultation", text: "Comprehensive examination and diagnostic imaging to understand your needs." },
  { step: "02", title: "Custom Plan", text: "Personalized treatment plan with clear timeline and pricing." },
  { step: "03", title: "Treatment", text: "Expert care delivered in our state-of-the-art clinic." },
  { step: "04", title: "Aftercare", text: "Ongoing follow-up to protect your investment and health." },
];

function ServiceDetailPage() {
  const { service } = Route.useLoaderData();
  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <PageShell>
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0">
            <img src={service.image} alt={service.name} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1E] via-[#0A0F1E]/85 to-[#0A0F1E]/40" />
          </div>
          <div className="relative mx-auto max-w-7xl px-6">
            <Link to="/services" className="font-sub text-sm text-[#38BDF8] hover:text-white">
              ← All Services
            </Link>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 max-w-3xl font-display text-5xl font-semibold text-white md:text-7xl"
            >
              {service.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 max-w-2xl font-body text-lg text-white/80"
            >
              {service.short}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8"
            >
              <Link
                to="/appointment"
                className="nc-cta-glow inline-flex items-center justify-center rounded-full bg-[#0EA5E9] px-8 py-4 font-sub font-semibold text-white"
              >
                Book This Service
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="font-display text-3xl font-semibold text-[#1A1A2E] md:text-4xl">
              About {service.name}
            </h2>
            <div className="mt-6 space-y-4 font-body text-lg leading-relaxed text-[#1A1A2E]/70">
              <p>
                At Dr. Assefa Dent, our {service.name.toLowerCase()} is delivered by specialists who have dedicated their careers to mastering this discipline. {service.short}
              </p>
              <p>
                Every treatment plan begins with a thorough diagnostic process and an honest conversation about your goals, concerns and budget. We believe great dentistry starts with great listening.
              </p>
              <p>
                Our clinic is equipped with modern technology and follows strict sterilization protocols, ensuring every procedure is safe, precise and comfortable.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-[#F8FAFC] py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="font-display text-3xl font-semibold text-[#1A1A2E] md:text-4xl">
              Why patients choose us
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {BENEFITS.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl bg-white p-6 shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0EA5E9] font-bold text-white">
                    {b.icon}
                  </div>
                  <h3 className="mt-4 font-display text-xl text-[#1A1A2E]">{b.title}</h3>
                  <p className="mt-2 font-body text-sm text-[#1A1A2E]/60">{b.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="font-display text-3xl font-semibold text-[#1A1A2E] md:text-4xl">
              Your treatment journey
            </h2>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {PROCESS.map((p, i) => (
                <motion.div
                  key={p.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  <span className="font-display text-6xl font-bold text-[#0EA5E9]/20">{p.step}</span>
                  <h3 className="mt-2 font-display text-xl text-[#1A1A2E]">{p.title}</h3>
                  <p className="mt-2 font-body text-sm text-[#1A1A2E]/60">{p.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="bg-[#F8FAFC] py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="font-display text-3xl font-semibold text-[#1A1A2E] md:text-4xl">
              Related services
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {related.map((s) => (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group block overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={s.image} alt={s.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg text-[#1A1A2E] group-hover:text-[#0EA5E9]">{s.name}</h3>
                    <p className="mt-1 font-body text-sm text-[#1A1A2E]/60">{s.short}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </PageShell>
  );
}
