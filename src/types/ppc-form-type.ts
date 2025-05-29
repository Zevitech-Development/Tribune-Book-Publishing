import { z } from "zod";

import { PPCFormSchema } from "@/schemas/ppc-form-schema";

export type PPCFormType = z.infer<typeof PPCFormSchema>;
