import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-rose-100 overflow-hidden min-h-[300px] sm:min-h-[380px] md:min-h-[520px]">

      {/* Foto duo background */}
      <Image
        src="/images/hero-duo.jpeg"
        alt="Nom Sihol & Nom Pah"
        fill
        className="object-cover object-top"
        priority
      />

      {/* Gradient bawah → atas: foto terlihat di atas, teks terbaca di bawah */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(255,228,230,0.97) 0%, rgba(255,228,230,0.88) 28%, rgba(255,228,230,0.3) 55%, transparent 74%)",
        }}
      />

      {/* Teks di bagian bawah */}
      <div className="absolute inset-x-0 bottom-0 z-20 px-5 md:px-10 pb-6 md:pb-10">
        <h1 className="text-2xl sm:text-3xl md:text-[2.8rem] font-extrabold text-gray-900 leading-tight mb-2 md:mb-3">
          Bersama Membangun{" "}
          <span className="text-brand-red">Sumenep</span>{" "}
          yang Maju &amp; Sejahtera
        </h1>
        <p className="text-gray-700 text-[11px] sm:text-sm md:text-base leading-relaxed mb-4 max-w-sm md:max-w-lg">
          Komitmen kami untuk mendengar aspirasi masyarakat, dan bekerja
          untuk masa depan Sumenep yang lebih baik.
        </p>
        <Link
          href="/profil"
          className="inline-flex items-center gap-1.5 bg-brand-red hover:bg-brand-red-hover text-white font-bold text-sm md:text-base px-5 py-2.5 rounded-full transition-colors shadow-md"
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
