"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { MarketingFormType } from "@/types/marketing-form-type";

import { MarketingFormSchema } from "@/schemas/marketing-form-schema";

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

import { SendMarketingFormEmail } from "@/services/email-service";

import { cn } from "@/lib/utils";

import { LoaderCircle } from "lucide-react";
import { FaCircleXmark } from "react-icons/fa6";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

function MarketingForm() {
  const [loading, setLoading] = useState(false);
  const [system01, setSystem01] = useState("");
  const [system02, setSystem02] = useState("");

  const form = useForm({
    resolver: zodResolver(MarketingFormSchema),
    defaultValues: {
      name: "",
      emailAddress: "",
      phoneNumber: "",
      message: "",
    },
  });

  const { handleSubmit, control, reset } = form;

  const onSubmit = async (data: MarketingFormType) => {
    if (system01 || system02) {
      console.warn("Better Luck Next Time!");
      return;
    }

    setLoading(true);

    try {
      await SendMarketingFormEmail(data);

      toast.success("Thank you! We've received your request.", {
        description: "Our team will get back to you shortly.",
        icon: <FaCheckCircle className="text-green-600" size={20} />,
        duration: 5000,
        style: {
          border: "1px solid #d1fae5",
          background: "#f0fdf4",
          color: "#065f46",
          boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
        },
        className: "rounded-lg px-4 py-3 text-sm font-medium",
      });

      reset();
    } catch (error) {
      if (error instanceof Error) {
        toast.error("Submission Failed", {
          description: `There was an issue processing your request: ${error.message}`,
          icon: <FaCircleXmark className="text-red-600" size={24} />,
        });
      } else {
        toast.error("Something went wrong", {
          description: "Please try again later or contact support.",
          icon: <FaTimesCircle className="text-red-600" size={20} />,
          duration: 6000,
          style: {
            border: "1px solid #fee2e2",
            background: "#fef2f2",
            color: "#991b1b",
            boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
          },
          className: "rounded-lg px-4 py-3 text-sm font-medium",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="bg-white shadow-xl lg:rounded-2xl w-full py-6 px-4 flex flex-col gap-8">
      <CardHeader className="flex flex-col items-center p-0 border-b pb-4">
        <CardTitle className="text-3xl font-bold text-center font-libre">
          Discuss Your Project
        </CardTitle>
        <CardDescription className="text-xl font-libre font-bold text-center">
          With Our Experts
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
}

export default MarketingForm;
