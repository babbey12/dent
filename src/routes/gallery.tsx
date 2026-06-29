import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageShell } from "@/components/PageShell";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Smile Gallery — Dr. Assefa Dent Before & After" },
      { name: "description", content: "Before & after smile transformations and clinic photos from Dr. Assefa Dent Specialty Dental Clinic, Addis Ababa." },
      { property: "og:title", content: "Smile Gallery — Dr. Assefa Dent" },
      { property: "og:description", content: "See real patient transformations and our modern clinic." },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

type Item = { id: string; src: string; cat: string; alt: string };

const ITEMS: Item[] = [
  { id: "1", cat: "Smiles", src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&q=80", alt: "Patient smile transformation" },
  { id: "2", cat: "Clinic", src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=900&q=80", alt: "Modern treatment room" },
  { id: "3", cat: "Smiles", src: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=900&q=80", alt: "Aligner smile" },
  { id: "4", cat: "Team", src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=900&q=80", alt: "Specialist at work" },
  { id: "5", cat: "Clinic", src: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=900&q=80", alt: "Clinic interior" },
  { id: "6", cat: "Smiles", src: "https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=900&q=80", alt: "Whitening result" },
  { id: "7", cat: "Team", src: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=900&q=80", alt: "Consultation" },
  { id: "8", cat: "Clinic", src: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=900&q=80", alt: "Pediatric area" },
  { id: "9", cat: "Smiles", src: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=900&q=80", alt: "Family smile" },
];

const CATS = ["All", "Smiles", "Clinic", "Team"];

function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<Item | null>(null);
  const items = filter === "All" ? ITEMS : ITEMS.filter((i) => i.cat === filter);

  return (
    <PageShell>
      <main className="min-h-screen bg-white">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0A0F1E] via-[#0A0F1E] to-[#0EA5E9]/30 pt-32 pb-16">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 40% 50%, #38BDF8 0%, transparent 50%)" }} />
          <div className="relative mx-auto max-w-7xl px-6">
            <p className="font-sub text-sm uppercase tracking-[0.3em] text-[#38BDF8]">Real Results</p>
            <h1 className="mt-4 font-display text-5xl font-semibold text-white md:text-7xl">Smile Gallery</h1>
            <p className="mt-6 max-w-2xl font-body text-lg text-white/70">
              Real transformations from real patients. Every smile here was crafted by our specialists.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-wrap gap-2">
              {CATS.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`rounded-full px-5 py-2 font-sub text-sm font-semibold transition-all ${
                    filter === c
                      ? "bg-[#0EA5E9] text-white shadow-lg shadow-[#0EA5E9]/30"
                      : "bg-[#F8FAFC] text-[#1A1A2E]/70 hover:bg-[#0EA5E9]/10"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
              <AnimatePresence mode="popLayout">
                {items.map((it, i) => (
                  <motion.button
                    layout
                    key={it.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: (i % 6) * 0.04 }}
                    onClick={() => setLightbox(it)}
                    className={`group relative overflow-hidden rounded-2xl bg-[#F8FAFC] ${
                      i % 5 === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"
                    }`}
                  >
                    <img src={it.src} alt={it.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E]/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 font-sub text-xs font-semibold text-[#1A1A2E] opacity-0 transition-opacity group-hover:opacity-100">
                      {it.cat}
                    </span>
                  </motion.button>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightbox(null)}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0A0F1E]/90 p-6 backdrop-blur"
            >
              <motion.img
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                src={lightbox.src}
                alt={lightbox.alt}
                className="max-h-[85vh] max-w-5xl rounded-2xl object-contain shadow-2xl"
              />
              <button
                onClick={() => setLightbox(null)}
                className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                ×
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <section className="bg-[#F8FAFC] py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="font-display text-3xl font-semibold text-[#1A1A2E] md:text-5xl">Your smile could be next</h2>
            <Link
              to="/appointment"
              className="nc-cta-glow mt-8 inline-flex items-center justify-center rounded-full bg-[#0EA5E9] px-8 py-4 font-sub font-semibold text-white"
            >
              Start Your Transformation
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </PageShell>
  );
}
