"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

// Large hero logo placeholder - replace SVG content with your logo
function HeroLogo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      {/* Scalable SVG placeholder - replace with your logo */}
      <svg 
        viewBox="0 0 120 120" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44"
      >
        {/* Placeholder squircle shape */}
        <rect 
          x="0" 
          y="0" 
          width="120" 
          height="120" 
          rx="28" 
          className="fill-foreground"
        />
        {/* Placeholder 3D cube icon - replace with your logo */}
        <path 
          d="M60 30L90 45V75L60 90L30 75V45L60 30Z" 
          className="stroke-background" 
          strokeWidth="3" 
          fill="none"
        />
        <path 
          d="M60 30V90M30 45L90 75M90 45L30 75" 
          className="stroke-background" 
          strokeWidth="3"
        />
      </svg>
    </div>
  );
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };

    const container = containerRef.current;
    container?.addEventListener("mousemove", handleMouseMove);
    return () => container?.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          background: `
            radial-gradient(
              ellipse 80% 50% at ${mousePosition.x * 100}% ${mousePosition.y * 100}%,
              rgba(56, 189, 248, 0.08) 0%,
              transparent 50%
            ),
            radial-gradient(
              ellipse 60% 40% at ${100 - mousePosition.x * 100}% ${100 - mousePosition.y * 100}%,
              rgba(139, 92, 246, 0.05) 0%,
              transparent 50%
            )
          `,
        }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Content - vertically centered */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center">
        {/* Big Logo - centered */}
        <HeroLogo 
          className={cn(
            "mb-12 transition-all duration-1000",
            isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
          )}
        />

        {/* Eyebrow */}
        <div
          className={cn(
            "inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-secondary/50 backdrop-blur-sm mb-8 transition-all duration-1000 delay-100",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-sm text-muted-foreground">
            Available for projects
          </span>
        </div>

        {/* Main headline */}
        <h1
          className={cn(
            "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground leading-[1.1] mb-6 transition-all duration-1000 delay-200",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <span className="block text-balance">Photorealistic 3D</span>
          <span className="block text-balance">
            <span className="text-muted-foreground">that sells</span>
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className={cn(
            "text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 transition-all duration-1000 delay-300 text-pretty",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          6+ years crafting product visualizations and hard surface models that
          make brands impossible to ignore.
        </p>

        {/* Single CTA Button */}
        <div
          className={cn(
            "flex items-center justify-center transition-all duration-1000 delay-500",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-all duration-300"
          >
            View Work
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div
          className={cn(
            "flex flex-col items-center gap-2 transition-all duration-1000 delay-700",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
        >
          <span className="text-xs text-muted-foreground uppercase tracking-widest">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent" />
        </div>
      </div>
    </section>
  );
}
