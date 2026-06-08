export type NewsKategori = "kegiatan" | "program" | "pernyataan" | "analisis_apbd";
export type GaleriTipe = "foto" | "video";

export interface Profile {
  id: string;
  nama: string;
  jabatan: string;
  bio: string;
  foto_url: string | null;
  urutan: number;
}

export interface NewsItem {
  id: string;
  slug: string;
  judul: string;
  kategori: NewsKategori;
  excerpt: string;
  konten: string;
  thumbnail_url: string | null;
  tanggal: string;
  published: boolean;
}

export interface GalleryItem {
  id: string;
  judul: string;
  tipe: GaleriTipe;
  media_url: string;
  tanggal: string;
}

export interface Program {
  id: string;
  judul: string;
  deskripsi: string;
  ikon: string;
  urutan: number;
}

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}
