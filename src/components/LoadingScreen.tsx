import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const LOGO = "/logo.png";
const TAGLINE = "Where Specialty Meets Compassion";

export function LoadingScreen() {
  const [show, setShow] = useState(false);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("nc-loaded")) return;
    setShow(true);
    sessionStorage.setItem("nc-loaded", "1");

    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setTyped(TAGLINE.slice(0, i));
      if (i >= TAGLINE.length) window.clearInterval(id);
    }, 40);

    const t = window.setTimeout(() => setShow(false), 2800);
    return () => {
      window.clearInterval(id);
      window.clearTimeout(t);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#0A0F1E]"
        >
          <div className="relative">
            <span
              className="absolute left-1/2 top-1/2 block h-40 w-40 rounded-full border-2 border-[#0EA5E9]"
              style={{ animation: "nc-ring-pulse 1.5s ease-out infinite" }}
            />
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
              src={LOGO}
              alt="Dr. Assefa Dent"
              className="relative h-24 w-auto"
            />
          </div>
          <p className="font-sub mt-8 text-sm uppercase tracking-[0.2em] text-[#0EA5E9] nc-typing-cursor">
            {typed}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
