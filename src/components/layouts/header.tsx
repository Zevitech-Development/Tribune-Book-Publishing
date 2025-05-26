"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  HeaderServicesNavigationLinks,
  HeaderWebsiteNavigationLinks,
} from "@/content/layout-content";

import Sidebar from "./sidebar";
import { Button } from "../ui/button";
import Banner from "./banner";

import { cn } from "@/lib/utils";

import { IoCall } from "react-icons/io5";
import Logo from "../../../public/favicons/logo.svg";
import { ChevronDown } from "lucide-react";

function Header() {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const pathname = usePathname();

  const handleMouseEnter = (index: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 100);
  };

  return (
    <>
      <Banner />

      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="h-[88px] layout-standard flex items-center justify-between transition-all duration-300 ease-in-out">
          <Link href="/" passHref>
            <Image
              src={Logo}
              alt="Tribune Book Publishing"
              height={50}
              priority
              className="hover:opacity-90 transition-opacity duration-200"
            />
          </Link>

          <nav className="max-lg:hidden">
            <ul className="flex items-center gap-6">
              {HeaderWebsiteNavigationLinks.map((links, index) => (
                <li
                  key={index}
                  className={cn(
                    "text-base font-medium font-libre transition-colors",
                    pathname == links.href
                      ? "text-primary"
                      : "text-heading hover:text-primary"
                  )}
                >
                  <Link href={links.href}>{links.title}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link href="tel:4082145589" passHref>
            <Button
              asChild
              className="h-[50px] font-libre font-bold text-sm hover:bg-black hover:text-foreground transition-colors bg-white border-2 border-black text-heading rounded-[25px] max-lg:hidden"
            >
              <div className="flex items-center gap-2">
                <IoCall />
                <span>(408) 214-5589</span>
              </div>
            </Button>
          </Link>

          <Sidebar />
        </div>
      </header>

      <div className="sticky top-[88px] bg-white z-50 h-[60px] border-b border-t w-full max-lg:hidden">
        <nav className="layout-standard h-full flex items-center">
          <ul className="flex items-center gap-8 text-base font-medium font-libre text-heading relative">
            {HeaderServicesNavigationLinks.map((item, index) => (
              <li
                key={index}
                className="relative"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors">
                  {item.title}
                  <ChevronDown size={14} />
                </div>

                <ul
                  className={cn(
                    "absolute top-full left-0 mt-2 bg-white border-2 rounded-lg shadow-lg p-3 w-max min-w-[200px] z-50 transition-all duration-200",
                    activeDropdown === index
                      ? "opacity-100 visible"
                      : "opacity-0 invisible pointer-events-none"
                  )}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.sublinks.map((sublink, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        href={sublink.href}
                        className="block px-4 py-4 rounded-md text-sm text-heading hover:bg-primary hover:text-white transition-all"
                      >
                        {sublink.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
