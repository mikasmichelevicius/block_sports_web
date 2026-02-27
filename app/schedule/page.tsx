"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import Header from "@/app/components/Header";
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
      <Header />

      <main className="pt-10 xl:pt-[61px] pb-16 xl:pb-[100px]">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1
                className="font-heading font-black text-[#354c41] leading-normal m-0 mb-8 xl:mb-[40px]"
                style={{ fontSize: "clamp(40px, 3.9vw, 70px)" }}
              >
                {isBoxing ? "Boxing Schedule" : "Gym Schedule"}
              </h1>
              <div style={{ display: isBoxing ? "block" : "none" }}>
                {mountedBoxing && <BoxingWidget />}
              </div>
              <div style={{ display: isBoxing ? "none" : "block" }}>
                {mountedStrength && <StrengthWidget />}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <div className="text-[#354c41] text-[16px] font-sans py-8 xl:py-0" style={{ minHeight: "63px" }}>
        <div className="container">
          <div className="flex flex-col items-center gap-4 xl:flex-row xl:justify-between xl:items-center xl:h-[63px]">
            <p className="font-bold leading-[24px] m-0 shrink-0">Boxing · Conditioning · Recovery</p>
            <a
              href="https://maps.app.goo.gl/yQWmykY26Yv5tQY98"
              className="leading-[24px] shrink-0 no-underline text-center"
              style={{ color: "#354c41" }}
            >
              <span className="font-bold underline">Vytenio g. 52, Vilnius, Lithuania</span>
            </a>
            <p className="font-bold leading-[24px] m-0 shrink-0">+37062692132</p>
            <Link href="/membership" className="font-bold leading-[24px] m-0 underline shrink-0 no-underline" style={{ color: "#354c41" }}>Membership/Shop</Link>
          </div>
        </div>
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
