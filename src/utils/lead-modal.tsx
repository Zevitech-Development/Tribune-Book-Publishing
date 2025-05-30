"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import Logo from "../../public/favicons/logo-white.webp";
import ModalLeadForm from "@/forms/modal-lead-form";

function LeadModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="sticky bottom-[10px] left-[10px] text-sm cursor-pointer font-bold bg-primary rounded-full shadow-2xl animate-bounce text-foreground h-[60px] w-[60px] flex-center text-center">
          60% <br /> OFF
        </div>
      </DialogTrigger>

      <DialogContent className="bg-black border border-[#1e1d1d] md:max-h-[600px] md:h-full max-md:w-[90%] max-md:max-h-[600px] max-md:h-[90%] overflow-auto max-md:rounded-2xl">
        <DialogHeader className="flex flex-col gap-4">
          <div className="flex-center">
            <Image
              src={Logo}
              alt="Tribune Book Publishing"
              className="md:w-[250px] w-[200px]"
            />
          </div>
          <DialogTitle hidden />
          <DialogDescription className="text-white/70 text-center text-sm">
            You write it, we publish it. Tribune Book Publishing is your trusted
            partner for professional eBook publishing services.
          </DialogDescription>
        </DialogHeader>

        <ModalLeadForm />
      </DialogContent>
    </Dialog>
  );
}

export default LeadModal;
