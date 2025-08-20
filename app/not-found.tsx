// app/not-found.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-96 mt-20 text-center space-y-6">
      <Image src="/image.png" width={200} height={200} alt="lost"/>
      <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
      <p className="text-gray-500 max-w-md">
        Oops! The page is lost, but not all wonders are.
      </p>
      <Link href="/">
        <Button className="mt-4">Go Back Home</Button>
      </Link>
    </div>
  );
}
