import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { processSteps, testimonials } from "@/lib/landing-data";
import { SectionHeading } from "../ui/SectionHeading";

export function ProcessSection() {
  return (
    <section className="section-dark" id="process">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          align="center"
          eyebrow="Studio process"
          text="The experience is structured for repeated decisions: inspect the site, compare intelligent options, and move into the build path with less ambiguity."
          title="From raw site to build-ready direction in three focused moves."
          tone="light"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="panel-dark p-6 md:p-8">
            <div className="relative mb-8 aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                alt="AI-assisted architectural model interface"
                className="object-cover"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                src="/img/arch/820a6b98-1866-428e-8ec7-a7b50fbb1095_original.png"
              />
            </div>
            <div className="grid gap-4">
              {processSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    className="flex gap-4 rounded-2xl bg-white/7 p-4"
                    key={step.title}
                  >
                    <div className="grid size-11 flex-none place-items-center rounded-xl bg-rocoon-copper/16 text-rocoon-gold">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-white/58">
                        {step.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid gap-6">
            <article className="panel-dark p-6 md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/42">
                Concept command center
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {["Site", "Plan", "Build"].map((item, index) => (
                  <div
                    className="rounded-2xl border border-white/10 bg-white/7 p-5"
                    key={item}
                  >
                    <CheckCircle2 className="mb-8 size-5 text-rocoon-gold" />
                    <span className="font-serif text-3xl text-white">
                      0{index + 1}
                    </span>
                    <p className="mt-2 font-semibold text-white/66">{item}</p>
                  </div>
                ))}
              </div>
            </article>

            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((item) => (
                <article className="panel-dark p-5" key={item.name}>
                  <p className="text-sm leading-6 text-white/66">
                    "{item.quote}"
                  </p>
                  <div className="mt-6">
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
