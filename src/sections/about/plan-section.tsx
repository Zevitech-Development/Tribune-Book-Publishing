import React from "react";
import Image from "next/image";

import { PlanSectionContent } from "@/content/about-us-page-content";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

function PlanSection() {
  return (
    <section className="layout-standard section-padding-standard flex flex-col lg:gap-12 gap-8">
      <h1 className="lg:text-4xl md:text-3xl text-2xl !leading-[135%] text-heading font-libre font-bold text-center">
        Amazing <span className="text-primary">Action</span> - Plans
      </h1>

      <div className="grid grid-cols-3 gap-4">
        {PlanSectionContent.map((plan, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="p-0">
              <Image
                src={plan.planImg}
                alt={`Plan - ${plan.planTitle}`}
                className="w-full h-[250px] object-cover"
              />
              <div className="p-4 py-6 text-center flex-center flex-col gap-2">
                <h1 className="text-3xl font-bold font-libre ">
                  {plan.planTitle}
                </h1>
                <Separator className="w-[70px] h-[4px] rounded-lg bg-primary" />
              </div>
            </CardHeader>

            <CardContent className="!mb-8">{plan.planDescription}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default PlanSection;
