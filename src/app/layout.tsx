import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Chator KEPAK — APBD Sibuk Mengurus Diri Sendiri",
    template: "%s — Chator KEPAK",
  },
  description:
    "Website resmi kampanye Nom Sihol & Nom Pah untuk Sumenep yang lebih baik. APBD SIBUK MENGURUS DIRI SENDIRI.",
  keywords: ["Chator KEPAK", "Nom Sihol", "Nom Pah", "Sumenep", "Pilkada", "APBD"],
  openGraph: {
    title: "Chator KEPAK",
    description: "APBD SIBUK MENGURUS DIRI SENDIRI",
    siteName: "Chator KEPAK",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className={`${plusJakarta.variable} font-sans antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 pb-20 md:pb-0">{children}</main>
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
