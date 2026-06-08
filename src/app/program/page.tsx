import type { Metadata } from "next";
import Link from "next/link";
import { seedPrograms } from "@/lib/seed-data";

export const metadata: Metadata = {
  title: "Program Kerja",
  description: "Program-program prioritas Chator KEPAK untuk mewujudkan Sumenep yang maju dan sejahtera.",
};

export default function ProgramPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
      {/* Header */}
      <div className="text-center mb-8 md:mb-12">
        <p className="text-brand-red font-bold text-xs uppercase tracking-widest mb-2">
          Komitmen Nyata
        </p>
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">
          Program Kerja
        </h1>
        <p className="text-gray-500 mt-2 max-w-xl mx-auto text-sm md:text-base">
          Program-program prioritas Chator KEPAK untuk mewujudkan Sumenep yang maju,
          sejahtera, dan berkeadilan.
        </p>
      </div>

      {/* Program cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        {seedPrograms.map((program, idx) => (
          <div
            key={program.id}
            className="flex gap-4 p-5 md:p-6 bg-white rounded-2xl border border-gray-100 hover:border-brand-red hover:shadow-md transition-all group"
          >
            <div className="flex-shrink-0 w-14 h-14 bg-red-50 group-hover:bg-brand-red rounded-xl flex items-center justify-center transition-colors text-2xl">
              {program.ikon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start gap-2">
                <span className="text-xs text-gray-300 font-extrabold mt-0.5 flex-shrink-0">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-extrabold text-gray-900 text-base group-hover:text-brand-red transition-colors">
                    {program.judul}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mt-1">
                    {program.deskripsi}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-10 text-center bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
        <p className="text-gray-500 text-sm mb-4">
          Punya aspirasi atau pertanyaan tentang program kami?
        </p>
        <Link
          href="/ai-chat"
          className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white font-bold px-5 py-2.5 rounded-full transition-colors shadow-sm"
        >
          Tanya AI Asisten Kami
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
