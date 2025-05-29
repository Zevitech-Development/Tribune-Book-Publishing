"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import MarketingForm from "@/forms/marketing-form";

import TrustPilotIcon from "../../../public/icons/trust-pilot-icon.png";
import ReviewsIoIcon from "../../../public/icons/reviews-io-icon.png";
import BarkIcon from "../../../public/icons/bark-icon.png";

function MarketingBookHeroSection() {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <section className="relative w-full bg-marketing-book-hero bg-cover bg-no-repeat bg-center section-padding-standard">
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />

      <div className="relative layout-standard section-padding-standard h-full grid lg:grid-cols-5 grid-cols-1 gap-8">
        <div className="flex flex-col justify-center gap-8 lg:col-span-3 col-span-1">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-primary font-libre">
              Boost Your Sales!
            </h1>
            <h1 className="lg:text-4xl md:text-3xl text-2xl !leading-[135%] text-white font-libre font-bold">
              Providing Promotional Opportunities to Authors
            </h1>
          </div>
          <p className="text-white/80 font-medium lg:text-lg md:text-base text-sm lg:max-w-[780px]">
            The best promotion campaigns succeed because they are carefully
            developed for individual authors and titles. It means diving in and
            getting to know the work — at Tribune Book Publishing, we understand
            how to promote to both readers and media.
          </p>

          <div className="flex items-center gap-8 max-lg:hidden">
            <Link
              target="_blank"
              href={
                "https://www.trustpilot.com/review/tribunebookpublishing.com"
              }
            >
              <Image
                src={TrustPilotIcon}
                alt="Trust Pilot Reviews"
                width={100}
              />
            </Link>

            <Link href={"/"}>
              <Image
                src={ReviewsIoIcon}
                alt="Reviews.IO Reviews"
                width={200}
                className="translate-y-2"
              />
            </Link>

            <Link href={"/"}>
              <Image
                src={BarkIcon}
                alt="Bark Reviews"
                width={120}
                className="invert brightness-0 contrast-200 translate-y-1"
              />
            </Link>
          </div>
          <div className="flex md:flex-row flex-col max-md:w-full items-center md:gap-4 gap-2">
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

        <div className="lg:col-span-2 col-span-1 lg:w-full md:w-[500px] w-full h-full flex-center">
          <MarketingForm />
        </div>
      </div>
    </section>
  );
}

export default MarketingBookHeroSection;
