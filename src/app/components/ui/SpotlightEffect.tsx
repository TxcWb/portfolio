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
      // Use setProperty for high-performance updates without React state
      container.style.setProperty('--mouse-x', `${e.clientX}px`);
      container.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    // Initial position
    container.style.setProperty('--mouse-x', '50%');
    container.style.setProperty('--mouse-y', '50%');

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#030303]"
      style={{
        // Define base variables for the spotlight
        // @ts-ignore - custom properties
        '--spotlight-color': 'rgba(120, 119, 198, 0.15)',
        '--grid-color': 'rgba(255, 255, 255, 0.05)',
        '--grid-size': '40px',
      } as React.CSSProperties}
      aria-hidden="true"
    >
      {/* 
        The Grid Layer 
        Uses linear-gradients to create a sharp, repeating grid.
      */}
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

      {/* 
        The Spotlight Layer 
        Uses a radial-gradient that follows the --mouse-x and --mouse-y variables.
        The 'mix-blend-mode: screen' or similar can be used if needed, but 
        simple transparency works best for readability.
      */}
      <div 
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(
            circle 400px at var(--mouse-x) var(--mouse-y), 
            var(--spotlight-color), 
            transparent 80%
          )`,
        }}
      />

      {/* 
        The Masked Grid Layer
        This layer only shows the grid where the spotlight is, 
        creating the "illuminating the grid" effect.
      */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: 'var(--grid-size) var(--grid-size)',
          maskImage: `radial-gradient(
            circle 300px at var(--mouse-x) var(--mouse-y), 
            black 0%, 
            transparent 100%
          )`,
          WebkitMaskImage: `radial-gradient(
            circle 300px at var(--mouse-x) var(--mouse-y), 
            black 0%, 
            transparent 100%
          )`,
        }}
      />

      {/* Vignette for depth */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)]" 
      />
    </div>
  );
};

