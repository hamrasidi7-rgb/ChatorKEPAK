"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/profil", label: "KEMISKINAN" },
  { href: "/program", label: "ANGGARAN ABSURD" },
  { href: "/ai-chat", label: "AI Chat" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setMenuOpen(false)}>
          <div className="w-9 h-9 relative flex-shrink-0">
            <Image
              src="/images/logo.jpg"
              alt="Chator KEPAK"
              fill
              className="object-contain rounded"
              priority
            />
          </div>
          <div className="leading-tight">
            <div className="font-extrabold text-[15px] text-gray-900">
              Chator <span className="text-brand-red">KEPAK</span>
            </div>
            <div className="text-[9px] md:text-[10px] text-gray-400 font-normal leading-none">
              Kebersamaan untuk Sumenep Maju
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "bg-brand-red text-white"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
        >
          {menuOpen ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center px-5 py-3.5 text-sm font-semibold border-b border-gray-50 transition-colors last:border-0 ${
                isActive(link.href)
                  ? "text-brand-red bg-red-50"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
