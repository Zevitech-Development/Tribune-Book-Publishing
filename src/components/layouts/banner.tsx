"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Marquee from "react-fast-marquee";

function Banner() {
  const pathname = usePathname();

  if (pathname !== "/") return null;

  return (
    <div className="bg-primary py-2 overflow-hidden border-b">
      <Marquee
        gradient={false}
        speed={40}
        pauseOnHover
        className="text-white lg:text-sm text-xs font-libre font-medium tracking-wide"
      >
        Empowering Authors Everywhere — Professional Publishing Services |
        Global Reach, Local Impact | End-to-End Book Production | Editorial,
        Design & Distribution | Partner with Us for Your Publishing Journey |
        Partner with Us for Your Publishing Journey.
      </Marquee>
    </div>
  );
}

export default Banner;
