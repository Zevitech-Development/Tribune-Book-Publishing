import React from "react";
import Link from "next/link";

import { ContactMethodsContent } from "@/content/contact-us-page-content";

function ContactDetailsSection() {
  return (
    <section className="layout-standard section-margin-standard flex items-center lg:gap-12 gap-8 flex-col">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="lg:text-5xl font-extrabold !leading-[140%] tracking-tigh md:text-4xl text-3xl text-heading font-libre text-center mb-4">
          Get In Touch{" "}
          <span className="text-primary underline underline-offset-3 decoration-8 decoration-primary italic">
            With Us
          </span>
        </h1>
        <p className="font-medium lg:text-lg md:text-base text-sm lg:max-w-[900px] max-w-[600px] text-center">
          Whether you&apos;re ready to publish or just exploring your options,
          we&apos;re here to help every step of the way — feel free to get in
          touch.
        </p>
      </div>

      <div className="w-full h-full grid lg:grid-cols-3 gap-12 lg:gap-4 mt-8">
        {ContactMethodsContent.map((data, index) => (
          <div
            key={index}
            className="relative lg:h-[280px] h-[200px] border p-6 flex flex-col justify-between rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.15)]"
          >
            <div className="flex justify-center">
              <div className="absolute -top-7 lg:w-[70px] w-[60px] lg:h-[70px] h-[60px] flex-center rounded-full bg-muted">
                <span className="lg:text-3xl text-xl text-primary">
                  {data.cardIcon}
                </span>
              </div>
            </div>

            <div className="flex items-center flex-col text-center ">
              <h3 className="md:text-2xl font-bold text-heading font-libre">
                {data.cardName}
              </h3>
              <p className="lg:text-lg md:text-base text-sm font-medium">
                {data.cardText}
              </p>
            </div>

            <Link
              href={data.link}
              target={data.target}
              className="cta-button-animation bg-primary rounded-lg flex-center text-foreground md:h-[45px] h-[40px] hover:bg-primary-hover max-md:w-full md:text-base text-sm"
            >
              {data.cardButton}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ContactDetailsSection;
