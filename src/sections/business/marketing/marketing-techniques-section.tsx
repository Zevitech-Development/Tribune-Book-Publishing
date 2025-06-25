import React from "react";
import Image from "next/image";

import { MarketingTechniqueSectionContent } from "@/content/marketing-book-page-content";

function MarketingTechniquesSection() {
  return (
    <section className="bg-white section-padding-standard lg:pt-4 layout-standard space-y-8">
      <div className="flex-center text-center">
        <h1 className="lg:text-5xl font-extrabold !leading-[140%] tracking-tigh md:text-4xl text-3xl text-heading font-libre max-md:text-center mb-4">
          Book{" "}
          <span className="text-primary underline underline-offset-3 decoration-8 decoration-primary italic">
          Marketing 
          </span>{" "}
          That Works
        </h1>
      </div>

      <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4">
        {MarketingTechniqueSectionContent.map((data, index) => (
          <div
            key={index}
            className={`rounded-xl bg-gradient-to-b  bg-black from-primary via-[#cf2b36] to-[#49191c] border-2 p-4 py-8 flex flex-col justify-evenly items-center gap-4 text-center ${
              index === 2 && "max-lg:col-span-2 max-md:col-span-1"
            }`}
          >
            <h3 className="text-2xl text-white font-semibold font-libre">
              {data.cardName}
            </h3>
            <p className="text-sm text-white/90 font-medium">
              {data.cardContent}
            </p>
            <Image
              className="w-[150px] sm:w-[170px]"
              src={data.cardImg}
              alt="card-image"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default MarketingTechniquesSection;
