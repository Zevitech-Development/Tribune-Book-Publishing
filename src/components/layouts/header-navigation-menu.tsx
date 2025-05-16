import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { HeaderNavigationLinks } from "@/contents/layout-content";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const HeaderNavigationMenu = () => {
  return (
    <NavigationMenu className="max-lg:hidden">
      <NavigationMenuList className="gap-4">
        {HeaderNavigationLinks.map((data, index) =>
          data.sublinks ? (
            <NavigationMenuItem key={index}>
              <NavigationMenuTrigger className="text-sm font-libre font-bold text-heading hover:text-primary hover:!bg-white px-0 space-x-0 focus:bg-white focus:text-none">
                {data.title}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul
                  className={cn(
                    data.title === "Ghost Writing"
                      ? "w-[230px] grid-cols-1 gap-3"
                      : data.title === "Design"
                      ? "w-[300px] grid-cols-1 gap-3"
                      : data.title === "Publishing"
                      ? "w-[300px] grid-cols-1 gap-3"
                      : "grid-cols-3 w-[900px] gap-x-8 gap-y-5",
                    "grid p-4"
                  )}
                >
                  {data.sublinks.map((sublink, sublinkIndex) => (
                    <li key={sublinkIndex}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={sublink.href}
                          className="block select-none font-libre space-y-1 rounded-md p-3 no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-normal">
                            {sublink.title}
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={index}>
              <Link href={data.href} legacyBehavior passHref>
                <NavigationMenuLink className="text-sm font-libre font-bold text-heading hover:text-primary mr-1">
                  {data.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          )
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default HeaderNavigationMenu;
