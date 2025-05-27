import React from "react";
import { Metadata } from "next";

import TermsServicesPage from "@/customs/terms-services-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title: "Terms of Service | Tribune Book Publishing",
  description:
    "Review the Terms of Service for Tribune Book Publishing. Learn about the rules, responsibilities, and conditions that govern the use of our publishing, editing, and ghostwriting services.",
});

function TermsServices() {
  return <TermsServicesPage />;
}

export default TermsServices;
