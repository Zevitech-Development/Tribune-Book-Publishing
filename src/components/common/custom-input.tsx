import React from "react";
import { FieldValues } from "react-hook-form";

import { CustomInputInterface } from "@/interfaces/common-interface";

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const CustomInput = <T extends FieldValues>({
  control,
  name,
  placeholder,
  type = "text",
  disabled = false,
}: CustomInputInterface<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input
              id={name as string}
              disabled={disabled}
              type={type}
              placeholder={placeholder}
              {...field}
              className="rounded-[5px] md:!text-base !text-sm h-[50px] border border-border"
            />
          </FormControl>
          <FormMessage className="text-red-600 text-[14px]" />
        </FormItem>
      )}
    />
  );
};

export default CustomInput;
