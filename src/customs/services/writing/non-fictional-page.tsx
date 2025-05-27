import React from "react";

import ServicesNoteSection from "@/sections/services/services-note-section";
import ServicesProfileSection from "@/sections/services/services-profile-section";
import ServicesCallToActionSection from "@/sections/services/services-call-to-action-section";
import FaqSection from "@/components/common/faq-section";
import TestimonialsSection from "@/components/common/testimonials-section";
import ServicesContentSection from "@/sections/services/services-content-section";

import ServicesWritingNonFictionalImg01 from "../../../../public/images/services/services-writing-non-fictional-img-01.webp";
import ServicesWritingNonFictionalImg02 from "../../../../public/images/services/services-writing-non-fictional-img-02.webp";

function NonFictionalPage() {
  return (
    <main>
      <ServicesNoteSection
        heading="Empower Your Stories with our Expert"
        headingPrimary="Non-Fictional"
        remaningHeading="Writers."
        text="Turn your ideas into compelling non-fiction narratives and watch them come to life. Whether you're writing a biography, self-help book, business guide, or any informative piece, our skilled writers are here to transform your vision into a powerful manuscript that educates, inspires, and connects with readers."
      />
      <ServicesProfileSection />
      <ServicesContentSection
        isLeft={false}
        heading="Share Your"
        headingPrimary="Expertise"
        remaningHeading="With Confidence"
        text01="Transform your insights, research, or experience into powerful non-fiction. At Tribune Book Publishing, we craft content that educates and engages — whether it's a self-help book, business guide, or personal development title."
        text02="Our writers ensure your message is clear, credible, and well-structured, delivering value to your readers while reflecting your unique voice."
        img={ServicesWritingNonFictionalImg01}
      />
      <ServicesCallToActionSection />
      <ServicesContentSection
        isLeft={true}
        heading="Professional"
        headingPrimary="Non-Fiction Writing"
        remaningHeading="Made Simple"
        text01="We help professionals and thought leaders bring their ideas to life through expertly written content. Whether you're sharing your expertise or telling a real-life story, we turn concepts into compelling narratives."
        text02="From outlining to editing, we guide every step — so your book is ready for publishing, promotion, and impact."
        img={ServicesWritingNonFictionalImg02}
        secClassName="lg:mb-8"
      />
      <FaqSection />
      <TestimonialsSection />
    </main>
  );
}

export default NonFictionalPage;
