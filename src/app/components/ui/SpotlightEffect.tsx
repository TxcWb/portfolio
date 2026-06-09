import React, { useEffect, useRef, useState, useMemo } from 'react';

/**
 * SpotlightEffect Component
 * 
 * Provides a "flashlight" effect that follows the cursor.
 * Features:
 * - Smooth easing (lag) for a premium feel.
 * - Performant animations using requestAnimationFrame.
 * - Subtle grid pattern reveal.
 * - Graceful handling of mobile (effect disabled).
 */
export const SpotlightEffect: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const requestRef = useRef<number>(null);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Track mouse position
  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  // Animate spotlight with easing
  const animate = () => {
    setSpotlightPos((prev) => {
      const dx = mousePos.x - prev.x;
      const dy = mousePos.y - prev.y;
      
      // Easing factor (lower = smoother/slower)
      const easing = 0.08;

      return {
        x: prev.x + dx * easing,
        y: prev.y + dy * easing,
      };
    });
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (isMobile) return;
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [mousePos, isMobile]);

  if (isMobile) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-background"
      aria-hidden="true"
    >
      {/* Primary Spotlight Glow */}
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          background: `radial-gradient(circle 450px at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(120, 119, 198, 0.15), transparent 80%)`,
        }}
      />

      {/* Subtle Grid Reveal */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `radial-gradient(circle 500px at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(255, 255, 255, 0.1), transparent 100%), 
                            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
          backgroundSize: '100% 100%, 40px 40px, 40px 40px',
          maskImage: `radial-gradient(circle 400px at ${spotlightPos.x}px ${spotlightPos.y}px, black, transparent)`,
          WebkitMaskImage: `radial-gradient(circle 400px at ${spotlightPos.x}px ${spotlightPos.y}px, black, transparent)`,
        }}
      />
      
      {/* Vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />
    </div>
  );
};
