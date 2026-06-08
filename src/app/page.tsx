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
          <AIChatWidget isPreview />
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
