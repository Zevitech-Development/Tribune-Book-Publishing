import React from "react";
import { Metadata } from "next";

import PrintOnDemandPage from "@/customs/services/printing/print-on-demand-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title:
    "Print-on-Demand Book Services | Hassle-Free Self-Publishing - Tribune Book Publishing",
  description:
    "Publish without inventory stress. Tribune Book Publishing offers reliable print-on-demand services, so your books are printed as orders come in — saving you time, space, and upfront costs.",
});

function PrintOnDemand() {
  return <PrintOnDemandPage />;
}

export default PrintOnDemand;
