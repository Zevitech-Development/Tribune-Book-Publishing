import React from "react";
import { Metadata } from "next";

import GhostwritingPage from "@/customs/services/writing/ghostwriting-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title:
    "Ghostwriting Services | Professional Book Ghostwriters - Tribune Book Publishing",
  description:
    "Bring your book idea to life with expert ghostwriting. Tribune Book Publishing offers professional ghostwriting services for authors, entrepreneurs, and thought leaders—transforming your vision into a compelling, publication-ready manuscript.",
});

function Ghostwriting() {
  return <GhostwritingPage />;
}

export default Ghostwriting;
