import { EmailAttachment } from "./services-interface";

export interface TypewriterHeadingProps {
  heading: string;
  headingPrimary: string;
  remaningHeading: string;
  className?: string;
}

export interface SendEmailInterface {
  to: string;
  subject: string;
  html: string;
  attachments?: EmailAttachment[];
}
