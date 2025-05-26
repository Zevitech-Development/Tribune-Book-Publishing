import React from "react";

import WritingNoteSection from "@/sections/services/writing/writing-note-section";
import WritingProfileSection from "@/sections/services/writing/writing-profile-section";
import ServicesCallToActionSection from "@/sections/services/services-call-to-action-section";
import FaqSection from "@/components/common/faq-section";
import TestimonialsSection from "@/components/common/testimonials-section";
import ServicesContentSection from "@/sections/services/services-content-section";

import ServicesWritingEBookImg01 from "../../../../public/images/services/services-writing-e-book-img-01.webp";
import ServicesWritingEBookImg02 from "../../../../public/images/services/services-writing-e-book-img-02.webp";

function EBookPage() {
  return (
    <main>
      <WritingNoteSection
        heading="Collaborate with Tribune Book Publishing for"
        headingPrimary="E-Book Writing."
        remaningHeading=""
        text="Tribune Book Publishing specializes in crafting E-books that inspire, and engage readers and, transform your words into stories with us."
      />
      <WritingProfileSection />
      <ServicesContentSection
        isLeft={false}
        heading="Crafting"
        headingPrimary="Stories"
        remaningHeading="That Resonate Digitally"
        text01="In the digital era, E-books can inform, inspire, and leave a lasting impact. We provide access to creating E-books by unleashing your hidden potential."
        text02="Our skilled writers are experts in crafting excellent E-books. Our goal is to make sure your E-book not only connects people but also looks good and boasts an appealing design."
        img={ServicesWritingEBookImg01}
      />
      <ServicesCallToActionSection />
      <ServicesContentSection
        isLeft={true}
        heading="Where"
        headingPrimary="Ideas"
        remaningHeading="Become E-books"
        text01="Our E-book writing services enable you to transform your ideas into digital success. We craft engaging E-books that captivate and educate readers, enabling you to become a leader in your field."
        text02="Our E-book writing services enable you to transform your ideas into digital success. We craft engaging E-books that captivate and educate readers, enabling you to become a leader in your field."
        img={ServicesWritingEBookImg02}
        secClassName="mb-8"
      />
      <FaqSection />
      <TestimonialsSection />
    </main>
  );
}

export default EBookPage;
