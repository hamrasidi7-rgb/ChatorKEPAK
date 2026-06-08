import Image from "next/image";

const items = [
  {
    id: 1,
    src: "/images/deni-forum.jpg",
    alt: "Deni Forum Wartawan",
  },
  {
    id: 2,
    src: "/images/apbd-sibuk.jpg",
    alt: "APBD Sibuk",
  },
  {
    id: 3,
    src: "/ANGGARAN 3.jpg",
    alt: "Anggaran 3",
  },
];

export default function ProgramPage() {
  return (
    <div className="min-h-screen bg-white pb-24">

      {/* Header kategori */}
      <div className="bg-amber-50 border-b border-amber-200 px-4 py-5 text-center">
        <span className="text-xs font-extrabold text-amber-700 uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-full">
          Kategori
        </span>
        <h1 className="text-2xl font-extrabold text-amber-900 uppercase tracking-wide mt-2">
          Anggaran Absurd
        </h1>
      </div>

      {/* 3 Kartu gambar */}
      <div className="px-4 py-6 grid grid-cols-1 gap-4 max-w-2xl mx-auto">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl overflow-hidden shadow-md border border-gray-100"
          >
            <div className="relative w-full aspect-video">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
