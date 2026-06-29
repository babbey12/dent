import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

export function CTABanner() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-[#0EA5E9] via-[#0284C7] to-[#0A0F1E]">
      {/* Animated orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-10 w-72 h-72 rounded-full bg-white/10 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#38BDF8]/20 blur-3xl"
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-sub text-white/80 text-xs uppercase tracking-[0.25em] mb-6"
        >
          ✦ Ready to Begin? ✦
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6"
        >
          Your Perfect Smile<br />
          <em className="not-italic">Starts Today</em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="font-body text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-10"
        >
          Book a consultation with our specialist team. Same-week appointments available beside Kolfe Keraniyo Court.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/appointment"
            className="nc-cta-glow group bg-white text-[#0A0F1E] font-sub font-semibold rounded-full px-8 py-4 inline-flex items-center gap-2 hover:scale-105 transition-transform duration-300"
          >
            Book Appointment
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <a
            href="tel:+251911673365"
            className="font-sub font-semibold text-white border-2 border-white/40 hover:bg-white/10 hover:border-white rounded-full px-8 py-4 transition-all duration-300 inline-flex items-center gap-2"
          >
            <span>📞</span> +251 911 673 365 / 0910 727 441
          </a>
        </motion.div>
      </div>
    </section>
  );
}
