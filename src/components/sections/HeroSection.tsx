import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { brand, heroStats, trustLogos } from "@/lib/landing-data";

export function HeroSection() {
  return (
    <section
      className="relative min-h-[100svh] overflow-hidden bg-rocoon-ink pt-32 text-rocoon-cream"
      id="hero"
    >
      <div className="absolute inset-0">
        <Image
          alt="Modern smart home exterior shaped by AI architecture"
          className="object-cover opacity-78"
          fill
          fetchPriority="high"
          sizes="100vw"
          src="/img/arch/82ecb710-e4b9-4fbf-910a-3388654537ca_original.png"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,15,12,0.74),rgba(18,15,12,0.24)_54%,rgba(18,15,12,0.70)),linear-gradient(180deg,rgba(18,15,12,0.12),rgba(18,15,12,0.88))]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:74px_74px] opacity-20" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-7rem)] max-w-7xl flex-col justify-between px-5 pb-8 md:px-8 md:pb-12">
        <div className="flex flex-col gap-4 text-xs font-bold uppercase tracking-[0.2em] text-white/56 md:flex-row md:items-center md:justify-between">
          <span>Modern homes with AI-native planning</span>
          <span>{brand.tagline}</span>
        </div>

        <div className="grid gap-10 pb-10 md:grid-cols-[1.18fr_0.82fr] md:items-end">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/14 bg-black/28 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white/70 backdrop-blur">
              <Sparkles className="size-4 text-rocoon-gold" />
              Day 16/30 AI Landing Challenge
            </div>
            <h1 className="max-w-4xl font-serif text-[clamp(3.3rem,6.8vw,6rem)] font-semibold leading-[0.96] tracking-tight">
              Homes designed by architecture, accelerated by intelligence.
            </h1>
          </div>

          <div className="max-w-md md:justify-self-end">
            <p className="text-lg leading-8 text-white/78">
              Rocoon blends high-end residential architecture with AI site
              analysis, generative planning, and connected build intelligence
              for modern smart homes.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a className="btn-copper" href="#contact">
                Plan my home <ArrowRight className="size-4" />
              </a>
              <a className="btn-glass" href="#system">
                Explore the system
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-6 border-white/10 border-t pt-7 md:grid-cols-[1fr_auto] md:items-center">
          <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-white/56">
            {trustLogos.map((logo) => (
              <span key={logo}>{logo}</span>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-3">
            {heroStats.map((stat) => (
              <div
                className="rounded-2xl border border-white/12 bg-white/8 p-4 backdrop-blur"
                key={stat.label}
              >
                <strong className="block font-serif text-2xl text-white">
                  {stat.value}
                </strong>
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-white/46">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
