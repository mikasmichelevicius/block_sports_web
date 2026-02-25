"use client";

import { useState, useEffect } from "react";

interface SlideInProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  /** Delay before animation starts in ms. */
  delay?: number;
  duration?: number;
  /** Starting transform value. Defaults to "translateX(-20%)". */
  from?: string;
  /** Starting opacity (0–1). Defaults to 0. */
  initialOpacity?: number;
}

export default function SlideIn({
  children,
  className,
  style,
  delay = 200,
  duration = 700,
  from = "translateX(-20%)",
  initialOpacity = 0,
}: SlideInProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(id);
  }, [delay]);

  return (
    <div
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : initialOpacity,
        transform: visible ? "none" : from,
        transition: visible
          ? `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`
          : "none",
      }}
    >
      {children}
    </div>
  );
}
