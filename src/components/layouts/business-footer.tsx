import Link from "next/link";
import React from "react";

function BusinessFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black lg:h-[50px] h-[70px]">
      <div className="layout-standard flex items-center lg:flex-row flex-col max-lg:gap-2 lg:justify-between h-full max-lg:justify-center">
        <div className="flex items-center gap-1 md:text-sm text-xs text-white">
          <Link
            href="tel:+14082145589"
            target="_self"
            className="hover:text-primary transition-colors"
          >
            (408) 214-5589
          </Link>
          <span>|</span>
          <Link
            href="mailto:info@tribunebookpublishing.com"
            target="_self"
            className="hover:text-primary transition-colors"
          >
            info@tribunebookpublishing.com
          </Link>
        </div>

        <p className="text-white md:text-sm text-xs">
          All Rights Reserved {currentYear} - All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default BusinessFooter;
