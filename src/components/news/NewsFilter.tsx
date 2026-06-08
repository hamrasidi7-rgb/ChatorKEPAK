"use client";

import { useState } from "react";
import NewsCard from "@/components/news/NewsCard";
import { seedNews } from "@/lib/seed-data";
import type { NewsKategori } from "@/types";

const categories: { value: "all" | NewsKategori; label: string }[] = [
  { value: "all", label: "Semua" },
  { value: "kegiatan", label: "Kegiatan" },
  { value: "program", label: "Program" },
  { value: "pernyataan", label: "Pernyataan" },
];

export default function NewsFilter() {
  const [active, setActive] = useState<"all" | NewsKategori>("all");

  const filtered =
    active === "all" ? seedNews : seedNews.filter((n) => n.kategori === active);

  return (
    <>
      {/* Filter tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto scrollbar-hide pb-1">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActive(cat.value)}
            className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${
              active === cat.value
                ? "bg-brand-red text-white shadow-sm"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* News grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filtered.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-gray-400">
          <svg className="w-12 h-12 mx-auto mb-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <p className="font-semibold">Belum ada berita dalam kategori ini.</p>
        </div>
      )}
    </>
  );
}
