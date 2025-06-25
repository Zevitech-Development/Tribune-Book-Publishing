import React from "react";
import Image from "next/image";

import Book01 from "../../../public/images/book-img-01.webp";
import Book02 from "../../../public/images/book-img-02.webp";
import Book03 from "../../../public/images/book-img-03.webp";
import Book04 from "../../../public/images/book-img-04.webp";
import Book05 from "../../../public/images/book-img-05.webp";

function PortfolioSection() {
  return (
    <section className="layout-standard section-padding-standard flex flex-col lg:gap-16 md:gap-12 gap-8 mb-8 lg:mb-12 max-md:mt-8">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="lg:text-5xl md:text-4xl text-3xl !leading-[135%] tracking-tight text-heading font-libre font-extrabold text-center">
          Our eBook{" "}
          <span className="text-primary underline underline-offset-3 decoration-8 decoration-primary italic">
            Portfolio
          </span>
        </h1>
        <p className="md:text-base text-sm lg:max-w-[600px] md:max-w-[400px] text-center">
          Our portfolio includes every genre and subject while ensuring your
          ideas and picky choices.
        </p>
      </div>

      <div className="w-full flex flex-wrap justify-center gap-4 gap-y-6">
        <Image
          src={Book01}
          alt="Books We Published"
          className="lg:w-[200px] md:w-[180px] w-[100px] "
        />
        <Image
          src={Book02}
          alt="Books We Published"
          className="lg:w-[200px] md:w-[180px] w-[100px]"
        />
        <Image
          src={Book03}
          alt="Books We Published"
          className="lg:w-[200px] md:w-[180px] w-[100px]"
        />
        <Image
          src={Book04}
          alt="Books We Published"
          className="lg:w-[200px] md:w-[180px] w-[100px]"
        />
        <Image
          src={Book05}
          alt="Books We Published"
          className="lg:w-[200px] md:w-[180px] w-[100px]"
        />
      </div>
    </section>
  );
}

export default PortfolioSection;
