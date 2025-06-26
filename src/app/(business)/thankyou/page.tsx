import React from "react";
import { Metadata } from "next";
import Script from "next/script";

import ThankyouPage from "@/customs/business/thankyou-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title: "Thank You | We've Received Your Request - Tribune Book Publishing",
  description:
    "Thank you for reaching out to Tribune Book Publishing! Your request has been received. Our team will get back to you shortly to help you take the next step in your publishing journey.",
});

function Thankyou() {
  return (
    <>
      {/* Google Tag Manager */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-16565473053"
        strategy="afterInteractive"
      />
      <Script id="gtm-thankyou" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16565473053');
        `}
      </Script>

      <ThankyouPage />
    </>
  );
}

export default Thankyou;
