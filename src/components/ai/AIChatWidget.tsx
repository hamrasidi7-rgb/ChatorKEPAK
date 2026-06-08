"use client";

import { useState, useRef, useEffect } from "react";
import {
  Compass, TrendingDown, TrendingUp, HeartHandshake,
  GraduationCap, Wallet, Waypoints, BarChart3,
} from "lucide-react";
import type { ChatMessage } from "@/types";

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

export default function AIChatWidget({
  initialQuestion = null,
  showHeader = true,
}: {
  initialQuestion?: string | null;
  showHeader?: boolean;
}) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const didAutoSend = useRef(false);

  const isOnline = process.env.NEXT_PUBLIC_AI_ONLINE !== "false";

  useEffect(() => {
    if (initialQuestion && !didAutoSend.current) {
      didAutoSend.current = true;
      sendMessage(initialQuestion);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialQuestion]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessage(content: string) {
    if (!content.trim() || loading) return;
    const userMsg: ChatMessage = { role: "user", content };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Maaf, terjadi kesalahan. Silakan coba lagi." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col h-full bg-slate-900">
      {/* Header */}
      {showHeader && (
        <div className="px-4 pt-4 pb-2 flex-shrink-0">
          <h2 className="text-base font-bold text-slate-100">
            AI <span className="text-amber-400">ChatorKEPAK</span>
          </h2>
          <p className="text-xs text-slate-400">
            Tanyakan soal visi misi, anggaran, kemiskinan &amp; kesejahteraan Sumenep
          </p>
          <div className="flex items-center gap-1.5 mt-1">
            <div className={`w-1.5 h-1.5 rounded-full ${isOnline ? "bg-green-400 animate-pulse" : "bg-gray-500"}`} />
            <span className="text-slate-500 text-xs">{isOnline ? "Online" : "Offline"}</span>
          </div>
        </div>
      )}

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2">
        {messages.length === 0 && (
          <p className="mt-8 text-center text-xs text-slate-500">
            Pilih topik di bawah atau ketik pertanyaan Anda.
          </p>
        )}
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${
              msg.role === "user"
                ? "ml-auto bg-amber-500/90 text-slate-900"
                : "mr-auto bg-white/10 text-slate-200"
            }`}
          >
            {msg.content}
          </div>
        ))}
        {loading && (
          <div className="mr-auto bg-white/10 rounded-2xl px-4 py-3">
            <div className="flex gap-1">
              {[0, 150, 300].map((delay) => (
                <div
                  key={delay}
                  className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                  style={{ animationDelay: `${delay}ms` }}
                />
              ))}
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Chip kategori */}
      <div className="px-4 py-2 flex gap-2 overflow-x-auto [scrollbar-width:none] flex-shrink-0">
        {chipPrompts.map((c) => (
          <button
            key={c.id}
            onClick={() => sendMessage(c.prompt)}
            className="flex shrink-0 items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200 transition hover:border-amber-300/50 hover:bg-white/10"
          >
            <c.icon className="h-3.5 w-3.5 text-amber-400" />
            {c.label}
          </button>
        ))}
      </div>

      {/* Input */}
      <div className="px-4 py-3 border-t border-white/10 flex gap-2 flex-shrink-0">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage(input)}
          placeholder="Ketik pertanyaan…"
          className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-amber-300/50"
        />
        <button
          onClick={() => sendMessage(input)}
          disabled={!input.trim() || loading}
          className="rounded-full bg-amber-500 disabled:bg-slate-700 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-amber-400"
        >
          Kirim
        </button>
      </div>
    </div>
  );
}
