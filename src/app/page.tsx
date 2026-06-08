"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Compass, TrendingDown, TrendingUp, HeartHandshake,
  GraduationCap, Wallet, Waypoints, BarChart3,
} from "lucide-react";
import HeroSection from "@/components/home/HeroSection";
import AIChatWidget from "@/components/ai/AIChatWidget";
import Link from "next/link";

const chipPrompts = [
  { id: "visi", label: "Visi misi", icon: Compass, prompt: "Jelaskan visi 'Sumenep Unggul, Mandiri, dan Sejahtera' dan 5 misi Bupati 2025–2030." },
  { id: "kemiskinan", label: "Angka kemiskinan", icon: TrendingDown, prompt: "Berapa angka kemiskinan Sumenep terbaru dan bagaimana trennya?" },
  { id: "ipm", label: "IPM", icon: TrendingUp, prompt: "Bagaimana perkembangan IPM Sumenep dari 2021 hingga sekarang?" },
  { id: "kesejahteraan", label: "Kesejahteraan", icon: HeartHandshake, prompt: "Apa program penguatan kesejahteraan masyarakat yang dijalankan?" },
  { id: "sdm", label: "Pendidikan & kesehatan", icon: GraduationCap, prompt: "Bagaimana peningkatan SDM diterjemahkan ke pendidikan dan kesehatan?" },
  { id: "anggaran", label: "Anggaran rakyat", icon: Wallet, prompt: "Berapa APBD yang dialokasikan untuk menekan kemiskinan?" },
  { id: "infrastruktur", label: "Infrastruktur kepulauan", icon: Waypoints, prompt: "Bagaimana keseimbangan pembangunan kepulauan dan daratan?" },
  { id: "ekonomi", label: "Ekonomi & daya beli", icon: BarChart3, prompt: "Bagaimana pertumbuhan ekonomi dan daya beli warga Sumenep?" },
];

export default function BerandaPage() {
  const [chatKey, setChatKey] = useState(0);
  const [pendingQuestion, setPendingQuestion] = useState<string | null>(null);

  function kirimChip(prompt: string) {
    setPendingQuestion(prompt);
    setChatKey((k) => k + 1);
  }

  return (
    <div>
      <HeroSection />

      {/* AI Chat Section */}
      <section className="bg-gray-100">

        {/* Intro bar */}
        <div className="px-4 pt-4 pb-3 flex items-center gap-3">
          <div className="flex-1">
            <h2 className="text-base font-bold text-gray-900">
              AI <span className="text-brand-red">ChatorKEPAK</span>
            </h2>
          </div>
          <div className="relative flex-shrink-0">
            <Image
              src="/images/ICON AI CHATOR KEPAK (2).png"
              alt="AI ChatorKEPAK"
              width={60}
              height={60}
              className="object-contain mix-blend-multiply drop-shadow-md"
            />
            <div className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-100 animate-pulse" />
          </div>
        </div>

        {/* 8 Quick-prompt — grid 2 kolom × 4 baris */}
        <div className="px-4 pb-4 grid grid-cols-2 gap-2">
          {chipPrompts.map((c) => (
            <button
              key={c.id}
              onClick={() => kirimChip(c.prompt)}
              className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-xs text-gray-700 font-medium shadow-sm hover:border-brand-red hover:text-brand-red transition-all text-left"
            >
              <c.icon className="h-4 w-4 text-brand-red flex-shrink-0" />
              <span className="leading-tight">{c.label}</span>
            </button>
          ))}
        </div>

        {/* Chat widget */}
        <div className="h-[420px] md:h-[480px]">
          <AIChatWidget key={chatKey} initialQuestion={pendingQuestion} showHeader={false} />
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
