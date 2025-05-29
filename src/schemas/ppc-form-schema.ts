import { z } from "zod";

import { ServicesEnum } from "@/enum/services-enum";

import {
  EmailSchemaValidator,
  PhoneNumberSchemaValidator,
  StrictStringValidator,
} from "./../utils/form-validators";

export const PPCFormSchema = z.object({
  isManuscriptReady: z.string(),
  publishedBefore: z.boolean(),
  publishedBookType: z.string(),
  services: z
    .array(z.nativeEnum(ServicesEnum))
    .min(1, { message: "Please select at least one service." }),
  name: StrictStringValidator("name"),
  phoneNumber: PhoneNumberSchemaValidator,
  emailAddress: EmailSchemaValidator,
});
