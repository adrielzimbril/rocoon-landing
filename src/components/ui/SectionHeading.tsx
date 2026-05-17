type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  text?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  text,
  tone = "dark",
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={`section-heading ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <p
        className={`section-eyebrow ${tone === "light" ? "text-white/60" : "text-rocoon-muted"}`}
      >
        <span className="size-2 rounded-full bg-rocoon-gold shadow-[0_0_24px_rgba(214,168,95,0.7)]" />
        {eyebrow}
      </p>
      <h2
        className={`section-title ${tone === "light" ? "text-rocoon-cream" : "text-rocoon-ink"}`}
      >
        {title}
      </h2>
      {text ? (
        <p
          className={`mt-5 max-w-3xl text-base leading-8 md:text-lg ${align === "center" ? "mx-auto" : ""} ${tone === "light" ? "text-white/66" : "text-rocoon-muted"}`}
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}
