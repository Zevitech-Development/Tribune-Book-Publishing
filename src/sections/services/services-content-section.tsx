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
        "layout-standard section-padding-standard flex lg:flex-row flex-col lg:items-center lg:justify-between lg:gap-12 gap-6",
        secClassName
      )}
    >
      {!isLeft && (
        <Image
          src={img}
          alt={heading}
          className={cn(
            "lg:w-[500px] md:h-[350px] h-[250px] w-full lg:rounded-3xl rounded-md lg:shadow-2xl shadow-lg object-cover",
            imgClassName
          )}
        />
      )}

      <div
        className={cn(
          "flex flex-col justify-center gap-4 lg:w-[calc(100%-500px)] max-lg:order-1"
        )}
      >
        <h1
          className={cn(
            "lg:text-4xl md:text-3xl text-2xl !leading-[135%] text-heading font-libre font-bold max-w-[600px]",
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

        <div className="flex items-center lg:gap-4 gap-2 mt-4">
          <Button className="cta-button-animation md:h-[45px] h-[40px] md:px-6 hover:bg-primary-hover max-md:w-full md:text-base text-sm">
            Live Chat
          </Button>
          <Button className="ta-button-animation md:h-[45px] h-[40px] md:px-6 hover:bg-primary-hover max-md:w-full md:text-base text-sm">
            Contact Us
          </Button>
        </div>
      </div>

      {isLeft && (
        <Image
          src={img}
          alt={heading}
          className={cn(
            "lg:w-[500px] md:h-[350px] h-[250px] w-full lg:rounded-3xl rounded-md lg:shadow-2xl shadow-lg object-cover",
            imgClassName
          )}
        />
      )}
    </section>
  );
}

export default ServicesContentSection;
