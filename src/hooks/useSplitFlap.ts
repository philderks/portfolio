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

function staggerFor(length: number): number {
  return Math.min(22, 300 / Math.max(length - 1, 1));
}

export function useSplitFlap(
  target: string,
  trigger: Lang,
): { chars: SplitFlapChar[]; isScrambling: boolean } {
  const [chars, setChars] = useState<SplitFlapChar[]>([]);
  const startMsRef = useRef<number | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (target.length === 0) {
      setChars([]);
      return;
    }

    const stagger = staggerFor(target.length);
    startMsRef.current = performance.now();

    const initial: SplitFlapChar[] = Array.from(target, (c) => {
      if (c === " " || c === "\n") {
        return { char: c, scrambling: false };
      }
      return { char: randomPoolChar(), scrambling: true };
    });
    setChars(initial);

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
