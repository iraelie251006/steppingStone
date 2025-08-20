import Image from "next/image";
import Link from "next/link";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavLinks from "./NavLinks";

const MobileNavigation = async () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/icons/hamburger.svg"
          width={36}
          height={36}
          alt="Menu"
          className="invert md:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="background-light900_dark200 border-none"
      >
        <SheetTitle className="hidden">Navigation</SheetTitle>
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/SteppingStone logo.png"
            width={300}
            height={300}
            alt="Logo"
          />
        </Link>

        <div className="flex h-[calc(100vh-80px)] flex-col justify-center overflow-y-auto">
          <SheetClose asChild>
            <section className="mt-16 flex h-full flex-col gap-6">
              <NavLinks isMobileNav={true} />
            </section>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
