// import { TextHoverEffect } from "@/components/ui/text-hover-effect";
// import logo from "@/public/icon-green.svg";
// import { Dot, Globe, Instagram, Send } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import AnimationContainer from "../AnimationContainer";
// const Footer = () => {
//   const appUrl = process.env.NEXT_PUBLIC_APP_URL;
//   return (
//     <footer className="flex flex-col relative items-center justify-center border-t border-border pt-16 pb-8 md:pb-0 px-6 lg:px-8 w-full max-w-7xl  mx-auto lg:pt-32 bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)]">
//       <div className="absolute top-0 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-1.5 bg-foreground rounded-full"></div>

//       <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">
//         <AnimationContainer delay={0.1}>
//           <div className="flex flex-col items-start justify-start md:max-w-[200px]">
//             <div className="flex items-start">
//               <Image src={logo} alt="Logo" width={40} height={40} />
//             </div>
//             <p className="text-muted-foreground mt-4 text-sm text-start">
//               Print smart, Print easy <br />
//               Campus Printing Simplified!
//             </p>

//             <div className="flex gap-4 text-neutral-200 mt-4 items-center">
//               <Link href="https://t.me/printeaze_bot?start=true">
//                 <Send className="w-5 h-5 text-neutral-200 cursor-pointer hover:text-white" />
//               </Link>
//               <Link href="/">
//                 <Globe className="w-5 h-5 text-neutral-200 cursor-pointer hover:text-white" />
//               </Link>
//               <Link
//                 href={"https://www.instagram.com/print.eazee/"}
//                 target="_blank"
//               >
//                 <Instagram className="w-5 h-5 text-neutral-200 cursor-pointer hover:text-white" />
//               </Link>
//               {/* < */}
//             </div>
//           </div>
//         </AnimationContainer>

//         <div className="grid-cols-2 gap-8 grid mt-16 xl:col-span-2 xl:mt-0">
//           <div className="md:grid md:grid-cols-2 md:gap-8">
//             <AnimationContainer delay={0.2}>
//               <div className="">
//                 <h3 className="text-base font-medium text-white">Product</h3>
//                 <ul className="mt-4 text-sm text-muted-foreground">
//                   <li className="mt-2">
//                     <Link
//                       href={appUrl!}
//                       className="hover:text-foreground transition-all duration-300 flex items-center"
//                     >
//                       All systems operational{" "}
//                       <Dot className="w-5 animate-pulse text-primary" />
//                     </Link>
//                   </li>
//                   <li className="mt-2">
//                     <Link
//                       href={"https://t.me/printeaze_bot?start=true"}
//                       className="hover:text-foreground transition-all duration-300"
//                     >
//                       Telegram Bot
//                     </Link>
//                   </li>
//                   <li className="mt-2">
//                     <Link
//                       href={appUrl!}
//                       className="hover:text-foreground transition-all duration-300"
//                     >
//                       Dashboard
//                     </Link>
//                   </li>

//                   <li className="mt-2">
//                     <Link
//                       href="#pricing"
//                       className="hover:text-foreground transition-all duration-300"
//                     >
//                       Pricing
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             </AnimationContainer>
//           </div>
//           <div className="md:grid md:grid-cols-2 md:gap-8">
//             <AnimationContainer delay={0.4}>
//               <div className="">
//                 <h3 className="text-base font-medium text-white">Resources</h3>
//                 <ul className="mt-4 text-sm text-muted-foreground">
//                   <li className="mt-2">
//                     <Link
//                       href="#faqs"
//                       className="hover:text-foreground transition-all duration-300"
//                     >
//                       Faqs
//                     </Link>
//                   </li>
//                   <li className="mt-2">
//                     <Link
//                       href="https://t.me/printeaze_channel"
//                       className="hover:text-foreground transition-all duration-300"
//                     >
//                       Telegram Channel
//                     </Link>
//                   </li>
//                   <li className="mt-2">
//                     <Link
//                       href="mailto:support@printeaze.com"
//                       className="hover:text-foreground transition-all duration-300"
//                     >
//                       Support
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             </AnimationContainer>
//             <AnimationContainer delay={0.5}>
//               <div className="mt-10 md:mt-0 flex flex-col">
//                 <h3 className="text-base font-medium text-white">Company</h3>
//                 <ul className="mt-4 text-sm text-muted-foreground">
//                   <li className="mt-2">
//                     <Link
//                       href="/privacy"
//                       className="hover:text-foreground transition-all duration-300"
//                     >
//                       Privacy Policy
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             </AnimationContainer>
//           </div>
//         </div>
//       </div>

//       <div className="mt-8 border-t border-border/40 pt-4 md:pt-8 md:flex md:items-center md:justify-between w-full">
//         <AnimationContainer delay={0.6}>
//           <p className="text-sm text-muted-foreground mt-8 md:mt-0">
//             &copy; {new Date().getFullYear()} Printeaze. All rights reserved.
//           </p>
//         </AnimationContainer>
//       </div>

//       <div className="h-[20rem] lg:h-[20rem] hidden md:flex w-full items-center justify-center">
//         <TextHoverEffect text="PRINTEAZE" />
//       </div>
//     </footer>
//   );
// };

// export default Footer;
