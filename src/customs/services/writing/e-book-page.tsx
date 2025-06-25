import React from "react";

import ServicesNoteSection from "@/sections/services/services-note-section";
import ServicesProfileSection from "@/sections/services/services-profile-section";
import ServicesCallToActionSection from "@/sections/services/services-call-to-action-section";
import FaqSection from "@/components/common/faq-section";
import TestimonialsSection from "@/components/common/testimonials-section";
import ServicesContentSection from "@/sections/services/services-content-section";

import ServicesWritingEBookImg01 from "../../../../public/images/services/services-writing-eBook-img-01.webp";
import ServicesWritingEBookImg02 from "../../../../public/images/services/services-writing-eBook-img-02.webp";

function EBookPage() {
  return (
    <main>
      <ServicesNoteSection
        heading="Collaborate with Tribune Book Publishing for"
        headingPrimary="eBook Writing."
        remaningHeading=""
        text="Tribune Book Publishing specializes in crafting eBooks that inspire, and engage readers and, transform your words into stories with us."
      />
      <ServicesProfileSection />
      <ServicesContentSection
        isLeft={false}
        heading="Crafting"
        headingPrimary="Stories"
        remaningHeading="That Resonate Digitally."
        text01="In the digital era, eBooks can inform, inspire, and leave a lasting impact. We provide access to creating eBooks by unleashing your hidden potential."
        text02="Our skilled writers are experts in crafting excellent eBooks. Our goal is to make sure your eBook not only connects people but also looks good and boasts an appealing design."
        img={ServicesWritingEBookImg01}
      />
      <ServicesCallToActionSection />
      <ServicesContentSection
        isLeft={true}
        heading="Where"
        headingPrimary="Ideas"
        remaningHeading="Become eBooks"
        text01="Our eBook writing services enable you to transform your ideas into digital success. We craft engaging eBooks that captivate and educate readers, enabling you to become a leader in your field."
        text02="Our eBook writing services enable you to transform your ideas into digital success. We craft engaging eBooks that captivate and educate readers, enabling you to become a leader in your field."
        img={ServicesWritingEBookImg02}
        secClassName="lg:mb-8"
      />
      <FaqSection />
      <TestimonialsSection />
    </main>
  );
}

export default EBookPage;
