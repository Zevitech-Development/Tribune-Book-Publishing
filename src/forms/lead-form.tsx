"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { LeadFormSchema } from "@/schemas/lead-form-schema";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import CustomInput from "@/components/common/custom-input";
import CustomFormTextArea from "@/components/common/custom-textarea";
import CustomSystemField from "@/components/common/custom-system-field";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

import { LoaderCircle } from "lucide-react";

type LeadFormData = z.infer<typeof LeadFormSchema>;

const LeadForm = () => {
  const [loading, setLoading] = useState(false);
  const [system01, setSystem01] = useState("");
  const [system02, setSystem02] = useState("");

  const form = useForm({
    resolver: zodResolver(LeadFormSchema),
    defaultValues: {
      name: "",
      emailAddress: "",
      phoneNumber: "",
      message: "",
    },
  });

  const { handleSubmit, control } = form;

  const onSubmit = async (data: LeadFormData) => {
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
    <Card className="bg-white shadow-xl lg:rounded-2xl w-full py-6 px-4 flex flex-col gap-8">
      <CardHeader className="flex flex-col items-center p-0 border-b pb-4">
        <CardTitle className="text-3xl font-bold text-center font-libre">
          Get A Quote Today!
        </CardTitle>
        <CardDescription className="text-xl font-libre font-bold text-center">
          <span className="text-primary">30%</span>{" "}
          {new Date().toLocaleString("default", { month: "long" })} Discount
        </CardDescription>
      </CardHeader>

      <CardContent className="p-0 pb-2">
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
            <CustomInput control={control} name="name" placeholder="Name" />
            <CustomInput
              control={control}
              name="emailAddress"
              placeholder="Email Address"
            />
            <CustomInput
              control={control}
              name="phoneNumber"
              placeholder="Phone Number"
            />
            <CustomFormTextArea
              control={control}
              name="message"
              placeholder="Talk about your project"
            />

            {/* SYSTEM FIELD 02 */}
            <CustomSystemField
              name="system02"
              value={system02}
              onChange={setSystem02}
            />

            <Button
              className={cn(
                "w-full md:h-[56px] h-[46px] text-base !rounded-[15px] hover:bg-primary-hover bg-primary"
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
      </CardContent>
    </Card>
  );
};

export default LeadForm;
