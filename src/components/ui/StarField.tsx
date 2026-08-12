"use client";

import { useEffect, useRef, useCallback } from "react";

interface Star {
  x: number;
  y: number;
  radius: number;
  baseAlpha: number;
  currentAlpha: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  glowRadius: number;
  isBright: boolean;
  driftSpeedX: number;
  driftSpeedY: number;
}

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animRef = useRef<number>(0);

  const init = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const w = window.innerWidth;
    const h = document.documentElement.scrollHeight;
    const dpr = window.devicePixelRatio || 1;

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;

    const ctx = canvas.getContext("2d");
    if (ctx) ctx.scale(dpr, dpr);

    // Denser starfield
    const count = Math.floor((w * h) / 8000);
    const clamped = Math.min(Math.max(count, 80), 200);

    starsRef.current = Array.from({ length: clamped }, () => {
      const isBright = Math.random() < 0.15; // 15% are bright
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        radius: isBright
          ? Math.random() * 1.2 + 0.8   
          : Math.random() * 0.7 + 0.25, 
        baseAlpha: isBright
          ? Math.random() * 0.35 + 0.45 
          : Math.random() * 0.2 + 0.15, 
        currentAlpha: 0,
        twinkleSpeed: Math.random() * 0.0006 + 0.0002, 
        twinkleOffset: Math.random() * Math.PI * 2,
        glowRadius: isBright ? Math.random() * 4 + 3 : Math.random() * 2 + 1,
        isBright,
        driftSpeedX: (Math.random() - 0.5) * 0.05,
        driftSpeedY: Math.random() * 0.08 + 0.02, // slow upward drift
      };
    });
  }, []);

  const draw = useCallback((time: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = window.innerWidth;
    const h = document.documentElement.scrollHeight;
    ctx.clearRect(0, 0, w, h);

    // Draw stars
    for (const star of starsRef.current) {
      star.x += star.driftSpeedX;
      star.y -= star.driftSpeedY;
      
      // Wrap around
      if (star.x < 0) star.x = w;
      if (star.x > w) star.x = 0;
      if (star.y < 0) star.y = h;

      const sine = Math.sin(time * star.twinkleSpeed + star.twinkleOffset);
      const multiplier = star.isBright
        ? 0.5 + 0.5 * ((sine + 1) / 2)
        : 0.6 + 0.4 * ((sine + 1) / 2);
      const alpha = star.baseAlpha * multiplier;

      if (star.isBright) {
        const gradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.glowRadius
        );
        gradient.addColorStop(0, `rgba(200, 220, 255, ${alpha})`);
        gradient.addColorStop(1, `rgba(200, 220, 255, 0)`);
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(220, 230, 255, ${alpha})`;
      ctx.fill();
    }

    // Draw subtle constellation lines between bright stars
    const brightStars = starsRef.current.filter(s => s.isBright);
    ctx.lineWidth = 0.4;
    for (let i = 0; i < brightStars.length; i++) {
      for (let j = i + 1; j < brightStars.length; j++) {
        const dx = brightStars[i].x - brightStars[j].x;
        const dy = brightStars[i].y - brightStars[j].y;
        const distSq = dx * dx + dy * dy;
        const maxDist = 140; // Max connection distance
        
        if (distSq < maxDist * maxDist) {
          const dist = Math.sqrt(distSq);
          const alpha = (1 - dist / maxDist) * 0.12; // fade out with distance
          ctx.strokeStyle = `rgba(127, 155, 199, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(brightStars[i].x, brightStars[i].y);
          ctx.lineTo(brightStars[j].x, brightStars[j].y);
          ctx.stroke();
        }
      }
    }

    animRef.current = requestAnimationFrame(draw);
  }, []);

  useEffect(() => {
    init();
    animRef.current = requestAnimationFrame(draw);

    const handleResize = () => {
      init();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [init, draw]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
