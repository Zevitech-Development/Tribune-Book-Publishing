"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { ContactUsFormSchema } from "@/schemas/contact-us-form-schema";

import { Form } from "@/components/ui/form";
import CustomInput from "@/components/common/custom-input";
import CustomFormTextArea from "@/components/common/custom-textarea";
import CustomSystemField from "@/components/common/custom-system-field";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

import { LoaderCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";

type ContactUsFormData = z.infer<typeof ContactUsFormSchema>;

function ContactUsForm() {
  const [loading, setLoading] = useState(false);
  const [system01, setSystem01] = useState("");
  const [system02, setSystem02] = useState("");

  const form = useForm({
    resolver: zodResolver(ContactUsFormSchema),
    defaultValues: {
      name: "",
      emailAddress: "",
      phoneNumber: "",
      message: "",
    },
  });

  const { handleSubmit, control } = form;

  const onSubmit = async (data: ContactUsFormData) => {
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
    <section className="layout-standard flex flex-col gap-4">
      <Separator className="md:mb-8 mb-4" />

      <h1 className="lg:text-4xl md:text-3xl text-2xl !leading-[135%] text-heading font-libre font-bold md:mb-4 mb-2">
        Let Us Help <span className="text-primary">You</span> Out
      </h1>

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

          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <CustomInput control={control} name="name" placeholder="Name" />
            <CustomInput
              control={control}
              name="emailAddress"
              placeholder="Email Address"
            />
          </div>
          <CustomInput
            control={control}
            name="phoneNumber"
            placeholder="Phone Number"
          />
          <CustomFormTextArea
            control={control}
            name="message"
            rows={12}
            placeholder="Talk about your project"
          />

          {/* SYSTEM FIELD 02 */}
          <CustomSystemField
            name="system02"
            value={system02}
            onChange={setSystem02}
          />

          <div className="flex md:items-center md:flex-row flex-col max-md:gap-4 max-md:mt-4 md:justify-between">
            <div>google captcha</div>

            <Button
              className={cn(
                "md:w-[300px] md:h-[56px] h-[46px] text-base !rounded-[5px] hover:bg-primary-hover bg-primary"
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
          </div>
        </form>
      </Form>
    </section>
  );
}

export default ContactUsForm;
