import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";

import Logo from "../../../public/favicons/logo.svg";
import { IoCall } from "react-icons/io5";
import { BiSolidMessageSquareDots } from "react-icons/bi";

function BusinessHeader() {
  return (
    <header className="bg-white border-b h-[88px] shadow-lg">
      <div className="layout-standard h-full flex items-center justify-between">
        <Link href="/" passHref>
          <Image
            src={Logo}
            alt="Tribune Book Publishing"
            height={50}
            priority
            className="hover:opacity-90 transition-opacity duration-200"
          />
        </Link>

        <div className="flex items-center gap-2">
          <Link href="tel:4082145589" passHref>
            <Button
              asChild
              className="md:h-[50px] h-[35px] max-md:w-[35px] font-libre font-bold text-sm hover:bg-black hover:text-foreground transition-colors bg-white border-2 border-black text-heading rounded-[25px]"
            >
              <div className="flex items-center gap-2">
                <BiSolidMessageSquareDots />
                <span className="max-md:hidden">Chat Now</span>
              </div>
            </Button>
          </Link>

          <Link href="tel:4082145589" passHref>
            <Button
              asChild
              className="md:h-[50px] h-[35px] max-md:w-[35px] font-libre font-bold text-sm hover:bg-primary-hover transition-colors bg-primary text-primary-foreground rounded-[25px]"
            >
              <div className="flex items-center gap-2">
                <IoCall />
                <span className="max-md:hidden">(408) 214-5589</span>
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default BusinessHeader;
