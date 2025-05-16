import React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

import WhyHireUsSection02Img from "../../../public/images/why-hire-us-section-02-img.svg";

function WhyHireUsSection02() {
  return (
    <section className="layout-standard section-padding-standard flex items-center gap-16 mb-12">
      <Image
        src={WhyHireUsSection02Img}
        alt="Why Hire Us"
        className="w-[400px]"
      />

      <div className="flex flex-col justify-center gap-4">
        <h1 className="lg:text-4xl md:text-3xl text-2xl !leading-[120%] text-heading font-libre font-bold">
          Why <span className="text-primary">Hire</span> Us?
        </h1>

        <p className="md:text-base text-sm">
          Writing is not everyone&apos;s cup of tea, while you might have a
          great idea for a book brewing in your mind, penning it down is easier
          said than done, even if you are able to, it just might lack the pizazz
          that a professional might be able to add. That&apos;s what we are here
          for.
        </p>

        <p className="md:text-base text-sm">
          Writing is not everyone&apos;s cup of tea, while you might have a
          great idea for a book brewing in your mind, penning it down is easier
          said than done, even if you are able to, it just might lack the pizazz
          that a professional might be able to add. That&apos;s what we are here
          for.
        </p>

        <div className="flex items-center gap-4 mt-4">
          <Button className="cta-button-animation md:h-[45px] md:px-6 hover:bg-primary-hover max-md:w-full text-base">
            Live Chat
          </Button>
          <Button className="cta-button-animation md:h-[45px] md:px-6 hover:bg-primary-hover max-md:w-full text-base">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}

export default WhyHireUsSection02;
