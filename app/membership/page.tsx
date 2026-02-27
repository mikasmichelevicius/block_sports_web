import { Suspense } from "react";
import Link from "next/link";
import Header from "@/app/components/Header";
import MembershipsWidget from "@/app/components/MembershipsWidget";
import PassesWidget from "@/app/components/PassesWidget";

export default function MembershipPage() {
  return (
    <div className="bg-[#fefcf8]">

      <Suspense>
        <Header />
      </Suspense>

      <main className="pt-10 xl:pt-[61px] pb-16 xl:pb-[100px]">
        <div className="container text-[#354c41]">
          <div className="flex flex-col gap-16 xl:gap-[80px]">

            {/* Memberships */}
            <section>
              <h1
                className="font-heading font-black leading-normal m-0 mb-6 xl:mb-[24px]"
                style={{ fontSize: "clamp(40px, 3.9vw, 70px)" }}
              >
                Memberships
              </h1>
              <div className="row">
                <div className="col-12">
                  <MembershipsWidget />
                </div>
              </div>
            </section>

            {/* Passes */}
            <section>
              <h2
                className="font-heading font-black leading-normal m-0 mb-6 xl:mb-[24px]"
                style={{ fontSize: "clamp(40px, 3.9vw, 70px)" }}
              >
                Passes
              </h2>
              <div className="row">
                <div className="col-12">
                  <PassesWidget />
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>

      {/* ── FOOTER ── */}
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
            <Link href="/membership" className="font-bold leading-[24px] m-0 underline shrink-0 no-underline" style={{ color: "#354c41" }}>Membership/shop</Link>
          </div>
        </div>
      </div>

    </div>
  );
}
