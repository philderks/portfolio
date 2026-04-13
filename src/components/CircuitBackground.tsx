"use client";

import React, { useEffect, useRef } from "react";

const GRID = 32;
const SPEED = 40;
const MAX_TRACES = 4;
const TAIL_LEN = 15;

const COLOR_VARS = [
  "--color-cyan",
  "--color-green",
  "--color-yellow",
  "--color-red",
];

// 0=E, 1=NE, 2=N, 3=NW, 4=W, 5=SW, 6=S, 7=SE
const DIR_DX = [1, 1, 0, -1, -1, -1, 0, 1];
const DIR_DY = [0, -1, -1, -1, 0, 1, 1, 1];

let colorCounter = 0;

interface Point {
  x: number;
  y: number;
}

interface Trace {
  points: Point[];
  dir: number;
  segmentsLeft: number;
  color: string;
  headOffscreen: boolean;
  progress: number;
}

function snapToGrid(v: number): number {
  return Math.round(v / GRID) * GRID;
}

function randInt(min: number, max: number): number {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function isDiagonal(dir: number): boolean {
  return dir % 2 === 1;
}

function segStepLength(dir: number): number {
  return isDiagonal(dir) ? GRID * Math.SQRT2 : GRID;
}

function readColors(): string[] {
  const style = getComputedStyle(document.documentElement);
  return COLOR_VARS.map((v) => style.getPropertyValue(v).trim());
}

function initTrace(w: number, h: number, colors: string[]): Trace {
  const edge = Math.floor(Math.random() * 4);
  let x: number, y: number;
  let dirs: number[];

  // Enter on a diagonal; each turn is ±45° (one step on the 8-way compass).
  switch (edge) {
    case 0: // top
      x = snapToGrid(Math.random() * w);
      y = -GRID;
      dirs = [7, 5];
      break;
    case 1: // bottom
      x = snapToGrid(Math.random() * w);
      y = (Math.floor(h / GRID) + 1) * GRID;
      dirs = [1, 3];
      break;
    case 2: // left
      x = -GRID;
      y = snapToGrid(Math.random() * h);
      dirs = [1, 7];
      break;
    default: // right
      x = (Math.floor(w / GRID) + 1) * GRID;
      y = snapToGrid(Math.random() * h);
      dirs = [3, 5];
      break;
  }

  const dir = dirs[Math.floor(Math.random() * dirs.length)];
  const color = colors[colorCounter % 4];
  colorCounter++;

  return {
    points: [{ x, y }],
    dir,
    segmentsLeft: randInt(6, 18),
    color,
    headOffscreen: false,
    progress: 0,
  };
}

function isOutsideBounds(p: Point, w: number, h: number): boolean {
  const margin = 2 * GRID;
  return (
    p.x < -margin || p.x > w + margin || p.y < -margin || p.y > h + margin
  );
}

function tryTurn(trace: Trace): void {
  if (trace.segmentsLeft > 0) return;

  // 45° heading change: ±1 step on the 8-way compass (e.g. NE -> N or E).
  const d = trace.dir;
  const candidates = [(d + 1) % 8, (d + 7) % 8];
  trace.dir = candidates[Math.floor(Math.random() * candidates.length)];

  trace.segmentsLeft = randInt(6, 18);
}

function updateTrace(trace: Trace, dt: number, w: number, h: number): void {
  if (trace.headOffscreen) {
    if (trace.points.length > 1) {
      trace.points.shift();
    }
    return;
  }

  trace.progress += SPEED * dt;

  let sl = segStepLength(trace.dir);
  while (trace.progress >= sl && !trace.headOffscreen) {
    trace.progress -= sl;

    const head = trace.points[trace.points.length - 1];
    trace.points.push({
      x: head.x + DIR_DX[trace.dir] * GRID,
      y: head.y + DIR_DY[trace.dir] * GRID,
    });

    trace.segmentsLeft--;
    tryTurn(trace);
    sl = segStepLength(trace.dir);

    if (isOutsideBounds(trace.points[trace.points.length - 1], w, h)) {
      trace.headOffscreen = true;
      trace.progress = 0;
    }
  }
}

function drawTrace(ctx: CanvasRenderingContext2D, trace: Trace): void {
  if (trace.points.length < 1) return;

  const tailPx = TAIL_LEN * GRID;
  const pts = trace.points;

  const drawPts: Point[] = [];

  if (!trace.headOffscreen && trace.progress > 0) {
    const last = pts[pts.length - 1];
    const frac = trace.progress / segStepLength(trace.dir);
    drawPts.push({
      x: last.x + DIR_DX[trace.dir] * GRID * frac,
      y: last.y + DIR_DY[trace.dir] * GRID * frac,
    });
  }

  for (let i = pts.length - 1; i >= 0; i--) {
    drawPts.push(pts[i]);
  }

  if (drawPts.length < 2) return;

  ctx.strokeStyle = trace.color;
  ctx.lineWidth = 1.5;
  ctx.lineCap = "butt";
  ctx.lineJoin = "round";

  let dist = 0;
  for (let i = 0; i < drawPts.length - 1; i++) {
    const a = drawPts[i];
    const b = drawPts[i + 1];
    const segLen = Math.hypot(b.x - a.x, b.y - a.y);

    if (dist >= tailPx) break;

    const aAlpha = Math.pow(Math.max(0, 1 - dist / tailPx), 1.5) * 0.7;
    if (aAlpha <= 0) break;

    const bAlpha =
      Math.pow(Math.max(0, 1 - (dist + segLen) / tailPx), 1.5) * 0.7;

    ctx.globalAlpha = (aAlpha + bAlpha) / 2;
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.stroke();

    dist += segLen;
  }

  ctx.globalAlpha = 1;
}

export function CircuitBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function resize() {
      canvas!.width = canvas!.offsetWidth;
      canvas!.height = canvas!.offsetHeight;
    }

    resize();
    window.addEventListener("resize", resize);

    const colors = readColors();
    const traces: Trace[] = [];
    for (let i = 0; i < MAX_TRACES; i++) {
      traces.push(initTrace(canvas.width, canvas.height, colors));
    }

    let prev = performance.now();
    let rafId: number;

    function frame(now: number) {
      const dt = Math.min((now - prev) / 1000, 0.1);
      prev = now;

      const w = canvas!.width;
      const h = canvas!.height;

      ctx!.clearRect(0, 0, w, h);

      for (let i = 0; i < traces.length; i++) {
        updateTrace(traces[i], dt, w, h);

        if (traces[i].headOffscreen && traces[i].points.length <= 1) {
          traces[i] = initTrace(w, h, readColors());
        }

        drawTrace(ctx!, traces[i]);
      }

      rafId = requestAnimationFrame(frame);
    }

    rafId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
