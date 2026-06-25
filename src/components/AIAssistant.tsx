import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LOGO_URL = "https://i.postimg.cc/RVKfBfJg/22114-removebg-preview.png";

type Msg = { role: "user" | "assistant"; content: string };

const SUGGESTIONS = [
  "What services do you offer?",
  "How do invisible aligners work?",
  "What are your opening hours?",
  "How do I book an appointment?",
];

const GREETING: Msg = {
  role: "assistant",
  content:
    "Hi, I'm Nejashi 👋 — your AI dental assistant. Ask me about our services, hours, or how to book an appointment.",
};

export function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;
    const next: Msg[] = [...messages, { role: "user", content: trimmed }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next.filter((m) => m !== GREETING) }),
      });
      const data = (await res.json()) as { reply?: string };
      setMessages((m) => [
        ...m,
        { role: "assistant", content: data.reply ?? "I'm not sure — please try again." },
      ]);
    } catch {
      setMessages((m) => [
        ...m,
        { role: "assistant", content: "Connection issue. Please call +251 929 903 400." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Floating button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
        onClick={() => setOpen((o) => !o)}
        aria-label="Open Nejashi AI assistant"
        className="fixed bottom-6 right-6 z-[60] w-16 h-16 rounded-full bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] shadow-2xl shadow-[#0EA5E9]/40 flex items-center justify-center group hover:scale-110 transition-transform"
      >
        <span className="absolute inset-0 rounded-full bg-[#0EA5E9] animate-ping opacity-20" />
        <span className="relative text-white flex items-center justify-center">
          {open ? (
            <span className="text-2xl font-bold">✕</span>
          ) : (
            <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          )}
        </span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-28 right-6 z-[60] w-[calc(100vw-3rem)] max-w-sm h-[70vh] max-h-[600px] bg-white rounded-3xl shadow-2xl border border-[#0EA5E9]/20 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-br from-[#0A0F1E] to-[#1E293B] p-5 flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full bg-white/10 flex items-center justify-center overflow-hidden border border-[#0EA5E9]/40">
                <img src={LOGO_URL} alt="Nejashi" className="w-8 h-8 object-contain" />
              </div>
              <div>
                <p className="font-display text-white text-lg leading-none">Nejashi</p>
                <p className="font-body text-xs text-[#0EA5E9] flex items-center gap-1.5 mt-1">
                  <span className="w-2 h-2 rounded-full bg-[#0EA5E9] animate-pulse" />
                  AI Dental Assistant
                </p>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#F8FAFC]">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 font-body text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-[#0EA5E9] text-white rounded-br-sm"
                        : "bg-white text-[#1A1A2E] border border-[#0EA5E9]/10 rounded-bl-sm shadow-sm"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-[#0EA5E9]/10 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1.5 shadow-sm">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="w-2 h-2 rounded-full bg-[#0EA5E9] animate-bounce"
                        style={{ animationDelay: `${i * 0.15}s` }}
                      />
                    ))}
                  </div>
                </div>
              )}
              {messages.length === 1 && !loading && (
                <div className="pt-2 space-y-2">
                  <p className="font-sub text-xs uppercase tracking-wider text-[#1A1A2E]/50 px-1">
                    Try asking
                  </p>
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="block w-full text-left text-sm font-body text-[#0A0F1E] bg-white hover:bg-[#0EA5E9] hover:text-white border border-[#0EA5E9]/20 rounded-xl px-3 py-2 transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="p-3 border-t border-[#0EA5E9]/10 bg-white flex gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Nejashi anything..."
                className="flex-1 bg-[#F8FAFC] border border-[#0EA5E9]/20 rounded-full px-4 py-2.5 font-body text-sm focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/40"
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                className="w-10 h-10 rounded-full bg-[#0EA5E9] text-white shrink-0 disabled:opacity-40 hover:bg-[#0284C7] transition-colors"
              >
                ➤
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
