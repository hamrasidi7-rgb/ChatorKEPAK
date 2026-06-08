"use client";

import { useState, useRef, useEffect } from "react";
import type { ChatMessage } from "@/types";

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
      {/* Header — hanya di halaman /ai-chat */}
      {showHeader && (
        <div className="px-4 pt-4 pb-2 flex-shrink-0">
          <h2 className="text-base font-bold text-slate-100">
            AI <span className="text-red-400">ChatorKEPAK</span>
          </h2>
          <div className="flex items-center gap-1.5 mt-1">
            <div className={`w-1.5 h-1.5 rounded-full ${isOnline ? "bg-green-400 animate-pulse" : "bg-gray-500"}`} />
            <span className="text-slate-500 text-xs">{isOnline ? "Online" : "Offline"}</span>
          </div>
        </div>
      )}

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2">
        {messages.length === 0 && (
          <p className="mt-10 text-center text-xs text-slate-500">
            Pilih topik di atas atau ketik pertanyaan Anda.
          </p>
        )}
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${
              msg.role === "user"
                ? "ml-auto bg-brand-red text-white"
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

      {/* Input */}
      <div className="px-4 py-3 border-t border-white/10 flex gap-2 flex-shrink-0">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage(input)}
          placeholder="Ketik pertanyaan…"
          className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-red-400/50"
        />
        <button
          onClick={() => sendMessage(input)}
          disabled={!input.trim() || loading}
          className="rounded-full bg-brand-red disabled:bg-slate-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-red-hover"
        >
          Kirim
        </button>
      </div>
    </div>
  );
}
