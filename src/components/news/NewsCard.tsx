import Image from "next/image";
import Link from "next/link";
import type { NewsItem } from "@/types";

const kategoriStyle: Record<string, string> = {
  kegiatan: "bg-red-100 text-red-700",
  program: "bg-blue-100 text-blue-700",
  pernyataan: "bg-green-100 text-green-700",
  analisis_apbd: "bg-amber-100 text-amber-700",
};

const kategoriLabel: Record<string, string> = {
  kegiatan: "KEGIATAN",
  program: "PROGRAM",
  pernyataan: "PERNYATAAN",
  analisis_apbd: "ANGGARAN ABSURD",
};

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

interface NewsCardProps {
  news: NewsItem;
  compact?: boolean;
}

export default function NewsCard({ news, compact = false }: NewsCardProps) {
  return (
    <Link
      href={`/news/${news.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all h-full"
    >
      {/* Thumbnail */}
      <div className={`relative ${compact ? "h-32" : "h-44 md:h-48"} bg-gray-100 overflow-hidden`}>
        {news.thumbnail_url ? (
          <Image
            src={news.thumbnail_url}
            alt={news.judul}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
            <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
        {/* Category badge */}
        <div className="absolute top-2 left-2">
          <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full tracking-wide ${kategoriStyle[news.kategori]}`}>
            {kategoriLabel[news.kategori]}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-3 md:p-4">
        <h3 className="font-bold text-gray-900 text-sm leading-tight line-clamp-2 group-hover:text-brand-red transition-colors mb-1.5">
          {news.judul}
        </h3>
        {!compact && (
          <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 mb-2">
            {news.excerpt}
          </p>
        )}
        <div className="flex items-center gap-1 text-gray-400 text-xs mt-1">
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {formatDate(news.tanggal)}
        </div>
      </div>
    </Link>
  );
}
