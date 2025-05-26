import React from "react";
import { Metadata } from "next";

import IllustrationPage from "@/customs/services/design/illustration-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title:
    "Book Illustration Services | Custom Illustrations for Authors - Tribune Book Publishing",
  description:
    "Bring your story to life with stunning visuals. Tribune Book Publishing offers professional illustration services for children's books, graphic novels, and more — tailored to your vision and audience.",
});

function Illustration() {
  return <IllustrationPage />;
}

export default Illustration;
