/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

const ubuntuBold = localFont({
  src: "./fonts/Ubuntu-Bold.ttf",
  variable: "--font-ubuntu-bold",
  weight: "700",
});

const ubuntuLight = localFont({
  src: "./fonts/Ubuntu-Light.ttf",
  variable: "--font-ubuntu-light",
  weight: "300",
});

const ubuntuMedium = localFont({
  src: "./fonts/Ubuntu-Medium.ttf",
  variable: "--font-ubuntu-medium",
  weight: "500",
});

const ubuntuRegular = localFont({
  src: "./fonts/Ubuntu-Regular.ttf",
  variable: "--font-ubuntu-regular",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Stepping Stone Ltd",
  description: "Stepping Stone Ltd is your trusted partner for sustainable packaging solutions in Rwanda. We manufacture high-quality boxes and packaging materials tailored to your business needs.",
  keywords: [
    "Stepping Stone Ltd",
    "sustainable packaging",
    "Rwanda packaging solutions",
    "custom boxes Rwanda",
    "eco-friendly packaging",
    "packaging materials Rwanda",
    "packaging manufacturer Rwanda", 
    "packaging solutions Rwanda", 
    "eco-friendly packaging Rwanda", 
    "sustainable packaging Rwanda", 
    "Kigali packaging company"
  ],
  metadataBase: new URL("https://steppingstoneltd.com"),
  authors: [
    {
      name: "Stepping Stone Ltd",
      url: "https://steppingstoneltd.rw",
    },
    {
      name: "Niyubwayo Irakoze Elie",
      url: "https://iraelie.vercel.app",
    },
  ],
  openGraph: {
    title: "Stepping Stone Ltd",
    description: "Stepping Stone Ltd is your trusted partner for sustainable packaging solutions in Rwanda. We manufacture high-quality boxes and packaging materials tailored to your business needs.",
    url: "https://steppingstoneltd.com",
    siteName: "Stepping Stone Ltd",
    images: [
      {
        url: "https://stepping-stone-three.vercel.app/StepStone.jpeg",
        width: 1200,
        height: 630,
        alt: "Stepping Stone Ltd Logo",
      },
    ],
    locale: "en_RW",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntuLight.className} ${ubuntuMedium.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
