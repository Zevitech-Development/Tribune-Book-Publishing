import React from "react";
import { Metadata } from "next";

import ManuscriptAssessmentPage from "@/customs/services/writing/manuscript-assessment-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title:
    "Manuscript Assessment Services | Expert Book Evaluation - Tribune Book Publishing",
  description:
    "Get expert feedback on your manuscript before publishing. Tribune Book Publishing offers professional manuscript assessment services to evaluate structure, content, and market readiness—helping you refine your work with confidence.",
});

function ManuscriptAssessment() {
  return <ManuscriptAssessmentPage />;
}

export default ManuscriptAssessment;
