"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import { CalendarDaysIcon, HandIcon } from "lucide-react";

function ServicesCallToActionSection() {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="w-full section-margin-standard bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="relative isolate overflow-hidden layout-standard">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-4xl font-semibold tracking-tight text-white font-libre">
              Ready to Publish Your eBook?
            </h2>
            <p className="mt-4 text-base text-gray-300">
              Whether you&apos;re just getting started or need help taking your
              manuscript to market, our team is here to support your
              self-publishing journey. Let&apos;s turn your story into a
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
              <dd className="mt-2 text-base/7 text-gray-400">
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
              <dd className="mt-2 text-base/7 text-gray-400">
                Get started with a free consultation. We only move forward when
                you&apos;re ready, with no hidden fees or obligations.
              </dd>
            </div>
          </dl>
        </div>

        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-1155/678 w-288.75 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          />
        </div>
      </div>
    </div>
  );
}

export default ServicesCallToActionSection;
