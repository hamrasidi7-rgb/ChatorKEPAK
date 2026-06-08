"use client";

import Image from "next/image";
import HeroSection from "@/components/home/HeroSection";
import AIChatWidget from "@/components/ai/AIChatWidget";
import Link from "next/link";

export default function BerandaPage() {
  return (
    <div>
      <HeroSection />

      {/* AI Chat Section */}
      <section className="bg-slate-900">
        {/* Intro bar dengan robot icon */}
        <div className="px-4 pt-4 pb-0 flex items-center gap-3">
          <div className="flex-1">
            <h2 className="text-base font-bold text-slate-100">
              AI <span className="text-amber-400">ChatorKEPAK</span>
            </h2>
            <p className="text-xs text-slate-400 leading-snug">
              Tanyakan soal visi misi, anggaran, kemiskinan &amp; kesejahteraan Sumenep
            </p>
          </div>
          <div className="relative flex-shrink-0">
            <div className="w-16 h-16 relative">
              <Image
                src="/images/ICON AI CHATOR KEPAK.png"
                alt="AI ChatorKEPAK"
                fill
                className="object-contain drop-shadow-md"
              />
            </div>
            <div className="absolute top-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-slate-900 animate-pulse" />
          </div>
        </div>

        {/* Chat widget — tanpa header duplikat */}
        <div className="h-[480px] md:h-[540px]">
          <AIChatWidget showHeader={false} />
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
