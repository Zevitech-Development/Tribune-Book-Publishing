import React from "react";
import { Metadata } from "next";

import BarnesNoblePage from "@/customs/services/distribution/barnes-noble-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title: "Barnes & Noble Publishing Services | Distribute Your Book Nationwide - Tribune Book Publishing",
  description: "Get your book listed on Barnes & Noble with professional help. Tribune Book Publishing offers expert distribution services to ensure your title reaches readers through one of the most trusted bookstore networks in the U.S.",
});


function BarnesNoble() {
  return <BarnesNoblePage />;
}

export default BarnesNoble;
