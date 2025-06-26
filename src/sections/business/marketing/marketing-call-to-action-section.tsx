"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import { OpenLiveChat } from "@/utils/open-live-chat";

function MarketingCallToActionSection() {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <section className="relative w-full section-margin-standard max-md:mb-0 md:h-[500px] bg-marketing-cta-section bg-no-repeat bg-center bg-cover max-lg:py-12">
      <div className="absolute inset-0 bg-black opacity-50 z-10" />

      <div className="relative z-20 layout-standard h-full flex flex-col justify-center items-center text-center p-4">
        <div className=" space-y-4 flex flex-col items-center text-center">
          <h1 className="lg:text-5xl font-extrabold !leading-[140%] tracking-tigh md:text-4xl text-3xl text-white font-libre">
            Salute to Your{" "}
            <span className="text-primary underline underline-offset-3 decoration-8 decoration-primary italic">
              Outstanding{" "}
            </span>
            Achievement!
          </h1>
          <p className="text-white text-sm md:text-base max-w-[700px]">
            This work of yours is more than a book it is the representation of
            your dreams. Together, let&apos;s make sure your eBook receives the
            recognition it deserves and has an important effect on the eBook
            world.
          </p>
          <div className="flex md:flex-row flex-col max-md:w-full justify-center items-center md:gap-4 gap-2 !mt-8">
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
      </div>
    </section>
  );
}

export default MarketingCallToActionSection;
