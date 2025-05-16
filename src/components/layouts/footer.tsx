import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FooterNavigationLink } from "@/contents/layout-content";

import TribuneLogo from "../../../public/favicons/logo-white.webp";
import PaymentMethodsImg from "../../../public/icons/payment-methods-icon.webp";

import { FaInstagram } from "react-icons/fa";
import { FaTwitter, FaPhone, FaFacebookF } from "react-icons/fa6";
import { MdLocationOn, MdEmail } from "react-icons/md";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black flex flex-col justify-center pt-12 pb-4">
      <div className="layout-standard">
        <div className="w-full grid grid-cols-[1fr_auto_1fr] border-b pb-12 gap-x-12 py-4">
          <div className="h-full">
            <Image
              className="w-[213px]"
              src={TribuneLogo}
              alt="Tribune Book Publishing"
            />
            <p className="text-sm text-white/80 mt-6">
              With 10+ years of hard work and sweat, we stand proudly in the
              E-book market knowing that we have no competitors in terms of
              providing quality and timely delivery both at the same time. Our
              clients recognize our work in just one glance. Partner with
              Tribune Book Publishing and make your E-book dreams a reality.
            </p>

            <div className="flex items-center gap-3 mt-6">
              <div className="w-[33px] h-[33px] flex justify-center items-center text-white hover:bg-[#CF212A] transition-colors rounded-full border border-white">
                <FaFacebookF />
              </div>
              <div className="w-[33px] h-[33px] flex justify-center items-center text-white hover:bg-[#CF212A] transition-colors rounded-full border border-white">
                <FaInstagram />
              </div>
              <div className="w-[33px] h-[33px] flex justify-center items-center text-white hover:bg-[#CF212A] transition-colors rounded-full border border-white">
                <FaTwitter />
              </div>
            </div>
          </div>

          <ul className="px-9 list-disc marker:text-primary marker:text-lg">
            <div className="space-y-1 mb-6">
              <h1 className="text-xl font-bold text-white font-libre">
                SERVICES
              </h1>
              <div className="w-10 h-[2px] bg-primary" />
            </div>
            {FooterNavigationLink.map((data, index) => (
              <div key={index} className="mb-2">
                <Link href={"/"} passHref>
                  <li className="text-sm font-semibold text-white hover:underline">
                    {data.services}
                  </li>
                </Link>
              </div>
            ))}
          </ul>

          <div className="h-full space-y-7">
            <div className="space-y-4">
              <div className="space-y-1 mb-6">
                <h1 className="text-xl font-bold text-white font-libre">
                  PAYMENT METHODS:
                </h1>
                <div className="w-10 h-[2px] bg-primary" />
              </div>
              <Image
                className="w-[200px]"
                src={PaymentMethodsImg}
                alt="Payment Methods"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <MdLocationOn className="text-red-500" size={18} />
                <p className="font-medium text-sm text-white">
                  <Link href={"/"}>
                    500 Rancho Cir, Las Vegas, NV 89107, USA
                  </Link>
                </p>
              </div>

              <div className="flex items-center gap-2">
                <FaPhone className="text-yellow-400" size={15} />
                <p className="font-medium text-sm text-white">
                  <Link href={"/"}>(408) 214-5589</Link>
                </p>
              </div>

              <div className="flex items-center gap-2">
                <MdEmail className="text-blue-500" size={17} />
                <p className="font-medium text-sm text-white">
                  <Link href={"/"}>info@tribunebookpublishing.com</Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-3">
          <p className="text-white text-sm">
            All Rights Reserved {currentYear} - All Rights Reserved
          </p>
          <p className="text-white text-sm">
            <Link href={"/"} className="hover:underline">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link href={"/"} className="hover:underline">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
