import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FooterWebsiteNavigationLinks } from "@/content/layout-content";

import TribuneLogo from "../../../public/favicons/logo-white.webp";
import PaymentMethodsIcon from "../../../public/icons/payment-methods-icon.webp";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter, FaPhone, FaFacebookF } from "react-icons/fa6";
import { MdLocationOn, MdEmail } from "react-icons/md";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black flex flex-col justify-center pt-12 pb-4">
      <div className="layout-standard">
        <div className="w-full grid lg:grid-cols-[1fr_auto_1fr] grid-cols-1 border-b pb-12 lg:gap-x-12 gap-12 py-4">
          <div className="h-full">
            <Image
              className="w-[213px]"
              src={TribuneLogo}
              alt="Tribune Book Publishing"
            />
            <p className="text-sm text-white/80 mt-6">
              With 10+ years of hard work and sweat, we stand proudly in the
              eBook market knowing that we have no competitors in terms of
              providing quality and timely delivery both at the same time. Our
              clients recognize our work in just one glance. Partner with
              Tribune Book Publishing and make your eBook dreams a reality.
            </p>

            <div className="flex items-center gap-3 mt-6">
              <Link
                href={"https://www.facebook.com/share/19MwHyaSsH/"}
                target="_blank"
                className="w-[33px] h-[33px] flex justify-center items-center text-white hover:bg-[#CF212A] transition-colors rounded-full border border-white"
              >
                <FaFacebookF />
              </Link>
              <Link
                href={
                  "https://www.instagram.com/tribunebookpublishing?igsh=ZG5mOTY5NDZxNXF5"
                }
                target="_blank"
                className="w-[33px] h-[33px] flex justify-center items-center text-white hover:bg-[#CF212A] transition-colors rounded-full border border-white"
              >
                <FaInstagram />
              </Link>
              <div className="w-[33px] h-[33px] flex justify-center items-center text-white hover:bg-[#CF212A] transition-colors rounded-full border border-white">
                <FaTwitter />
              </div>
            </div>
          </div>

          <ul className="lg:px-9 lg:list-disc marker:text-primary marker:text-lg">
            <div className="space-y-1 mb-6">
              <h1 className="text-xl font-bold text-white font-libre">
                SERVICES
              </h1>
              <div className="w-10 h-[2px] bg-primary" />
            </div>
            {FooterWebsiteNavigationLinks.map((data, index) => (
              <div key={index} className="lg:mb-2">
                <Link href={data.href} passHref>
                  <li className="text-sm font-semibold text-white/80 max-lg:py-2 hover:underline">
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
                src={PaymentMethodsIcon}
                alt="Payment Methods"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <MdLocationOn className="text-red-500" size={18} />
                <p className="font-medium text-sm text-white">
                  <Link
                    href="https://maps.google.com/?q=500 Rancho Cir, Las Vegas, NV 89107, USA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    500 Rancho Cir, Las Vegas, NV 89107, USA
                  </Link>
                </p>
              </div>

              <div className="flex items-center gap-2">
                <FaPhone className="text-yellow-400" size={15} />
                <p className="font-medium text-sm text-white">
                  <Link href="tel:+14082145589" className="hover:underline">
                    (408) 214-5589
                  </Link>
                </p>
              </div>

              <div className="flex items-center gap-2">
                <MdEmail className="text-blue-500" size={17} />
                <p className="font-medium text-sm text-white">
                  <Link
                    href="mailto:info@tribunebookpublishing.com"
                    className="hover:underline"
                  >
                    info@tribunebookpublishing.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex md:justify-between max-md:flex-col max-md:items-center max-md:gap-[4px] mt-3">
          <p className="text-white md:text-sm text-xs">
            All Rights Reserved {currentYear} - All Rights Reserved
          </p>
          <p className="text-white md:text-sm text-xs">
            <Link href={"/privacy-policy"} className="hover:underline">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link href={"/terms-services"} className="hover:underline">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
