import Image from "next/image";

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
      </div>

    </section>
  );
}
