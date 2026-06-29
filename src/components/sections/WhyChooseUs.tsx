import { motion } from "framer-motion";

const features = [
  { emoji: "🏆", title: "Award-Winning Specialists", desc: "Six certified specialists with combined decades of experience." },
  { emoji: "🦷", title: "Advanced Equipment", desc: "Digital imaging, laser tools and modern sterilisation systems." },
  { emoji: "🌟", title: "Smart & Seamless Patient Care", desc: "Online appointment scheduling and direct communication with specialists, 24/7." },
  { emoji: "📍", title: "Prime Addis Ababa Location", desc: "easy to reach from anywhere." },
  { emoji: "💳", title: "Flexible Payment Options", desc: "Transparent pricing and convenient payment plans." },
  { emoji: "🚨", title: "Emergency Same-Day Care", desc: "Urgent slots reserved every day for dental emergencies." },
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] to-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="font-sub text-xs uppercase tracking-[0.2em] text-[#0EA5E9]">Why us</p>
          <h2 className="font-display mt-3 text-4xl font-semibold text-[#1A1A2E] md:text-5xl">
            Why Patients Choose Dr. Assefa Dent
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: (i % 3) * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 nc-card-glass-light shadow-lg hover:shadow-2xl transition-all duration-400"
            >
              <span className="absolute left-0 top-0 h-full w-[4px] origin-top scale-y-0 bg-[#0EA5E9] transition-transform duration-400 group-hover:scale-y-100" />
              <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">{f.emoji}</div>
              <h3 className="font-display mt-6 text-2xl font-semibold text-[#1A1A2E] group-hover:text-[#0EA5E9] transition-colors">{f.title}</h3>
              <p className="font-body mt-3 text-sm leading-relaxed text-[#1A1A2E]/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
