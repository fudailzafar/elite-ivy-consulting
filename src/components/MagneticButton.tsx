"use client";

import { useRef, useState } from "react";
import Link from "next/link";

interface MagneticButtonProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  style?: React.CSSProperties;
  target?: string;
  rel?: string;
}

export default function MagneticButton({ children, href, className = "", style = {}, target, rel }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    
    // Max 6px pull range as requested in the plan
    const maxPull = 6;
    const pullX = (x / (width / 2)) * maxPull;
    const pullY = (y / (height / 2)) * maxPull;
    
    setPosition({ x: pullX, y: pullY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const isExternal = href.startsWith("http") || href.startsWith("https") || href.startsWith("tel:") || href.startsWith("mailto:");

  const sharedProps = {
    ref: buttonRef,
    className: className,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    style: {
      ...style,
      transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      transition: position.x === 0 && position.y === 0 
        ? "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)" 
        : "transform 0.1s linear",
      display: "inline-flex",
    },
  };

  if (isExternal) {
    return (
      <a href={href} target={target} rel={rel} {...sharedProps}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} {...sharedProps}>
      {children}
    </Link>
  );
}
