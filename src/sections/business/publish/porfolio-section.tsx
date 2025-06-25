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
        <h1 className="lg:text-5xl font-extrabold !leading-[140%] tracking-tigh md:text-4xl text-3xl text-heading font-libre text-center mb-4">
          Bestselling{" "}
          <span className="text-primary underline underline-offset-3 decoration-8 decoration-primary italic">
            Author
          </span>{" "}
           Start Today!
        </h1>
        <p className="text-sm md:text-base max-w-[600px]">
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
