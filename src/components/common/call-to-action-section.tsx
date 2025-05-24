"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

const CallToActionSection = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <section className="lg:h-[473px] h-[373px] w-full bg-cta-section bg-no-repeat bg-cover">
      <div className="layout-standard flex flex-col gap-4 h-full justify-center">
        <h1 className="lg:text-4xl md:text-3xl text-2xl !leading-[135%] text-heading font-libre font-bold lg:max-w-[460px] max-lg:text-center max-md:text-start">
          Still waiting to{" "}
          <span className="text-primary">start on that book?</span> Don&apos;t
          Wait!
        </h1>

        <p className="font-medium lg:text-lg md:text-base text-sm lg:max-w-[600px] max-lg:text-center max-md:text-start">
          Let our team of expert writers take that idea from your mind and weave
          their literary magic to give you a bestseller.
        </p>

        <div className="flex md:flex-row flex-col max-md:w-full max-lg:justify-center items-center md:gap-4 gap-2 mt-4">
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
    </section>
  );
};

export default CallToActionSection;
