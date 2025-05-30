"use client";

import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

import { ProtfolioSectionContent } from "@/content/ppc-page-content";

import { Button } from "@/components/ui/button";

function PorfolioSection() {
  return (
    <section className="layout-standard section-padding-standard space-y-10">
      <div className="flex flex-col items-center gap-1 text-center">
        <h1 className="lg:text-4xl md:text-3xl text-2xl !leading-[135%] font-libre font-bold max-md:text-center">
          Become a Bestselling <span className="text-primary">Author</span>{" "}
          Today
        </h1>
        <p className="text-sm md:text-base font-medium max-w-[600px]">
          We publish an average of three books a day, helping authors bring
          their stories to life. With the right support, yours could be next.
        </p>
      </div>

      <Marquee speed={30}>
        {ProtfolioSectionContent.map((data, index) => (
          <div key={index}>
            <div>
              <Image
                className="w-[170px] md:w-[200px]"
                src={data.bookImg}
                alt="book-image"
              />
            </div>
            <div>
              <p className="text-sm md:text-base font-medium text-center">
                {data.bookRating}
              </p>
            </div>
          </div>
        ))}
      </Marquee>

      <div className="flex-center">
        <Button className="cta-button-animation md:h-[45px] h-[40px] md:px-6 hover:bg-primary-hover md:text-base text-sm">
          Get Started Now
        </Button>
      </div>
    </section>
  );
}

export default PorfolioSection;
