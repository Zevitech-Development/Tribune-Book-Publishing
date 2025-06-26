"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import { OpenLiveChat } from "@/utils/open-live-chat";

import WhyHireUsSectionImg from "../../../public/images/why-hire-us-section-img.svg";

function WhyHireUsSection() {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <section className="layout-standard section-padding-standard flex items-center gap-16 mt-4">
      <Image
        src={WhyHireUsSectionImg}
        alt="Why Hire Us"
        className="w-[400px] max-lg:hidden"
      />

      <div className="flex flex-col justify-center gap-4">
        <h1 className="lg:text-5xl md:text-4xl text-3xl !leading-[135%] tracking-tight text-heading font-libre font-extrabold max-md:text-center mb-4">
          Why{" "}
          <span className="text-primary underline underline-offset-3 decoration-8 decoration-primary italic">
            Hire
          </span>{" "}
          Us?
        </h1>

        <p className="md:text-base text-sm max-md:text-center">
          Writing is not everyone&apos;s cup of tea, while you might have a
          great idea for a book brewing in your mind, penning it down is easier
          said than done, even if you are able to, it just might lack the pizazz
          that a professional might be able to add. That&apos;s what we are here
          for.
        </p>

        <p className="md:text-base text-sm max-md:text-center">
          Writing is not everyone&apos;s cup of tea, while you might have a
          great idea for a book brewing in your mind, penning it down is easier
          said than done, even if you are able to, it just might lack the pizazz
          that a professional might be able to add. That&apos;s what we are here
          for.
        </p>

        <div className="flex items-center gap-2 mt-4">
          <Button
            onClick={OpenLiveChat}
            className="cta-button-animation md:h-[45px] h-[40px] md:px-6 hover:bg-primary-hover max-md:w-full md:text-base text-sm"
          >
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
    </section>
  );
}

export default WhyHireUsSection;
