"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

function PPCCallToActionSection() {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <section className="relative w-full section-margin-standard max-md:mb-0 md:h-[500px] bg-ppc-cta-section bg-no-repeat bg-center bg-cover max-lg:py-12">
      <div className="absolute inset-0 bg-black opacity-50 z-10" />

      <div className="relative z-20 layout-standard h-full flex flex-col justify-center items-center text-center p-4">
        <div className=" space-y-4">
          <h1 className="lg:text-4xl md:text-3xl text-2xl !leading-[135%] max-w-[600px] text-white font-libre font-bold ">
            Salute to Your <span className="text-primary">Outstanding </span>
            Achievement!
          </h1>
          <p className="text-white text-sm md:text-base max-w-[600px]">
            This work of yours is more than a book it is the representation of
            your dreams. Together, let&apos;s make sure your e-book receives the
            recognition it deserves and has an important effect on the e-book
            world.
          </p>
          <div className="flex md:flex-row flex-col max-md:w-full justify-center items-center md:gap-4 gap-2 !mt-8">
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
      </div>
    </section>
  );
}

export default PPCCallToActionSection;
