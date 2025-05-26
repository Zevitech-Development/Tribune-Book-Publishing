"use client";

import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

import BookImg01 from "../../../../public/images/book-img-01.webp";
import BookImg02 from "../../../../public/images/book-img-02.webp";
import BookImg03 from "../../../../public/images/book-img-03.webp";
import BookImg04 from "../../../../public/images/book-img-04.webp";
import BookImg05 from "../../../../public/images/book-img-05.webp";

const books = [BookImg01, BookImg02, BookImg03, BookImg04, BookImg05];

function WritingProfileSection() {
  return (
    <section className="layout-standard section-margin-standard lg:py-8 max-lg:pt-8">
      <Marquee gradient={false} speed={40} autoFill={true} className="w-full">
        {books.map((book, index) => (
          <div key={index} className="px-4 flex-shrink-0">
            <Image
              src={book}
              alt={`Portfolio Book ${index + 1}`}
              className="w-[150px] sm:w-[180px] md:w-[200px]"
              priority
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}

export default WritingProfileSection;
