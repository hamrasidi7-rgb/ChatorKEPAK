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
          {/* Ikon chat: lingkaran putih + ikon merah */}
          <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
            <svg
              className="w-6 h-6 text-brand-red"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </div>

          {/* Konten */}
          <div className="flex-1 min-w-0">
            {/* Judul + Online sebaris */}
            <div className="flex items-center justify-between gap-2 mb-0.5">
              <span className="text-white font-extrabold text-sm leading-tight">
                Tanya apa saja ke AI Asisten Chator KEPAK
              </span>
              <span className="flex items-center gap-1 text-[10px] font-semibold whitespace-nowrap flex-shrink-0">
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
