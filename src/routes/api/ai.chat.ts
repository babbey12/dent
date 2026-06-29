import { createFileRoute } from "@tanstack/react-router";

const SYSTEM_PROMPT = `You are Dr. Assefa, the friendly AI dental assistant for Dr. Assefa Dent in Addis Ababa, Ethiopia.

CLINIC INFO:
- Name: Dr. Assefa Dent
- Tagline: "Where Specialty Meets Compassion"
- Address: Addis Ababa, Ethiopia
- Phone: +251 911 673 365 / 0910 727 441
- Hours: Mon–Sat 9:00 AM – 6:00 PM, Sunday Closed

SERVICES: Invisible Aligners, Orthodontics, Dental Implants, Gum Disease treatment, Cosmetic Dentistry, Oral Surgery, Wisdom Teeth removal, General Dentistry, Teeth Whitening, Pediatric Dentistry, Restorative Dentistry, Emergency Care, Preventive Care.

YOUR ROLE:
- Answer questions about services, hours, location, and general dental health
- Be warm, concise, professional, and reassuring
- For booking, direct patients to the Book Appointment page or to call +251 911 673 365 / 0910 727 441
- Never give medical diagnoses — recommend an in-person consultation for any specific clinical concern
- Keep responses under 120 words unless detail is requested
- Never mention the underlying AI model or platform you run on. You are simply "Dr. Assefa".`;

type ChatMessage = { role: "user" | "assistant"; content: string };

export const Route = createFileRoute("/api/ai/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = (await request.json()) as { messages?: ChatMessage[] };
          const incoming = Array.isArray(body.messages) ? body.messages : [];

          const messages = [
            { role: "system", content: SYSTEM_PROMPT },
            ...incoming
              .slice(-12)
              .filter(
                (m) =>
                  m &&
                  (m.role === "user" || m.role === "assistant") &&
                  typeof m.content === "string" &&
                  m.content.length > 0 &&
                  m.content.length < 2000,
              ),
          ];

          // Cloudflare Workers AI binding - only available when deployed.
          const g = globalThis as unknown as {
            AI?: { run: (model: string, opts: unknown) => Promise<{ response?: string }> };
            __env?: { AI?: { run: (model: string, opts: unknown) => Promise<{ response?: string }> } };
          };
          const ai = g.AI ?? g.__env?.AI ?? null;
          if (!ai) {
            return Response.json(
              {
                reply:
                  "Hello! I'm Dr. Assefa, the clinic's AI assistant. I'm currently offline in this preview environment. Please call +251 911 673 365 / 0910 727 441 or visit the Book Appointment page — our team will be delighted to help you.",
                offline: true,
              },
              { status: 200 },
            );
          }

          const result = await ai.run("@cf/meta/llama-3.1-8b-instruct", {
            messages,
            max_tokens: 256,
          });

          const reply =
            (result?.response as string | undefined) ??
            "I'm here to help — could you rephrase that?";

          return Response.json({ reply });
        } catch (err) {
          console.error("AI chat error:", err);
          return Response.json(
            { reply: "Something went wrong. Please call +251 911 673 365 / 0910 727 441.", error: true },
            { status: 200 },
          );
        }
      },
    },
  },
});
