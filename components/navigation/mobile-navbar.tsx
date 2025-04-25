"use client";

import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { LucideIcon, Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
  const handleClose = () => {
    setIsOpen(false);
  };
  const appUrl = process.env.NEXT_PUBLIC_APP_URL;

  return (
    <div className="flex lg:hidden items-center justify-end">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button size="icon" variant="ghost">
            <Menu className="w-5 h-5 text-white" />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-screen">
          <SheetClose
            asChild
            className="absolute top-3 right-5 bg-background z-20 flex items-center justify-center"
          >
            <Button size="icon" variant="ghost" className="text-neutral-600">
              <X className="w-5 h-5" />
            </Button>
          </SheetClose>
          <div className="flex flex-col items-start w-full py-2 mt-10">
            <div className="flex items-center justify-evenly w-full space-x-2">
              <>
                <Link
                  href={`/`}
                  className={buttonVariants({ className: "w-full" })}
                >
                  Join Us
                </Link>
              </>
            </div>
            <ul className="flex flex-col items-start w-full mt-6">
              <Accordion type="single" collapsible className="!w-full">
                {NAV_LINKS.map((link) => (
                  <AccordionItem
                    key={link.name}
                    value={link.name}
                    className="last:border-none"
                  >
                    <Link
                      href={link.link}
                      onClick={handleClose}
                      className="flex items-center w-full py-4 font-medium text-muted-foreground hover:text-foreground"
                    >
                      <span>{link.name}</span>
                    </Link>
                  </AccordionItem>
                ))}
              </Accordion>
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string; icon: LucideIcon }
>(({ className, title, href, icon: Icon, children, ...props }, ref) => {
  return (
    <li>
      <Link
        href={href!}
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="flex items-center space-x-2 text-foreground">
          <Icon className="h-4 w-4" />
          <h6 className="text-sm !leading-none">{title}</h6>
        </div>
        <p
          title={children! as string}
          className="line-clamp-1 text-sm leading-snug text-muted-foreground"
        >
          {children}
        </p>
      </Link>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default MobileNavbar;
