import React from "react";
import Image from "next/image";

import { ServicesWritingNoteSectionInterface } from "@/interfaces/sections-interface";

import TypewriterHeading from "@/utils/typewriter-heading";

import QuotationMarkLeftIcon from "../../../../public/icons/quotation-mark-left-icon.svg";
import QuotationMarkRightIcon from "../../../../public/icons/quotation-mark-right-icon.svg";


function WritingNoteSection({
  heading,
  headingPrimary,
  remaningHeading,
  text,
}: ServicesWritingNoteSectionInterface) {
  return (
    <section className="layout-standard section-margin-standard flex flex-col items-center gap-6 text-center relative section-padding-standard">
      <div className="absolute -top-6 -left-1 md:-top-2 md:-left-8 w-10 md:w-24 opacity-30">
        <Image
          src={QuotationMarkLeftIcon}
          alt="Left Quotation Mark"
          className="w-full h-auto"
        />
      </div>

      <TypewriterHeading
        heading={heading}
        headingPrimary={headingPrimary}
        remaningHeading={remaningHeading}
      />

      <div className="absolute -bottom-6 -right-1 md:-bottom-8 md:-right-8 w-10 md:w-24 opacity-30">
        <Image
          src={QuotationMarkRightIcon}
          alt="Right Quotation Mark"
          className="w-full h-auto"
        />
      </div>

      <p className="font-medium lg:text-lg md:text-base text-sm lg:max-w-[780px] px-4">
        {text}
      </p>
    </section>
  );
}

export default WritingNoteSection;
