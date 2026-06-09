"use client";

import type { Lang } from "@/lib/i18n";
import { useEffect, useRef, useState } from "react";

const POOL = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!?#@%+-=/".split("");
const FRAME_MS = 65;
const RANDOM_FRAMES = 5;

function randomPoolChar(): string {
  return POOL[Math.floor(Math.random() * POOL.length)] ?? "X";
}

export interface SplitFlapChar {
  char: string;
  scrambling: boolean;
}

function targetChars(target: string): SplitFlapChar[] {
  return Array.from(target, (char) => ({ char, scrambling: false }));
}

function staggerFor(length: number): number {
  return Math.min(22, 300 / Math.max(length - 1, 1));
}

function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function useSplitFlap(
  target: string,
  trigger: Lang,
): { chars: SplitFlapChar[]; isScrambling: boolean } {
  const [chars, setChars] = useState<SplitFlapChar[]>(() => targetChars(target));
  const startMsRef = useRef<number | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (prefersReducedMotion() || target.length === 0) {
      const timeoutId = window.setTimeout(() => {
        setChars(targetChars(target));
      }, 0);

      return () => {
        window.clearTimeout(timeoutId);
        startMsRef.current = null;
      };
    }

    const stagger = staggerFor(target.length);
    startMsRef.current = performance.now();

    const initial: SplitFlapChar[] = Array.from(target, (c) => {
      if (c === " " || c === "\n") {
        return { char: c, scrambling: false };
      }
      return { char: randomPoolChar(), scrambling: true };
    });

    const initialTimeoutId = window.setTimeout(() => {
      setChars(initial);
    }, 0);

    const runTick = () => {
      const startMs = startMsRef.current;
      if (startMs === null) return;

      const elapsed = performance.now() - startMs;
      let anyScrambling = false;

      const next: SplitFlapChar[] = [];
      for (let i = 0; i < target.length; i++) {
        const targetChar = target[i] ?? "";
        if (targetChar === " " || targetChar === "\n") {
          next.push({ char: targetChar, scrambling: false });
          continue;
        }

        const charStart = i * stagger;
        if (elapsed < charStart) {
          anyScrambling = true;
          next.push({ char: randomPoolChar(), scrambling: true });
          continue;
        }

        const steps = Math.floor((elapsed - charStart) / FRAME_MS);
        if (steps < RANDOM_FRAMES) {
          anyScrambling = true;
          next.push({ char: randomPoolChar(), scrambling: true });
          continue;
        }

        next.push({ char: targetChar, scrambling: false });
      }

      setChars(next);

      if (!anyScrambling && intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    intervalRef.current = setInterval(runTick, FRAME_MS);
    runTick();

    return () => {
      window.clearTimeout(initialTimeoutId);
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      startMsRef.current = null;
    };
  }, [target, trigger]);

  const isScrambling = chars.some((c) => c.scrambling);

  return { chars, isScrambling };
}
