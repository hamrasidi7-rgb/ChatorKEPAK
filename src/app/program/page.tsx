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

      {/* Placeholder */}
      <div className="flex flex-col items-center justify-center py-24 text-center px-4">
        <span className="text-5xl mb-4">💰</span>
        <p className="text-gray-400 text-sm">Konten sedang disiapkan</p>
      </div>

    </div>
  );
}
