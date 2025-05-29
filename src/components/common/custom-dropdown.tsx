"use client";

import React, { useState, useRef, useEffect } from "react";
import { FieldValues } from "react-hook-form";

import { CustomDropdownInterface } from "@/interfaces/common-interfaces";

import { FormControl, FormField, FormItem, FormMessage } from "../ui/form";

import { ChevronDown } from "lucide-react";

export const CustomDropdown = <T extends FieldValues>({
  control,
  name,
  options,
  placeholder = "Select an option",
}: CustomDropdownInterface<T>) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <div className="relative w-full" ref={dropdownRef}>
              <div
                className="rounded-[5px] font-lato w-full md:text-base text-sm h-[50px] border border-border flex items-center justify-between px-3 leading-[1.25rem] cursor-pointer"
                onClick={() => setShowDropdown((prev) => !prev)}
              >
                <span>
                  {options.find((opt) => opt.value === field.value)?.label ||
                    placeholder}
                </span>
                <ChevronDown size={18} className="text-paragraph" />
              </div>

              {showDropdown && (
                <div className="absolute top-[55px] left-0 w-full bg-input border border-border shadow-md rounded-[5px] z-10 h-auto overflow-y-auto text-sm">
                  {options.map((option) => (
                    <div
                      key={option.label}
                      className="px-4 py-2 hover:bg-muted cursor-pointer"
                      onClick={() => {
                        field.onChange(option.value);
                        setShowDropdown(false);
                      }}
                    >
                      {option.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </FormControl>
          <FormMessage className="text-destructive text-sm" />
        </FormItem>
      )}
    />
  );
};
