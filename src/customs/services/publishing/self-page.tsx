import React from "react";

import ServicesNoteSection from "@/sections/services/services-note-section";
import ServicesProfileSection from "@/sections/services/services-profile-section";
import ServicesCallToActionSection from "@/sections/services/services-call-to-action-section";
import FaqSection from "@/components/common/faq-section";
import TestimonialsSection from "@/components/common/testimonials-section";
import ServicesContentSection from "@/sections/services/services-content-section";

import ServicesPublishingSelfImg01 from "../../../../public/images/services/services-publishing-self-01.jpg";
import ServicesPublishingSelfImg02 from "../../../../public/images/services/services-publishing-self-02.jpg";

function SelfPage() {
  return (
    <main>
      <ServicesNoteSection
        heading="Empower Your Journey"
        headingPrimary="With Self-Publishing"
        remaningHeading="That Puts You in Control"
        text="Take charge of your publishing experience with Tribune Book Publishing. Our self-publishing solutions provide the tools, support, and flexibility you need to publish your book your way—without compromising on quality or professionalism."
      />

      <ServicesProfileSection />
      <ServicesContentSection
        isLeft={false}
        heading="Custom Publishing"
        headingPrimary="Built Around"
        remaningHeading="Your Vision"
        text01="We offer personalized self-publishing packages tailored to your goals. From manuscript formatting and cover design to editing and marketing, you choose what you need—on your terms."
        text02="Maintain full creative control while benefiting from expert guidance and industry-grade execution at every step."
        img={ServicesPublishingSelfImg01}
      />

      <ServicesCallToActionSection />
      <ServicesContentSection
        isLeft={true}
        heading="You Own Everything"
        headingPrimary="From Royalties"
        remaningHeading="To Rights"
        text01="Unlike traditional publishing, self-publishing through us means you keep 100% of your rights and royalties."
        text02="We empower you to publish professionally and profit from your work without hidden fees or restrictive contracts."
        img={ServicesPublishingSelfImg02}
        secClassName="lg:mb-8"
      />

      <FaqSection />
      <TestimonialsSection />
    </main>
  );
}

export default SelfPage;
