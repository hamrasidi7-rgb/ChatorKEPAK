import type { Metadata } from "next";
import AIChatWidget from "@/components/ai/AIChatWidget";

export const metadata: Metadata = {
  title: "AI Chat",
  description: "Tanyakan apa saja kepada AI Asisten Chator KEPAK tentang profil, program, dan kegiatan.",
};

export default function AIChatPage() {
  const isOnline = process.env.NEXT_PUBLIC_AI_ONLINE !== "false";

  return (
    <div className="h-[calc(100vh-3.5rem-5rem)] md:h-[calc(100vh-3.5rem)]">
      <AIChatWidget />
    </div>
  );
}
