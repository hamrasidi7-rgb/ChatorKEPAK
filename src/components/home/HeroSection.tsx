import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-rose-100 overflow-hidden">

      {/* Dua foto berdampingan — tinggi section mengikuti foto */}
      <div className="flex w-full">
        <div className="flex-1">
          <Image
            src="/images/nom-sihol.jpg"
            alt="Nom Sihol"
            width={600}
            height={750}
            className="w-full h-auto block object-cover object-top"
            priority
          />
        </div>
        <div className="flex-1">
          <Image
            src="/images/nom-pah.jpg"
            alt="Nom Pah"
            width={600}
            height={750}
            className="w-full h-auto block object-cover object-top"
          />
        </div>
      </div>

      {/* Gradient overlay kiri → kanan */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgb(255,228,230) 25%, rgba(255,228,230,0.9) 40%, rgba(255,228,230,0.5) 58%, transparent 74%)",
        }}
      />

      {/* Teks overlay di kiri */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center px-5 md:px-10 py-8 w-[60%] md:max-w-lg">
        <h1 className="text-[1.3rem] sm:text-2xl md:text-[2.4rem] font-extrabold text-gray-900 leading-tight mb-2 md:mb-3">
          Bersama Membangun{" "}
          <span className="text-brand-red">Sumenep</span>{" "}
          yang Maju &amp; Sejahtera
        </h1>
        <p className="text-gray-600 text-[10px] sm:text-xs md:text-sm leading-relaxed mb-5">
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
