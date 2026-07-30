"use client";

import Link from "next/link";

const menus = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200/50 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link
          href="/"
          className="text-xl font-bold tracking-wide text-slate-900"
        >
          YIB
        </Link>

        <div className="hidden gap-8 md:flex">
          {menus.map((menu) => (
            <a
              key={menu.name}
              href={menu.href}
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              {menu.name}
            </a>
          ))}
        </div>

      </nav>
    </header>
  );
}