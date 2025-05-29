import { z } from "zod";

import { ModalLeadFormSchema } from "@/schemas/modal-lead-form-schema";

export type ModalLeadFormType = z.infer<typeof ModalLeadFormSchema>;
