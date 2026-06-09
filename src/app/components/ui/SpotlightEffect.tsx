import React, { useEffect, useRef } from 'react';

/**
 * SpotlightEffect Component
 * 
 * A high-performance, Hyprland-inspired background component.
 * Features:
 * - Sharp, subtle dark-themed grid using CSS linear-gradients.
 * - Dynamic spotlight effect using CSS Custom Properties and vanilla JS.
 * - Zero React re-renders on mouse movement for maximum performance.
 * - Responsive and blending-aware for text readability.
 */
export const SpotlightEffect: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      container.style.setProperty('--mouse-x', `${e.clientX}px`);
      container.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    // Initial position at center
    container.style.setProperty('--mouse-x', '50%');
    container.style.setProperty('--mouse-y', '50%');

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#030303]"
      style={{
        // @ts-ignore
        '--spotlight-color': 'rgba(120, 119, 198, 0.2)',
        '--grid-color': 'rgba(255, 255, 255, 0.07)',
        '--grid-size': '50px',
      } as React.CSSProperties}
      aria-hidden="true"
    >
      {/* 1. Base Dark Background (Redundant but safe) */}
      <div className="absolute inset-0 bg-[#030303]" />

      {/* 2. Base Grid Layer - Slightly more visible */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--grid-color) 1px, transparent 1px),
            linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)
          `,
          backgroundSize: 'var(--grid-size) var(--grid-size)',
        }}
      />

      {/* 3. Primary Spotlight Glow - Larger and slightly more opaque */}
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(
            circle 500px at var(--mouse-x) var(--mouse-y), 
            var(--spotlight-color), 
            transparent 80%
          )`,
        }}
      />

      {/* 4. Illuminated Grid Layer - This is the "Hyprland" punch */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.25) 1px, transparent 1px)
          `,
          backgroundSize: 'var(--grid-size) var(--grid-size)',
          maskImage: `radial-gradient(
            circle 350px at var(--mouse-x) var(--mouse-y), 
            black 0%, 
            transparent 100%
          )`,
          WebkitMaskImage: `radial-gradient(
            circle 350px at var(--mouse-x) var(--mouse-y), 
            black 0%, 
            transparent 100%
          )`,
        }}
      />

      {/* 5. Depth/Vignette */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" 
      />
    </div>
  );
};

