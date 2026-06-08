import HeroSection from "@/components/home/HeroSection";
import AIChatWidget from "@/components/ai/AIChatWidget";
import Link from "next/link";

export default function BerandaPage() {
  const isOnline = process.env.NEXT_PUBLIC_AI_ONLINE !== "false";

  return (
    <div>
      <HeroSection />

      <section className="py-8 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-extrabold text-white">
              AI Chat Chator KEPAK
            </h2>
            <div className="flex items-center gap-1.5">
              <div
                className={`w-2 h-2 rounded-full ${
                  isOnline ? "bg-green-400 animate-pulse" : "bg-gray-500"
                }`}
              />
              <span className="text-gray-400 text-xs font-medium">
                {isOnline ? "Online" : "Offline"}
              </span>
            </div>
          </div>
          <AIChatWidget isPreview />
        </div>
      </section>

      {/* Kategori */}
      <section className="px-4 py-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/program"
            className="group flex flex-col items-center justify-center gap-2 p-6 rounded-2xl bg-amber-50 border-2 border-amber-200 hover:bg-amber-100 hover:border-amber-400 transition-all text-center shadow-sm"
          >
            <span className="text-2xl">💰</span>
            <span className="font-extrabold text-amber-800 text-sm md:text-base uppercase tracking-wide leading-tight">
              Anggaran Absurd
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
