import React from "react";
import { FieldValues } from "react-hook-form";

import { CustomTextareaInterface } from "@/interfaces/common-interface";

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Textarea } from "../ui/textarea";

const CustomTextarea = <T extends FieldValues>({
  control,
  name,
  placeholder = "Enter text...",
  rows = 5,
}: CustomTextareaInterface<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Textarea
              {...field}
              placeholder={placeholder}
              className="rounded-[5px] md:!text-base !text-sm border border-border"
              rows={rows}
            />
          </FormControl>
          <FormMessage className="text-red-600 text-[14px]" />
        </FormItem>
      )}
    />
  );
};

export default CustomTextarea;
