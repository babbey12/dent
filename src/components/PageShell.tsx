import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { Navbar } from "./Navbar";

export function PageShell({
  children,
  withNavbar = true,
}: {
  children: ReactNode;
  withNavbar?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {withNavbar && <Navbar />}
      {children}
    </motion.div>
  );
}

export function PlaceholderPage({ title }: { title: string }) {
  return (
    <PageShell>
      <main className="min-h-screen bg-white pt-32">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h1 className="font-display text-4xl font-semibold text-[#1A1A2E] md:text-6xl">
            {title}
          </h1>
          <p className="font-body mt-4 text-[#1A1A2E]/60">Coming soon.</p>
        </div>
      </main>
    </PageShell>
  );
}
