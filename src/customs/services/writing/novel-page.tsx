import React from "react";

import ServicesNoteSection from "@/sections/services/services-note-section";
import ServicesProfileSection from "@/sections/services/services-profile-section";
import ServicesCallToActionSection from "@/sections/services/services-call-to-action-section";
import FaqSection from "@/components/common/faq-section";
import TestimonialsSection from "@/components/common/testimonials-section";
import ServicesContentSection from "@/sections/services/services-content-section";

import ServicesWritingNovelImg01 from "../../../../public/images/services/services-writing-novel-img-01.jpg";
import ServicesWritingNovelImg02 from "../../../../public/images/services/services-writing-novel-img-02.jpg";

function NovelPage() {
  return (
    <main>
      <ServicesNoteSection
        heading="Hire Our Experienced"
        headingPrimary="Novel Writers -"
        remaningHeading="Bring Life To Your Story."
        text="We believe that every novel has the potential to be a masterpiece. Our seasoned novel writers are dedicated to turning your ideas into compelling, immersive stories that resonate with readers."
      />
      <ServicesProfileSection />
      <ServicesContentSection
        isLeft={false}
        heading="We Are Passionate"
        headingPrimary="Novelists"
        remaningHeading="And Storytellers"
        text01="The publishers at Tribune Book Publishing have spent years polishing their skills. Our writers are qualified to meet your particular requirements as they have expertise in a variety of genres and styles."
        text02="Don't let your story remain just a dream and turn it into a reality with Tribune Book Publishing. Contact us today to learn more about our novel writing services."
        img={ServicesWritingNovelImg01}
      />
      <ServicesCallToActionSection />
      <ServicesContentSection
        isLeft={true}
        heading="Worried About Our"
        headingPrimary="Scope"
        remaningHeading="of Novel Writing?"
        text01="We have the credibility to soar your vision and turn it into a masterpiece novel, regardless of the genre."
        text02="We cover a wide range of genres, from breathtaking mysteries to heartfelt romances to electrifying science fiction. Our authors are skilled at becoming the voice of your vision and turning it into a reality."
        img={ServicesWritingNovelImg02}
        secClassName="lg:mb-8"
      />
      <FaqSection />
      <TestimonialsSection />
    </main>
  );
}

export default NovelPage;
