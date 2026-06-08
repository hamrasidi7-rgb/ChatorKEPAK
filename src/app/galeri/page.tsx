import type { Metadata } from "next";
import Image from "next/image";
import { seedGallery } from "@/lib/seed-data";

export const metadata: Metadata = {
  title: "Galeri",
  description: "Dokumentasi foto dan video kegiatan Chator KEPAK bersama masyarakat Sumenep.",
};

export default function GaleriPage() {
  const photos = seedGallery.filter((g) => g.tipe === "foto");
  const videos = seedGallery.filter((g) => g.tipe === "video");

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">
          Galeri Kegiatan
        </h1>
        <p className="text-gray-500 mt-1 text-sm">
          Dokumentasi foto dan video kegiatan bersama masyarakat Sumenep
        </p>
      </div>

      {/* Photos */}
      {photos.length > 0 && (
        <section className="mb-10">
          <h2 className="font-extrabold text-lg text-gray-800 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Foto Kegiatan
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {photos.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-square rounded-xl overflow-hidden bg-gray-100 cursor-pointer"
              >
                <Image
                  src={item.media_url}
                  alt={item.judul}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-white text-xs font-semibold leading-tight">{item.judul}</p>
                    <p className="text-gray-300 text-[10px] mt-0.5">
                      {new Date(item.tanggal).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Videos */}
      {videos.length > 0 && (
        <section>
          <h2 className="font-extrabold text-lg text-gray-800 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.868v6.264a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            Video Kegiatan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {videos.map((item) => (
              <div key={item.id} className="rounded-xl overflow-hidden bg-gray-100 shadow-sm border border-gray-100">
                <div className="aspect-video">
                  <iframe
                    src={item.media_url}
                    title={item.judul}
                    className="w-full h-full"
                    allowFullScreen
                  />
                </div>
                <div className="p-3">
                  <p className="font-bold text-gray-800 text-sm">{item.judul}</p>
                  <p className="text-gray-400 text-xs mt-1">
                    {new Date(item.tanggal).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {photos.length === 0 && videos.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <svg className="w-12 h-12 mx-auto mb-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="font-semibold">Galeri belum tersedia.</p>
        </div>
      )}
    </div>
  );
}
