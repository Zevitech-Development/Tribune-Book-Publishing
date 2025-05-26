import React from "react";
import Image from "next/image";

import { ServicesContentSectionInterface } from "@/interfaces/sections-interface";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

function ServicesContentSection({
  isLeft = true,
  headingClassName,
  heading,
  headingPrimary,
  remaningHeading,
  text01,
  text02,
  text03,
  img,
  imgClassName,
  secClassName,
}: ServicesContentSectionInterface) {
  return (
    <section
      className={cn(
        "layout-standard section-padding-standard flex lg:flex-row flex-col lg:items-center lg:justify-between gap-12",
        secClassName
      )}
    >
      {!isLeft && (
        <Image
          src={img}
          alt={heading}
          className={cn(
            "lg:w-[500px] w-full rounded-3xl shadow-2xl object-cover",
            imgClassName
          )}
        />
      )}

      <div
        className={cn(
          "flex flex-col justify-center gap-4 lg:w-[calc(100%-500px)] order-1"
        )}
      >
        <h1
          className={cn(
            "lg:text-4xl md:text-3xl text-2xl !leading-[140%] text-heading font-libre font-bold max-w-[600px]",
            headingClassName
          )}
        >
          {heading} <span className="text-primary">{headingPrimary}</span>{" "}
          {remaningHeading}
        </h1>

        <p className={cn("md:text-base text-sm", isLeft && "max-w-[700px]")}>
          {text01}
        </p>
        {text02 && (
          <p className={cn("md:text-base text-sm", isLeft && "max-w-[700px]")}>
            {text02}
          </p>
        )}
        {text03 && (
          <p className={cn("md:text-base text-sm", isLeft && "max-w-[700px]")}>
            {text03}
          </p>
        )}

        <div className="flex items-center gap-4 mt-4">
          <Button className="cta-button-animation md:h-[45px] md:px-6 hover:bg-primary-hover max-md:w-full text-base">
            Live Chat
          </Button>
          <Button className="cta-button-animation md:h-[45px] md:px-6 hover:bg-primary-hover max-md:w-full text-base">
            Contact Us
          </Button>
        </div>
      </div>

      {isLeft && (
        <Image
          src={img}
          alt={heading}
          className={cn(
            "lg:w-[500px] w-full rounded-3xl shadow-2xl object-cover",
            imgClassName
          )}
        />
      )}
    </section>
  );
}

export default ServicesContentSection;
