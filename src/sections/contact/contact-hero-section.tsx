import React from "react";
import Link from "next/link";
import Image from "next/image";

import TrustPilotIcon from "../../../public/icons/trust-pilot-icon.png";
import ReviewsIoIcon from "../../../public/icons/reviews-io-icon.png";
import BarkIcon from "../../../public/icons/bark-icon.png";
import ContactHeroSectionImg from "../../../public/images/contact-hero-section-img.png";

function ContactHeroSection() {
  return (
    <section className="relative w-full bg-contact-hero bg-cover bg-no-repeat bg-center section-padding-standard">
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />

      <div className="relative layout-standard section-padding-standard h-full grid lg:grid-cols-3 grid-cols-1 max-lg:gap-12 max-md:gap-8">
        <div className="flex flex-col justify-center gap-8 lg:col-span-2 col-span-1">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-primary font-libre">
              Let&apos;s Talk About Your Book
            </h1>
            <h1 className="lg:text-4xl md:text-3xl text-2xl !leading-[140%] text-white md:max-w-[500px] font-libre font-bold">
              We&apos;re Ready to Help You Publish with Confidence
            </h1>
          </div>

          <p className="text-white/80 font-medium lg:text-lg md:text-base text-sm lg:max-w-[780px]">
            Whether you&apos;re just getting started or ready to take the next
            step, our team at Tribune Book Publishing is here to guide you.
            Reach out with questions, ideas, or project details — and let&apos;s
            bring your publishing goals to life, together.
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
        </div>

        <div className="col-span-1 w-full h-full flex-center">
          <Image src={ContactHeroSectionImg} alt="Contact Us" />
        </div>
      </div>
    </section>
  );
}

export default ContactHeroSection;
