import { StaticImageData } from "next/image";

export interface ServicesNoteSectionInterface {
  heading: string;
  headingPrimary: string;
  remaningHeading: string;
  text: string;
}

export interface ServicesContentSectionInterface {
  heading: string;
  headingClassName?: string;
  headingPrimary: string;
  remaningHeading?: string;
  text01: string;
  text02?: string;
  text03?: string;
  img: string | StaticImageData;
  isLeft?: boolean;
  imgClassName?: string;
  secClassName?: string;
}
