import React from "react";
import Image from "next/image";

import QuotationMarkLeftIcon from "../../../public/icons/quotation-mark-left-icon.svg";
import QuotationMarkRightIcon from "../../../public/icons/quotation-mark-right-icon.svg";

function AboutNoteSection() {
  return (
    <section className="layout-standard section-margin-standard flex flex-col items-center gap-6 text-center relative section-padding-standard">
      <div className="absolute -top-6 md:-left-6 -left-1 md:-top-2 lg:-left-8 w-10 md:w-14 lg:w-24 opacity-30">
        <Image
          src={QuotationMarkLeftIcon}
          alt="Left Quotation Mark"
          className="w-full h-auto"
        />
      </div>

      <h1 className="relative lg:text-5xl font-extrabold !leading-[140%] tracking-tight md:text-4xl text-3xl text-heading font-libre md:max-w-[650px] px-4 m-4">
        Excellence Matters for{" "}
        <span className="text-primary underline underline-offset-3 decoration-8 decoration-primary italic">
          you and us
        </span>{" "}
        too!
      </h1>

      <div className="absolute -bottom-6 md:-right-6 -right-1 md:-bottom-8 lg:-right-8 w-10 md:w-14 lg:w-24 opacity-30">
        <Image
          src={QuotationMarkRightIcon}
          alt="Right Quotation Mark"
          className="w-full h-auto"
        />
      </div>

      <p className="lg:text-lg md:text-base text-sm lg:max-w-[780px] px-4">
        You will be a part of our journey and collaborate with our wizard
        writers and marketing freaks who will be responsible for producing
        exceptional and volume-full results.
      </p>
    </section>
  );
}

export default AboutNoteSection;
