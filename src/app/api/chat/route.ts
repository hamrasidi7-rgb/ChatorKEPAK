import { NextRequest, NextResponse } from "next/server";

interface ChatMessage {
  role: string;
  content: string;
}

const replies: Record<string, string> = {
  visi: "Visi Chator KEPAK adalah mewujudkan Sumenep yang maju, sejahtera, dan berkeadilan melalui pengelolaan APBD yang transparan dan berpihak kepada rakyat. Tagline kami: \"APBD SIBUK MENGURUS DIRI SENDIRI\" — kami berkomitmen mengubah itu menjadi APBD yang sibuk mengurus rakyat.",
  program:
    "Program unggulan Chator KEPAK: (1) APBD Transparan — publikasi real-time penggunaan anggaran; (2) 1.000 titik perbaikan infrastruktur desa dalam 100 hari; (3) Beasiswa pendidikan untuk siswa berprestasi; (4) Puskesmas modern di setiap kecamatan; (5) Revitalisasi pasar & UMKM; (6) Digital Sumenep — internet gratis & e-government.",
  profil:
    "Chator KEPAK terdiri dari Nom Sihol (Calon Bupati) dan Nom Pah (Calon Wakil Bupati). Keduanya adalah tokoh masyarakat Sumenep yang berkomitmen pada transparansi APBD dan pembangunan yang berpihak kepada rakyat.",
  aspirasi:
    "Anda dapat menyampaikan aspirasi melalui: (1) Chat AI ini kapan saja; (2) Menghadiri kegiatan dialog publik kami yang rutin diadakan di berbagai kecamatan; (3) Menghubungi tim relawan Chator KEPAK. Setiap suara warga Sumenep sangat berarti bagi kami.",
  kegiatan:
    "Kegiatan terbaru kami dapat dilihat di halaman Berita. Kami aktif mengadakan dialog publik, silaturahmi ke desa-desa, forum diskusi pemuda, dan kunjungan langsung ke masyarakat di seluruh pelosok Sumenep.",
  apbd: "APBD Sumenep selama ini sering dikeluhkan warga karena tidak transparan dan hasilnya tidak dirasakan langsung. Chator KEPAK berkomitmen membuat sistem pelaporan APBD real-time yang bisa diakses siapa saja, sehingga masyarakat bisa memantau penggunaan anggaran secara langsung.",
  default:
    "Terima kasih atas pertanyaan Anda! Untuk informasi lebih lengkap, silakan kunjungi halaman Program atau Profil kami. Anda juga bisa bertanya tentang visi-misi, program kerja, kegiatan terbaru, atau cara menyampaikan aspirasi kepada Nom Sihol & Nom Pah.",
};

function getReply(messages: ChatMessage[]): string {
  const lastUser = messages.filter((m) => m.role === "user").pop();
  if (!lastUser) return replies.default;

  const q = lastUser.content.toLowerCase();
  if (q.includes("visi") || q.includes("misi")) return replies.visi;
  if (q.includes("program") || q.includes("unggulan") || q.includes("kerja")) return replies.program;
  if (q.includes("nom sihol") || q.includes("nom pah") || q.includes("profil") || q.includes("siapa")) return replies.profil;
  if (q.includes("aspirasi") || q.includes("sampaikan") || q.includes("cara")) return replies.aspirasi;
  if (q.includes("kegiatan") || q.includes("terbaru") || q.includes("agenda")) return replies.kegiatan;
  if (q.includes("apbd") || q.includes("anggaran") || q.includes("transparan")) return replies.apbd;
  return replies.default;
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const reply = getReply(body.messages ?? []);

  // Simulate a short processing delay
  await new Promise((r) => setTimeout(r, 700));

  return NextResponse.json({ reply });
}
