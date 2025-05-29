import { Control, FieldValues, Path } from "react-hook-form";

export interface CustomSystemFieldInterface {
  value: string;
  onChange: (value: string) => void;
  name: string;
}

export interface CustomInputInterface<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  className?: string;
}

export interface CustomTextareaInterface<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  placeholder?: string;
  rows?: number;
  className?: string;
}

export interface CustomDropdownInterface<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  options: {
    label: string;
    value: string | boolean | number;
  }[];
  placeholder?: string;
}

export interface CustomCheckboxInterface<
  T extends FieldValues,
  V extends string = string
> {
  control: Control<T>;
  name: Path<T>;
  options: {
    label: string;
    value: V;
  }[];
}
