import Link from "next/link";
import MobileNav from "@/app/components/MobileNav";

export default function InfoPage() {
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
            <Link href="/schedule?type=boxing" className="text-white text-[16px] font-normal font-sans leading-[24px] no-underline">Boxing schedule</Link>
            <Link href="/schedule?type=strength" className="text-white text-[16px] font-normal font-sans leading-[24px] no-underline">Strenght schedule</Link>
            <Link href="/membership" className="text-white text-[16px] font-normal font-sans leading-[24px] no-underline">Membership/shop</Link>
            <Link href="/info" className="text-white text-[16px] font-bold font-sans leading-[24px] no-underline">Info</Link>
          </div>
        </div>
      </nav>

      {/* ── MAIN CONTENT ── */}
      <main className="px-5 xl:px-[14%] pt-10 xl:pt-[61px] pb-16 xl:pb-[100px]">
        <div className="flex flex-col gap-16 xl:gap-[100px] text-[#354c41]">

          {/* ── SECTION 1: Information ── */}
          <section className="flex flex-col gap-6 xl:gap-[24px]">
            <h1
              className="font-heading font-black text-[#354c41] leading-normal m-0 text-[36px] xl:[font-size:clamp(40px,3.9vw,70px)]"
            >
              Information
            </h1>

            <div className="flex flex-col xl:flex-row gap-8 xl:gap-[87px] items-start">

              {/* Opening times */}
              <div className="flex flex-col gap-[13px] xl:w-[371px] shrink-0">
                <p className="font-sans font-bold text-[20px] leading-[24px] m-0">Opening times</p>
                <ul className="font-sans font-medium text-[16px] leading-[24px] list-disc m-0 pl-[24px]">
                  <li>Monday: 07:00 → 12:00, 13:00 → 20:00</li>
                  <li>Tuesday: 07:00 → 12:00, 13:00 → 20:00</li>
                  <li>Wednesday: 07:00 → 12:00, 13:00 → 20:00</li>
                  <li>Thursday: 07:00 → 12:00, 13:00 → 20:00</li>
                  <li>Friday: 07:00 → 12:00, 13:00 → 20:00</li>
                  <li>Saturday: 11:00 → 12:00,</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>

              {/* Contact */}
              <div className="flex flex-col gap-[13px]">
                <p className="font-sans font-bold text-[20px] leading-[24px] m-0">Contact</p>
                <div className="font-sans font-medium text-[16px] leading-[24px]">
                  <p className="mb-0">info@blocksports.lt</p>
                  <p className="mb-0">+37062692132</p>
                  <p className="m-0">Vytenio g. 52, Vilnius, Lithuania</p>
                </div>
              </div>

            </div>
          </section>

          {/* ── SECTION 2: Pricing ── */}
          <section className="flex flex-col gap-6 xl:gap-[24px]">
            <h2
              className="font-heading font-black text-[#354c41] leading-normal m-0 text-[36px] xl:[font-size:clamp(40px,3.9vw,70px)]"
            >
              Pricing
            </h2>

            <div className="flex flex-col xl:flex-row gap-8 xl:gap-[24px] items-start">

              {/* Left: Boxing + Strength stacked */}
              <div className="flex flex-col gap-8 xl:gap-[24px] shrink-0">
                {/* Boxing */}
                <div className="flex flex-col gap-[13px] xl:w-[371px]">
                  <p className="font-sans font-bold text-[20px] leading-[24px] m-0">Boxing</p>
                  <ul className="font-sans font-medium text-[16px] leading-[24px] list-disc m-0 pl-[24px]">
                    <li>All adult group boxing trainings - €95</li>
                    <li>All youth boxing + strength trainings - €95</li>
                    <li>Adult boxing &amp; strength unlimited - €200</li>
                    <li>Single group training - €20</li>
                  </ul>
                </div>

                {/* Strength */}
                <div className="flex flex-col gap-[13px] xl:w-[406px]">
                  <p className="font-sans font-bold text-[20px] leading-[24px] m-0">Strength</p>
                  <ul className="font-sans font-medium text-[16px] leading-[24px] list-disc m-0 pl-[24px]">
                    <li>Group strength 2 times per week - €120</li>
                    <li>Group strength unlimited + special offers - €160</li>
                    <li>Single group training - €20</li>
                  </ul>
                </div>
              </div>

              {/* Right: Special offers + Other stacked */}
              <div className="flex flex-col gap-8 xl:gap-[24px] shrink-0">
                {/* Special offers */}
                <div className="flex flex-col gap-[13px]">
                  <p className="font-sans font-bold text-[20px] leading-[24px] m-0">Special offers</p>
                  <ul className="font-sans font-medium text-[16px] leading-[24px] list-disc m-0 pl-[24px] xl:w-[409px]">
                    <li>Yoga - €20 (free for strength unlimited)</li>
                    <li>Performance testing events (Hawking plates, Vitruve)- €50 (free for strength unlimited)</li>
                  </ul>
                </div>

                {/* Other */}
                <div className="flex flex-col gap-[13px]">
                  <p className="font-sans font-bold text-[20px] leading-[24px] m-0">Other</p>
                  <ul className="font-sans font-medium text-[16px] leading-[24px] list-disc m-0 pl-[24px] xl:w-[380px]">
                    <li>Boxing youth family deal (two or more kids) - €85/per kid</li>
                    <li>Community events - free for members.</li>
                    <li>Individual trainings - contact for pricing</li>
                  </ul>
                </div>
              </div>

            </div>
          </section>

          {/* ── SECTION 3: Other information ── */}
          <section className="flex flex-col gap-6 xl:gap-[24px]">
            <h2
              className="font-heading font-black text-[#354c41] leading-normal m-0 text-[36px] xl:[font-size:clamp(40px,3.9vw,70px)]"
            >
              Other iformation
            </h2>

            <div className="flex flex-col xl:flex-row gap-8 xl:gap-[87px] items-start">

              {/* Termination & Pause */}
              <div className="flex flex-col gap-[13px] xl:w-[371px] shrink-0">
                <p className="font-sans font-bold text-[20px] leading-[24px] m-0">
                  Termination &amp; Pause
                </p>
                <div className="font-sans font-medium text-[16px] leading-[24px]">
                  <ul className="list-disc pl-[24px] m-0">
                    <li>
                      To cancel your membership, email: info@blocksports.lt The cancellation
                      date is based on when we receive your email and your contract&apos;s
                      notice period.
                    </li>
                  </ul>
                  <p className="my-6 xl:my-[24px]">&nbsp;</p>
                  <ul className="list-disc pl-[24px] m-0">
                    <li>
                      Membership pauses are only available due to injury or pregnancy. For
                      injuries, a doctor&apos;s or physiotherapist&apos;s certificate is
                      required, including the recovery period. Pauses can last from 1 to 6
                      months, starting from the application date.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Location rent */}
              <div className="flex flex-col gap-[13px]">
                <p className="font-sans font-bold text-[20px] leading-[24px] m-0">Location rent</p>
                <div className="font-sans font-medium text-[16px] leading-[24px]">
                  <p className="mb-0">We rent out one of our spaces for:</p>
                  <p className="mb-0">• Foto/video shoots</p>
                  <p className="mb-0">• Events</p>
                  <p className="mb-0">• Business parties</p>
                  <p className="mb-0">• Sports activities</p>
                  <p className="mb-0">&nbsp;</p>
                  <p className="m-0">Contact us for more information.</p>
                </div>
              </div>

            </div>
          </section>

        </div>
      </main>

      {/* ── FOOTER ── */}
      {/* Mobile: stacked column, centered. Desktop: single row, space-between */}
      <div className="text-[#354c41] text-[16px] font-sans px-5 xl:px-[14%]
        flex flex-col items-center gap-4 py-8
        xl:flex-row xl:justify-between xl:py-0 xl:gap-0"
        style={{ minHeight: "63px" }}
      >
        <p className="font-bold leading-[24px] m-0 shrink-0">Boxing · Conditioning · Recovery</p>
        <a
          href="https://maps.app.goo.gl/yQWmykY26Yv5tQY98"
          className="leading-[24px] shrink-0 no-underline text-center"
          style={{ color: "#354c41" }}
        >
          <span className="font-bold underline">Vytenio g. 52, Vilnius, Lithuania</span>
        </a>
        <p className="font-bold leading-[24px] m-0 shrink-0">+37062692132</p>
        <Link href="/membership" className="font-bold leading-[24px] m-0 underline shrink-0 cursor-pointer no-underline" style={{ color: "#354c41" }}>Membership/shop</Link>
      </div>

    </div>
  );
}
