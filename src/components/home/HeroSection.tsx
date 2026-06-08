import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="flex min-h-[340px] md:min-h-[480px]">

        {/* Kiri: Teks */}
        <div className="w-[52%] md:w-1/2 flex flex-col justify-center px-4 md:px-10 py-8 z-10">
          <p className="text-[9px] md:text-xs font-bold text-brand-red uppercase tracking-widest mb-2">
            Chator KEPAK 2025
          </p>
          <h1 className="text-lg sm:text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-3">
            Bersama Membangun{" "}
            <span className="text-brand-red">Sumenep</span>{" "}
            yang Maju &amp; Sejahtera
          </h1>
          <p className="text-gray-500 text-[11px] md:text-sm leading-relaxed mb-5 line-clamp-3 md:line-clamp-none">
            Komitmen kami untuk mendengar aspirasi masyarakat, dan bekerja
            untuk masa depan Sumenep yang lebih baik.
          </p>
          <div>
            <Link
              href="/profil"
              className="inline-flex items-center gap-1.5 bg-brand-red hover:bg-brand-red-hover text-white font-bold text-xs md:text-sm px-4 py-2 md:py-2.5 rounded-full transition-colors shadow-sm"
            >
              Tentang Kami
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Kanan: Dua foto tokoh */}
        <div className="w-[48%] md:w-1/2 relative bg-rose-50">
          <div className="absolute inset-0 flex">
            {/* Nom Sihol */}
            <div className="relative flex-1 overflow-hidden">
              <Image
                src="/images/nom-sihol.jpg"
                alt="Nom Sihol"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            {/* Nom Pah */}
            <div className="relative flex-1 overflow-hidden">
              <Image
                src="/images/nom-pah.jpg"
                alt="Nom Pah"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
          {/* Gradient kiri agar menyatu dengan background putih */}
          <div className="absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        </div>

      </div>
    </section>
  );
}
