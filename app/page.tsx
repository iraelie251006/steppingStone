import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stepping Stone Ltd | Home",
  description: "Stepping Stone Ltd is your trusted partner for sustainable packaging solutions in Rwanda. We manufacture high-quality boxes and packaging materials tailored to your business needs.",
};

export default function Home() {
  return (
    <section>
      <Hero />
    </section>
  );
}
