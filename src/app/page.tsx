"use client";

import { useEffect } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { BackgroundScene } from "@/components/shared/BackgroundScene";

export default function Home() {
  return (
    <div className="min-h-screen in-h-screen overflow-x-hidden bg-black">
      <div className="fixed inset-0 z-0 vertical-streaks pointer-events-none" />
      <div className="fixed inset-0 z-0 crt-scanlines opacity-30 pointer-events-none" />
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_16%,rgba(34,211,238,0.14),transparent_32%),linear-gradient(180deg,#020617_0%,#000_62%,#020617_100%)] pointer-events-none" />

      <BackgroundScene />
      <main
        className="mx-auto min-h-screen w-full max-w-[86rem] overflow-hidden relative overflow-hidden bg-[#faf8f1]"
        style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}
      >
        <Navbar />
        <Footer />
      </main>
    </div>
  );
}
