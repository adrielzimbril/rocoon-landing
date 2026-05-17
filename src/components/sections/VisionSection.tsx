import { diagnosticSteps } from "@/lib/landing-data";
import { SectionHeading } from "../ui/SectionHeading";

export function VisionSection() {
  return (
    <section className="section-light" id="vision">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          align="center"
          eyebrow="Design intelligence"
          text="The source concept was a real-estate automation page. Rocoon reframes that operational structure into an architecture workflow where every site, plan, and build decision stays connected."
          title="A modern house should be simulated before it is styled."
        />

        <div className="relative mt-16 grid gap-6 lg:grid-cols-3">
          {diagnosticSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article className="panel-light p-6 md:p-7" key={step.title}>
                <div className="mb-7 flex items-center justify-between">
                  <div className="grid size-13 place-items-center rounded-2xl bg-rocoon-copper/12 text-rocoon-copper">
                    <Icon className="size-6" />
                  </div>
                  <span className="font-serif text-4xl text-rocoon-ink/12">
                    0{index + 1}
                  </span>
                </div>
                <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.16em] text-rocoon-copper">
                  {step.label}
                </p>
                <h3 className="font-serif text-3xl font-semibold tracking-tight text-rocoon-ink">
                  {step.title}
                </h3>
                <p className="mt-4 leading-7 text-rocoon-muted">{step.text}</p>
                <ul className="mt-6 grid gap-3 text-sm font-semibold text-rocoon-ink/72">
                  {step.points.map((point) => (
                    <li className="flex items-center gap-3" key={point}>
                      <span className="size-2 rounded-full bg-rocoon-copper" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
