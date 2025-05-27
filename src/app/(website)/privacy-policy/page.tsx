import React from "react";
import { Metadata } from "next";

import PrivacyPolicyPage from "@/customs/privacy-policy-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title: "Privacy Policy | Tribune Book Publishing",
  description:
    "Read the privacy policy of Tribune Book Publishing to understand how we collect, use, and protect your personal information. Your privacy is important to us, and we are committed to transparency and safeguarding your data.",
});

function PrivacyPolicy() {
  return <PrivacyPolicyPage />;
}

export default PrivacyPolicy;
