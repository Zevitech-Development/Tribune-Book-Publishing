import React from "react";
import { Metadata } from "next";

import ScriptPage from "@/customs/services/writing/script-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title:
    "Script Writing Services | Professional Screenwriters - Tribune Book Publishing",
  description:
    "Bring your story to the screen with expert script writing. Tribune Book Publishing offers professional screenplay and script writing services for films, TV, web series, and more — from concept development to production-ready scripts.",
});

function Script() {
  return <ScriptPage />;
}

export default Script;
