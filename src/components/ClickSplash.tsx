"use client";

import { useEffect, useRef, useState } from "react";

const rayCount = 6;

interface Splash {
  id: number;
  x: number;
  y: number;
}

export function ClickSplash() {
  const [splashes, setSplashes] = useState<Splash[]>([]);
  const idRef = useRef(0);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handlePointerDown = (event: PointerEvent) => {
      if (motionQuery.matches) return;

      const id = idRef.current++;

      setSplashes((current) => [
        ...current.slice(-7),
        {
          id,
          x: event.clientX,
          y: event.clientY,
        },
      ]);

      window.setTimeout(() => {
        setSplashes((current) => current.filter((splash) => splash.id !== id));
      }, 560);
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
          }}
        >
          {Array.from({ length: rayCount }, (_, index) => (
            <i key={index} className="click-splash__ray" />
          ))}
        </span>
      ))}
    </div>
  );
}
