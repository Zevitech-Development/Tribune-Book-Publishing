"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import { OpenLiveChat } from "@/utils/open-live-chat";

const CallToActionSection = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <section className="lg:h-[473px] h-[373px] w-full bg-cta-section bg-no-repeat bg-cover">
      <div className="layout-standard flex flex-col gap-4 h-full justify-center">
        <h1 className="mb-4 lg:text-5xl font-extrabold !leading-[140%] tracking-tigh md:text-4xl text-3xl text-heading font-libre lg:max-w-[560px] max-lg:text-center max-md:text-start">
          Still waiting to start on that book?{" "}
          <span className="text-primary underline underline-offset-3 decoration-8 decoration-primary italic">
            Don&apos;t Wait!
          </span>
        </h1>

        <p className="md:text-base text-sm lg:max-w-[600px] max-lg:text-center max-md:text-start">
          Let our team of expert writers take that idea from your mind and weave
          their literary magic to give you a bestseller.
        </p>

        <div className="flex md:flex-row flex-col max-md:w-full max-lg:justify-center items-center md:gap-4 gap-2 mt-4">
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
};

export default CallToActionSection;
