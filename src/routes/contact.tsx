import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { PageShell } from "@/components/PageShell";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Dr. Assefa Dent — Addis Ababa Dental Clinic" },
      { name: "description", content: "Contact Dr. Assefa Dent — beside Kolfe Keraniyo Court, Addis Ababa. Call +251 911 673 365 / 0910 727 441." },
      { property: "og:title", content: "Contact Dr. Assefa Dent" },
      { property: "og:description", content: "Beside Kolfe Keraniyo Court, 2nd Floor Behel, Addis Ababa." },
    ],
  }),
  component: ContactPage,
});

const INFO = [
  { icon: "📍", title: "Visit Us", lines: ["Beside Kolfe Keraniyo Court", "2nd Floor Behel", "Addis Ababa, Ethiopia"] },
  { icon: "📞", title: "Call Us", lines: ["+251 911 673 365 / 0910 727 441"], href: "tel:+251911673365" },
  { icon: "✉️", title: "Email Us", lines: ["hello@drassefadent.com"], href: "mailto:hello@drassefadent.com" },
  { icon: "🕐", title: "Hours", lines: ["Mon – Sat: 9:00 AM – 6:00 PM", "Sunday: Closed"] },
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <PageShell>
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0A0F1E] via-[#0A0F1E] to-[#0EA5E9]/30 pt-32 pb-20">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, #38BDF8 0%, transparent 50%)" }} />
          <div className="relative mx-auto max-w-7xl px-6">
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="font-sub text-sm uppercase tracking-[0.3em] text-[#38BDF8]">
              Get in Touch
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-4 font-display text-5xl font-semibold text-white md:text-7xl">
              We'd love to hear from you
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-6 max-w-2xl font-body text-lg text-white/70">
              Questions, feedback, or ready to book? Reach out and our team will get back to you within one business day.
            </motion.p>
          </div>
        </section>

        {/* Contact info cards */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {INFO.map((info, i) => {
                const inner = (
                  <>
                    <span className="text-3xl">{info.icon}</span>
                    <h3 className="mt-4 font-display text-xl text-[#1A1A2E]">{info.title}</h3>
                    <div className="mt-2 space-y-1 font-body text-sm text-[#1A1A2E]/70">
                      {info.lines.map((l) => <p key={l}>{l}</p>)}
                    </div>
                  </>
                );
                const cls = "block rounded-2xl border border-[#1A1A2E]/10 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#0EA5E9] hover:shadow-xl";
                return (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    {info.href ? <a href={info.href} className={cls}>{inner}</a> : <div className={cls}>{inner}</div>}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Form + Map */}
        <section className="bg-[#F8FAFC] py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
            {/* Form */}
            <div>
              <h2 className="font-display text-3xl font-semibold text-[#1A1A2E] md:text-4xl">Send us a message</h2>
              <p className="mt-2 font-body text-[#1A1A2E]/60">We respond within one business day.</p>

              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="mt-8 rounded-2xl border border-[#0EA5E9]/30 bg-white p-8 text-center">
                  <div className="text-5xl">✅</div>
                  <h3 className="mt-4 font-display text-2xl text-[#1A1A2E]">Message sent!</h3>
                  <p className="mt-2 font-body text-[#1A1A2E]/60">Thanks for reaching out. We'll be in touch soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                  <div>
                    <label className="font-sub text-sm text-[#1A1A2E]">Full Name</label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="mt-1 w-full rounded-lg border border-[#1A1A2E]/15 bg-white px-4 py-3 font-body outline-none transition-colors focus:border-[#0EA5E9]"
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="font-sub text-sm text-[#1A1A2E]">Email</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="mt-1 w-full rounded-lg border border-[#1A1A2E]/15 bg-white px-4 py-3 font-body outline-none transition-colors focus:border-[#0EA5E9]"
                      />
                    </div>
                    <div>
                      <label className="font-sub text-sm text-[#1A1A2E]">Phone</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="mt-1 w-full rounded-lg border border-[#1A1A2E]/15 bg-white px-4 py-3 font-body outline-none transition-colors focus:border-[#0EA5E9]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-sub text-sm text-[#1A1A2E]">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="mt-1 w-full rounded-lg border border-[#1A1A2E]/15 bg-white px-4 py-3 font-body outline-none transition-colors focus:border-[#0EA5E9]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="nc-cta-glow w-full rounded-full bg-[#0EA5E9] px-8 py-4 font-sub font-semibold text-white"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Map */}
            <div>
              <h2 className="font-display text-3xl font-semibold text-[#1A1A2E] md:text-4xl">Find us</h2>
              <p className="mt-2 font-body text-[#1A1A2E]/60">Beside Kolfe Keraniyo Court, Addis Ababa.</p>
              <div className="mt-8 overflow-hidden rounded-2xl border border-[#1A1A2E]/10 shadow-sm">
                <iframe
                  title="Dr. Assefa Dent location"
                  src="https://www.google.com/maps?q=Kolfe+Keraniyo+Court,+Addis+Ababa&output=embed"
                  className="h-[400px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Booking CTA */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="font-display text-3xl font-semibold text-[#1A1A2E] md:text-5xl">
              Prefer to book directly?
            </h2>
            <Link
              to="/appointment"
              className="nc-cta-glow mt-8 inline-flex items-center justify-center rounded-full bg-[#0EA5E9] px-8 py-4 font-sub font-semibold text-white"
            >
              Book an Appointment
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </PageShell>
  );
}
