"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import type { ChatMessage } from "@/types";

const categoryBoxes = [
  { label: "Anggaran Absurd", href: "/program", color: "bg-amber-50 border-amber-200 text-amber-800", icon: "💰" },
  { label: "Anggaran Absurd", href: "/program", color: "bg-amber-50 border-amber-200 text-amber-800", icon: "📊" },
  { label: "Kemiskinan", href: "/kemiskinan", color: "bg-red-50 border-red-200 text-red-800", icon: "📉" },
  { label: "Kemiskinan", href: "/kemiskinan", color: "bg-red-50 border-red-200 text-red-800", icon: "🏘️" },
];

export default function AIChatWidget({
  isPreview = false,
  initialQuestion = null,
  showHeader = true,
}: {
  isPreview?: boolean;
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

  /* ── Preview mode ── */
  if (isPreview) {
    return (
      <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg">
        <div className="bg-gray-800 px-4 py-3 flex items-center gap-3">
          <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-white font-bold text-sm leading-none">AI ChatorKEPAK</p>
            <div className="flex items-center gap-1 mt-0.5">
              <div className={`w-1.5 h-1.5 rounded-full ${isOnline ? "bg-green-400 animate-pulse" : "bg-gray-500"}`} />
              <span className="text-gray-400 text-xs">{isOnline ? "Online" : "Offline"}</span>
            </div>
          </div>
        </div>
        <div className="px-4 pb-4">
          <div className="flex gap-2 bg-gray-800 rounded-full px-3 py-2 items-center">
            <span className="flex-1 text-gray-600 text-xs"></span>
            <div className="w-7 h-7 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ── Full chat mode ── */
  return (
    <div className="flex flex-col h-full bg-gray-900">
      {/* Header — hanya tampil jika showHeader=true (misal di halaman /ai-chat) */}
      {showHeader && (
        <div className="px-4 py-3 flex items-center gap-3 bg-gray-800 flex-shrink-0">
          <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
          </div>
          <div>
            <p className="text-white font-bold text-sm leading-none">AI ChatorKEPAK</p>
            <div className="flex items-center gap-1 mt-0.5">
              <div className={`w-1.5 h-1.5 rounded-full ${isOnline ? "bg-green-400 animate-pulse" : "bg-gray-500"}`} />
              <span className="text-gray-400 text-xs">{isOnline ? "Online" : "Offline"}</span>
            </div>
          </div>
        </div>
      )}

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.length === 0 && (
          <div className="grid grid-cols-2 gap-3 pt-2">
            {categoryBoxes.map((box, i) => (
              <Link
                key={i}
                href={box.href}
                className={`flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border-2 ${box.color} text-center hover:opacity-80 transition-opacity`}
              >
                <span className="text-2xl">{box.icon}</span>
                <span className="font-extrabold text-xs uppercase tracking-wide leading-tight">
                  {box.label}
                </span>
              </Link>
            ))}
          </div>
        )}
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                msg.role === "user"
                  ? "bg-brand-red text-white rounded-br-sm"
                  : "bg-gray-700 text-gray-100 rounded-bl-sm"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-gray-700 rounded-2xl rounded-bl-sm px-4 py-3">
              <div className="flex gap-1">
                {[0, 150, 300].map((delay) => (
                  <div
                    key={delay}
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: `${delay}ms` }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="px-4 py-3 border-t border-gray-700 flex-shrink-0">
        <div className="flex gap-2 items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage(input)}
            placeholder=""
            className="flex-1 bg-gray-800 text-white rounded-full px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand-red/30 placeholder-gray-500"
          />
          <button
            onClick={() => sendMessage(input)}
            disabled={!input.trim() || loading}
            className="w-10 h-10 bg-brand-red disabled:bg-gray-600 rounded-full flex items-center justify-center transition-colors flex-shrink-0"
          >
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
