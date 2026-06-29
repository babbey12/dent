import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/PageShell";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Dental Health Blog — Dr. Assefa Dent" },
      { name: "description", content: "Expert articles on dental health, cosmetic dentistry, implants, orthodontics, and pediatric care from Dr. Assefa Dent specialists." },
      { property: "og:title", content: "Dental Health Blog — Dr. Assefa Dent" },
      { property: "og:description", content: "Insights and tips from our specialty dental team." },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

const POSTS = [
  {
    id: "invisible-aligners-vs-braces",
    title: "Invisible Aligners vs Traditional Braces: Which Is Right for You?",
    excerpt: "A specialist breakdown of cost, comfort, treatment time and lifestyle fit between clear aligners and braces.",
    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=900&q=80",
    category: "Orthodontics",
    date: "May 8, 2026",
    readTime: "6 min read",
  },
  {
    id: "dental-implants-explained",
    title: "Dental Implants Explained: Process, Cost & Recovery",
    excerpt: "Everything you need to know before getting an implant — from the first scan to your final crown.",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=900&q=80",
    category: "Implants",
    date: "May 2, 2026",
    readTime: "8 min read",
  },
  {
    id: "kids-first-dental-visit",
    title: "Your Child's First Dental Visit: A Parent's Guide",
    excerpt: "When to start, what to expect, and how to make the visit fun for your little one.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=900&q=80",
    category: "Pediatric",
    date: "Apr 24, 2026",
    readTime: "5 min read",
  },
  {
    id: "whitening-myths",
    title: "5 Teeth Whitening Myths You Should Stop Believing",
    excerpt: "Charcoal, lemon, baking soda — what actually works and what damages enamel.",
    image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=900&q=80",
    category: "Cosmetic",
    date: "Apr 17, 2026",
    readTime: "4 min read",
  },
  {
    id: "gum-disease-warning-signs",
    title: "7 Early Warning Signs of Gum Disease",
    excerpt: "Gum disease is reversible if caught early. Here's what to watch for.",
    image: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=900&q=80",
    category: "Periodontics",
    date: "Apr 10, 2026",
    readTime: "5 min read",
  },
  {
    id: "emergency-dental-care",
    title: "Dental Emergency? Here's Exactly What to Do",
    excerpt: "Knocked-out tooth, severe pain, broken crown — a step-by-step from our emergency team.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&q=80",
    category: "Emergency",
    date: "Apr 3, 2026",
    readTime: "5 min read",
  },
  {
    id: "power-of-preventive-care",
    title: "The Power of Preventive Care: Protecting Your Long-Term Health",
    excerpt: "Why bi-annual professional check-ups and cleanings save you time, money, and protect your natural teeth.",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=900&q=80",
    category: "Preventive",
    date: "Mar 28, 2026",
    readTime: "4 min read",
  },
];

function BlogPage() {
  const [featured, ...rest] = POSTS;

  return (
    <PageShell>
      <main className="min-h-screen bg-white">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0A0F1E] via-[#0A0F1E] to-[#0EA5E9]/30 pt-32 pb-16">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 60% 40%, #38BDF8 0%, transparent 50%)" }} />
          <div className="relative mx-auto max-w-7xl px-6">
            <p className="font-sub text-sm uppercase tracking-[0.3em] text-[#38BDF8]">Insights</p>
            <h1 className="mt-4 font-display text-5xl font-semibold text-white md:text-7xl">Dental Health Blog</h1>
            <p className="mt-6 max-w-2xl font-body text-lg text-white/70">
              Practical guidance from our specialists — written to help you make confident decisions about your smile.
            </p>
          </div>
        </section>

        {/* Featured */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group grid gap-8 overflow-hidden rounded-3xl border border-[#1A1A2E]/10 bg-white shadow-sm transition-shadow hover:shadow-2xl lg:grid-cols-2"
            >
              <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto">
                <img src={featured.image} alt={featured.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <div className="flex items-center gap-3 font-sub text-xs">
                  <span className="rounded-full bg-[#0EA5E9]/10 px-3 py-1 font-semibold text-[#0EA5E9]">Featured</span>
                  <span className="text-[#1A1A2E]/50">{featured.category} · {featured.date}</span>
                </div>
                <h2 className="mt-4 font-display text-2xl font-semibold text-[#1A1A2E] md:text-4xl">{featured.title}</h2>
                <p className="mt-4 font-body text-[#1A1A2E]/60">{featured.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-1 font-sub text-sm font-semibold text-[#0EA5E9]">
                  Read article <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </div>
            </motion.article>
          </div>
        </section>

        {/* Grid */}
        <section className="pb-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((p, i) => (
                <motion.article
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 3) * 0.08 }}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-[#1A1A2E]/10 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-[#0EA5E9] hover:shadow-xl"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 font-sub text-xs text-[#1A1A2E]/50">
                      <span className="rounded-full bg-[#0EA5E9]/10 px-2.5 py-1 font-semibold text-[#0EA5E9]">{p.category}</span>
                      <span>{p.date}</span>
                    </div>
                    <h3 className="mt-3 font-display text-xl text-[#1A1A2E] transition-colors group-hover:text-[#0EA5E9]">{p.title}</h3>
                    <p className="mt-2 flex-1 font-body text-sm text-[#1A1A2E]/60">{p.excerpt}</p>
                    <div className="mt-4 flex items-center justify-between font-sub text-xs">
                      <span className="text-[#1A1A2E]/50">{p.readTime}</span>
                      <span className="font-semibold text-[#0EA5E9]">Read →</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-[#F8FAFC] py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="font-display text-3xl font-semibold text-[#1A1A2E] md:text-4xl">Get smile tips in your inbox</h2>
            <p className="mt-3 font-body text-[#1A1A2E]/60">One short article a month. No spam, ever.</p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                placeholder="you@email.com"
                className="flex-1 rounded-full border border-[#1A1A2E]/15 bg-white px-5 py-3 font-body outline-none focus:border-[#0EA5E9]"
              />
              <button className="rounded-full bg-[#0EA5E9] px-6 py-3 font-sub font-semibold text-white transition-transform hover:scale-105">
                Subscribe
              </button>
            </form>
          </div>
        </section>

        <Footer />
      </main>
    </PageShell>
  );
}
