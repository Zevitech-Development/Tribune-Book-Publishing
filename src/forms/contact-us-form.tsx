"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { ContactUsFormType } from "@/types/contact-us-form-type";

import { ContactUsFormSchema } from "@/schemas/contact-us-form-schema";

import { Form } from "@/components/ui/form";
import CustomInput from "@/components/common/custom-input";
import CustomFormTextArea from "@/components/common/custom-textarea";
import CustomSystemField from "@/components/common/custom-system-field";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { SendContactUsFormEmail } from "@/services/email-service";

import { cn } from "@/lib/utils";
import ReCAPTCHABOX from "@/utils/recaptcha-box";

import { LoaderCircle } from "lucide-react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";

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

  const { handleSubmit, control, reset } = form;

  const onSubmit = async (data: ContactUsFormType) => {
    if (system01 || system02) {
      console.warn("Better Luck Next Time!");
      return;
    }

    setLoading(true);

    try {
      await SendContactUsFormEmail(data);

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
    <section className="layout-standard flex flex-col gap-4">
      <Separator className="md:mb-8 mb-4 mt-4" />

      <h1 className="lg:text-5xl font-extrabold !leading-[140%] tracking-tigh md:text-4xl text-3xl text-heading font-libre md:mb-4 mb-2">
        Let Us Help{" "}
        <span className="text-primary underline underline-offset-3 decoration-8 decoration-primary italic">
          You
        </span>{" "}
        Out
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
            <ReCAPTCHABOX />

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
