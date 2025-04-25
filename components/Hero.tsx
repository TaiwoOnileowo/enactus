"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { Button } from "./ui/button";
import Link from "next/link";

export function Hero() {
  const images = [
    "/images/image1.jpg",
    "/images/image2.jpg",

    "/images/image6.jpg",
    "/images/image7.jpg",
    "/images/image8.jpg",
    "/images/10.jpg",
    "/images/11.jpg",
    "/images/12.jpg",
    "/images/13.jpg",
    "/images/20.jpg",
    "/images/21.jpg",
    "/images/22.jpg",
    "/images/23.jpg",
    "/images/24.jpg",
    "/images/25.jpg",
    "/images/26.jpg",
    "/images/27.jpg",
    "/images/28.jpg",
    "/images/29.jpg",
    "/images/30.jpg",
    "/images/31.jpg",
    "/images/32.jpg",
    "/images/33.jpg",
    "/images/34.jpg",
    "/images/35.jpg",
    "/images/36.jpg",
    "/images/37.jpg",
    "/images/38.jpg",
    "/images/39.jpg",
    "/images/40.jpg",
    "/images/9.jpg",

    "/images/14.jpg",
    "/images/15.jpg",
    "/images/16.jpg",
    "/images/17.jpg",
    "/images/18.jpg",
    "/images/19.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image5.jpg",
  ];
  return (
    <div className="relative mx-auto z-20  flex h-screen w-full  flex-col items-center justify-center overflow-hidden ">
      <h2 className="relative font-heading z-20 mx-auto max-w-4xl text-center text-2xl font-bold text-balance text-white md:text-4xl lg:text-7xl">
        Empowering communites through{" "}
        <span className="relative z-20 inline-block rounded-xl bg-[#FFC222]/40 px-4 py-1 text-white underline decoration-yellow-500 decoration-[6px] underline-offset-[16px] backdrop-blur-sm">
          entrepreneurial
        </span>{" "}
        action.
      </h2>
      <p className="relative z-20 mx-auto max-w-2xl py-8 text-center text-lg text-neutral-200 ">
        We are Enactus—a community of change-makers who lead, innovate, and
        create solutions to environmental and social challenges.
      </p>

      <div className="relative z-20 flex flex-wrap  text-lg items-center justify-center gap-4 pt-4">
        <Button
          asChild
          className=" bg-[#FFC222] font-medium text-white transition-colors hover:bg-[#FFC222]/90 "
        >
          <Link href={"https://tally.so/r/3xgNW9"} target="_blank">
            Register for Enactus Competition
          </Link>
        </Button>
        <Button className=" border border-white/20 bg-white/10  text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black focus:outline-none">
          Learn more
        </Button>
      </div>

      {/* overlay */}
      <div className="absolute inset-0 z-10 h-full w-full bg-black/80 dark:bg-black/40" />
      <ThreeDMarquee
        className="pointer-events-none absolute inset-0 h-full w-full"
        images={images}
      />
    </div>
  );
}
