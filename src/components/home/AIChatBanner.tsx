import Link from "next/link";

interface AIChatBannerProps {
  isOnline?: boolean;
}

export default function AIChatBanner({ isOnline = true }: AIChatBannerProps) {
  return (
    <div className="px-3 md:px-6 -mt-5 relative z-30 pb-3">
      <Link
        href="/ai-chat"
        className="block bg-brand-red rounded-2xl p-4 shadow-xl hover:bg-brand-red-hover transition-colors"
      >
        <div className="flex items-start gap-3">
          {/* Ikon chat */}
          <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
          </div>

          {/* Konten */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-0.5">
              <span className="text-white font-extrabold text-sm leading-tight">
                Tanya apa saja ke AI Asisten Chator KEPAK
              </span>
              <span className="flex items-center gap-1 text-[10px] font-semibold whitespace-nowrap">
                <span
                  className={`w-1.5 h-1.5 rounded-full inline-block ${
                    isOnline ? "bg-green-400 animate-pulse" : "bg-gray-400"
                  }`}
                />
                <span className={isOnline ? "text-green-300" : "text-gray-300"}>
                  {isOnline ? "Online" : "Offline"}
                </span>
              </span>
            </div>
            <p className="text-red-100 text-[10px] md:text-xs leading-snug mb-2.5">
              Tanyakan tentang visi-misi, program, kegiatan, agenda, atau hal
              lain seputar Nom Sihol &amp; Nom Pah.
            </p>
            <span className="inline-flex items-center gap-1 bg-white text-brand-red font-bold text-xs px-3 py-1.5 rounded-full shadow-sm">
              Mulai Chat AI →
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
