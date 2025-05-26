import React from "react";
import { Metadata } from "next";

import ContactUsPage from "@/customs/contact-us-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title: "Contact Us | Get in Touch with Tribune Book Publishing",
  description:
    "Have questions or ready to start your publishing journey? Contact Tribune Book Publishing today for expert assistance with eBook publishing, ghostwriting, editing, and more. We're here to help you every step of the way.",
});

function ContactUs() {
  return <ContactUsPage />;
}

export default ContactUs;
