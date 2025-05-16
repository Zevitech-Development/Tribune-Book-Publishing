import React from "react";
import Image from "next/image";
import Link from "next/link";

import HeaderNavigationMenu from "./header-navigation-menu";
import HeaderButtons from "./header-buttons";

import Logo from "../../../public/favicons/logo.svg";

const Header = () => {
  return (
    <header className="h-[88px] bg-white w-full z-50 sticky top-[-1px] border-b shadow-sm">
      <div className="layout-standard h-full flex items-center justify-between">
        <Link href={"/"} passHref>
          <Image
            src={Logo}
            alt="Tribune Book Publishing"
            height={50}
            priority
          />
        </Link>

        <HeaderNavigationMenu />
        <HeaderButtons />
      </div>
    </header>
  );
};

export default Header;
