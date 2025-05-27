import React from "react";

import WritingNoteSection from "@/sections/services/writing/writing-note-section";
import WritingProfileSection from "@/sections/services/writing/writing-profile-section";
import ServicesCallToActionSection from "@/sections/services/services-call-to-action-section";
import FaqSection from "@/components/common/faq-section";
import TestimonialsSection from "@/components/common/testimonials-section";
import ServicesContentSection from "@/sections/services/services-content-section";

import ServicesWebsitePortfolioImg01 from "../../../../public/images/services/services-website-portfolio-01.jpg";
import ServicesWebsitePortfolioImg02 from "../../../../public/images/services/services-website-portfolio-02.jpeg";

function PortfolioPage() {
  return (
    <main>
      <WritingNoteSection
        heading="Showcase Your Work"
        headingPrimary="With a Stunning"
        remaningHeading="Portfolio Website"
        text="Make a lasting impression with a professionally designed portfolio website. Tribune Book Publishing helps authors, artists, and creatives build sleek, personalized portfolios that highlight your achievements, work, and unique style."
      />

      <WritingProfileSection />
      <ServicesContentSection
        isLeft={false}
        heading="Showcase Your Talent"
        headingPrimary="Beautiful Layouts"
        remaningHeading="for Every Creative"
        text01="We create elegant, responsive portfolio websites that put your work front and center—whether you're an author, illustrator, editor, or creative professional."
        text02="Your projects, testimonials, and media will be thoughtfully arranged to engage visitors and build trust."
        img={ServicesWebsitePortfolioImg01}
      />

      <ServicesCallToActionSection />
      <ServicesContentSection
        isLeft={true}
        heading="Elevate Your Brand"
        headingPrimary="With Features That"
        remaningHeading="Stand Out"
        text01="From contact forms and blog sections to SEO optimization and social integration, your portfolio site will be as functional as it is attractive."
        text02="Let us help you create a digital presence that reflects your personality and grows your audience."
        img={ServicesWebsitePortfolioImg02}
        secClassName="lg:mb-8"
      />

      <FaqSection />
      <TestimonialsSection />
    </main>
  );
}

export default PortfolioPage;
