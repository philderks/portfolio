import type { Metadata } from "next";
import { DatenschutzView } from "@/components/DatenschutzView";

export const metadata: Metadata = {
  title: "Privacy | derks.dev",
  description: "Privacy information for the personal portfolio site.",
};

export default function DatenschutzPage() {
  return <DatenschutzView />;
}
