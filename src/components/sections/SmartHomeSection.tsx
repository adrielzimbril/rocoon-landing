"use client";

import {
  BatteryCharging,
  ChevronRight,
  Home,
  Lock,
  MessageCircle,
  Power,
  SlidersHorizontal,
  SunMedium,
  Thermometer,
} from "lucide-react";
import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import { aiMessages, homeModes, roomControls } from "@/lib/landing-data";
import { SectionHeading } from "../ui/SectionHeading";

const rooms = [
  { name: "Atrium", x: "left-[18%] top-[21%]", status: "Light 72%" },
  { name: "Studio", x: "left-[62%] top-[25%]", status: "Private" },
  { name: "Suite", x: "left-[22%] top-[62%]", status: "71F" },
  { name: "Core", x: "left-[58%] top-[64%]", status: "Secure" },
];

export function SmartHomeSection() {
  const [modeIndex, setModeIndex] = useState(2);
  const [activeRoom, setActiveRoom] = useState("Atrium");
  const [climate, setClimate] = useState(homeModes[modeIndex].temperature);
  const mode = homeModes[modeIndex];

  const room = useMemo(
    () => rooms.find((item) => item.name === activeRoom) ?? rooms[0],
    [activeRoom],
  );

  function selectMode(index: number) {
    setModeIndex(index);
    setClimate(homeModes[index].temperature);
  }

  return (
    <section className="section-light" id="living-ai">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <SectionHeading
            eyebrow="Living intelligence"
            text="Rocoon does not stop at the rendering. The house is imagined as an operating system: climate, privacy, energy, and daily rituals stay readable from one interface."
            title="A smart home you can talk to, tune, and understand."
          />
          <div className="grid grid-cols-3 gap-3">
            {homeModes.map((item, index) => (
              <button
                className={`rounded-2xl border p-4 text-left transition ${
                  modeIndex === index
                    ? "border-rocoon-copper bg-rocoon-ink text-white shadow-[0_16px_44px_rgba(42,33,21,0.18)]"
                    : "border-black/10 bg-white/48 text-rocoon-ink hover:bg-white/72"
                }`}
                key={item.label}
                onClick={() => selectMode(index)}
                type="button"
              >
                <Power className="mb-5 size-4" />
                <span className="block font-serif text-xl font-semibold">
                  {item.label}
                </span>
                <span className="mt-1 block text-xs font-bold uppercase tracking-[0.12em] opacity-60">
                  {item.privacy}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-[1fr_0.95fr]">
          <div className="grid gap-6">
            <article className="panel-light overflow-hidden p-5 md:p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-rocoon-muted">
                    Live model
                  </p>
                  <h3 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-rocoon-ink">
                    {mode.label} scene active
                  </h3>
                </div>
                <span className="rounded-full bg-rocoon-copper/12 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.12em] text-rocoon-copper">
                  Synced
                </span>
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-[1.15fr_0.85fr]">
                <div className="relative min-h-[360px] overflow-hidden rounded-[1.35rem] bg-rocoon-ink p-5 text-white">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:42px_42px] opacity-20" />
                  <div className="absolute inset-x-8 top-14 h-52 rounded-[2rem] border border-white/18 bg-white/8 shadow-[inset_0_0_60px_rgba(214,168,95,0.08)]" />
                  <div className="absolute right-16 bottom-16 left-16 h-28 rounded-[1.5rem] border border-white/14 bg-white/6" />
                  <div className="absolute top-[38%] left-[29%] h-28 w-px bg-white/16" />
                  <div className="absolute top-[29%] left-[50%] h-52 w-px rotate-12 bg-rocoon-copper/60" />
                  <div className="absolute right-[18%] left-[16%] top-[51%] h-px bg-white/16" />

                  {rooms.map((item) => (
                    <button
                      className={`absolute ${item.x} z-10 rounded-full border px-3 py-2 text-left text-xs font-bold transition ${
                        activeRoom === item.name
                          ? "border-rocoon-gold bg-rocoon-gold text-rocoon-ink"
                          : "border-white/18 bg-black/28 text-white/74 hover:bg-white/12"
                      }`}
                      key={item.name}
                      onClick={() => setActiveRoom(item.name)}
                      type="button"
                    >
                      {item.name}
                    </button>
                  ))}

                  <div className="absolute right-5 bottom-5 left-5 z-10 rounded-2xl border border-white/12 bg-black/34 p-4 backdrop-blur">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-[0.14em] text-white/42">
                          Active zone
                        </span>
                        <strong className="mt-1 block font-serif text-2xl">
                          {room.name}
                        </strong>
                      </div>
                      <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-white/72">
                        {room.status}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-2xl border border-black/10 bg-white/62 p-5">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 font-semibold text-rocoon-ink">
                        <Thermometer className="size-4 text-rocoon-copper" />
                        Climate
                      </span>
                      <strong className="font-serif text-3xl text-rocoon-ink">
                        {climate}F
                      </strong>
                    </div>
                    <input
                      aria-label="Adjust climate"
                      className="mt-5 w-full accent-rocoon-copper"
                      max="78"
                      min="62"
                      onChange={(event) =>
                        setClimate(Number(event.target.value))
                      }
                      type="range"
                      value={climate}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <MetricCard
                      icon={<BatteryCharging className="size-4" />}
                      label="Energy"
                      value={`${mode.energy}%`}
                    />
                    <MetricCard
                      icon={<Lock className="size-4" />}
                      label="Privacy"
                      value={mode.privacy}
                    />
                    <MetricCard
                      icon={<SunMedium className="size-4" />}
                      label="Light"
                      value="Adaptive"
                    />
                    <MetricCard
                      icon={<SlidersHorizontal className="size-4" />}
                      label="Scene"
                      value="Live"
                    />
                  </div>
                </div>
              </div>
            </article>

            <article className="panel-light p-5 md:p-6">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-rocoon-muted">
                Automation sequence
              </p>
              <h3 className="mt-3 max-w-xl font-serif text-3xl font-semibold tracking-tight text-rocoon-ink">
                {mode.scene}
              </h3>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {["Sense", "Adjust", "Confirm"].map((item, index) => (
                  <div
                    className="rounded-2xl border border-black/10 bg-white/56 p-4"
                    key={item}
                  >
                    <span className="text-xs font-bold uppercase tracking-[0.12em] text-rocoon-muted">
                      0{index + 1}
                    </span>
                    <strong className="mt-4 block text-rocoon-ink">
                      {item}
                    </strong>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <div className="grid gap-6">
            <article className="panel-light p-5 md:p-6">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-rocoon-muted">
                    House AI
                  </p>
                  <h3 className="mt-2 font-serif text-3xl font-semibold tracking-tight">
                    Conversation layer
                  </h3>
                </div>
                <MessageCircle className="size-6 text-rocoon-copper" />
              </div>
              <div className="grid gap-3">
                {aiMessages.map((message) => (
                  <div
                    className={`max-w-[88%] rounded-2xl p-4 text-sm leading-6 ${
                      message.from === "Rocoon AI"
                        ? "justify-self-end bg-rocoon-ink text-white"
                        : "bg-white/70 text-rocoon-ink"
                    }`}
                    key={message.text}
                  >
                    <span className="mb-1 block text-xs font-bold uppercase tracking-[0.12em] opacity-50">
                      {message.from}
                    </span>
                    {message.text}
                  </div>
                ))}
              </div>
            </article>

            <article className="panel-light p-5 md:p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-2xl bg-rocoon-copper/12 text-rocoon-copper">
                  <Home className="size-5" />
                </div>
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-rocoon-muted">
                    App controls
                  </p>
                  <h3 className="font-serif text-2xl font-semibold tracking-tight">
                    Room states
                  </h3>
                </div>
              </div>
              <div className="grid gap-3">
                {roomControls.map((control) => (
                  <button
                    className="flex items-center justify-between rounded-2xl border border-black/10 bg-white/56 p-4 text-left transition hover:bg-white"
                    key={control.room}
                    onClick={() => setActiveRoom(control.room)}
                    type="button"
                  >
                    <span>
                      <strong className="block text-rocoon-ink">
                        {control.room}
                      </strong>
                      <span className="text-sm text-rocoon-muted">
                        {control.label}
                      </span>
                    </span>
                    <span className="flex items-center gap-2 text-sm font-bold text-rocoon-copper">
                      {control.value}
                      <ChevronRight className="size-4" />
                    </span>
                  </button>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricCard({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/58 p-4">
      <div className="mb-6 text-rocoon-copper">{icon}</div>
      <span className="text-xs font-bold uppercase tracking-[0.12em] text-rocoon-muted">
        {label}
      </span>
      <strong className="mt-1 block text-sm text-rocoon-ink">{value}</strong>
    </div>
  );
}
