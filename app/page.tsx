export default function Home() {
  return (
    <div className="bg-[#fefcf8]">
      {/* Navbar */}
      <nav className="bg-[#354c41] h-[60px] w-full">
        {/* Mobile */}
        <div className="flex items-center justify-between h-full px-5 lg:hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="Block Sports" style={{ height: "25.6px", width: "73px" }} />
          <button aria-label="Open menu" className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
        {/* Desktop */}
        <div className="hidden lg:block relative h-full min-w-[1800px] overflow-hidden">
          <div className="absolute top-1/2 -translate-y-1/2 left-[253px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="Block Sports" style={{ height: "25.6px", width: "73px" }} />
          </div>
          <div className="absolute top-[20px] left-[913px] flex gap-[40px] items-center">
            <span className="text-white text-[16px] font-bold font-sans leading-[24px]">Home</span>
            <span className="text-white text-[16px] font-normal font-sans leading-[24px]">Boxing schedule</span>
            <span className="text-white text-[16px] font-normal font-sans leading-[24px]">Strenght schedule</span>
            <span className="text-white text-[16px] font-normal font-sans leading-[24px]">Membership/shop</span>
            <span className="text-white text-[16px] font-normal font-sans leading-[24px]">Info</span>
          </div>
        </div>
      </nav>

      {/* ── MOBILE LAYOUT ── */}
      <div className="lg:hidden">
        {/* Photo collage + coral peek */}
        <div className="relative mt-4 overflow-hidden" style={{ height: "340px" }}>
          {/* Photo card */}
          <div
            className="absolute top-0 rounded-[20px] overflow-hidden bg-white"
            style={{ left: "20px", right: "35px", height: "340px" }}
          >
            {/* Boxing ring — top-left */}
            <div className="absolute" style={{ left: "-148px", top: "-134px", width: "473px", height: "315px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/gym-boxing.png" alt="Boxing ring" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            {/* Weights area — bottom */}
            <div className="absolute overflow-hidden" style={{ left: "-66px", top: "182px", width: "427px", height: "206px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/gym-weights.png"
                alt="Weights area"
                className="absolute max-w-none"
                style={{ height: "138.11%", left: "-0.04%", top: "-38.11%", width: "100.08%" }}
              />
            </div>
            {/* Punching bag — right column */}
            <div className="absolute" style={{ left: "156px", top: "-61px", width: "162px", height: "242px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/gym-bag.png" alt="Punching bag" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
          {/* Coral panel peeking from right */}
          <div
            className="absolute top-0 bg-[#d36560] rounded-[20px]"
            style={{ right: "-180px", width: "200px", height: "340px" }}
          />
        </div>

        {/* Content */}
        <div className="px-5 mt-8 flex flex-col gap-8">
          <h1 className="font-heading font-black text-[44px] text-[#354c41] leading-[1.1] m-0">
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
            <a
              href="#"
              className="bg-[#d36560] flex items-center justify-center rounded-[6px] text-white text-[16px] font-medium font-sans leading-[24px] no-underline"
              style={{ width: "174px", height: "40px" }}
            >
              Join us
            </a>
          </div>
        </div>

        {/* Footer info */}
        <div className="flex flex-col items-center gap-[28px] text-[#354c41] text-[16px] font-sans mt-12 pb-12">
          <p className="font-bold leading-[24px] m-0">Boxing · Conditioning · Recovery</p>
          <a
            href="https://maps.app.goo.gl/yQWmykY26Yv5tQY98"
            className="no-underline text-center"
            style={{ color: "#354c41" }}
          >
            <span className="font-bold leading-[24px]">Vytenio g. 52, Vilnius</span>
            <span className="font-bold leading-[24px] underline">, Lithuania</span>
          </a>
          <p className="font-bold leading-[24px] m-0">+37062692132</p>
          <p className="font-bold leading-[24px] m-0 underline cursor-pointer">Membership/shop</p>
        </div>
      </div>

      {/* ── DESKTOP LAYOUT ── */}
      <div className="hidden lg:block min-w-[1800px]">
        {/* Hero */}
        <div className="relative" style={{ height: "878px" }}>
          {/* Heading */}
          <h1
            className="absolute font-heading font-black text-[70px] text-[#354c41] leading-normal m-0"
            style={{ left: "252px", top: "103px", width: "636px" }}
          >
            Performance{" "}
            <br />
            &amp; playful spirit
          </h1>

          {/* Body text */}
          <div
            className="absolute text-[#354c41] text-[16px] font-medium font-sans leading-[24px]"
            style={{ left: "253px", top: "310px", width: "505px" }}
          >
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

          {/* Join us button */}
          <a
            href="#"
            className="absolute bg-[#d36560] flex items-center justify-center rounded-[6px] text-white text-[16px] font-medium font-sans leading-[24px] no-underline"
            style={{ left: "253px", top: "684px", width: "174px", height: "40px" }}
          >
            Join us
          </a>

          {/* Photo collage */}
          <div
            className="absolute bg-white rounded-[20px] overflow-hidden"
            style={{ left: "913px", top: "103px", width: "635px", height: "671px" }}
          >
            <div className="absolute" style={{ left: "-296px", top: "-267px", width: "945px", height: "630px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/gym-boxing.png" alt="Boxing ring" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div
              className="absolute overflow-hidden"
              style={{ left: "-131px", top: "363px", width: "853px", height: "412px" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/gym-weights.png"
                alt="Weights area"
                className="absolute max-w-none"
                style={{ height: "138.11%", left: "-0.04%", top: "-38.11%", width: "100.08%" }}
              />
            </div>
            <div className="absolute" style={{ left: "312px", top: "-121px", width: "323px", height: "484px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/gym-bag.png" alt="Punching bag" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>

          {/* Coral right panel */}
          <div
            className="absolute bg-[#d36560] rounded-[20px]"
            style={{ left: "1573px", top: "103px", width: "635px", height: "671px" }}
          />
        </div>

        {/* Footer bar */}
        <div
          className="flex items-center justify-between text-[#354c41] text-[16px] font-sans"
          style={{ paddingLeft: "253px", paddingRight: "252px", height: "63px" }}
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
    </div>
  );
}
