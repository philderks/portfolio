import type { Metadata } from "next";
import { DatenschutzView } from "@/components/DatenschutzView";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy information for the personal portfolio site.",
  alternates: {
    canonical: "/datenschutz",
  },
};

export default function DatenschutzPage() {
  return <DatenschutzView />;
}
