import { Suspense } from "react";
import Link from "next/link";
import RevealOverlay from "@/app/components/RevealGroup";
import Header from "@/app/components/Header";
import SlideIn from "@/app/components/SlideIn";
import AppStoreBadge from "@/app/components/AppStoreBadge";

export default function Home() {
  return (
    <div className="bg-[#fefcf8]">
      <Suspense>
        <Header />
      </Suspense>

      {/* ── MOBILE LAYOUT (up to 768px) ── */}
      <div className="md:hidden overflow-x-hidden">
        <div className="relative px-4 pt-4">
          <div className="relative">
            {/* Photo collage — same layout as desktop, scales via aspect-ratio */}
            <div
              className="relative rounded-[20px] overflow-hidden bg-white"
              style={{ aspectRatio: "635/671" }}
            >
              <div className="absolute" style={{ left: "-46.6%", top: "-39.8%", width: "148.8%", height: "93.9%" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/gym-boxing.jpg" alt="Boxing ring" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="absolute overflow-hidden" style={{ left: "-20.6%", top: "54.1%", width: "134.3%", height: "61.4%" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/gym-weights.jpg"
                  alt="Weights area"
                  className="absolute max-w-none"
                  style={{ height: "138.11%", left: "-0.04%", top: "-38.11%", width: "100.08%" }}
                />
              </div>
              <div className="absolute" style={{ left: "49.1%", top: "-18%", width: "50.9%", height: "72.1%" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/gym-bag.jpg" alt="Punching bag" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <RevealOverlay />
            </div>
            {/* Coral ribbon — anchored to collage height, peeks from right */}
            <div
              className="absolute bg-[#d36560] rounded-l-[20px] top-0 bottom-0"
              style={{ left: "calc(100% + 8px)", width: "200px" }}
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Content */}
        <SlideIn className="px-4 mt-8 flex flex-col gap-8" from="translateX(-8%)">
          <h1 className="font-heading font-black text-[44px] text-[#354c41] leading-[1.2] m-0">
            Performance
            <br />
            &amp; playful spirit
          </h1>
          <div className="text-[#354c41] text-[16px] font-medium font-sans leading-[24px]">
            <p className="mb-0">
              Block Sports, located in Naujamiestis inside the iconic Loftas quarter — a raw, industrial space in former
              factory buildings — offers a modern, high-energy training environment for those who want more than a
              typical gym.
            </p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">
              We specialize in boxing, strength training, and performance-based strength measurements, led by experienced
              coaches. Whether you&apos;re a beginner or experienced, every session is designed to build real skill,
              power, and measurable progress.
            </p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">
              Block Sports is modern, hip, and community-driven — where serious training meets an authentic industrial
              vibe in the heart of Vilnius.
            </p>
          </div>
          <div className="flex justify-center">
            <Link
              href="/membership"
              className="bg-[#d36560] flex items-center justify-center rounded-[6px] text-white text-[16px] font-medium font-sans leading-[24px] no-underline"
              style={{ width: "174px", height: "40px" }}
            >
              Join us here
            </Link>
          </div>

          <div>
            <p className="font-normal text-[#354c41] leading-tight m-0 mb-4" style={{ fontFamily: "var(--font-oswald)", fontSize: "34px" }}>
              Or get our mobile app to sign up for classes
            </p>
            <div className="flex gap-3 items-center justify-center">
              <a href="https://apps.apple.com/lt/app/block-sports-gym/id6761255231" target="_blank" rel="noopener noreferrer">
                <AppStoreBadge />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.bsport_618__5529&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/google-play-badge.svg" alt="Get it on Google Play" style={{ height: "40px", width: "auto" }} />
              </a>
            </div>
          </div>
        </SlideIn>

        {/* Footer info */}
        <div className="flex flex-col items-center gap-[28px] text-[#354c41] text-[16px] font-sans mt-12 pb-12 px-5">
          <p className="font-bold leading-[24px] m-0">Boxing · Conditioning · Recovery</p>
          <a
            href="https://maps.app.goo.gl/yQWmykY26Yv5tQY98"
            className="no-underline text-center"
            style={{ color: "#354c41" }}
          >
            <span className="font-bold leading-[24px] underline">Vytenio g. 52, Vilnius, Lithuania</span>
          </a>
          <p className="font-bold leading-[24px] m-0">+37062692132</p>
          <Link href="/membership" className="font-bold leading-[24px] m-0 underline shrink-0 cursor-pointer no-underline" style={{ color: "#354c41" }}>Membership/Shop</Link>
        </div>
      </div>

      {/* ── DESKTOP LAYOUT (768px+) ── */}
      <div className="hidden md:block overflow-x-hidden">
        {/* Hero */}
        <div className="relative" style={{ paddingTop: "5vw", paddingBottom: "5.7vw" }}>
          <div className="container">
            <div className="row gx-5 justify-center align-items-stretch relative">
              {/* Col 1 — content (5/12) */}
              <SlideIn className="col-md-6 col-xxl-5 d-flex flex-column justify-content-between">
                <h1
                  className="font-heading font-black text-[#354c41] leading-[1.2] m-0"
                  style={{ fontSize: "clamp(36px, 3.9vw, 70px)" }}
                >
                  Performance{" "}
                  <br />
                  &amp; playful spirit
                </h1>

                <div
                  className="text-[#354c41] text-[clamp(13px,1.2vw,16px)] font-medium font-sans leading-[1.6]"
                >
                  <p className="mb-3">
                    Block Sports, located in Naujamiestis inside the iconic Loftas quarter — a raw, industrial space in
                    former factory buildings — offers a modern, high-energy training environment for those who want more
                    than a typical gym.
                  </p>
                  <p className="mb-3">
                    We specialize in boxing, strength training, and performance-based strength measurements, led by
                    experienced coaches. Whether you&apos;re a beginner or experienced, every session is designed to
                    build real skill, power, and measurable progress.
                  </p>
                  <p className="mb-3">
                    Block Sports is modern, hip, and community-driven — where serious training meets an authentic
                    industrial vibe in the heart of Vilnius.
                  </p>
                </div>

                <Link
                  href="/membership"
                  className="bg-[#d36560] inline-flex items-center justify-center rounded-[6px] text-white text-[16px] font-medium font-sans leading-[24px] no-underline self-start"
                  style={{ width: "174px", height: "40px" }}
                >
                  Join us here
                </Link>

                <div className="flex flex-col gap-3">
                  <p
                    className="font-normal text-[#354c41] leading-tight m-0"
                    style={{ fontFamily: "var(--font-oswald)", fontSize: "clamp(28px, 2.8vw, 50px)" }}
                  >
                    Or get our mobile app to sign up for classes
                  </p>
                  <div className="flex gap-3 items-center">
                    <a href="https://apps.apple.com/lt/app/block-sports-gym/id6761255231" target="_blank" rel="noopener noreferrer">
                      <AppStoreBadge />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.bsport_618__5529&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/google-play-badge.svg" alt="Get it on Google Play" style={{ height: "40px", width: "auto" }} />
                    </a>
                  </div>
                </div>
              </SlideIn>

              {/* Col 2 — photo collage (7/12) */}
              <div className="col-md-6 col-xxl-5 relative">
                {/* Spacer drives column height via aspect-ratio; image fills absolutely */}
                <div style={{ aspectRatio: "635/671" }} aria-hidden="true" />
                <div
                  className="absolute inset-0 bg-white rounded-[20px] overflow-hidden"
                >
                  {/* Boxing ring */}
                  <div className="absolute" style={{ left: "-46.6%", top: "-39.8%", width: "148.8%", height: "93.9%" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/gym-boxing.jpg" alt="Boxing ring" className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  {/* Weights area */}
                  <div className="absolute overflow-hidden" style={{ left: "-20.6%", top: "54.1%", width: "134.3%", height: "61.4%" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/gym-weights.jpg"
                      alt="Weights area"
                      className="absolute max-w-none"
                      style={{ height: "138.11%", left: "-0.04%", top: "-38.11%", width: "100.08%" }}
                    />
                  </div>
                  {/* Punching bag */}
                  <div className="absolute" style={{ left: "49.1%", top: "-18%", width: "50.9%", height: "72.1%" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/gym-bag.jpg" alt="Punching bag" className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <RevealOverlay />
                </div>
                {/* Coral panel — 25px right of image, bleeds off-screen */}
                <SlideIn
                  className="absolute bg-[#d36560] rounded-l-[20px] top-0 bottom-0"
                  style={{ left: "calc(100% + 8px)", width: "5000px" }}
                  from="translateX(25vw)"
                  delay={0}
                  duration={900}
                  initialOpacity={0}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer bar */}
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
            <span className="font-bold underline">Vytenio g. 52, Vilnius, Lithuania</span>
          </a>
          <p className="font-bold leading-[24px] m-0 shrink-0">+37062692132</p>
          <Link href="/membership" className="font-bold leading-[24px] m-0 underline shrink-0 cursor-pointer no-underline" style={{ color: "#354c41" }}>Membership/Shop</Link>
        </div>
      </div>
    </div>
  );
}
