"use client";

import dynamic from "next/dynamic";

const InsertCoinScreen = dynamic(() => import("@/components/InsertCoinScreen"), {
  ssr: false,
});

export function InsertCoinScreenGate() {
  return <InsertCoinScreen />;
}
