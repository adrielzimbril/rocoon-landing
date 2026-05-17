"use client";

import { CheckCircle2, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { processSlides, processSteps, testimonials } from "@/lib/landing-data";
import { SectionHeading } from "../ui/SectionHeading";

export function ProcessSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = processSlides[activeSlide];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((index) => (index + 1) % processSlides.length);
    }, 3800);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="section-dark" id="process">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-8 md:grid-cols-[1fr_0.75fr] md:items-end">
          <SectionHeading
            eyebrow="Studio process"
            text="The experience is structured for repeated decisions: inspect the site, compare intelligent options, and move into the build path with less ambiguity."
            title="From raw site to build-ready direction in three focused moves."
            tone="light"
          />
          <p className="max-w-md text-lg leading-8 text-white/58 md:justify-self-end">
            Each phase produces a usable artifact: site intelligence, option
            clarity, and a coordinated path your builder can price and phase.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <article className="panel-dark overflow-hidden p-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem]">
              {processSlides.map((item, index) => (
                <Image
                  alt={`${item.title} architectural workflow`}
                  className={`object-cover transition duration-700 ${
                    activeSlide === index ? "opacity-100" : "opacity-0"
                  }`}
                  fill
                  key={item.image}
                  sizes="(min-width: 1024px) 34vw, 100vw"
                  src={item.image}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/18 to-black/4" />
              <div className="absolute inset-x-5 bottom-5">
                <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-rocoon-gold">
                  {slide.kicker}
                </p>
                <h3 className="mt-3 max-w-sm text-balance font-serif text-4xl font-semibold leading-none tracking-tight text-white">
                  {slide.title}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-6 text-white/68">
                  {slide.caption}
                </p>
                <div className="mt-5 flex gap-2">
                  {processSlides.map((item, index) => (
                    <button
                      aria-label={`Show ${item.title}`}
                      className={`h-2.5 rounded-full transition-all ${
                        activeSlide === index
                          ? "w-8 bg-rocoon-gold"
                          : "w-2.5 bg-white/38"
                      }`}
                      key={item.title}
                      onClick={() => setActiveSlide(index)}
                      type="button"
                    />
                  ))}
                </div>
              </div>
            </div>
          </article>

          <div className="grid gap-6">
            <article className="panel-dark p-5 md:p-6">
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/42">
                    Implementation clarity
                  </p>
                  <h3 className="mt-4 max-w-xl text-balance font-serif text-5xl font-semibold leading-[0.95] tracking-tight text-white">
                    3-phase concept sprint, faster alignment
                  </h3>
                </div>
                <div className="rounded-full border border-rocoon-copper/36 p-4">
                  <div className="grid size-20 place-items-center rounded-full bg-rocoon-copper/14 text-rocoon-gold">
                    <ShieldCheck className="size-7" />
                  </div>
                </div>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {processSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div
                      className="rounded-2xl border border-white/10 bg-white/7 p-5"
                      key={step.title}
                    >
                      <div className="mb-8 flex items-center justify-between">
                        <Icon className="size-5 text-rocoon-gold" />
                        <CheckCircle2 className="size-4 text-white/38" />
                      </div>
                      <span className="font-serif text-3xl text-white">
                        0{index + 1}
                      </span>
                      <h4 className="mt-3 font-semibold text-white">
                        {step.title}
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-white/54">
                        {step.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </article>

            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((item) => (
                <article className="panel-dark p-5" key={item.name}>
                  <p className="text-sm leading-6 text-white/66">
                    "{item.quote}"
                  </p>
                  <div className="mt-6 border-white/10 border-t pt-4">
                    <strong className="block text-white">{item.name}</strong>
                    <span className="text-sm text-white/42">{item.role}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
