import { brand, footerLinks } from "@/lib/landing-data";
import { RocoonLogo } from "../shared/RocoonLogo";

export function Footer() {
  return (
    <footer className="bg-rocoon-ink px-5 py-12 text-rocoon-cream md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-white/10 border-b pb-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <a aria-label={`${brand.name} home`} href="#hero">
              <RocoonLogo />
            </a>
            <p className="mt-5 max-w-xl text-white/62 leading-8">
              AI architecture studio for modern homes that need sharper
              planning, smarter systems, and a clearer path from dream site to
              buildable concept.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
            {footerLinks.map((link) => (
              <a
                className="text-sm font-semibold text-white/68 transition hover:text-white"
                href={link.href}
                key={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-8 text-sm text-white/48 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Rocoon. All rights reserved.</p>
          <div className="flex gap-5">
            <a href={`mailto:${brand.email}`}>{brand.email}</a>
            <a href="/">Privacy</a>
            <a href="/">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
