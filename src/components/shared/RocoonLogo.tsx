import { Building2 } from "lucide-react";

export function RocoonLogo() {
  return (
    <span className="inline-flex items-center gap-2 text-rocoon-ink">
      <span className="grid size-9 place-items-center rounded-xl border border-black/10 bg-rocoon-copper text-rocoon-ink shadow-[0_10px_30px_rgba(189,124,72,0.28)]">
        <Building2 className="size-4" aria-hidden="true" />
      </span>
      <span className="font-serif text-2xl font-semibold tracking-tight">
        Rocoon
      </span>
    </span>
  );
}
