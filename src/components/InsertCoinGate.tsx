"use client";

import { useCallback, useLayoutEffect, useState } from "react";
import InsertCoinScreen, {
  INSERT_COIN_STORAGE_KEY,
} from "@/components/InsertCoinScreen";

type Phase = "boot" | "intro" | "main";

export function InsertCoinGate({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<Phase>("boot");

  useLayoutEffect(() => {
    setPhase(
      sessionStorage.getItem(INSERT_COIN_STORAGE_KEY) === "1"
        ? "main"
        : "intro",
    );
  }, []);

  const handleIntroDone = useCallback(() => {
    setPhase("main");
  }, []);

  const mainVisible = phase === "main";

  return (
    <>
      {phase === "boot" && (
        <div
          className="fixed inset-0"
          style={{ zIndex: 10000, background: "#1a1820" }}
          aria-hidden
        />
      )}
      {phase === "intro" && (
        <InsertCoinScreen onDismissed={handleIntroDone} />
      )}
      <div
        className={
          mainVisible
            ? "relative z-10"
            : "relative z-10 invisible pointer-events-none"
        }
        aria-hidden={!mainVisible}
      >
        {children}
      </div>
    </>
  );
}
