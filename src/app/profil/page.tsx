import type { Metadata } from "next";
import Image from "next/image";
import { seedProfiles } from "@/lib/seed-data";

export const metadata: Metadata = {
  title: "Profil",
  description: "Kenali Nom Sihol dan Nom Pah — dua tokoh di balik kampanye Chator KEPAK untuk Sumenep.",
};

const focusTags = ["Transparansi APBD", "Infrastruktur", "Pendidikan", "Kesehatan", "Ekonomi Rakyat"];

export default function ProfilPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
      {/* Header */}
      <div className="text-center mb-8 md:mb-12">
        <p className="text-brand-red font-bold text-xs uppercase tracking-widest mb-2">
          Tentang Kami
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Profil Chator KEPAK
        </h1>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm md:text-base">
          Dua tokoh masyarakat Sumenep yang berkomitmen membangun daerah dengan integritas dan kerja nyata.
        </p>
      </div>

      {/* Profile cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {seedProfiles.map((profile) => (
          <div
            key={profile.id}
            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
          >
            <div className="relative h-72 md:h-80 bg-gray-100">
              {profile.foto_url && (
                <Image
                  src={profile.foto_url}
                  alt={profile.nama}
                  fill
                  className="object-cover object-top"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-5">
                <h2 className="text-white font-extrabold text-2xl leading-none">
                  {profile.nama}
                </h2>
                <p className="text-red-300 text-sm font-semibold mt-1">{profile.jabatan}</p>
              </div>
            </div>

            <div className="p-5 md:p-6">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">{profile.bio}</p>

              <div className="mt-5 pt-5 border-t border-gray-100">
                <h3 className="font-extrabold text-gray-900 mb-2 text-sm uppercase tracking-wide">Visi</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Mewujudkan Sumenep yang maju, sejahtera, dan berkeadilan melalui pengelolaan APBD yang
                  transparan, efisien, dan berpihak kepada seluruh lapisan masyarakat.
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <h3 className="font-extrabold text-gray-900 mb-3 text-sm uppercase tracking-wide">
                  Fokus Utama
                </h3>
                <div className="flex flex-wrap gap-2">
                  {focusTags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-red-50 text-brand-red font-semibold px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tagline CTA */}
      <div className="mt-12 bg-brand-red rounded-2xl p-6 md:p-10 text-center text-white">
        <p className="text-xs font-bold uppercase tracking-widest opacity-70 mb-2">Tagline Kampanye</p>
        <h2 className="text-2xl md:text-3xl font-extrabold leading-tight">
          APBD SIBUK MENGURUS DIRI SENDIRI
        </h2>
        <p className="mt-3 opacity-80 text-sm max-w-lg mx-auto leading-relaxed">
          Kami hadir untuk memastikan setiap rupiah APBD Sumenep benar-benar digunakan untuk kepentingan
          rakyat, bukan untuk kepentingan segelintir elite.
        </p>
      </div>
    </div>
  );
}
