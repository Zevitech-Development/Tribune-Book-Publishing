"use client";

import React, { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ReCAPTCHABOX = () => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleRecaptchaChange = (token: string | null) => {
    console.log("Recaptcha Token:", token);
  };

  return (
    <div>
      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
        onChange={handleRecaptchaChange}
        ref={recaptchaRef}
      />
    </div>
  );
};

export default ReCAPTCHABOX;
