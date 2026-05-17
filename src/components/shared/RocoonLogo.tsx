type RocoonLogoProps = {
  tone?: "light" | "dark";
};

export function RocoonLogo({ tone = "dark" }: RocoonLogoProps) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 ${tone === "light" ? "text-rocoon-cream" : "text-rocoon-ink"}`}
    >
      <span
        className={`grid size-10 place-items-center rounded-2xl shadow-[0_12px_34px_rgba(42,33,21,0.22)] ring-1 ${
          tone === "light"
            ? "bg-white/10 ring-white/15"
            : "bg-rocoon-ink ring-white/10"
        }`}
      >
        <svg
          aria-hidden="true"
          className="size-6"
          fill="none"
          viewBox="0 0 32 32"
        >
          <path
            d="M8 18.7V13.2L16 8L24 13.2V18.7C24 22.9 20.5 26 16 26C11.5 26 8 22.9 8 18.7Z"
            stroke="#EADFCA"
            strokeLinejoin="round"
            strokeWidth="1.45"
          />
          <path
            d="M12.1 17.1C12.1 14.7 13.8 13 16 13C18.2 13 19.9 14.7 19.9 17.1C19.9 19.5 18.2 21.1 16 21.1C13.8 21.1 12.1 19.5 12.1 17.1Z"
            stroke="#D6A85F"
            strokeWidth="1.45"
          />
          <circle cx="16" cy="17.1" fill="#D6A85F" r="2.2" />
          <path
            d="M16 5.5V8M6 16.3H8M24 16.3H26"
            stroke="#EADFCA"
            strokeLinecap="round"
            strokeWidth="1.45"
          />
        </svg>
      </span>
      <span className="font-serif text-2xl font-semibold tracking-tight">
        Rocoon
      </span>
    </span>
  );
}
