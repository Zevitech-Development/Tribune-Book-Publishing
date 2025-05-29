import { z } from "zod";

import { ContactUsFormSchema } from "@/schemas/contact-us-form-schema";

export type ContactUsFormType = z.infer<typeof ContactUsFormSchema>;
