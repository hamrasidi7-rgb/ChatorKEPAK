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
            <span className="text-white font-extrabold text-base md:text-lg leading-tight">
              Tanya AI Soal Sumenep
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
