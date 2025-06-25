"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { ServicesEnum } from "@/enum/services-enum";
import { PPCFormType } from "@/types/ppc-form-type";

import { PPCFormSchema } from "@/schemas/ppc-form-schema";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import CustomInput from "@/components/common/custom-input";
import CustomSystemField from "@/components/common/custom-system-field";
import { Button } from "@/components/ui/button";
import { CustomDropdown } from "@/components/common/custom-dropdown";
import { CustomCheckbox } from "@/components/common/custom-checkbox";

import { SendPPCFormEmail } from "@/services/email-service";

import { cn } from "@/lib/utils";

import { LoaderCircle } from "lucide-react";
import { FaTimesCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";

function PPCForm() {
  const [loading, setLoading] = useState(false);
  const [system01, setSystem01] = useState("");
  const [system02, setSystem02] = useState("");

  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(PPCFormSchema),
    defaultValues: {
      isManuscriptReady: "",
      publishedBefore: false,
      publishedBookType: "",
      name: "",
      emailAddress: "",
      phoneNumber: "",
    },
  });

  const { handleSubmit, control, reset } = form;

  const onSubmit = async (data: PPCFormType) => {
    if (system01 || system02) {
      console.warn("Better Luck Next Time!");
      return;
    }

    setLoading(true);

    try {
      const emailSent = await SendPPCFormEmail(data);

      if (emailSent) {
        sessionStorage.setItem("ppc_form_submitted", "true");
        sessionStorage.setItem(
          "ppc_submission_timestamp",
          Date.now().toString()
        );

        reset();

        router.push("/thankyou");
      } else {
        throw new Error("Failed to send email");
      }
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
    <Card className="bg-white shadow-xl lg:rounded-2xl w-full py-6 px-4 flex flex-col gap-4">
      <CardHeader className="p-0">
        <CardTitle className="md:text-2xl text-xl font-bold font-libre">
          Get your book edited here!
        </CardTitle>
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

            <CustomDropdown
              control={control}
              name="isManuscriptReady"
              placeholder="Do you have a manuscript ready?"
              options={[
                {
                  label: "Yes, I'm ready to publish today",
                  value: "Yes, I'm ready to publish today",
                },
                {
                  label: "Yes, I'll be ready to publish in 1 to 3 months",
                  value: "Yes, I'll be ready to publish in 1 to 3 months",
                },
                {
                  label: "Yes, I'll be ready to publish in 3 to 6 months",
                  value: "Yes, I'll be ready to publish in 3 to 6 months",
                },
                {
                  label: "No, I do not have a book or manuscript ready",
                  value: "No, I do not have a book or manuscript ready",
                },
              ]}
            />

            <CustomDropdown
              control={control}
              name="publishedBefore"
              placeholder="Have you published before?"
              options={[
                {
                  label: "Yes, I have published beofre",
                  value: true,
                },
                {
                  label: "No, I have not published beofre",
                  value: false,
                },
              ]}
            />

            <CustomDropdown
              control={control}
              name="publishedBookType"
              placeholder="Type of book you're publishing"
              options={[
                {
                  label: "Business",
                  value: "business",
                },
                {
                  label: "Biography",
                  value: "biography",
                },
                {
                  label: "Inspirational",
                  value: "inspirational",
                },
                {
                  label: "Non-Fictional",
                  value: "non-fictional",
                },
                {
                  label: "Autobiography/Memoir",
                  value: "autobiography/memoir",
                },
                {
                  label: "Self-Help",
                  value: "self-help",
                },
                {
                  label: "Children",
                  value: "children",
                },
                {
                  label: "Spiritual/Religious",
                  value: "spiritual/religious",
                },
                {
                  label: "Fiction",
                  value: "fiction",
                },
                {
                  label: "Art/Photography",
                  value: "art/photography",
                },
                {
                  label: "Other",
                  value: "other",
                },
              ]}
            />

            <CardTitle className="md:text-xl text-base font-bold font-libre">
              What services are you looking for?
            </CardTitle>

            <CustomCheckbox
              control={control}
              name="services"
              options={[
                { label: "Writing", value: ServicesEnum.WRITING },
                { label: "Design", value: ServicesEnum.DESIGN },
                { label: "Publishing", value: ServicesEnum.PUBLISHING },
                { label: "Printing", value: ServicesEnum.PRINTING },
                { label: "Distribution", value: ServicesEnum.DISTRIBUTION },
                { label: "Marketing", value: ServicesEnum.MARKETING },
                { label: "Website", value: ServicesEnum.WEBSITE },
              ]}
            />

            <div className="grid grid-cols-2 gap-2 mt-2">
              <CustomInput control={control} name="name" placeholder="Name" />
              <CustomInput
                control={control}
                name="phoneNumber"
                placeholder="Phone Number"
              />
            </div>

            <CustomInput
              control={control}
              name="emailAddress"
              placeholder="Email Address"
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
      </CardContent>
    </Card>
  );
}

export default PPCForm;
