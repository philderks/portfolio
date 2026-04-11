"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const STORAGE_KEY = "derks.dev.insert-coin.dismissed";
const AUTO_DISMISS_MS = 3000;
const GAME_START_PAUSE_MS = 700;
const FADE_OUT_MS = 500;

type TimerId = Parameters<typeof clearTimeout>[0];
type Phase = "coin" | "gameStart" | "fadeOut";

function readShouldShow(): boolean {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem(STORAGE_KEY) !== "1";
}

export default function InsertCoinScreen() {
  const [shouldRender, setShouldRender] = useState(readShouldShow);
  const [phase, setPhase] = useState<Phase>("coin");

  const dismissStarted = useRef(false);
  const autoTimerRef = useRef<TimerId | null>(null);
  const exitTimersRef = useRef<TimerId[]>([]);

  const clearExitTimers = useCallback(() => {
    exitTimersRef.current.forEach(clearTimeout);
    exitTimersRef.current = [];
  }, []);

  const finishDismiss = useCallback(() => {
    setShouldRender(false);
  }, []);

  const startDismiss = useCallback(() => {
    if (dismissStarted.current) return;
    dismissStarted.current = true;
    sessionStorage.setItem(STORAGE_KEY, "1");
    if (autoTimerRef.current) {
      clearTimeout(autoTimerRef.current);
      autoTimerRef.current = null;
    }
    setPhase("gameStart");
    clearExitTimers();
    const t1 = window.setTimeout(() => {
      setPhase("fadeOut");
      const t2 = window.setTimeout(finishDismiss, FADE_OUT_MS);
      exitTimersRef.current.push(t2);
    }, GAME_START_PAUSE_MS);
    exitTimersRef.current.push(t1);
  }, [clearExitTimers, finishDismiss]);

  useEffect(() => {
    if (!shouldRender || phase !== "coin") return;

    const onKey = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.key === " ") {
        e.preventDefault();
        startDismiss();
      }
    };

    window.addEventListener("keydown", onKey);
    autoTimerRef.current = window.setTimeout(startDismiss, AUTO_DISMISS_MS);

    return () => {
      window.removeEventListener("keydown", onKey);
      if (autoTimerRef.current) {
        clearTimeout(autoTimerRef.current);
        autoTimerRef.current = null;
      }
    };
  }, [shouldRender, phase, startDismiss]);

  useEffect(() => {
    return () => {
      clearExitTimers();
      if (autoTimerRef.current) clearTimeout(autoTimerRef.current);
    };
  }, [clearExitTimers]);

  if (!shouldRender) return null;

  return (
    <div
      className={`insert-coin-overlay pointer-events-auto fixed inset-0 flex flex-col items-center justify-center ${
        phase === "fadeOut" ? "insert-coin-overlay--fade-out" : ""
      }`}
      style={{ zIndex: 9999, background: "#1a1820" }}
      role="presentation"
      aria-live="polite"
    >
      <div className="flex flex-col items-center gap-6 px-4 text-center">
        {phase === "coin" ? (
          <>
            <p
              className="insert-coin-title insert-coin-arcade-text text-[22px] leading-relaxed text-white"
              style={{
                textShadow:
                  "1px 0 0 rgba(255,80,80,0.7), -1px 0 0 rgba(80,200,255,0.7)",
              }}
            >
              INSERT COIN
            </p>
            <p className="insert-coin-hint insert-coin-arcade-text text-[10px] leading-relaxed text-[#ccc]">
              [Press Space to Continue]
            </p>
          </>
        ) : (
          <p className="insert-coin-arcade-text text-[14px] leading-relaxed text-[#f97316]">
            — GAME START —
          </p>
        )}
      </div>
    </div>
  );
}
