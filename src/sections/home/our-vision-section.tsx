"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import OurVisionSectionImg from "../../../public/images/our-vision-section-img.png";

function OurVisionSection() {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <section className="layout-standard md:section-padding-standard max-md:pt-16 flex lg:flex-row flex-col items-center lg:justify-between md:gap-12 gap-8">
      <div className="flex flex-col justify-center gap-4 lg:order-1 order-2">
        <h1 className="lg:text-4xl md:text-3xl text-2xl !leading-[135%] text-heading font-libre font-bold max-md:text-center">
          Realizing Your <span className="text-primary">Vision</span>
        </h1>

        <p className="md:text-base text-sm max-md:text-center">
          Every great book begins with a powerful idea but turning that idea
          into a published success takes more than inspiration. At Tribune Book
          Publishing, we combine expert ghostwriting, editorial precision, and
          creative strategy to shape your manuscript into a compelling,
          high-impact narrative.
        </p>

        <p className="md:text-base text-sm max-md:text-center">
          From publishing and global distribution to targeted marketing, we
          manage every step of your journey. Whether you&apos;re debuting your
          first title or expanding your catalog, our team is here to position
          your story for lasting success and help you leave a mark in the
          literary world.
        </p>

        <div className="flex items-center md:gap-4 gap-2 mt-4">
          <Button className="cta-button-animation md:h-[45px] h-[40px] md:px-6 hover:bg-primary-hover max-md:w-full md:text-base text-sm">
            Live Chat
          </Button>
          <Button
            onClick={() => handleNavigation("/contact-us")}
            className="cta-button-animation md:h-[45px] h-[40px] md:px-6 hover:bg-primary-hover max-md:w-full md:text-base text-sm"
          >
            Contact Us
          </Button>
        </div>
      </div>

      <Image
        src={OurVisionSectionImg}
        alt="Our Vision"
        className="md:w-[400px] w-[250px] lg:order-2 order-1 max-lg:hidden"
      />
    </section>
  );
}

export default OurVisionSection;
