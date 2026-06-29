import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SERVICES } from "@/data/services";

export const Route = createFileRoute("/appointment")({
  head: () => ({
    meta: [
      { title: "Book an Appointment — Dr. Assefa Dent" },
      {
        name: "description",
        content:
          "Book your specialist dental appointment at Dr. Assefa Dent in Addis Ababa, Ethiopia. Same-week slots available.",
      },
    ],
  }),
  component: AppointmentPage,
});

const TIME_SLOTS = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30",
];

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  notes: string;
};

const INITIAL: FormState = {
  name: "",
  phone: "",
  email: "",
  service: "",
  date: "",
  time: "",
  notes: "",
};

function AppointmentPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function next() {
    setStep((s) => Math.min(3, s + 1));
  }
  function prev() {
    setStep((s) => Math.max(1, s - 1));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const stepValid =
    (step === 1 && form.service && form.date && form.time) ||
    (step === 2 && form.name.trim() && form.phone.trim()) ||
    step === 3;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Navbar />
      <main className="bg-white pt-32 pb-20 min-h-screen">
        <div className="max-w-3xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="font-sub text-[#0EA5E9] text-xs uppercase tracking-[0.25em] mb-4">
              ✦ Book Your Visit ✦
            </p>
            <h1 className="font-display text-4xl md:text-6xl text-[#0A0F1E] leading-tight mb-4">
              Schedule an <em className="text-[#0EA5E9] not-italic">Appointment</em>
            </h1>
            <p className="font-body text-lg text-[#1A1A2E]/70 max-w-xl mx-auto">
              Three quick steps. We'll confirm your booking by phone within 24 hours.
            </p>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gradient-to-br from-[#0EA5E9] to-[#0A0F1E] text-white rounded-3xl p-10 md:p-14 text-center shadow-2xl"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/20 flex items-center justify-center text-4xl">
                ✓
              </div>
              <h2 className="font-display text-3xl md:text-4xl mb-4">Appointment Requested</h2>
              <p className="font-body text-white/85 mb-2 text-lg">
                Thank you, <strong>{form.name}</strong>!
              </p>
              <p className="font-body text-white/70 mb-8">
                We've received your request for <strong>{form.service}</strong> on{" "}
                <strong>{form.date}</strong> at <strong>{form.time}</strong>. Our team will call you
                at <strong>{form.phone}</strong> shortly to confirm.
              </p>
              <button
                onClick={() => {
                  setForm(INITIAL);
                  setStep(1);
                  setSubmitted(false);
                }}
                className="bg-white text-[#0A0F1E] font-sub font-semibold rounded-full px-8 py-3 hover:scale-105 transition-transform"
              >
                Book Another
              </button>
            </motion.div>
          ) : (
            <>
              {/* Stepper */}
              <div className="flex items-center justify-center gap-2 mb-10">
                {[1, 2, 3].map((n) => (
                  <div key={n} className="flex items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-sub font-semibold text-sm transition-all ${
                        step >= n
                          ? "bg-[#0EA5E9] text-white"
                          : "bg-[#F1F5F9] text-[#1A1A2E]/40"
                      }`}
                    >
                      {step > n ? "✓" : n}
                    </div>
                    {n < 3 && (
                      <div
                        className={`w-12 md:w-20 h-0.5 mx-1 transition-all ${
                          step > n ? "bg-[#0EA5E9]" : "bg-[#F1F5F9]"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>

              <form onSubmit={submit} className="bg-white border border-[#0EA5E9]/15 rounded-3xl p-8 md:p-10 shadow-xl">
                {step === 1 && (
                  <motion.div
                    key="s1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <h2 className="font-display text-2xl text-[#0A0F1E]">Service & Time</h2>

                    <div>
                      <label className="font-sub text-sm font-semibold text-[#1A1A2E] mb-2 block">
                        Select a service *
                      </label>
                      <select
                        value={form.service}
                        onChange={(e) => update("service", e.target.value)}
                        required
                        className="w-full bg-[#F8FAFC] border border-[#0EA5E9]/20 rounded-xl px-4 py-3 font-body focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/40"
                      >
                        <option value="">— Choose a service —</option>
                        {SERVICES.map((s) => (
                          <option key={s.slug} value={s.name}>
                            {s.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="font-sub text-sm font-semibold text-[#1A1A2E] mb-2 block">
                        Preferred date *
                      </label>
                      <input
                        type="date"
                        value={form.date}
                        min={today}
                        onChange={(e) => update("date", e.target.value)}
                        required
                        className="w-full bg-[#F8FAFC] border border-[#0EA5E9]/20 rounded-xl px-4 py-3 font-body focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/40"
                      />
                    </div>

                    <div>
                      <label className="font-sub text-sm font-semibold text-[#1A1A2E] mb-3 block">
                        Preferred time *
                      </label>
                      <div className="grid grid-cols-4 gap-2">
                        {TIME_SLOTS.map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => update("time", t)}
                            className={`py-2 rounded-lg font-body text-sm transition-all ${
                              form.time === t
                                ? "bg-[#0EA5E9] text-white shadow-md scale-105"
                                : "bg-[#F8FAFC] text-[#1A1A2E] hover:bg-[#0EA5E9]/10"
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="s2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <h2 className="font-display text-2xl text-[#0A0F1E]">Your Details</h2>
                    <div>
                      <label className="font-sub text-sm font-semibold text-[#1A1A2E] mb-2 block">
                        Full name *
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        required
                        placeholder="Your name"
                        className="w-full bg-[#F8FAFC] border border-[#0EA5E9]/20 rounded-xl px-4 py-3 font-body focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/40"
                      />
                    </div>
                    <div>
                      <label className="font-sub text-sm font-semibold text-[#1A1A2E] mb-2 block">
                        Phone number *
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        required
                        placeholder="+251 9XX XXX XXX"
                        className="w-full bg-[#F8FAFC] border border-[#0EA5E9]/20 rounded-xl px-4 py-3 font-body focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/40"
                      />
                    </div>
                    <div>
                      <label className="font-sub text-sm font-semibold text-[#1A1A2E] mb-2 block">
                        Email (optional)
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        placeholder="you@example.com"
                        className="w-full bg-[#F8FAFC] border border-[#0EA5E9]/20 rounded-xl px-4 py-3 font-body focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/40"
                      />
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="s3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <h2 className="font-display text-2xl text-[#0A0F1E]">Anything Else?</h2>
                    <div>
                      <label className="font-sub text-sm font-semibold text-[#1A1A2E] mb-2 block">
                        Notes for the team (optional)
                      </label>
                      <textarea
                        value={form.notes}
                        onChange={(e) => update("notes", e.target.value)}
                        rows={5}
                        placeholder="Any concerns, questions, or special requests..."
                        className="w-full bg-[#F8FAFC] border border-[#0EA5E9]/20 rounded-xl px-4 py-3 font-body focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/40 resize-none"
                      />
                    </div>

                    <div className="bg-[#F8FAFC] rounded-2xl p-5 space-y-2 font-body text-sm">
                      <p className="font-sub font-semibold text-[#0A0F1E] mb-2">Booking summary</p>
                      <p><span className="text-[#1A1A2E]/60">Service:</span> {form.service}</p>
                      <p><span className="text-[#1A1A2E]/60">When:</span> {form.date} · {form.time}</p>
                      <p><span className="text-[#1A1A2E]/60">Name:</span> {form.name}</p>
                      <p><span className="text-[#1A1A2E]/60">Phone:</span> {form.phone}</p>
                    </div>
                  </motion.div>
                )}

                {/* Nav buttons */}
                <div className="flex justify-between items-center mt-10 pt-6 border-t border-[#0EA5E9]/10">
                  <button
                    type="button"
                    onClick={prev}
                    disabled={step === 1}
                    className="font-sub font-semibold text-[#1A1A2E] disabled:opacity-30 disabled:cursor-not-allowed hover:text-[#0EA5E9] transition-colors"
                  >
                    ← Back
                  </button>

                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={next}
                      disabled={!stepValid}
                      className="bg-[#0EA5E9] text-white font-sub font-semibold rounded-full px-8 py-3 disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 transition-transform"
                    >
                      Continue →
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="bg-[#0EA5E9] text-white font-sub font-semibold rounded-full px-8 py-3 hover:scale-105 transition-transform shadow-lg shadow-[#0EA5E9]/30"
                    >
                      Confirm Booking ✓
                    </button>
                  )}
                </div>
              </form>
            </>
          )}
        </div>
      </main>
      <Footer />
    </motion.div>
  );
}
