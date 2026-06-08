"use client";

import { useState } from "react";
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
      <section className="bg-gray-950">
        {/* Intro bar */}
        <div className="px-4 pt-5 pb-3 flex items-center gap-4">
          {/* Robot icon */}
          <div className="relative flex-shrink-0">
            <div className="w-14 h-14 bg-gradient-to-br from-brand-red to-red-800 rounded-2xl flex items-center justify-center shadow-lg shadow-red-900/50">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a2 2 0 012 2v1h1a3 3 0 013 3v1h.5a1.5 1.5 0 010 3H18v1a3 3 0 01-3 3H9a3 3 0 01-3-3v-1h-.5a1.5 1.5 0 010-3H6V8a3 3 0 013-3h1V4a2 2 0 012-2zm0 2v1h-1a1 1 0 00-1 1v.5H9a1 1 0 000 2h.5V11H9a1 1 0 000 2h.5v.5a1 1 0 001 1h3a1 1 0 001-1V13h.5a1 1 0 000-2h-.5V8.5H15a1 1 0 000-2h-.5V7a1 1 0 00-1-1h-1zm-1.5 5.5a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2z" />
              </svg>
            </div>
            <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-gray-950 animate-pulse" />
          </div>
          {/* Teks intro */}
          <div className="flex-1">
            <p className="text-white font-extrabold text-base leading-tight">
              AI <span className="text-red-400">ChatorKEPAK</span>
            </p>
            <p className="text-gray-400 text-xs mt-0.5 leading-snug">
              Tanyakan soal anggaran, kemiskinan, atau program kerja Sumenep
            </p>
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
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-800 border border-gray-700 text-gray-300 text-xs font-medium hover:bg-gray-700 hover:border-red-500 hover:text-white transition-all whitespace-nowrap"
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
