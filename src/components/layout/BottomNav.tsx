"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  {
    href: "/",
    label: "Beranda",
    icon: (active: boolean) => (
      <svg
        className="w-5 h-5"
        fill={active ? "currentColor" : "none"}
        viewBox="0 0 24 24"
        stroke={active ? "none" : "currentColor"}
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    href: "/kemiskinan",
    label: "KEMISKINAN",
    icon: (active: boolean) => (
      <svg
        className="w-5 h-5"
        fill={active ? "currentColor" : "none"}
        viewBox="0 0 24 24"
        stroke={active ? "none" : "currentColor"}
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
  {
    href: "/program",
    label: "ANGGARAN ABSURD",
    icon: (active: boolean) => (
      <svg
        className="w-5 h-5"
        fill={active ? "currentColor" : "none"}
        viewBox="0 0 24 24"
        stroke={active ? "none" : "currentColor"}
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
  },
  {
    href: "/ai-chat",
    label: "AI Chat",
    icon: (_active: boolean) => (
      <Image
        src="/images/ICON AI CHATOR KEPAK.png"
        alt="AI Chat"
        width={28}
        height={28}
        className="object-contain"
      />
    ),
  },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 safe-area-pb">
      <div className="flex items-stretch">
        {navItems.map((item) => {
          const active =
            item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex-1 flex flex-col items-center justify-center py-2 gap-0.5 min-h-[60px] transition-colors ${
                active ? "text-brand-red" : "text-gray-400"
              }`}
            >
              {item.icon(active)}
              <span
                className={`text-[9px] font-semibold text-center leading-tight ${
                  active ? "text-brand-red" : "text-gray-400"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
