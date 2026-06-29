import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin — Dr. Assefa Dent" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminPage,
});

const STATS = [
  { label: "Appointments Today", value: 18, accent: "#0EA5E9" },
  { label: "New Patients (Week)", value: 42, accent: "#38BDF8" },
  { label: "Revenue (Month)", value: "ETB 482k", accent: "#10B981" },
  { label: "Satisfaction", value: "99%", accent: "#F59E0B" },
];

const APPOINTMENTS = [
  { time: "09:00", patient: "Liya Bekele", service: "Invisible Aligner Consult", status: "Confirmed" },
  { time: "10:00", patient: "Daniel Tesfaye", service: "Implant Follow-up", status: "Confirmed" },
  { time: "11:30", patient: "Hanna Mekonnen", service: "Teeth Whitening", status: "Pending" },
  { time: "14:00", patient: "Yonas Alemu", service: "Wisdom Tooth Removal", status: "Confirmed" },
  { time: "15:30", patient: "Sara Girma", service: "Pediatric Checkup", status: "Confirmed" },
  { time: "16:30", patient: "Abel Hailu", service: "Emergency", status: "Urgent" },
];

function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (pin === "0000") {
      setAuthed(true);
      setError("");
    } else {
      setError("Incorrect PIN. (Demo: use 0000)");
    }
  }

  if (!authed) {
    return (
      <PageShell>
        <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#0A0F1E] via-[#0A0F1E] to-[#0EA5E9]/30 px-6 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <h1 className="font-display text-3xl font-semibold text-white">Admin Access</h1>
            <p className="mt-2 font-body text-sm text-white/60">Enter your PIN to continue.</p>
            <form onSubmit={handleLogin} className="mt-6 space-y-4">
              <input
                type="password"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="••••"
                className="w-full rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-center font-display text-2xl tracking-[0.5em] text-white outline-none focus:border-[#0EA5E9]"
              />
              {error && <p className="font-body text-sm text-[#E53E3E]">{error}</p>}
              <button
                type="submit"
                className="nc-cta-glow w-full rounded-full bg-[#0EA5E9] px-6 py-3 font-sub font-semibold text-white"
              >
                Sign In
              </button>
            </form>
          </motion.div>
        </main>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <main className="min-h-screen bg-[#F8FAFC] pt-24">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-sub text-sm uppercase tracking-[0.3em] text-[#0EA5E9]">Dashboard</p>
              <h1 className="mt-1 font-display text-3xl font-semibold text-[#1A1A2E] md:text-4xl">Welcome back</h1>
            </div>
            <button
              onClick={() => setAuthed(false)}
              className="rounded-full border border-[#1A1A2E]/15 px-4 py-2 font-sub text-sm text-[#1A1A2E]/70 hover:bg-white"
            >
              Sign out
            </button>
          </div>

          {/* Stats */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border border-[#1A1A2E]/5 bg-white p-6 shadow-sm"
              >
                <p className="font-sub text-xs uppercase tracking-wider text-[#1A1A2E]/50">{s.label}</p>
                <p className="mt-2 font-display text-3xl font-semibold" style={{ color: s.accent }}>{s.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Appointments */}
          <div className="mt-10 rounded-2xl border border-[#1A1A2E]/5 bg-white p-6 shadow-sm">
            <h2 className="font-display text-xl font-semibold text-[#1A1A2E]">Today's Appointments</h2>
            <div className="mt-4 overflow-hidden rounded-lg border border-[#1A1A2E]/5">
              <table className="w-full text-left font-body text-sm">
                <thead className="bg-[#F8FAFC] font-sub text-xs uppercase tracking-wider text-[#1A1A2E]/50">
                  <tr>
                    <th className="px-4 py-3">Time</th>
                    <th className="px-4 py-3">Patient</th>
                    <th className="px-4 py-3">Service</th>
                    <th className="px-4 py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {APPOINTMENTS.map((a) => (
                    <tr key={a.time} className="border-t border-[#1A1A2E]/5 hover:bg-[#F8FAFC]/50">
                      <td className="px-4 py-3 font-sub font-semibold text-[#1A1A2E]">{a.time}</td>
                      <td className="px-4 py-3 text-[#1A1A2E]">{a.patient}</td>
                      <td className="px-4 py-3 text-[#1A1A2E]/70">{a.service}</td>
                      <td className="px-4 py-3">
                        <span className={`rounded-full px-2.5 py-1 font-sub text-xs font-semibold ${
                          a.status === "Confirmed" ? "bg-[#10B981]/10 text-[#10B981]" :
                          a.status === "Pending" ? "bg-[#F59E0B]/10 text-[#F59E0B]" :
                          "bg-[#E53E3E]/10 text-[#E53E3E]"
                        }`}>
                          {a.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="mt-8 text-center font-body text-xs text-[#1A1A2E]/40">
            Demo dashboard. Dr. Assefa Dent.
          </p>
        </div>
      </main>
    </PageShell>
  );
}
