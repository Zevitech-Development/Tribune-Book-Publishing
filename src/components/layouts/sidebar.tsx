"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import {
  HeaderServicesNavigationLinks,
  HeaderWebsiteNavigationLinks,
} from "@/content/layout-content";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

import { RiMenu3Fill } from "react-icons/ri";

function Sidebar() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="lg:hidden bg-primary text-white p-2 rounded-lg">
          <RiMenu3Fill size={24} />
        </div>
      </SheetTrigger>

      <SheetContent className="bg-white">
        <SheetHeader className="border-b pb-4">
          <SheetTitle className="text-heading font-libre font-bold text-base">
            Tribune Book <span className="text-primary">Publishing</span>
          </SheetTitle>
          <SheetDescription className="text-xs w-full">
            You write it, we publish it. Tribune Book Publishing is your trusted
            partner for professional eBook publishing services.
          </SheetDescription>
        </SheetHeader>

        <div className="py-4 overflow-auto h-[calc(100%-140px)]">
          <nav className="space-y-1">
            {HeaderWebsiteNavigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-3 rounded-md text-sm font-medium ${
                  pathname === link.href
                    ? "bg-primary text-white"
                    : "text-heading"
                }`}
              >
                {link.title}
              </Link>
            ))}

            <Accordion type="multiple" className="w-full group border-none">
              {HeaderServicesNavigationLinks.map((service, index) => (
                <AccordionItem
                  key={index}
                  value={service.title}
                  className="border-none"
                >
                  <AccordionTrigger
                    className={`px-3 py-4 rounded-md text-sm font-medium transition-colors text-left group-hover:no-underline ${
                      pathname.startsWith(`/${service.title.toLowerCase()}`)
                        ? "bg-primary text-white"
                        : "text-heading"
                    }`}
                  >
                    {service.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col space-y-1 pl-2">
                      {service.sublinks.map((sublink, index) => (
                        <Link
                          key={index}
                          href={sublink.href}
                          className={`block px-3 py-2 rounded-md text-xs transition-colors ${
                            pathname === sublink.href
                              ? "bg-primary text-white"
                              : ""
                          }`}
                        >
                          {index + 1}. {sublink.title}
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </nav>
        </div>

        <SheetFooter className="border-t pt-4 text-center text-xs">
          All Rights Reserved {currentYear} - All Rights Reserved
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default Sidebar;
