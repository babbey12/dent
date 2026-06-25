import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 10000, suffix: "+", label: "Patients Treated", icon: "tooth" },
  { value: 6, suffix: "", label: "Specialist Doctors", icon: "doctor" },
  { value: 13, suffix: "", label: "Dental Services", icon: "list" },
  { value: 99, suffix: "%", label: "Satisfaction Rate", icon: "star" },
] as const;

function Icon({ name }: { name: string }) {
  const c = "h-9 w-9 text-[#0EA5E9] mx-auto";
  if (name === "tooth")
    return (
      <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M7 3c-2 0-4 1.5-4 4 0 3 1 5 1.5 8C5 18 6 21 8 21c1.5 0 1.5-3 2-5 .3-1 .8-1.5 2-1.5s1.7.5 2 1.5c.5 2 .5 5 2 5 2 0 3-3 3.5-6 .5-3 1.5-5 1.5-8 0-2.5-2-4-4-4-2 0-3 1-5 1S9 3 7 3Z" />
      </svg>
    );
  if (name === "doctor")
    return (
      <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
      </svg>
    );
  if (name === "list")
    return (
      <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M4 6h16M4 12h16M4 18h16" />
        <circle cx="2" cy="6" r="1" fill="currentColor" />
        <circle cx="2" cy="12" r="1" fill="currentColor" />
        <circle cx="2" cy="18" r="1" fill="currentColor" />
      </svg>
    );
  return (
    <svg className={c} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l2.9 6.9L22 10l-5.5 4.6L18 22l-6-3.6L6 22l1.5-7.4L2 10l7.1-1.1L12 2z" />
    </svg>
  );
}

function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setN(Math.round(to * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}

export function TrustBar() {
  return (
    <section className="relative overflow-hidden bg-[#0A0F1E] py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "linear-gradient(110deg, transparent 30%, rgba(14,165,233,0.18) 50%, transparent 70%)",
          backgroundSize: "200% 100%",
          animation: "nc-shimmer 4s linear infinite",
        }}
      />
      <style>{`@keyframes nc-shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }`}</style>

      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
            className="text-center"
          >
            <Icon name={s.icon} />
            <div className="font-display mt-3 text-5xl font-semibold text-[#0EA5E9] md:text-6xl">
              <CountUp to={s.value} suffix={s.suffix} />
            </div>
            <p className="font-sub mt-2 text-sm uppercase tracking-wider text-white/70">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
