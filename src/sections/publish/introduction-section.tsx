import Image from "next/image";
import React from "react";

import DottedSvg from "@/components/partials/dotted-svg";
import { Button } from "@/components/ui/button";

import IntroductionSectionImg01 from "../../../public/images/marketing-mission-section-img-01.jpg";
import IntroductionSectionImg02 from "../../../public/images/marketing-mission-section-img-02.jpg";
import IntroductionSectionImg03 from "../../../public/images/marketing-mission-section-img-03.jpg";

function IntroductionSection() {
  return (
    <section className="layout-standard section-padding-standard mt-8">
      <div className="flex flex-wrap items-center justify-between">
        <div className="w-full lg:w-6/12">
          <div className="md:flex md:items-center">
            <div className="w-full px-1 xl:w-1/2 max-md:hidden">
              <div className="py-3 sm:py-1">
                <Image
                  src={IntroductionSectionImg01}
                  alt="About Us"
                  className="w-full rounded-2xl h-[250px] object-cover"
                />
              </div>
              <div className="py-3 sm:py-1">
                <Image
                  src={IntroductionSectionImg02}
                  alt="About Us"
                  className="w-full rounded-2xl h-[250px] object-cover"
                />
              </div>
            </div>
            <div className="w-full px-1 xl:w-1/2">
              <div className="relative z-10 my-4">
                <Image
                  src={IntroductionSectionImg03}
                  alt="About Us"
                  className="w-full rounded-2xl h-[400px] object-cover"
                />
                <DottedSvg />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 xl:w-5/12">
          <div className="mt-10 lg:mt-0">
            <span className="block mb-2 text-lg font-bold font-libre text-primary">
              Why Choose Us
            </span>
            <h1 className="lg:text-4xl md:text-3xl text-2xl !leading-[135%] text-heading font-libre font-bold mb-4">
              Welcome to a{" "}
              <span className="text-primary">World of Boundless</span> Stories
            </h1>
            <p className="mb-4 md:text-base text-sm">
              At Tribune Book Publishing, we believe that every story deserves
              to be told. That's why we've harnessed the power of digital
              publishing to open up a universe of possibilities for authors like
              you.
            </p>
            <p className="mb-4 md:text-base text-sm">
              Whether you're a budding novelist, a seasoned writer, or just
              someone with a story to share, we're here to empower you on your
              journey.
            </p>
            <div className="flex md:flex-row flex-col max-md:w-full items-center md:gap-4 gap-2 mt-8">
              <Button className="cta-button-animation md:h-[45px] h-[40px] md:px-6 hover:bg-primary-hover max-md:w-full md:text-base text-sm">
                Live Chat
              </Button>
              <Button className="cta-button-animation md:h-[45px] h-[40px] md:px-6 hover:bg-primary-hover max-md:w-full md:text-base text-sm">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroductionSection;
