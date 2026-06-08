import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-6 items-center min-h-[360px] md:min-h-[460px]">
        {/* Text */}
        <div className="order-2 md:order-1 z-10">
          <p className="text-xs font-bold text-brand-red uppercase tracking-widest mb-3">
            Chator KEPAK 2025
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Bersama Membangun{" "}
            <span className="text-brand-red">Sumenep</span>{" "}
            yang Maju &amp; Sejahtera
          </h1>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-7 max-w-md">
            Komitmen kami untuk mendengar aspirasi masyarakat, bekerja bersama,
            dan membangun masa depan Sumenep yang lebih baik untuk semua.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/profil"
              className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white font-bold text-sm px-5 py-2.5 rounded-full transition-colors shadow-sm"
            >
              Tentang Kami
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/program"
              className="inline-flex items-center gap-2 border-2 border-gray-300 hover:border-brand-red text-gray-700 hover:text-brand-red font-bold text-sm px-5 py-2.5 rounded-full transition-colors"
            >
              Lihat Program
            </Link>
          </div>
        </div>

        {/* Photos */}
        <div className="order-1 md:order-2 relative flex justify-center md:justify-end">
          <div className="flex gap-3 items-end">
            <div className="relative">
              <div className="w-36 h-44 md:w-44 md:h-56 lg:w-52 lg:h-64 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="/images/nom-sihol.jpg"
                  alt="Nom Sihol"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap shadow">
                Nom Sihol
              </div>
            </div>
            <div className="relative mb-6">
              <div className="w-36 h-44 md:w-44 md:h-56 lg:w-52 lg:h-64 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="/images/nom-pah.jpg"
                  alt="Nom Pah"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap shadow">
                Nom Pah
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-50/70 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200" />
    </section>
  );
}
