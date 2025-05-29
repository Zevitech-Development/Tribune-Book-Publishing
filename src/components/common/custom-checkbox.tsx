"use client";

import React from "react";
import { FieldValues } from "react-hook-form";

import { CustomCheckboxInterface } from "@/interfaces/common-interfaces";

import { FormField, FormItem, FormMessage } from "../ui/form";

import { cn } from "@/lib/utils";

export const CustomCheckbox = <
  T extends FieldValues,
  V extends string = string
>({
  control,
  name,
  options,
}: CustomCheckboxInterface<T, V>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className="flex flex-wrap gap-2">
            {options.map((option) => (
              <div
                key={option.value}
                className={cn(
                  "border rounded-md px-4 py-2 cursor-pointer text-xs",
                  field.value?.includes(option.value)
                    ? "bg-primary text-white border-primary"
                    : "bg-muted border-border"
                )}
                onClick={() => {
                  const currentValues = new Set((field.value || []) as V[]);
                  if (currentValues.has(option.value)) {
                    currentValues.delete(option.value);
                  } else {
                    currentValues.add(option.value);
                  }
                  field.onChange(Array.from(currentValues));
                }}
              >
                {option.label}
              </div>
            ))}
          </div>
          <FormMessage className="text-red-600 text-[14px]" />
        </FormItem>
      )}
    />
  );
};
