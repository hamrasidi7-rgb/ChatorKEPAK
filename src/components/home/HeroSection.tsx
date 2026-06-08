import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-rose-100 overflow-hidden">
      <div className="flex h-56 sm:h-64 md:h-80">

        {/* Kiri: teks (40% lebar) */}
        <div className="w-[40%] flex-shrink-0 flex flex-col justify-center px-3 sm:px-5 md:px-8 py-5">
          <h1 className="text-[1rem] sm:text-xl md:text-3xl font-extrabold text-gray-900 leading-tight mb-2">
            Bersama Membangun{" "}
            <span className="text-brand-red">Sumenep</span>{" "}
            yang Maju &amp; Sejahtera
          </h1>
          <p className="text-[9px] sm:text-xs md:text-sm text-gray-600 leading-relaxed mb-3 md:mb-4">
            Komitmen kami untuk mendengar aspirasi masyarakat, dan bekerja
            untuk masa depan Sumenep yang lebih baik.
          </p>
          <div>
            <Link
              href="/profil"
              className="inline-flex items-center gap-1 bg-brand-red hover:bg-brand-red-hover text-white font-bold text-[10px] sm:text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full transition-colors shadow-sm"
            >
              Tentang Kami
              <svg
                className="w-3 h-3"
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

        {/* Kanan: dua foto berdampingan (60% lebar) */}
        <div className="flex-1 flex">
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

      </div>
    </section>
  );
}
