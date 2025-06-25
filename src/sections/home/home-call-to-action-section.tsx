"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import { CalendarDaysIcon, HandIcon } from "lucide-react";

function HomeCallToActionSection() {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="w-full section-margin-standard bg-black py-16 sm:py-24 lg:py-32">
      <div className="relative isolate overflow-hidden layout-standard">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-4xl font-semibold tracking-tight text-white font-libre">
              Ready to Publish Your eBook?
            </h2>
            <p className="mt-4 text-base text-white">
              Whether you're just getting started or need help taking your
              manuscript to market, our team is here to support your
              self-publishing journey. Let's turn your story into a
              professionally published eBook.
            </p>
            <div className="flex md:flex-row flex-col max-md:w-full max-lg:justify-center items-center gap-2 mt-4">
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
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-[#cf212a]/10 p-2 ring-1 ring-primary">
                <CalendarDaysIcon
                  aria-hidden="true"
                  className="size-6 text-primary"
                />
              </div>
              <dt className="mt-4 text-base font-semibold text-white font-libre">
                Step-by-Step Guidance
              </dt>
              <dd className="mt-2 text-base/7 text-white">
                From formatting and cover design to distribution and promotion,
                we walk you through the entire eBook publishing process.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-[#cf212a]/10 p-2 ring-1 ring-primary">
                <HandIcon aria-hidden="true" className="size-6 text-primary" />
              </div>
              <dt className="mt-4 text-base font-semibold text-white font-libre">
                No Upfront Costs
              </dt>
              <dd className="mt-2 text-base/7 text-white">
                Get started with a free consultation. We only move forward when
                you're ready, with no hidden fees or obligations.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default HomeCallToActionSection;
