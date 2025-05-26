"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { ModalLeadFormSchema } from "@/schemas/modal-lead-form-schema";

import { Form } from "@/components/ui/form";
import CustomInput from "@/components/common/custom-input";
import CustomFormTextArea from "@/components/common/custom-textarea";
import CustomSystemField from "@/components/common/custom-system-field";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

import { LoaderCircle } from "lucide-react";

type ModalLeadFormData = z.infer<typeof ModalLeadFormSchema>;

function ModalLeadForm() {
  const [loading, setLoading] = useState(false);
  const [system01, setSystem01] = useState("");
  const [system02, setSystem02] = useState("");

  const form = useForm({
    resolver: zodResolver(ModalLeadFormSchema),
    defaultValues: {
      name: "",
      emailAddress: "",
      phoneNumber: "",
      message: "",
    },
  });

  const { handleSubmit, control } = form;

  const onSubmit = async (data: ModalLeadFormData) => {
    if (system01 || system02) {
      console.warn("Better Luck Next Time!");
      return;
    }

    setLoading(true);

    console.log(data);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-4"
      >
        {/* SYSTEM FIELD 01 */}
        <CustomSystemField
          name="system01"
          value={system01}
          onChange={setSystem01}
        />

        <div className="w-full grid grid-cols-2 gap-4">
          <CustomInput
            control={control}
            name="name"
            placeholder="Name"
            className="text-white focus:border-none"
          />
          <CustomInput
            control={control}
            name="phoneNumber"
            className="text-white focus:border-none"
            placeholder="Phone Number"
          />
        </div>

        <CustomInput
          control={control}
          name="emailAddress"
          placeholder="Email Address"
          className="text-white focus:border-none"
        />

        <CustomFormTextArea
          control={control}
          name="message"
          placeholder="Talk about your project"
          className="text-white focus:border-none"
        />

        {/* SYSTEM FIELD 02 */}
        <CustomSystemField
          name="system02"
          value={system02}
          onChange={setSystem02}
        />

        <Button
          className={cn(
            "w-full md:h-[56px] h-[46px] text-base !rounded-[5px] hover:bg-primary-hover bg-primary"
          )}
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <div className="w-full h-full flex items-center justify-center gap-2 ">
              <p>Submiting</p>{" "}
              <LoaderCircle className="animate-spin text-foreground" />
            </div>
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </Form>
  );
}

export default ModalLeadForm;
