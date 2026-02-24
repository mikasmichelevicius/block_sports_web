"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import MobileNav from "@/app/components/MobileNav";
import BoxingWidget from "@/app/components/BoxingWidget";
import StrengthWidget from "@/app/components/StrengthWidget";

function ScheduleContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type") ?? "boxing";
  const isBoxing = type === "boxing";

  const [mountedBoxing, setMountedBoxing] = useState(false);
  const [mountedStrength, setMountedStrength] = useState(false);

  useEffect(() => {
    if (isBoxing) setMountedBoxing(true);
    else setMountedStrength(true);
  }, [isBoxing]);

  return (
    <div className="bg-[#fefcf8]">

      {/* ── NAVBAR ── */}
      <nav className="bg-[#354c41] h-[60px]">
        {/* Mobile */}
        <div className="flex xl:hidden items-center justify-between h-full px-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Link href="/"><img src="/logo.svg" alt="Block Sports" style={{ height: "25.6px", width: "73px" }} /></Link>
          <MobileNav />
        </div>
        {/* Desktop */}
        <div className="hidden xl:block relative h-full overflow-hidden">
          <div className="absolute top-1/2 -translate-y-1/2 left-[14%]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Link href="/"><img src="/logo.svg" alt="Block Sports" style={{ height: "25.6px", width: "73px" }} /></Link>
          </div>
          <div className="absolute top-[20px] left-[50.7%] flex gap-[40px] items-center">
            <Link href="/" className="text-white text-[16px] font-normal font-sans leading-[24px] no-underline">Home</Link>
            {isBoxing ? (
              <span className="text-white text-[16px] font-bold font-sans leading-[24px]">Boxing schedule</span>
            ) : (
              <Link href="/schedule?type=boxing" className="text-white text-[16px] font-normal font-sans leading-[24px] no-underline">Boxing schedule</Link>
            )}
            {!isBoxing ? (
              <span className="text-white text-[16px] font-bold font-sans leading-[24px]">Strenght schedule</span>
            ) : (
              <Link href="/schedule?type=strength" className="text-white text-[16px] font-normal font-sans leading-[24px] no-underline">Strenght schedule</Link>
            )}
            <Link href="/info" className="text-white text-[16px] font-normal font-sans leading-[24px] no-underline">Membership/shop</Link>
            <Link href="/info" className="text-white text-[16px] font-normal font-sans leading-[24px] no-underline">Info</Link>
          </div>
        </div>
      </nav>

      {/* ── CONTENT ── */}
      <main className="px-[14%] pt-[61px] pb-[100px]">
        <h1
          className="font-heading font-black text-[#354c41] leading-normal m-0 mb-[40px]"
          style={{ fontSize: "clamp(40px, 3.9vw, 70px)" }}
        >
          {isBoxing ? "Boxing schedule" : "Strength schedule"}
        </h1>
        <div style={{ display: isBoxing ? "block" : "none" }}>
          {mountedBoxing && <BoxingWidget />}
        </div>
        <div style={{ display: isBoxing ? "none" : "block" }}>
          {mountedStrength && <StrengthWidget />}
        </div>
      </main>

      {/* ── FOOTER ── */}
      <div
        className="flex items-center justify-between text-[#354c41] text-[16px] font-sans px-[14%]"
        style={{ height: "63px" }}
      >
        <p className="font-bold leading-[24px] m-0 shrink-0">Boxing · Conditioning · Recovery</p>
        <a
          href="https://maps.app.goo.gl/yQWmykY26Yv5tQY98"
          className="leading-[24px] shrink-0 no-underline"
          style={{ color: "#354c41" }}
        >
          <span className="font-bold">Vytenio g. 52, Vilnius</span>
          <span className="font-bold underline">, Lithuania</span>
        </a>
        <p className="font-bold leading-[24px] m-0 shrink-0">+37062692132</p>
        <p className="font-bold leading-[24px] m-0 underline shrink-0 cursor-pointer">Membership/shop</p>
      </div>

    </div>
  );
}

export default function SchedulePage() {
  return (
    <Suspense>
      <ScheduleContent />
    </Suspense>
  );
}
