"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { useDrag } from "@use-gesture/react";
import { useRef } from "react";

const MAX_VISIBILITY = 3;

export default function Carousel({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [active, setActive] = useState(0);
  const count = React.Children.count(children);
  const hasSwipedRef = useRef(false);

  // inside your component
  const containerRef = useRef(null);
  const bind = useDrag(
    ({ down, movement: [mx], direction: [xDir], cancel, last }) => {
      if (!hasSwipedRef.current && Math.abs(mx) > 50) {
        if (xDir > 0 && active > 0) {
          setActive((i) => i - 1);
        } else if (xDir < 0 && active < count - 1) {
          setActive((i) => i + 1);
        }

        hasSwipedRef.current = true;
        cancel?.(); // optional chaining for safety
      }

      if (last) {
        hasSwipedRef.current = false;
      }
    },
    {
      axis: "x",
      filterTaps: true,
      pointer: { touch: true },
    }
  );

  return (
    <div ref={containerRef} {...bind()} className="carousel">
      {active > 0 && (
        <button className="nav left" onClick={() => setActive((i) => i - 1)}>
          <ChevronLeft className="absolute left-1" />
        </button>
      )}
      {React.Children.map(children, (child, i) => (
        <div
          className="card-container p-8"
          style={
            {
              "--active": i === active ? 1 : 0,
              "--offset": (active - i) / 3,
              "--direction": Math.sign(active - i),
              "--abs-offset": Math.abs(active - i) / 3,
              pointerEvents: active === i ? "auto" : "none",
              opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
              display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
            } as React.CSSProperties & Record<string, string | number>
          }
        >
          {child}
        </div>
      ))}
      {active < count - 1 && (
        <button className="nav right" onClick={() => setActive((i) => i + 1)}>
          <ChevronRight className="absolute right-1" />
        </button>
      )}
    </div>
  );
}
