"use client";

import { useEffect, useRef, useState } from "react";

const splashColors = [
  "var(--color-cyan)",
  "var(--color-green)",
  "var(--color-yellow)",
  "var(--color-red)",
];

interface Splash {
  id: number;
  x: number;
  y: number;
  color: string;
}

export function ClickSplash() {
  const [splashes, setSplashes] = useState<Splash[]>([]);
  const colorIndexRef = useRef(0);
  const idRef = useRef(0);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handlePointerDown = (event: PointerEvent) => {
      if (motionQuery.matches) return;

      const id = idRef.current++;
      const color = splashColors[colorIndexRef.current % splashColors.length];
      colorIndexRef.current += 1;

      setSplashes((current) => [
        ...current.slice(-7),
        {
          id,
          x: event.clientX,
          y: event.clientY,
          color,
        },
      ]);

      window.setTimeout(() => {
        setSplashes((current) => current.filter((splash) => splash.id !== id));
      }, 620);
    };

    window.addEventListener("pointerdown", handlePointerDown, { passive: true });

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  return (
    <div className="click-splash-layer" aria-hidden="true">
      {splashes.map((splash) => (
        <span
          key={splash.id}
          className="click-splash"
          style={{
            left: splash.x,
            top: splash.y,
            color: splash.color,
            borderColor: splash.color,
            boxShadow: `0 0 18px ${splash.color}`,
          }}
        />
      ))}
    </div>
  );
}
