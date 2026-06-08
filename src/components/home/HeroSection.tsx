import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-rose-100 overflow-hidden">
      <div className="relative min-h-[370px] md:min-h-[520px]">

        {/* Background: dua foto berdampingan full-width */}
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

        {/* Gradient overlay kiri → kanan agar teks terbaca */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgb(255,228,230) 28%, rgba(255,228,230,0.92) 42%, rgba(255,228,230,0.55) 58%, transparent 75%)",
          }}
        />

        {/* Konten teks */}
        <div className="relative z-20 flex flex-col justify-center min-h-[370px] md:min-h-[520px] px-5 md:px-10 py-10 w-[60%] md:max-w-lg">
          <h1 className="text-[1.35rem] sm:text-2xl md:text-[2.4rem] font-extrabold text-gray-900 leading-tight mb-3">
            Bersama Membangun{" "}
            <span className="text-brand-red">Sumenep</span>{" "}
            yang Maju &amp; Sejahtera
          </h1>
          <p className="text-gray-600 text-[11px] md:text-sm leading-relaxed mb-6">
            Komitmen kami untuk mendengar aspirasi masyarakat, dan bekerja
            untuk masa depan Sumenep yang lebih baik.
          </p>
          <div>
            <Link
              href="/profil"
              className="inline-flex items-center gap-1.5 bg-brand-red hover:bg-brand-red-hover text-white font-bold text-xs md:text-sm px-5 py-2.5 rounded-full transition-colors shadow-md"
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
      </div>
    </section>
  );
}
