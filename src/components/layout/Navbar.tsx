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
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "border-black/10 bg-rocoon-cream/95 shadow-[0_16px_50px_rgba(20,17,14,0.08)] backdrop-blur-xl"
          : "border-white/10 bg-rocoon-cream/80 backdrop-blur-xl"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
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
        <div className="border-t border-black/10 bg-rocoon-cream px-5 py-5 md:hidden">
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
