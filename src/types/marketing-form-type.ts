import { z } from "zod";

import { MarketingFormSchema } from "@/schemas/marketing-form-schema";

export type MarketingFormType = z.infer<typeof MarketingFormSchema>;
