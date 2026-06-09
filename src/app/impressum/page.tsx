import type { Metadata } from "next";
import { ImpressumView } from "@/components/ImpressumView";

export const metadata: Metadata = {
  title: "Imprint",
  description: "Legal notice for the personal portfolio website.",
  alternates: {
    canonical: "/impressum",
  },
};

export default function ImpressumPage() {
  return <ImpressumView />;
}
