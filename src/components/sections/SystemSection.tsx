import { ArrowUpRight } from "lucide-react";
import { featureRows, solutionCards } from "@/lib/landing-data";
import { SectionHeading } from "../ui/SectionHeading";

export function SystemSection() {
  return (
    <section className="section-dark" id="system">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <SectionHeading
            eyebrow="Rocoon OS"
            text="A studio workflow for clients who want the emotional quality of custom architecture and the clarity of data-informed planning."
            title="One system for concept, comfort, smart layers, and build handoff."
            tone="light"
          />
          <a className="btn-copper mt-8" href="#contact">
            Request a concept sprint <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {solutionCards.map((card) => {
            const Icon = card.icon;
            return (
              <article className="panel-dark p-6" key={card.title}>
                <Icon className="mb-8 size-7 text-rocoon-gold" />
                <h3 className="font-serif text-2xl font-semibold tracking-tight">
                  {card.title}
                </h3>
                <p className="mt-4 leading-7 text-white/58">{card.text}</p>
              </article>
            );
          })}

          <article className="panel-dark p-6 sm:col-span-2">
            <div className="grid gap-4 md:grid-cols-4">
              {featureRows.map((row) => (
                <div
                  className="rounded-2xl border border-white/10 bg-white/7 p-5"
                  key={row.label}
                >
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-white/42">
                    {row.label}
                  </span>
                  <strong className="mt-3 block font-serif text-2xl text-white">
                    {row.value}
                  </strong>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
