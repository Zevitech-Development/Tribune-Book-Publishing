import React from "react";
import Image from "next/image";

import { PlanSectionContent } from "@/content/about-us-page-content";

import { cn } from "@/lib/utils";

function PlanSection() {
  return (
    <section className="layout-standard md:section-padding-standard max-md:pt-8 max-md:py-4 flex flex-col lg:gap-12 md:gap-16 gap-8 lg:mt-[3rem] md:mt-8 max-lg:mb-4 max-md:mb-0">
      {PlanSectionContent.map((data, index) => (
        <div
          key={index}
          className="flex items-center gap-8 lg:flex-row flex-col max-lg:mt-4"
        >
          <Image
            src={data.planImg}
            alt={data.planTitle}
            className={cn(
              "md:w-[450px] w-[350px] rounded-[15px] shadow-md",
              index === 1 ? "lg:order-2" : "lg:order-1"
            )}
          />
          <div
            className={cn(
              "flex flex-col lg:gap-4 gap-3 max-lg:text-center",
              index === 1 ? "lg:order-1" : "lg:order-2"
            )}
          >
            <h1 className="lg:text-4xl font-extrabold !leading-[140%] tracking-tigh md:text-3xl text-2xl text-heading font-libre">
              {data.planTitle}
            </h1>
            <p className="md:text-base text-sm">{data.planDescription}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default PlanSection;
