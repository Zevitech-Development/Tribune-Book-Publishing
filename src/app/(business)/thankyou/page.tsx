import React from "react";
import { Metadata } from "next";

import ThankyouPage from "@/customs/business/thankyou-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title: "Thank You | We've Received Your Request - Tribune Book Publishing",
  description:
    "Thank you for reaching out to Tribune Book Publishing! Your request has been received. Our team will get back to you shortly to help you take the next step in your publishing journey.",
});

function Thankyou() {
  return <ThankyouPage />;
}

export default Thankyou;
