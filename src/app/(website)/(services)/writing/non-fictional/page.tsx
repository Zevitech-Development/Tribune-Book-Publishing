import React from "react";
import { Metadata } from "next";

import NonFictionalPage from "@/customs/services/writing/non-fictional-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title:
    "Non-Fiction Writing | Expert Ghostwriting & Publishing Tribune Book Publishing",
  description:
    "Bring your knowledge and ideas to life with professional non-fiction writing services. Tribune Book Publishing offers expert ghostwriting and publishing support for biographies, business books, self-help, and more.",
});

function NonFictional() {
  return <NonFictionalPage />;
}

export default NonFictional;
