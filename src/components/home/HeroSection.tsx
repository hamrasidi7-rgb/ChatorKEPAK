import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="relative flex min-h-[360px] md:min-h-[500px]">

        {/* Kiri: Teks — z-10 di atas panel foto */}
        <div className="w-[52%] md:w-1/2 relative z-10 flex flex-col justify-center px-4 md:px-10 py-10 bg-white">
          <h1 className="text-xl sm:text-2xl md:text-[2.5rem] font-extrabold text-gray-900 leading-tight mb-3">
            Bersama Membangun{" "}
            <span className="text-brand-red">Sumenep</span>{" "}
            yang Maju &amp; Sejahtera
          </h1>
          <p className="text-gray-500 text-[11px] md:text-sm leading-relaxed mb-6 line-clamp-4 md:line-clamp-none">
            Komitmen kami untuk mendengar aspirasi masyarakat, dan bekerja
            untuk masa depan Sumenep yang lebih baik.
          </p>
          <div>
            <Link
              href="/profil"
              className="inline-flex items-center gap-1.5 bg-brand-red hover:bg-brand-red-hover text-white font-bold text-xs md:text-sm px-4 md:px-5 py-2.5 rounded-full transition-colors shadow-sm"
            >
              Tentang Kami
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Kanan: Foto di atas background rose */}
        <div className="absolute right-0 top-0 bottom-0 w-[55%] md:w-[52%] bg-rose-100">
          {/* Dua foto berdampingan */}
          <div className="absolute inset-0 flex">
            <div className="relative flex-1 overflow-hidden">
              <Image
                src="/images/nom-sihol.jpg"
                alt="Nom Sihol"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="relative flex-1 overflow-hidden">
              <Image
                src="/images/nom-pah.jpg"
                alt="Nom Pah"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Gradient kiri: foto menyatu dengan background putih teks */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-20 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
        </div>

      </div>
    </section>
  );
}
