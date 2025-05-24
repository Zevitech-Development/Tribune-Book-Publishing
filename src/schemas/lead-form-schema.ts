import { z } from "zod";

import {
  EmailSchemaValidator,
  PhoneNumberSchemaValidator,
  StrictStringValidator,
} from "./../utils/form-validators";

export const LeadFormSchema = z.object({
  name: StrictStringValidator("name"),
  emailAddress: EmailSchemaValidator,
  phoneNumber: PhoneNumberSchemaValidator,

  message: z.string().min(1, { message: "Please enter your message" }),
});
