import type { Metadata } from "next";
import NewsFilter from "@/components/news/NewsFilter";

export const metadata: Metadata = {
  title: "Berita",
  description: "Update terbaru kegiatan, program, dan pernyataan Chator KEPAK Sumenep.",
};

export default function NewsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">
          Berita &amp; Informasi
        </h1>
        <p className="text-gray-500 mt-1 text-sm">
          Update terbaru kegiatan, program, dan pernyataan Chator KEPAK
        </p>
      </div>

      <NewsFilter />
    </div>
  );
}
