export default function Home() {
  return (
    <div className="bg-[#fefcf8] min-w-[1800px]">
      {/* Navbar */}
      <nav className="relative bg-[#354c41] h-[60px] w-full overflow-hidden">
        {/* Logo */}
        <div className="absolute top-1/2 -translate-y-1/2 left-[253px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="Block Sports" style={{ height: "25.6px", width: "73px" }} />
        </div>
        {/* Nav links */}
        <div className="absolute top-[20px] left-[913px] flex gap-[40px] items-center">
          <span className="text-white text-[16px] font-bold font-sans leading-[24px]">Home</span>
          <span className="text-white text-[16px] font-normal font-sans leading-[24px]">Boxing schedule</span>
          <span className="text-white text-[16px] font-normal font-sans leading-[24px]">Strenght schedule</span>
          <span className="text-white text-[16px] font-normal font-sans leading-[24px]">Membership/shop</span>
          <span className="text-white text-[16px] font-normal font-sans leading-[24px]">Info</span>
        </div>
      </nav>

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
            factory buildings — offers a modern, high-energy training environment for those who want more than a typical
            gym.
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
          {/* Top: boxing ring — large image offset left and up */}
          <div
            className="absolute"
            style={{ left: "-296px", top: "-267px", width: "945px", height: "630px" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/gym-boxing.png"
              alt="Boxing ring"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          {/* Bottom: weights area — overflows left */}
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
          {/* Right column: punching bag */}
          <div
            className="absolute"
            style={{ left: "312px", top: "-121px", width: "323px", height: "484px" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/gym-bag.png"
              alt="Punching bag"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Coral right panel — partially visible, overflows right edge */}
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
  );
}
