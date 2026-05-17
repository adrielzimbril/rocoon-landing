import Image from "next/image";
import { homeCards } from "@/lib/landing-data";
import { SectionHeading } from "../ui/SectionHeading";

export function HomesSection() {
  return (
    <section className="section-light" id="homes">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <SectionHeading
            eyebrow="Modern prototypes"
            title="Image-led concepts that keep the architecture inspectable."
          />
          <p className="max-w-2xl text-lg leading-8 text-rocoon-muted md:justify-self-end">
            Each home concept is shown as a real architectural object, not a
            decorative abstraction. The interface keeps the product, the place,
            and the decision data visible.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {homeCards.map((home) => (
            <article
              className="group overflow-hidden rounded-[1.75rem] bg-white shadow-[0_24px_70px_rgba(24,19,15,0.10)]"
              key={home.title}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  alt={`${home.title} architectural concept`}
                  className="object-cover transition duration-700 group-hover:scale-105"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  src={home.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/58 via-black/0 to-black/0" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <span className="rounded-full border border-white/18 bg-white/12 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] backdrop-blur">
                    {home.metric}
                  </span>
                  <h3 className="mt-4 font-serif text-3xl font-semibold tracking-tight">
                    {home.title}
                  </h3>
                  <p className="mt-2 text-white/66">{home.location}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
