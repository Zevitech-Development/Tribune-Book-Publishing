"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import PageLoader from "@/components/common/page-loader";

import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

function ThankyouPage() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const checkSubmissionStatus = () => {
      try {
        const submitted = sessionStorage.getItem("ppc_form_submitted");
        const timestamp = sessionStorage.getItem("ppc_submission_timestamp");

        if (submitted === "true" && timestamp) {
          const submissionTime = parseInt(timestamp);
          const currentTime = Date.now();
          const timeDifference = currentTime - submissionTime;

          const maxValidTime = 24 * 60 * 60 * 1000;

          if (timeDifference <= maxValidTime) {
            setIsAuthorized(true);
          } else {
            sessionStorage.removeItem("ppc_form_submitted");
            sessionStorage.removeItem("ppc_submission_timestamp");
            redirectToForm();
          }
        } else {
          redirectToForm();
        }
      } catch (error) {
        console.error("Session check error:", error);
        redirectToForm();
      } finally {
        setIsLoading(false);
      }
    };

    const redirectToForm = () => {
      setTimeout(() => {
        router.replace("/publish-book");
      }, 100);
    };

    checkSubmissionStatus();
  }, [router]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.removeItem("ppc_form_submitted");
      sessionStorage.removeItem("ppc_submission_timestamp");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  if (isLoading) {
    return <PageLoader />;
  }

  if (!isAuthorized) {
    return null;
  }

  return (
    <main className="layout-standard lg:h-[calc(100vh-138px)] h-[calc(100vh-158px)] flex flex-col justify-center items-center gap-10 px-4">
      <div className="flex flex-col items-center gap-8 ">
        <FaCheckCircle className="text-green-500" size={60} />
        <div className="text-center flex flex-col items-center gap-2">
          <h1 className="lg:text-5xl md:text-4xl text-2xl leading-none tracking-tight text-heading font-libre font-extrabold mb-4">
            Thank you for getting in touch!
          </h1>
          <h2 className="lg:text-xl md:text-lg text-base !leading-[135%] text-heading font-libre font-bold">
            Your request has been successfully submitted.
          </h2>
        </div>
      </div>
      <p className="md:text-base text-sm text-center">
        One of our seasoned publishing experts will examine your information and
        contact you shortly to discuss your goals, answer your questions, and
        offer customized support tailored to your book and vision. We&apos;re
        thrilled to assist you in taking the next step in your publishing
        journey with Tribune Book Publishing.
      </p>

      <div className="bg-[#cf212a]/10 p-6 rounded-lg">
        <h2 className="text-xl text-black mb-2 font-libre font-bold">
          What&apos;s Next?
        </h2>
        <ul className="text-primary text-left space-y-2">
          <li className="flex items-start">
            <span className="text-black mr-2">•</span>
            Our publishing specialist will review your requirements
          </li>
          <li className="flex items-start">
            <span className="text-black mr-2">•</span>
            You&apos;ll receive a personalized consultation call within 24 hours
          </li>
          <li className="flex items-start">
            <span className="text-black mr-2">•</span>
            We&apos;ll provide you with a customized publishing plan
          </li>
        </ul>
      </div>

      <div className="text-base text-gray-500 max-md:mb-[5rem] max-md:text-center">
        <p>
          Questions? Contact us at{" "}
          <Link href={"mailto:info@tribunebookpublishing.com"} className="text-blue-500 hover:underline font-bold">info@tribunebookpublishing.com</Link>
        </p>
      </div>
    </main>
  );
}

export default ThankyouPage;
