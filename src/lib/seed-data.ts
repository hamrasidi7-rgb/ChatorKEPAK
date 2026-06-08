import type { Profile, NewsItem, GalleryItem, Program } from "@/types";

export const seedProfiles: Profile[] = [
  {
    id: "1",
    nama: "Nom Sihol",
    jabatan: "Calon Bupati Sumenep",
    bio: "Nom Sihol adalah tokoh masyarakat Sumenep yang dikenal dengan komitmennya terhadap transparansi anggaran dan pemberdayaan ekonomi rakyat. Dengan pengalaman panjang dalam advokasi publik, beliau bertekad membawa Sumenep menuju pemerintahan yang bersih dan pro-rakyat. Rekam jejaknya dalam mendampingi warga dalam berbagai isu sosial menjadikannya sosok yang dipercaya oleh masyarakat akar rumput.",
    foto_url: "/images/nom-sihol.jpg",
    urutan: 1,
  },
  {
    id: "2",
    nama: "Nom Pah",
    jabatan: "Calon Wakil Bupati Sumenep",
    bio: "Nom Pah adalah aktivis sosial dan tokoh pemuda Sumenep yang berdedikasi untuk pembangunan infrastruktur pedesaan dan peningkatan kualitas pendidikan. Beliau dikenal sebagai suara masyarakat bawah yang selama ini terabaikan. Dengan latar belakang sebagai putra daerah yang tumbuh dari lingkungan pesisir, beliau memahami betul kebutuhan riil warga Sumenep.",
    foto_url: "/images/nom-pah.jpg",
    urutan: 2,
  },
];

export const seedNews: NewsItem[] = [
  {
    id: "1",
    slug: "nom-sihol-nom-pah-bersilaturahmi-warga-ganding",
    judul: "Nom Sihol & Nom Pah Bersilaturahmi dengan Warga Ganding",
    kategori: "kegiatan",
    excerpt:
      "Dalam kunjungan langsung ke Kecamatan Ganding, Nom Sihol dan Nom Pah menyerap aspirasi masyarakat terkait infrastruktur jalan dan irigasi pertanian.",
    konten: `<p>Nom Sihol dan Nom Pah melakukan kunjungan silaturahmi ke Kecamatan Ganding pada Senin, 20 Mei 2025. Dalam kesempatan tersebut, keduanya berdialog langsung dengan ratusan warga yang menyampaikan berbagai aspirasi.</p>

<p>Warga Ganding menyampaikan keluhan utama terkait kondisi jalan desa yang rusak dan sistem irigasi yang belum memadai. Nom Sihol berjanji akan memprioritaskan perbaikan infrastruktur pedesaan jika terpilih.</p>

<blockquote><p>"APBD harus benar-benar digunakan untuk kepentingan rakyat, bukan untuk mengurus kepentingan segelintir orang," tegas Nom Sihol di hadapan warga.</p></blockquote>

<p>Nom Pah menambahkan bahwa program 1.000 titik perbaikan jalan desa akan menjadi prioritas utama dalam 100 hari pertama kepemimpinan mereka.</p>

<p>Ribuan warga yang hadir menyambut antusias visi pasangan Chator KEPAK untuk mewujudkan Sumenep yang lebih adil dan sejahtera.</p>`,
    thumbnail_url: "/images/deni-forum.jpg",
    tanggal: "2025-05-20",
    published: true,
  },
  {
    id: "2",
    slug: "paparkan-program-pembangunan-kecamatan-kota",
    judul: "Paparkan Program Pembangunan di Kecamatan Kota",
    kategori: "program",
    excerpt:
      "Nom Sihol & Nom Pah memaparkan visi pembangunan kawasan kota Sumenep yang berfokus pada revitalisasi pasar tradisional dan penataan PKL.",
    konten: `<p>Di hadapan ratusan pedagang dan warga Kecamatan Kota, pasangan Chator KEPAK memaparkan program unggulan pembangunan kawasan kota Sumenep.</p>

<p>Program prioritas meliputi: revitalisasi Pasar Anom, pembangunan sentra PKL modern, serta pengembangan kawasan wisata belanja berbasis UMKM lokal.</p>

<p>"Pasar tradisional adalah jantung ekonomi Sumenep. Kita akan revitalisasi agar lebih bersih, nyaman, dan modern tanpa mengusir pedagang lama," ujar Nom Sihol.</p>

<p>Selain itu, program digitalisasi UMKM juga akan diluncurkan untuk membantu pedagang kecil menjangkau pasar yang lebih luas melalui platform digital.</p>`,
    thumbnail_url: null,
    tanggal: "2025-05-18",
    published: true,
  },
  {
    id: "3",
    slug: "komitmen-kemajuan-pendidikan-sumenep",
    judul: "Komitmen untuk Kemajuan Pendidikan di Sumenep",
    kategori: "program",
    excerpt:
      "Chator KEPAK berkomitmen mengalokasikan minimal 25% APBD untuk sektor pendidikan demi mewujudkan generasi Sumenep yang cerdas dan berdaya saing.",
    konten: `<p>Pendidikan adalah investasi jangka panjang yang harus menjadi prioritas. Chator KEPAK berkomitmen untuk memastikan setiap anak di Sumenep mendapatkan akses pendidikan berkualitas.</p>

<p>Program pendidikan meliputi beasiswa untuk siswa berprestasi dari keluarga kurang mampu, peningkatan fasilitas sekolah, dan pelatihan guru berbasis teknologi.</p>

<p>Nom Sihol menegaskan bahwa alokasi anggaran pendidikan akan ditingkatkan secara signifikan, dengan fokus pada daerah terpencil dan kepulauan yang selama ini kurang mendapat perhatian.</p>`,
    thumbnail_url: null,
    tanggal: "2025-05-16",
    published: true,
  },
  {
    id: "4",
    slug: "tingkatkan-kualitas-layanan-kesehatan",
    judul: "Tingkatkan Kualitas Layanan Kesehatan di Seluruh Desa",
    kategori: "pernyataan",
    excerpt:
      "Nom Sihol menegaskan komitmen untuk membangun Puskesmas modern di setiap kecamatan dan menjamin layanan kesehatan gratis bagi masyarakat kurang mampu.",
    konten: `<p>Kesehatan adalah hak dasar setiap warga. Nom Sihol menegaskan bahwa salah satu program prioritasnya adalah peningkatan kualitas layanan kesehatan hingga ke pelosok desa dan pulau-pulau terpencil di Sumenep.</p>

<p>Rencana konkret meliputi: pembangunan Puskesmas modern di 27 kecamatan, pengadaan ambulans desa, dan program Jaminan Kesehatan Sumenep (JKS) untuk warga yang belum tercover BPJS.</p>

<blockquote><p>"Tidak boleh ada warga Sumenep yang tidak bisa berobat karena tidak punya uang. Kesehatan adalah hak, bukan privilege," tegas Nom Sihol dalam pernyataan resminya.</p></blockquote>

<p>Program ini akan didanai melalui efisiensi belanja rutin pemerintah dan realokasi anggaran dari pos-pos yang selama ini dianggap tidak produktif.</p>`,
    thumbnail_url: null,
    tanggal: "2025-05-15",
    published: true,
  },
];

export const seedPrograms: Program[] = [
  {
    id: "1",
    judul: "APBD Transparan",
    deskripsi:
      "Publikasi real-time penggunaan APBD agar masyarakat bisa memantau setiap rupiah anggaran daerah secara langsung.",
    ikon: "💰",
    urutan: 1,
  },
  {
    id: "2",
    judul: "Infrastruktur Desa",
    deskripsi:
      "Perbaikan 1.000 titik jalan desa, jembatan, dan irigasi pertanian dalam 100 hari pertama kepemimpinan.",
    ikon: "🛣️",
    urutan: 2,
  },
  {
    id: "3",
    judul: "Pendidikan Gratis",
    deskripsi:
      "Beasiswa penuh untuk siswa berprestasi dari keluarga kurang mampu di semua jenjang pendidikan.",
    ikon: "📚",
    urutan: 3,
  },
  {
    id: "4",
    judul: "Kesehatan untuk Semua",
    deskripsi:
      "Puskesmas modern di setiap kecamatan dan layanan kesehatan gratis bagi seluruh warga kurang mampu.",
    ikon: "🏥",
    urutan: 4,
  },
  {
    id: "5",
    judul: "Ekonomi Rakyat",
    deskripsi:
      "Revitalisasi pasar tradisional, pemberdayaan UMKM, dan akses modal usaha untuk pedagang kecil.",
    ikon: "🏪",
    urutan: 5,
  },
  {
    id: "6",
    judul: "Digital Sumenep",
    deskripsi:
      "Internet gratis di titik publik, literasi digital untuk pemuda, dan e-government yang efisien dan transparan.",
    ikon: "💻",
    urutan: 6,
  },
];

export const seedGallery: GalleryItem[] = [
  {
    id: "1",
    judul: "Silaturahmi dengan Warga Ganding",
    tipe: "foto",
    media_url: "/images/deni-forum.jpg",
    tanggal: "2025-05-20",
  },
  {
    id: "2",
    judul: "Dialog Publik Bersama Wartawan",
    tipe: "foto",
    media_url: "/images/deni-forum.jpg",
    tanggal: "2025-05-18",
  },
  {
    id: "3",
    judul: "Nom Sihol bersama Komunitas",
    tipe: "foto",
    media_url: "/images/nom-sihol.jpg",
    tanggal: "2025-05-15",
  },
  {
    id: "4",
    judul: "Nom Pah di Pesisir Sumenep",
    tipe: "foto",
    media_url: "/images/nom-pah.jpg",
    tanggal: "2025-05-12",
  },
];
