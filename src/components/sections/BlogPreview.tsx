import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

const POSTS = [
  {
    slug: "invisible-aligners-vs-braces",
    title: "Invisible Aligners vs Traditional Braces: Which Is Right for You?",
    excerpt: "A clear comparison of cost, comfort, treatment time, and lifestyle fit to help you choose with confidence.",
    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&q=80",
    category: "Orthodontics",
    date: "May 8, 2026",
    readTime: "6 min",
  },
  {
    slug: "dental-implants-guide",
    title: "Everything You Need to Know About Modern Dental Implants",
    excerpt: "From consultation to crown — a step-by-step look at how implants restore both function and confidence.",
    image: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=800&q=80",
    category: "Implants",
    date: "April 22, 2026",
    readTime: "8 min",
  },
  {
    slug: "kids-first-dental-visit",
    title: "Your Child's First Dental Visit: A Gentle Guide for Parents",
    excerpt: "How to prepare your little one for a positive, anxiety-free first appointment that sets healthy habits for life.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&q=80",
    category: "Pediatric",
    date: "April 5, 2026",
    readTime: "5 min",
  },
];

export function BlogPreview() {
  return (
    <section className="relative py-24 md:py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <p className="font-sub text-[#0EA5E9] text-xs uppercase tracking-[0.25em] mb-4">
              ✦ Insights & Education ✦
            </p>
            <h2 className="font-display text-4xl md:text-6xl text-[#0A0F1E] leading-tight">
              From Our <em className="text-[#0EA5E9] not-italic">Specialists</em>
            </h2>
          </div>
          <Link
            to="/blog"
            className="font-sub font-semibold text-[#0EA5E9] hover:text-[#38BDF8] inline-flex items-center gap-2 group"
          >
            All Articles
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {POSTS.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <Link to="/blog" className="block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <span className="absolute top-4 left-4 bg-[#0EA5E9] text-white font-sub text-xs uppercase tracking-wider px-3 py-1.5 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-[#1A1A2E]/60 font-body mb-3">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime} read</span>
                  </div>
                  <h3 className="font-display text-xl text-[#0A0F1E] leading-snug mb-3 group-hover:text-[#0EA5E9] transition-colors">
                    {post.title}
                  </h3>
                  <p className="font-body text-sm text-[#1A1A2E]/70 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
