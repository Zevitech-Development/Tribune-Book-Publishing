"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { ModalLeadFormType } from "@/types/modal-lead-form-type";

import { ModalLeadFormSchema } from "@/schemas/modal-lead-form-schema";

import { Form } from "@/components/ui/form";
import CustomInput from "@/components/common/custom-input";
import CustomFormTextArea from "@/components/common/custom-textarea";
import CustomSystemField from "@/components/common/custom-system-field";
import { Button } from "@/components/ui/button";

import { SendModalLeadFormEmail } from "@/services/email-service";

import { cn } from "@/lib/utils";

import { LoaderCircle } from "lucide-react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";

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

  const { handleSubmit, control, reset } = form;

  const onSubmit = async (data: ModalLeadFormType) => {
    if (system01 || system02) {
      console.warn("Better Luck Next Time!");
      return;
    }

    setLoading(true);

    try {
      await SendModalLeadFormEmail(data);

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
            className="text-white placeholder:text-white/70 border-white/20 focus:border-none"
          />
          <CustomInput
            control={control}
            name="phoneNumber"
            className="text-white placeholder:text-white/70 border-white/20 focus:border-none"
            placeholder="Phone Number"
          />
        </div>

        <CustomInput
          control={control}
          name="emailAddress"
          placeholder="Email Address"
          className="text-white placeholder:text-white/70 border-white/20 focus:border-none"
        />

        <CustomFormTextArea
          control={control}
          name="message"
          placeholder="Talk about your project"
          className="text-white placeholder:text-white/70 border-white/20 focus:border-none"
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
