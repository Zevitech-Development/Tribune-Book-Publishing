import React from "react";
import Image from "next/image";

import Book01 from "../../../public/images/floating-book-01.webp";
import Book02 from "../../../public/images/floating-book-02.webp";
import Book03 from "../../../public/images/floating-book-03.webp";
import Book04 from "../../../public/images/floating-book-04.webp";
import Book05 from "../../../public/images/floating-book-05.webp";

function PortfolioSection() {
  return (
    <section className="layout-standard section-padding-standard flex flex-col lg:gap-16 gap-8 mb-8">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="lg:text-4xl md:text-3xl text-2xl !leading-[120%] text-heading font-libre font-bold text-center">
          Our E-book <span className="text-primary">Portfolio</span> - Infinity
          Fiction
        </h1>
        <p className="font-medium lg:text-lg md:text-base text-sm max-w-[900px] text-center">
          Our portfolio includes every genre and subject while ensuring your
          ideas and picky choices. Tribune Book Publishing goes beyond blazing
          creativity and delivers firing results.
        </p>
      </div>

      <div className="w-full flex flex-wrap justify-center gap-4">
        <Image src={Book01} alt="Portfolio Books" className="w-[250px] "/>
        <Image src={Book02} alt="Portfolio Books" className="w-[250px]"/>
        <Image src={Book03} alt="Portfolio Books" className="w-[250px]"/>
        <Image src={Book04} alt="Portfolio Books" className="w-[250px]"/>
        <Image src={Book05} alt="Portfolio Books" className="w-[250px]"/>
      </div>
    </section>
  );
}

export default PortfolioSection;
