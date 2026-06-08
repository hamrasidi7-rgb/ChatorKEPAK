import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { seedNews } from "@/lib/seed-data";

export function generateStaticParams() {
  return seedNews.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const news = seedNews.find((n) => n.slug === slug);
  return {
    title: news?.judul ?? "Berita",
    description: news?.excerpt,
  };
}

const kategoriStyle: Record<string, string> = {
  kegiatan: "bg-red-100 text-red-700",
  program: "bg-blue-100 text-blue-700",
  pernyataan: "bg-green-100 text-green-700",
};

const kategoriLabel: Record<string, string> = {
  kegiatan: "Kegiatan",
  program: "Program",
  pernyataan: "Pernyataan",
};

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const news = seedNews.find((n) => n.slug === slug);
  if (!news) notFound();

  const date = new Date(news.tanggal).toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const related = seedNews.filter((n) => n.slug !== slug).slice(0, 2);

  return (
    <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
      {/* Back link */}
      <Link
        href="/news"
        className="inline-flex items-center gap-1.5 text-brand-red text-sm font-semibold mb-6 hover:underline"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
        </svg>
        Kembali ke Berita
      </Link>

      {/* Meta */}
      <div className="flex items-center gap-3 mb-4 flex-wrap">
        <span
          className={`text-xs font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wide ${kategoriStyle[news.kategori]}`}
        >
          {kategoriLabel[news.kategori]}
        </span>
        <span className="text-gray-400 text-sm">{date}</span>
      </div>

      <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight mb-4">
        {news.judul}
      </h1>

      <p className="text-gray-500 text-base leading-relaxed mb-6 font-medium border-l-4 border-brand-red pl-4">
        {news.excerpt}
      </p>

      {news.thumbnail_url && (
        <div className="relative h-56 md:h-80 rounded-2xl overflow-hidden mb-8 bg-gray-100">
          <Image src={news.thumbnail_url} alt={news.judul} fill className="object-cover" />
        </div>
      )}

      {/* Article body */}
      <div
        className="prose prose-sm md:prose-base max-w-none text-gray-700 prose-headings:font-extrabold prose-headings:text-gray-900 prose-a:text-brand-red prose-blockquote:border-brand-red prose-blockquote:text-gray-600 prose-p:leading-relaxed"
        dangerouslySetInnerHTML={{ __html: news.konten }}
      />

      {/* Related */}
      {related.length > 0 && (
        <div className="mt-12 pt-8 border-t border-gray-100">
          <h2 className="font-extrabold text-lg text-gray-900 mb-4">Berita Lainnya</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {related.map((n) => (
              <Link
                key={n.id}
                href={`/news/${n.slug}`}
                className="group p-4 rounded-xl border border-gray-100 hover:border-brand-red hover:shadow-sm transition-all"
              >
                <span
                  className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase ${kategoriStyle[n.kategori]}`}
                >
                  {kategoriLabel[n.kategori]}
                </span>
                <p className="mt-2 font-bold text-gray-800 text-sm group-hover:text-brand-red transition-colors line-clamp-2">
                  {n.judul}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
