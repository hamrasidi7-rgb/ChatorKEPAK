import type { Metadata } from "next";
import AIChatWidget from "@/components/ai/AIChatWidget";

export const metadata: Metadata = {
  title: "AI Chat",
  description: "Tanyakan apa saja kepada AI Asisten Chator KEPAK tentang profil, program, dan kegiatan.",
};

export default function AIChatPage() {
  const isOnline = process.env.NEXT_PUBLIC_AI_ONLINE !== "false";

  return (
    <div className="flex flex-col h-[calc(100vh-3.5rem-5rem)] md:h-[calc(100vh-3.5rem)]">
      {/* Chat header */}
      <div className="bg-gray-900 px-4 py-3 flex items-center gap-3 flex-shrink-0">
        <div className="w-9 h-9 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
        </div>
        <div className="flex-1">
          <p className="text-white font-bold text-sm leading-none">
            AI Asisten Chator KEPAK
          </p>
          <div className="flex items-center gap-1.5 mt-1">
            <div
              className={`w-1.5 h-1.5 rounded-full ${
                isOnline ? "bg-green-400 animate-pulse" : "bg-gray-500"
              }`}
            />
            <span className="text-gray-400 text-xs">
              {isOnline ? "Siap membantu Anda" : "Sedang offline"}
            </span>
          </div>
        </div>
      </div>

      {/* Chat widget fills remaining height */}
      <div className="flex-1 overflow-hidden">
        <AIChatWidget />
      </div>
    </div>
  );
}
