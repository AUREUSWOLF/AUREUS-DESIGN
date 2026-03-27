"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const stats = [
  { value: "6+", label: "Years Experience" },
  { value: "200+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
];

const tools = [
  { name: "Blender", description: "Primary 3D suite" },
  { name: "Plasticity", description: "CAD modeling" },
  { name: "Photoshop", description: "Post-production" },
  { name: "DaVinci Resolve", description: "Video & color" },
];

export function ToolsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="tools" ref={sectionRef} className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Stats banner */}
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 pb-24 border-b border-border transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                "text-center md:text-left transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl lg:text-6xl font-semibold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tools section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span
              className={cn(
                "inline-block text-sm uppercase tracking-widest text-accent mb-4 transition-all duration-700 delay-200",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              Toolkit
            </span>
            <h2
              className={cn(
                "text-3xl md:text-4xl font-semibold text-foreground mb-6 transition-all duration-700 delay-300 text-balance",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              Industry-standard tools, exceptional results.
            </h2>
            <p
              className={cn(
                "text-muted-foreground text-lg transition-all duration-700 delay-400 text-pretty",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              My workflow combines the power of open-source 3D software with
              professional-grade post-production tools for results that rival
              any major studio.
            </p>
          </div>

          <div className="space-y-4">
            {tools.map((tool, index) => (
              <div
                key={tool.name}
                className={cn(
                  "flex items-center justify-between p-6 rounded-xl border border-border hover:border-accent/50 hover:bg-secondary/30 transition-all duration-500",
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
                )}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div>
                  <h3 className="text-lg font-medium text-foreground">{tool.name}</h3>
                  <p className="text-sm text-muted-foreground">{tool.description}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
