import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="overflow-hidden">

      {/* Foto atas */}
      <div className="relative w-full h-[240px] sm:h-[300px] md:h-[440px]">
        <Image
          src="/images/hero-duo.jpeg"
          alt="Nom Sihol & Nom Pah"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Panel judul elegan di bawah foto */}
      <div className="bg-[#1E0808] px-5 md:px-10 py-5 md:py-8 text-center flex flex-col items-center">
        <h1 className="text-2xl sm:text-3xl md:text-[2.8rem] font-extrabold text-white leading-tight mb-2 md:mb-3">
          Bersama Membangun{" "}
          <span className="text-red-400">Sumenep</span>{" "}
          yang Maju &amp; Sejahtera
        </h1>
        <p className="text-red-100/70 text-[11px] sm:text-sm leading-relaxed mb-4 md:mb-5 max-w-lg">
          Komitmen kami untuk mendengar aspirasi masyarakat, dan bekerja
          untuk masa depan Sumenep yang lebih baik.
        </p>
        <Link
          href="/profil"
          className="inline-flex items-center gap-1.5 bg-brand-red hover:bg-brand-red-hover text-white font-bold text-sm md:text-base px-5 py-2.5 rounded-full transition-colors shadow-lg"
        >
          Tentang Kami
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>

    </section>
  );
}
