"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MapPin } from "lucide-react";

export default function NotFound() {
    const destination = "43JM+9Q, Kigali";
    const appUrl = `comgooglemaps://?saddr=Current+Location&daddr=${encodeURIComponent(
        destination
      )}`;
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=Current+Location&destination=${encodeURIComponent(
    destination
  )}`;
  const handleClick = () => {
    // Try to open Google Maps app first
    window.location.href = appUrl;

    // Fallback to web after short delay (if app not installed)
    setTimeout(() => {
      window.open(googleMapsUrl, "_blank");
    }, 500);
  };
  return (
    <div className="flex flex-col items-center justify-center h-96 mt-20 text-center space-y-6">
      <Image src="/image.png" width={200} height={200} alt="lost"/>
      <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
      <p className="text-gray-500 max-w-md">
        Oops! The page is lost, but not all wonders are lost.
      </p>
      <Link href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
        <Button className="mt-4 flex items-center space-x-2 primary-gradient" onClick={handleClick}>
            <MapPin className="w-5 h-5 text-slate-700" />
            <span className="font-extrabold text-slate-700">Find Us</span>
        </Button>
      </Link>
    </div>
  );
}
