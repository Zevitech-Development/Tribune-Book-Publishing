import React from "react";

import { ProcessSectionContent } from "@/content/home-page-content";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

function ProcessSection() {
  return (
    <section className="layout-standard section-padding-standard flex flex-col lg:gap-12 gap-8 mt-8">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="lg:text-4xl md:text-3xl text-2xl !leading-[135%] text-heading font-libre font-bold text-center">
          Our Credibility Is Our <span className="text-primary">Attention</span>{" "}
          To Details Process
        </h1>
        <p className="font-medium lg:text-lg md:text-base text-sm lg:max-w-[900px] max-w-[600px] text-center">
          Bringing your E-book to the world is a very crucial step, and
          that&apos;s where our Publishing Services.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {ProcessSectionContent.map((item, index) => (
          <Card
            key={index}
            className="lg:h-[300px] h-[250px] overflow-hidden relative rounded-2xl shadow-md"
          >
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-libre text-primary font-bold">
                {item.title}
              </CardTitle>
              <Separator className="bg-primary h-[3px] rounded-lg" />
            </CardHeader>
            <CardContent className="h-full">
              <ScrollArea className="h-full pr-4 pb-12 text-sm">
                {item.description}
              </ScrollArea>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default ProcessSection;
