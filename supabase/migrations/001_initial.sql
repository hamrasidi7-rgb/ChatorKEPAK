-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ────────────────────────────────────────────────
-- Profiles (tokoh kampanye)
-- ────────────────────────────────────────────────
create table public.profiles (
  id          uuid primary key default uuid_generate_v4(),
  nama        text not null,
  jabatan     text not null,
  bio         text,
  foto_url    text,
  urutan      integer not null default 0,
  created_at  timestamptz not null default now()
);

-- ────────────────────────────────────────────────
-- News
-- ────────────────────────────────────────────────
create type public.news_kategori as enum ('kegiatan', 'program', 'pernyataan');

create table public.news (
  id            uuid primary key default uuid_generate_v4(),
  slug          text unique not null,
  judul         text not null,
  kategori      public.news_kategori not null,
  excerpt       text,
  konten        text,
  thumbnail_url text,
  tanggal       date not null default current_date,
  published     boolean not null default false,
  created_at    timestamptz not null default now()
);

create index idx_news_tanggal   on public.news (tanggal desc);
create index idx_news_kategori  on public.news (kategori);
create index idx_news_published on public.news (published);

-- ────────────────────────────────────────────────
-- Gallery
-- ────────────────────────────────────────────────
create type public.galeri_tipe as enum ('foto', 'video');

create table public.gallery (
  id         uuid primary key default uuid_generate_v4(),
  judul      text not null,
  tipe       public.galeri_tipe not null default 'foto',
  media_url  text not null,
  tanggal    date not null default current_date,
  created_at timestamptz not null default now()
);

-- ────────────────────────────────────────────────
-- Programs
-- ────────────────────────────────────────────────
create table public.programs (
  id         uuid primary key default uuid_generate_v4(),
  judul      text not null,
  deskripsi  text,
  ikon       text,
  urutan     integer not null default 0,
  created_at timestamptz not null default now()
);

-- ────────────────────────────────────────────────
-- Row Level Security
-- ────────────────────────────────────────────────
alter table public.profiles enable row level security;
alter table public.news     enable row level security;
alter table public.gallery  enable row level security;
alter table public.programs enable row level security;

-- Public: anonymous can read published / all non-news content
create policy "public_read_profiles"
  on public.profiles for select using (true);

create policy "public_read_published_news"
  on public.news for select using (published = true);

create policy "public_read_gallery"
  on public.gallery for select using (true);

create policy "public_read_programs"
  on public.programs for select using (true);

-- Authenticated: full access for content management
create policy "auth_all_profiles"
  on public.profiles for all using (auth.role() = 'authenticated');

create policy "auth_all_news"
  on public.news for all using (auth.role() = 'authenticated');

create policy "auth_all_gallery"
  on public.gallery for all using (auth.role() = 'authenticated');

create policy "auth_all_programs"
  on public.programs for all using (auth.role() = 'authenticated');

-- ────────────────────────────────────────────────
-- Seed data
-- ────────────────────────────────────────────────
insert into public.profiles (nama, jabatan, bio, foto_url, urutan) values
  ('Nom Sihol', 'Calon Bupati Sumenep',
   'Nom Sihol adalah tokoh masyarakat Sumenep yang dikenal dengan komitmennya terhadap transparansi anggaran dan pemberdayaan ekonomi rakyat.',
   null, 1),
  ('Nom Pah', 'Calon Wakil Bupati Sumenep',
   'Nom Pah adalah aktivis sosial dan tokoh pemuda Sumenep yang berdedikasi untuk pembangunan infrastruktur pedesaan dan peningkatan kualitas pendidikan.',
   null, 2);

insert into public.programs (judul, deskripsi, ikon, urutan) values
  ('APBD Transparan',    'Publikasi real-time penggunaan APBD agar masyarakat bisa memantau setiap rupiah anggaran daerah.', '💰', 1),
  ('Infrastruktur Desa', 'Perbaikan 1.000 titik jalan desa, jembatan, dan irigasi pertanian dalam 100 hari pertama.', '🛣️', 2),
  ('Pendidikan Gratis',  'Beasiswa penuh untuk siswa berprestasi dari keluarga kurang mampu di semua jenjang.', '📚', 3),
  ('Kesehatan untuk Semua', 'Puskesmas modern di setiap kecamatan dan layanan kesehatan gratis bagi warga kurang mampu.', '🏥', 4),
  ('Ekonomi Rakyat',     'Revitalisasi pasar tradisional, pemberdayaan UMKM, dan akses modal usaha untuk pedagang kecil.', '🏪', 5),
  ('Digital Sumenep',    'Internet gratis di titik publik, literasi digital untuk pemuda, dan e-government yang efisien.', '💻', 6);
