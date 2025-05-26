import React from "react";
import { Metadata } from "next";

import BiographyPage from "@/customs/services/writing/biography-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title:
    "Biography Writing Services | Professional Ghostwriters - Tribune Book Publishing",
  description:
    "Tell your life story with impact. Tribune Book Publishing offers expert biography writing services to help you share your journey in a compelling, well-crafted narrative. From interviews to final drafts, we turn your legacy into a lasting piece of literature.",
});

function Biography() {
  return <BiographyPage />;
}

export default Biography;
