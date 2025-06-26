"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import { OpenLiveChat } from "@/utils/open-live-chat";

import TrustPilotIcon from "../../../public/icons/trust-pilot-icon.png";
import ReviewsIoIcon from "../../../public/icons/reviews-io-icon.png";
import BarkIcon from "../../../public/icons/bark-icon.png";
import MantaIcon from "../../../public/icons/manta-icon.png";
import TestimonialHeroSectionImg from "../../../public/images/testimonial-hero-section-img.png";

function TestimonialHeroSection() {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <section className="relative w-full bg-testimonial-hero bg-cover bg-no-repeat bg-center section-padding-standard">
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />

      <div className="relative layout-standard section-padding-standard h-full grid lg:grid-cols-3 grid-cols-1 md:gap-12 gap-8">
        <div className="flex flex-col justify-center gap-8 lg:col-span-2 col-span-1 lg:order-1 order-2">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-primary font-libre">
              Hear From Our Authors
            </h1>
            <h1 className="lg:text-4xl md:text-3xl text-2xl !leading-[140%] text-white font-libre font-bold">
              Real Stories. Real Results.
            </h1>
          </div>

          <p className="text-white/80 font-medium lg:text-lg md:text-base text-sm lg:max-w-[780px]">
            At Tribune Book Publishing, our clients say it best. Discover how
            authors from all walks of life turned their dreams into published
            books with our help. From first-time writers to seasoned
            professionals, see why they trust us to bring their stories to life.
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

            <Link
              target="_blank"
              href={
                "https://www.reviews.io/company-reviews/store/tribunebookpublishing.com"
              }
            >
              <Image
                src={ReviewsIoIcon}
                alt="Reviews.IO Reviews"
                width={200}
                className="translate-y-2"
              />
            </Link>

            <Link
              target="_blank"
              href={
                "https://www.bark.com/en/us/company/tribune-book-publishing/gopqQP/"
              }
            >
              <Image
                src={BarkIcon}
                alt="Bark Reviews"
                width={120}
                className="invert brightness-0 contrast-200 translate-y-1"
              />
            </Link>

            <Link
              target="_blank"
              href={
                "https://www.manta.com/c/m1wqg9z/tribune-book-publishing/reviews"
              }
            >
              <Image
                src={MantaIcon}
                alt="Manta Reviews"
                width={60}
                className="invert brightness-0 contrast-200 translate-y-1"
              />
            </Link>
          </div>

          <div className="flex md:flex-row flex-col max-md:w-full items-center md:gap-4 gap-2">
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

        <div className="col-span-1 w-full h-full flex-center lg:order-2 order-1">
          <Image
            src={TestimonialHeroSectionImg}
            alt="Our Testimoials"
            className="animate-floating02 max-lg:w-[300px] max-md:w-[200px]"
          />
        </div>
      </div>
    </section>
  );
}

export default TestimonialHeroSection;
