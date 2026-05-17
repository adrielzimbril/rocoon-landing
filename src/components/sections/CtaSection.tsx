import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { auditItems, brand } from "@/lib/landing-data";

export function CtaSection() {
  return (
    <section
      className="relative overflow-hidden bg-rocoon-cream px-5 py-8 md:px-8"
      id="contact"
    >
      <div className="relative mx-auto min-h-[620px] max-w-7xl overflow-hidden rounded-[2rem] bg-rocoon-ink text-white">
        <Image
          alt="Modern AI-designed home at dusk"
          className="object-cover opacity-74"
          fill
          sizes="100vw"
          src="/img/arch/d5d7c097-a935-4a13-ac80-4b9d1d2e21f4_original.png"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,15,12,0.82),rgba(18,15,12,0.28)),linear-gradient(180deg,transparent,rgba(18,15,12,0.86))]" />
        <div className="relative z-10 grid min-h-[620px] gap-10 p-6 md:p-10 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <div className="max-w-3xl self-end">
            <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.18em] text-white/58">
              Final step
            </p>
            <h2 className="font-serif text-[clamp(3rem,6vw,5.2rem)] font-semibold leading-[0.95] tracking-tight">
              See what your site could become before the first sketch.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Start with a focused Rocoon audit that turns site constraints,
              lifestyle patterns, smart-home intent, and build priorities into a
              clearer concept path.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="btn-copper" href={`mailto:${brand.email}`}>
                Start the audit <ArrowRight className="size-4" />
              </a>
              <a className="btn-glass" href="#homes">
                Review homes
              </a>
            </div>
          </div>

          <div className="panel-dark bg-black/36 p-5 backdrop-blur-xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.14em] text-white/48">
              Audit scope
            </p>
            <div className="grid gap-4">
              {auditItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    className="flex gap-4 rounded-2xl bg-white/8 p-4"
                    key={item.title}
                  >
                    <div className="grid size-11 flex-none place-items-center rounded-xl bg-rocoon-copper/18 text-rocoon-gold">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <strong>{item.title}</strong>
                      <p className="mt-1 text-sm leading-6 text-white/58">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
