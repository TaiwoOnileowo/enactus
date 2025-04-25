import { Mountain } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2">
          <Mountain className="h-6 w-6 text-[#FFC222]" />
          <span className="font-bold text-xl">Enactus</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="/"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Projects
          </Link>
          <Link
            href="/team"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Team
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Contact
          </Link>
        </nav>
        <div className="ml-4">
          <Link href="/join">
            <Button className="bg-[#FFC222] text-black hover:bg-[#e6af1f]">
              Join Us
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
