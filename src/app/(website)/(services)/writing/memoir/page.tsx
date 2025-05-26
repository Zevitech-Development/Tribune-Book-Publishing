import React from "react";
import { Metadata } from "next";

import MemoirPage from "@/customs/services/writing/memoir-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title:
    "Memoir Writing | Share Your Life Story with the World - Tribune Book Publishing",
  description:
    "Turn your personal journey into a powerful memoir. Tribune Book Publishing offers professional memoir writing and ghostwriting services to help you craft an inspiring, well-written story that resonates with readers.",
});

function Memoir() {
  return <MemoirPage />;
}

export default Memoir;
