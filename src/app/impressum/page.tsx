import type { Metadata } from "next";
import { ImpressumView } from "@/components/ImpressumView";

export const metadata: Metadata = {
  title: "Imprint | derks.dev",
  description: "Legal notice for the personal portfolio website.",
};

export default function ImpressumPage() {
  return <ImpressumView />;
}
