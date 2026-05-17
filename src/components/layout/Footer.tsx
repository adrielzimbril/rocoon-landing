import { brand, footerLinks } from "@/lib/landing-data";
import { RocoonLogo } from "../shared/RocoonLogo";

export function Footer() {
  return (
    <footer className="bg-rocoon-cream px-5 py-6 text-rocoon-cream md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2rem] bg-rocoon-ink shadow-[0_28px_90px_rgba(42,33,21,0.22)]">
          <div className="grid gap-10 border-white/10 border-b p-6 md:grid-cols-[1.05fr_0.95fr] md:p-10">
            <div>
              <a aria-label={`${brand.name} home`} href="#hero">
                <RocoonLogo tone="light" />
              </a>
              <h2 className="mt-8 max-w-2xl font-serif text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                Architecture with a live operating layer.
              </h2>
              <p className="mt-5 max-w-xl text-white/62 leading-8">
                AI architecture studio for modern homes that need sharper
                planning, smarter systems, and a clearer path from dream site to
                buildable concept.
              </p>
            </div>

            <div className="grid gap-5">
              <div className="rounded-3xl border border-white/10 bg-white/7 p-5">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-white/46">
                    Studio status
                  </span>
                  <span className="rounded-full bg-rocoon-gold px-3 py-1 text-xs font-extrabold text-rocoon-ink">
                    Accepting briefs
                  </span>
                </div>
                <a
                  className="mt-8 flex items-end justify-between gap-6 border-white/10 border-t pt-5"
                  href={`mailto:${brand.email}`}
                >
                  <span>
                    <span className="block text-sm text-white/48">
                      Concept sprint inquiries
                    </span>
                    <strong className="mt-1 block text-xl text-white">
                      {brand.email}
                    </strong>
                  </span>
                  <span className="grid size-11 place-items-center rounded-full bg-white text-rocoon-ink">
                    ↗
                  </span>
                </a>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {footerLinks.map((link) => (
                  <a
                    className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm font-semibold text-white/68 transition hover:bg-white/10 hover:text-white"
                    href={link.href}
                    key={link.href}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 p-6 text-sm text-white/48 md:flex-row md:items-center md:justify-between md:p-8">
            <p>© 2026 Rocoon. All rights reserved.</p>
            <div className="flex gap-5">
              <a href="/">Privacy</a>
              <a href="/">Terms</a>
              <a href="#hero">Back to top</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
