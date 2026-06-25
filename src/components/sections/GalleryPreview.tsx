import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

const IMAGES = [
  { src: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&q=80", alt: "Modern dental treatment room", span: "md:col-span-2 md:row-span-2" },
  { src: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=600&q=80", alt: "Smile transformation", span: "" },
  { src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80", alt: "Dental specialist at work", span: "" },
  { src: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=600&q=80", alt: "Clinic interior", span: "" },
  { src: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80", alt: "Patient consultation", span: "" },
];

export function GalleryPreview() {
  return (
    <section className="relative py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            <p className="font-sub text-[#0EA5E9] text-xs uppercase tracking-[0.25em] mb-4">
              ✦ Our Clinic ✦
            </p>
            <h2 className="font-display text-4xl md:text-6xl text-[#0A0F1E] leading-tight">
              A Space Designed for <em className="text-[#0EA5E9] not-italic">Comfort</em>
            </h2>
          </div>
          <Link
            to="/gallery"
            className="font-sub font-semibold text-[#0EA5E9] hover:text-[#38BDF8] inline-flex items-center gap-2 group"
          >
            View Full Gallery
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-4 md:gap-6 md:h-[600px]">
          {IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover min-h-[180px] md:min-h-0 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white font-sub text-sm translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                {img.alt}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
