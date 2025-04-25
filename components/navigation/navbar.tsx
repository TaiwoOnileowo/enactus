"use client";

import { buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { LucideIcon, ZapIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import MobileNavbar from "./mobile-navbar";
import AnimationContainer from "../animation-container";
import logo from "@/public/logo.png";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const NAV_LINKS = [
    {
      name: "About",
      link: "/",
    },
    // {
    //   name: "Pricing",
    //   link: "/pricing",
    // },
    {
      name: "Projects",
      link: "/",
    },
    {
      name: "Contact Us",
      link: "/",
    },
  ];

  const handleScroll = () => {
    if (window.scrollY > 8) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "absolute top-0 inset-x-0 h-20 w-full bg-black/40 border-b border-transparent z-[99999] select-none",
        scroll && "border-background/80 bg-background/40 backdrop-blur-md"
      )}
    >
      <AnimationContainer reverse delay={0.1} className="size-full">
        <MaxWidthWrapper className="flex items-end mt-4 justify-between">
          <div className="flex items-end space-x-12">
            <Link href="/">
              <Image src={logo} alt="Logo" width={110} />
            </Link>

            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                {NAV_LINKS.map((link) => (
                  <NavigationMenuItem key={link.name}>
                    <Link href={link.link} passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {link.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden lg:flex items-center">
            <div className="flex items-center gap-x-4">
              <Link
                href={`/`}
                className={cn(
                  buttonVariants(),
                  "bg-[#FFC222] text-white hover:[#FFC222]/90"
                )}
              >
                Join Us
              </Link>
            </div>
          </div>

          <MobileNavbar />
        </MaxWidthWrapper>
      </AnimationContainer>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string; icon: LucideIcon }
>(({ className, title, href, icon: Icon, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href!}
          ref={ref}
          className={cn(
            "block select-none space-y-1  rounded-lg p-3 leading-none no-underline outline-none transition-all duration-100 ease-out hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center space-x-2 text-neutral-300">
            <Icon className="h-4 w-4" />
            <h6 className="text-sm font-medium !leading-none">{title}</h6>
          </div>
          <p
            title={children! as string}
            className="line-clamp-1 text-sm leading-snug text-muted-foreground"
          >
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;
