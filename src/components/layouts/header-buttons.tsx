import React from "react";

import { Button } from "../ui/button";

import { IoCall } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";

const HeaderButtons = () => {
  return (
    <>
      {/* CALL TO ACTION BUTTON -- LARGE SCREENS */}
      <Button className="h-[50px] font-libre font-bold text-sm hover:bg-primary-hover hover:text-white transition-colors bg-white border-2 border-primary text-primary rounded-[25px] max-lg:hidden">
        <IoCall />
        <p>(408) 214-5589</p>
      </Button>

      {/* HAMBURGER MENU -- SMALL SCREENS */}
      <div className="lg:hidden bg-primary text-white p-2 rounded-lg">
        <RiMenu3Fill size={24} />
      </div>
    </>
  );
};

export default HeaderButtons;
