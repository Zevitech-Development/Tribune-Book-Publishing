import React from "react";

import WritingNoteSection from "@/sections/services/writing/writing-note-section";
import WritingProfileSection from "@/sections/services/writing/writing-profile-section";
import ServicesCallToActionSection from "@/sections/services/services-call-to-action-section";
import FaqSection from "@/components/common/faq-section";
import TestimonialsSection from "@/components/common/testimonials-section";
import ServicesContentSection from "@/sections/services/services-content-section";

import ServicesWritingSongImg01 from "../../../../public/images/services/services-writing-song-img-01.webp";
import ServicesWritingSongImg02 from "../../../../public/images/services/services-writing-song-img-02.jpg";

function SongPage() {
  return (
    <main>
      <WritingNoteSection
        heading="Craft"
        headingPrimary="Lyrics"
        remaningHeading="Resonate with Listeners."
        text="Enhance your musical chord connection with our soul-stirring lyrics and evoke the feelings of your listeners. Get in touch with us right away."
      />
      <WritingProfileSection />
      <ServicesContentSection
        isLeft={false}
        heading="Add Your"
        headingPrimary="Story"
        remaningHeading="In Every Note"
        text01="The tremendous power of music to explain what words alone are unable to is beyond genius. Our songwriting service elevates songwriting to new levels, guaranteeing that the full potential of music is unleashed."
        text02="No matter what genre you prefer—rock, pop, classic, hip-hop, or anything else—our creative team at Tribune Book Publishing is skilled at writing lyrics that suit your taste."
        img={ServicesWritingSongImg01}
      />
      <ServicesCallToActionSection />
      <ServicesContentSection
        isLeft={true}
        heading="Share Your"
        headingPrimary="Story"
        remaningHeading="Through Music"
        text01="With our songwriting expertise, we give voice to your feelings and transform them into lyrics by deeply connecting them with your audience."
        text02="Our songwriting service transforms your ideas into music that people can relate to. Let Your Emotions Take the front stage by contacting Tribune Book Publishing."
        img={ServicesWritingSongImg02}
        secClassName="lg:mb-8"
      />
      <FaqSection />
      <TestimonialsSection />
    </main>
  );
}

export default SongPage;
