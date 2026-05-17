"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/lib/landing-data";
import { SectionHeading } from "../ui/SectionHeading";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-light" id="faq">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow="FAQ"
          text="Rocoon is built to reduce uncertainty, not add another layer of software to the architecture process."
          title="What clients ask before they design with an AI studio."
        />

        <div className="grid gap-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <article
                className="panel-light overflow-hidden"
                key={item.question}
              >
                <button
                  className="flex w-full items-center justify-between gap-4 p-6 text-left"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  type="button"
                >
                  <span className="font-serif text-xl font-semibold text-rocoon-ink">
                    {item.question}
                  </span>
                  <span
                    className={`grid size-9 flex-none place-items-center rounded-full bg-rocoon-ink text-white transition ${isOpen ? "rotate-45" : ""}`}
                  >
                    <Plus className="size-4" />
                  </span>
                </button>
                {isOpen ? (
                  <p className="px-6 pb-6 leading-8 text-rocoon-muted">
                    {item.answer}
                  </p>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
