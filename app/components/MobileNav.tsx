"use client";

import Link from "next/link";
import { useState } from "react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger button */}
      <button aria-label="Open menu" className="text-white" onClick={() => setOpen(true)}>
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

      {/* Full-screen overlay */}
      {open && (
        <div className="fixed inset-0 bg-[#354c41] z-50 flex flex-col">
          {/* Top bar — mirrors the collapsed nav */}
          <div className="flex items-center justify-between h-[60px] px-5 shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Link href="/" onClick={() => setOpen(false)}><img src="/logo.svg" alt="Block Sports" style={{ height: "25.6px", width: "73px" }} /></Link>
            <button aria-label="Close menu" className="text-white" onClick={() => setOpen(false)}>
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
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <div className="flex flex-col items-center gap-[60px] pt-[80px]">
            <Link
              href="/"
              className="text-white text-[40px] font-bold font-sans leading-normal no-underline"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/boxing-schedule"
              className="text-white text-[40px] font-normal font-sans leading-normal no-underline"
              onClick={() => setOpen(false)}
            >
              Boxing schedule
            </Link>
            <Link
              href="/strength-schedule"
              className="text-white text-[40px] font-normal font-sans leading-normal no-underline"
              onClick={() => setOpen(false)}
            >
              Strenght schedule
            </Link>
            <a
              href="#"
              className="text-white text-[40px] font-normal font-sans leading-normal no-underline"
              onClick={() => setOpen(false)}
            >
              Membership/shop
            </a>
            <a
              href="/info"
              className="text-white text-[40px] font-normal font-sans leading-normal no-underline"
              onClick={() => setOpen(false)}
            >
              Info
            </a>
          </div>
        </div>
      )}
    </>
  );
}
