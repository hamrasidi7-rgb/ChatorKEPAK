import HeroSection from "@/components/home/HeroSection";
import AIChatWidget from "@/components/ai/AIChatWidget";
import Link from "next/link";

export default function BerandaPage() {
  return (
    <div>
      <HeroSection />

      <section className="bg-gray-900">
        {/* Header */}
        <div className="px-4 py-3 flex items-center gap-3 bg-gray-800">
          <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
          </div>
          <div>
            <p className="text-white font-bold text-sm leading-none">AI ChatorKEPAK</p>
            <div className="flex items-center gap-1 mt-0.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-gray-400 text-xs">Online</span>
            </div>
          </div>
        </div>
        {/* Full chat widget */}
        <div className="h-72 md:h-96">
          <AIChatWidget />
        </div>
      </section>

      {/* Kategori */}
      <section className="px-4 py-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-4">
          <Link
            href="/program"
            className="group flex flex-col items-center justify-center gap-2 p-6 rounded-2xl bg-amber-50 border-2 border-amber-200 hover:bg-amber-100 hover:border-amber-400 transition-all text-center shadow-sm"
          >
            <span className="text-2xl">💰</span>
            <span className="font-extrabold text-amber-800 text-sm md:text-base uppercase tracking-wide leading-tight">
              Anggaran Absurd
            </span>
          </Link>

          <Link
            href="/kemiskinan"
            className="group flex flex-col items-center justify-center gap-2 p-6 rounded-2xl bg-red-50 border-2 border-red-200 hover:bg-red-100 hover:border-brand-red transition-all text-center shadow-sm"
          >
            <span className="text-2xl">📉</span>
            <span className="font-extrabold text-red-800 text-sm md:text-base uppercase tracking-wide leading-tight">
              Kemiskinan
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
