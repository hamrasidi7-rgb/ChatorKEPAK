import Link from "next/link";

interface AIChatBannerProps {
  isOnline?: boolean;
}

export default function AIChatBanner({ isOnline = true }: AIChatBannerProps) {
  return (
    <section className="bg-brand-red">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
          </div>
          <div>
            <p className="text-white font-bold text-sm">
              Tanya apa saja ke AI Asisten Chator KEPAK
            </p>
            <p className="text-red-100 text-xs mt-0.5 leading-relaxed hidden sm:block">
              Tanyakan tentang visi-misi, program, kegiatan, agenda, atau hal lain seputar Nom Sihol &amp; Nom Pah.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
          <div className="flex items-center gap-1.5">
            <div
              className={`w-2 h-2 rounded-full ${
                isOnline ? "bg-green-400 animate-pulse" : "bg-gray-400"
              }`}
            />
            <span className="text-white text-xs font-semibold">
              {isOnline ? "Online" : "Offline"}
            </span>
          </div>
          <Link
            href="/ai-chat"
            className="bg-white text-brand-red font-bold text-xs px-4 py-2 rounded-full hover:bg-red-50 transition-colors whitespace-nowrap shadow-sm"
          >
            Mulai Chat AI →
          </Link>
        </div>
      </div>
    </section>
  );
}
