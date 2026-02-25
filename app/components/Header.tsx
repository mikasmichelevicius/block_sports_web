"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import MobileNav from "@/app/components/MobileNav";

const linkBase = "text-white text-[clamp(12px,1.2vw,16px)] font-sans leading-[24px] no-underline whitespace-nowrap";
const activeClass = `${linkBase} font-bold`;
const inactiveClass = `${linkBase} font-normal`;

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Boxing schedule", href: "/schedule?type=boxing" },
  { label: "Strenght schedule", href: "/schedule?type=strength" },
  { label: "Membership/shop", href: "/membership" },
  { label: "Info", href: "/info" },
];

export default function Header() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isActive = (item: NavItem) => {
    if (item.href === "/") return pathname === "/";
    if (item.href.startsWith("/schedule")) {
      const itemType = new URL(item.href, "http://x").searchParams.get("type");
      return pathname === "/schedule" && searchParams.get("type") === itemType;
    }
    return pathname === item.href;
  };

  return (
    <nav className="bg-[#354c41] h-[60px]">
      {/* Mobile */}
      <div className="flex md:hidden items-center justify-between h-full px-5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Link href="/">
          <img src="/logo.svg" alt="Block Sports" style={{ height: "25.6px", width: "73px" }} />
        </Link>
        <MobileNav />
      </div>
      {/* Desktop */}
      <div className="hidden md:flex relative h-full items-center justify-between px-[5%] lg:px-[14%]">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Link href="/">
            <img src="/logo.svg" alt="Block Sports" style={{ height: "25.6px", width: "73px" }} />
          </Link>
        </div>
        <div className="flex gap-[clamp(16px,2.5vw,40px)] items-center">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item);
            if (active) {
              return (
                <span key={item.label} className={activeClass}>
                  {item.label}
                </span>
              );
            }
            return (
              <Link key={item.label} href={item.href} className={inactiveClass}>
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
