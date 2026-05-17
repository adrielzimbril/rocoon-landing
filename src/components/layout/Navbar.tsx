"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { brand, navItems } from "@/lib/landing-data";
import { RocoonLogo } from "../shared/RocoonLogo";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 transition-all duration-300">
      <nav
        className={`mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full border px-4 shadow-[0_18px_60px_rgba(20,17,14,0.10)] backdrop-blur-xl transition-all duration-300 md:h-[4.5rem] md:px-6 ${
          isScrolled
            ? "border-black/10 bg-rocoon-cream/96"
            : "border-white/40 bg-rocoon-cream/88"
        }`}
      >
        <a href="#hero" aria-label={`${brand.name} home`}>
          <RocoonLogo />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              className="text-sm font-semibold text-rocoon-ink/70 transition hover:text-rocoon-ink"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>

        <a className="hidden btn-dark md:inline-flex" href="#contact">
          Start a site audit
        </a>

        <button
          aria-label="Toggle navigation"
          className="grid size-11 place-items-center rounded-full border border-black/10 text-rocoon-ink md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          type="button"
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {isOpen ? (
        <div className="mx-auto mt-3 max-w-7xl rounded-3xl border border-black/10 bg-rocoon-cream/96 px-5 py-5 shadow-[0_18px_60px_rgba(20,17,14,0.12)] backdrop-blur-xl md:hidden">
          <div className="grid gap-3">
            {navItems.map((item) => (
              <a
                className="rounded-lg px-2 py-2 text-base font-semibold text-rocoon-ink"
                href={item.href}
                key={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a className="btn-dark mt-2 w-full" href="#contact">
              Start a site audit
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
