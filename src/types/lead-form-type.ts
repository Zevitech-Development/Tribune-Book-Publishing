import { z } from "zod";

import { LeadFormSchema } from "@/schemas/lead-form-schema";

export type LeadFormType = z.infer<typeof LeadFormSchema>;
