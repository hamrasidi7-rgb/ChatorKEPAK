import Link from "next/link";

const menuItems = [
  {
    href: "/profil",
    label: "Profil",
    desc: "Kenali lebih dekat Nom Sihol & Nom Pah, latar belakang, visi, dan perjalanan mereka.",
    cta: "Lihat Profil",
    icon: (
      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    href: "/news",
    label: "News",
    desc: "Informasi terbaru seputar kegiatan, program, pernyataan, dan berita.",
    cta: "Lihat News",
    icon: (
      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
  },
  {
    href: "/galeri",
    label: "Galeri",
    desc: "Dokumentasi foto dan video kegiatan bersama masyarakat.",
    cta: "Lihat Galeri",
    icon: (
      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    href: "/program",
    label: "Program",
    desc: "Program kerja dan komitmen untuk Sumenep yang lebih baik.",
    cta: "Lihat Program",
    icon: (
      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    href: "/ai-chat",
    label: "AI Chat",
    desc: "Tanyakan apa saja seputar kami dan program kami.",
    cta: "Mulai Chat",
    icon: (
      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
];

export default function QuickMenuGrid() {
  return (
    <section className="py-4 px-3 md:py-5 md:px-4 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-5 gap-1.5 md:gap-4">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col items-center gap-1 p-2 md:p-4 rounded-xl md:rounded-2xl border border-gray-100 hover:border-brand-red hover:shadow-md transition-all text-center bg-white"
            >
              {/* Ikon lingkaran merah */}
              <div className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-red-50 group-hover:bg-brand-red flex items-center justify-center transition-colors text-brand-red group-hover:text-white flex-shrink-0">
                {item.icon}
              </div>

              {/* Label */}
              <span className="text-[11px] md:text-sm font-extrabold text-gray-800 group-hover:text-brand-red transition-colors leading-tight">
                {item.label}
              </span>

              {/* Deskripsi */}
              <p className="text-[9px] md:text-[11px] text-gray-400 leading-tight">
                {item.desc}
              </p>

              {/* CTA */}
              <span className="text-[9px] md:text-xs text-brand-red font-bold mt-0.5 flex items-center gap-0.5">
                {item.cta} →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
