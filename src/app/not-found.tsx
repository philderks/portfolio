import type { Metadata } from "next";
import { NotFoundView } from "@/components/NotFoundView";

export const metadata: Metadata = {
  title: "404 — Page not found | derks.dev",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return <NotFoundView />;
}
