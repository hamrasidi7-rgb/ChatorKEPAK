import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-rose-100 overflow-hidden min-h-[260px] sm:min-h-[320px] md:min-h-[480px]">

      {/* Foto duo sebagai background full-width */}
      <Image
        src="/images/hero-duo.jpeg"
        alt="Nom Sihol & Nom Pah"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Gradient kiri → kanan: menyatu sempurna karena bg foto sudah rose */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(255,228,230,0.93) 0%, rgba(255,228,230,0.78) 24%, rgba(255,228,230,0.28) 48%, transparent 64%)",
        }}
      />

      {/* Teks overlay kiri */}
      <div className="relative z-20 flex flex-col justify-center min-h-[260px] sm:min-h-[320px] md:min-h-[480px] px-5 md:px-10 py-8 w-[52%] md:max-w-lg">
        <h1 className="text-[1.2rem] sm:text-2xl md:text-[2.4rem] font-extrabold text-gray-900 leading-tight mb-2 md:mb-3">
          Bersama Membangun{" "}
          <span className="text-brand-red">Sumenep</span>{" "}
          yang Maju &amp; Sejahtera
        </h1>
        <p className="text-gray-700 text-[10px] sm:text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
          Komitmen kami untuk mendengar aspirasi masyarakat, dan bekerja
          untuk masa depan Sumenep yang lebih baik.
        </p>
        <div>
          <Link
            href="/profil"
            className="inline-flex items-center gap-1.5 bg-brand-red hover:bg-brand-red-hover text-white font-bold text-xs md:text-sm px-4 md:px-5 py-2 md:py-2.5 rounded-full transition-colors shadow-md"
          >
            Tentang Kami
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>

    </section>
  );
}
