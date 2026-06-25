import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HOURS = [
  { day: "Monday", hours: "9:00 AM – 6:00 PM", closed: false },
  { day: "Tuesday", hours: "9:00 AM – 6:00 PM", closed: false },
  { day: "Wednesday", hours: "9:00 AM – 6:00 PM", closed: false },
  { day: "Thursday", hours: "9:00 AM – 6:00 PM", closed: false },
  { day: "Friday", hours: "9:00 AM – 6:00 PM", closed: false },
  { day: "Saturday", hours: "9:00 AM – 6:00 PM", closed: false },
  { day: "Sunday", hours: "Closed", closed: true },
];

function useNow() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);
  return now;
}

export function WorkingHours() {
  const now = useNow();
  const todayIdx = now ? (now.getDay() === 0 ? 6 : now.getDay() - 1) : -1;
  const isOpen =
    !!now &&
    todayIdx >= 0 &&
    !HOURS[todayIdx].closed &&
    now.getHours() >= 9 &&
    now.getHours() < 18;

  return (
    <section className="relative overflow-hidden bg-[#0A0F1E] py-24">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="font-sub text-xs uppercase tracking-[0.2em] text-[#0EA5E9]">When we're open</p>
          <h2 className="font-display mt-3 text-4xl font-semibold text-white md:text-5xl">
            Clinic Hours
          </h2>
          {now && (
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">
              <span
                className={`h-2.5 w-2.5 rounded-full ${isOpen ? "bg-green-400" : "bg-red-400"}`}
                style={{ boxShadow: `0 0 0 6px ${isOpen ? "rgba(74,222,128,0.2)" : "rgba(248,113,113,0.2)"}` }}
              />
              <span className={`font-sub font-semibold ${isOpen ? "text-green-400" : "text-red-400"}`}>
                {isOpen ? "Open Now" : "Closed"}
              </span>
            </div>
          )}
        </motion.div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
          {HOURS.map((row, i) => {
            const isToday = i === todayIdx;
            return (
              <motion.div
                key={row.day}
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className={`group relative flex items-center justify-between border-b border-white/5 px-6 py-4 last:border-0 transition-colors ${
                  isToday ? "bg-[#0EA5E9]/15" : ""
                }`}
              >
                {isToday && (
                  <span
                    className="absolute left-0 top-0 h-full w-1 bg-[#0EA5E9]"
                    style={{ animation: "nc-glow-pulse 2s ease-in-out infinite" }}
                  />
                )}
                <div className="flex items-center gap-3">
                  <svg className="h-5 w-5 text-[#0EA5E9]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                  <span className={`font-sub font-medium ${isToday ? "text-white" : "text-white/85"}`}>
                    {row.day}
                  </span>
                </div>
                {row.closed ? (
                  <span className="font-sub rounded-full bg-red-500/15 px-3 py-1 text-xs font-semibold text-red-300">
                    Closed
                  </span>
                ) : (
                  <span className="font-body text-white/80">{row.hours}</span>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
