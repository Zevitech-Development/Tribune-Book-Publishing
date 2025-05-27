import React from "react";

import ContactHeroSection from "@/sections/contact/contact-hero-section";
import ContactDetailsSection from "@/sections/contact/contact-details-section";
import ContactUsForm from "@/forms/contact-us-form";

function ContactUsPage() {
  return (
    <main>
      <ContactHeroSection />
      <ContactDetailsSection />
      <ContactUsForm />
    </main>
  );
}

export default ContactUsPage;
