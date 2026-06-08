"use client";

import { useState } from "react";
import Image from "next/image";
import HeroSection from "@/components/home/HeroSection";
import AIChatWidget from "@/components/ai/AIChatWidget";
import Link from "next/link";

const quickQuestions = [
  { label: "Anggaran pendidikan", icon: "🎓" },
  { label: "Dampak kemiskinan", icon: "📉" },
  { label: "Program kerja", icon: "📋" },
  { label: "Anggaran absurd", icon: "💰" },
  { label: "Visi misi", icon: "🎯" },
];

export default function BerandaPage() {
  const [chatKey, setChatKey] = useState(0);
  const [pendingQuestion, setPendingQuestion] = useState<string | null>(null);

  return (
    <div>
      <HeroSection />

      {/* AI Chat Section — menonjol */}
      <section className="bg-slate-100">
        {/* Intro bar */}
        <div className="px-4 pt-5 pb-3 flex items-center gap-4">
          {/* Teks intro */}
          <div className="flex-1">
            <p className="text-gray-900 font-extrabold text-base leading-tight">
              AI <span className="text-brand-red">ChatorKEPAK</span>
            </p>
            <p className="text-gray-500 text-xs mt-0.5 leading-snug">
              Tanyakan soal anggaran, kemiskinan, atau program kerja Sumenep
            </p>
          </div>
          {/* Robot icon — kanan */}
          <div className="relative flex-shrink-0">
            <div className="w-20 h-20 relative">
              <Image
                src="/images/ICON AI CHATOR KEPAK.png"
                alt="AI ChatorKEPAK"
                fill
                className="object-contain drop-shadow-md"
              />
            </div>
            <div className="absolute top-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-slate-100 animate-pulse" />
          </div>
        </div>

        {/* Quick question pills */}
        <div className="px-4 pb-3 overflow-x-auto">
          <div className="flex gap-2 w-max">
            {quickQuestions.map((q, i) => (
              <button
                key={i}
                onClick={() => {
                  setPendingQuestion(q.label);
                  setChatKey((k) => k + 1);
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-gray-600 text-xs font-medium hover:bg-gray-50 hover:border-brand-red hover:text-brand-red transition-all whitespace-nowrap shadow-sm"
              >
                <span>{q.icon}</span>
                <span>{q.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Chat widget */}
        <div className="h-[420px] md:h-[500px]">
          <AIChatWidgetWithQuestion key={chatKey} initialQuestion={pendingQuestion} />
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

/* Wrapper agar quick question bisa auto-send ke chat */
function AIChatWidgetWithQuestion({ initialQuestion }: { initialQuestion: string | null }) {
  return <AIChatWidget initialQuestion={initialQuestion} showHeader={false} />;
}
