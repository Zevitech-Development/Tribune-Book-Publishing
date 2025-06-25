"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import LeadForm from "@/forms/lead-form";

import TrustPilotIcon from "../../../public/icons/trust-pilot-icon.png";
import ReviewsIoIcon from "../../../public/icons/reviews-io-icon.png";
import MantaIcon from "../../../public/icons/manta-icon.png";
import BarkIcon from "../../../public/icons/bark-icon.png";

function HomeHeroSection() {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <section className="relative w-full bg-home-hero bg-cover bg-no-repeat bg-center section-padding-standard">
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />

      <div className="relative layout-standard section-padding-standard h-full grid lg:grid-cols-5 grid-cols-1 gap-8">
        <div className="flex flex-col justify-center gap-8 lg:col-span-3 col-span-1">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-primary font-libre">
              We Don&apos;t Publish Books
            </h1>
            <h1 className="lg:text-4xl md:text-3xl text-2xl !leading-[135%] text-white md:max-w-[450px] font-libre font-bold">
              We Turn Imaginations Into Best Sellers!
            </h1>
          </div>

          <p className="text-white/80 font-medium lg:text-lg md:text-base text-sm lg:max-w-[780px]">
            Welcome to Tribune Book Publishing. Your best opportunity to publish
            your book. We are more than just a publishing house; writing eBooks
            that offer something incredible for every reader&apos;s taste and
            interests
          </p>

          <p className="text-white/80 font-medium lg:text-lg md:text-base text-sm lg:max-w-[780px]">
            Explore our eBook publishing and join on a full, adventurous journey
            with Tribune Book Publishing!
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
          <LeadForm />
        </div>
      </div>
    </section>
  );
}

export default HomeHeroSection;
