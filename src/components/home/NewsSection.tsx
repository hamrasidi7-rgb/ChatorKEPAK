import Link from "next/link";
import NewsCard from "@/components/news/NewsCard";
import { seedNews } from "@/lib/seed-data";

export default function NewsSection() {
  const latestNews = seedNews.slice(0, 4);

  return (
    <section className="py-8 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900">
            Berita Terbaru
          </h2>
          <Link
            href="/news"
            className="text-brand-red font-semibold text-sm hover:underline flex items-center gap-1"
          >
            Lihat Semua Berita
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="md:hidden flex gap-3 overflow-x-auto scrollbar-hide -mx-1 px-1 pb-2">
          {latestNews.map((news) => (
            <div key={news.id} className="flex-none w-56">
              <NewsCard news={news} compact />
            </div>
          ))}
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4">
          {latestNews.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      </div>
    </section>
  );
}
