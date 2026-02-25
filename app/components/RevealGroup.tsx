"use client";

import { useState, useRef, useEffect } from "react";

interface RevealOverlayProps {
  /** Background color of the overlay panels. */
  color?: string;
  duration?: number;
  delay?: number;
}

/**
 * Place inside a positioned container with overflow-hidden.
 * Renders two overlay panels that cover the container, then
 * slide apart (top up, bottom down) once all sibling images load.
 */
export default function RevealOverlay({
  color = "#fefcf8",
  duration = 700,
  delay = 200,
}: RevealOverlayProps) {
  const [ready, setReady] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const triggeredRef = useRef(false);

  useEffect(() => {
    const panel = ref.current;
    const container = panel?.parentElement;
    if (!container) return;

    const imgs = container.querySelectorAll("img");

    const trigger = () => {
      if (!triggeredRef.current) {
        triggeredRef.current = true;
        setTimeout(() => setReady(true), delay);
      }
    };

    if (imgs.length === 0) {
      trigger();
      return;
    }

    const checkAll = () => {
      const allDone = Array.from(imgs).every(
        (img) => img.complete && img.naturalWidth > 0,
      );
      if (allDone) trigger();
    };

    checkAll();

    const handler = () => checkAll();
    imgs.forEach((img) => img.addEventListener("load", handler));
    return () => {
      imgs.forEach((img) => img.removeEventListener("load", handler));
    };
  }, [delay]);

  const panelBase: React.CSSProperties = {
    position: "absolute",
    left: 0,
    right: 0,
    height: "51%",
    transition: ready
      ? `transform ${duration}ms ease`
      : "none",
    zIndex: 2,
    pointerEvents: "none",
  };

  return (
    <>
      {/* Fade tint — covers entire container, fades to transparent */}
      <div
        ref={ref}
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: color,
          opacity: ready ? 0 : 1,
          transition: ready ? `opacity ${duration * 1.8}ms ease` : "none",
          zIndex: 3,
          pointerEvents: "none",
        }}
      />
      {/* Top panel — solid at top, fades to transparent at bottom edge */}
      <div
        style={{
          ...panelBase,
          top: 0,
          background: `linear-gradient(to bottom, ${color} 96%, transparent)`,
          transform: ready ? "translateY(-100%)" : "translateY(0)",
        }}
      />
      {/* Bottom panel — solid at bottom, fades to transparent at top edge */}
      <div
        style={{
          ...panelBase,
          bottom: 0,
          background: `linear-gradient(to top, ${color} 96%, transparent)`,
          transform: ready ? "translateY(100%)" : "translateY(0)",
        }}
      />
    </>
  );
}
