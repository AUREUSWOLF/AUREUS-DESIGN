"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const capabilities = [
  {
    id: 1,
    title: "Product Visualization",
    description: "Photorealistic renders that make products irresistible. Perfect for e-commerce, marketing, and brand campaigns.",
    tags: ["E-commerce", "Marketing", "Packaging"],
  },
  {
    id: 2,
    title: "Hard Surface Modeling",
    description: "Precision-engineered 3D models for industrial design, automotive, and technical applications.",
    tags: ["CAD", "Industrial", "Mechanical"],
  },
  {
    id: 3,
    title: "Architectural Visualization",
    description: "Immersive interior and exterior renders that bring architectural concepts to life before they are built.",
    tags: ["Interior", "Exterior", "Real Estate"],
  },
  {
    id: 4,
    title: "Motion & Animation",
    description: "Dynamic product reveals and explainer animations that captivate audiences and drive engagement.",
    tags: ["Product Reveal", "Explainer", "Social"],
  },
];

function CapabilityCard({ capability, index }: { capability: typeof capabilities[0]; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 150);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      onClick={() => setIsExpanded(!isExpanded)}
      className={cn(
        "group border border-border rounded-2xl p-6 lg:p-8 cursor-pointer transition-all duration-500 hover:border-accent/50 hover:bg-secondary/30",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <span className="text-4xl font-light text-muted-foreground/30">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div
          className={cn(
            "w-8 h-8 rounded-full border border-border flex items-center justify-center transition-transform duration-300",
            isExpanded && "rotate-45"
          )}
        >
          <svg className="w-4 h-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </div>

      <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-3">
        {capability.title}
      </h3>

      <div
        className={cn(
          "overflow-hidden transition-all duration-500",
          isExpanded ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <p className="text-muted-foreground mb-4 text-pretty">
          {capability.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {capability.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CapabilitiesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="capabilities" ref={sectionRef} className="py-24 lg:py-32 px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16 lg:mb-24 max-w-2xl">
          <span
            className={cn(
              "inline-block text-sm uppercase tracking-widest text-accent mb-4 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Capabilities
          </span>
          <h2
            className={cn(
              "text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground transition-all duration-700 delay-100 text-balance",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            From concept to final render, I handle it all.
          </h2>
        </div>

        {/* Capabilities grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((capability, index) => (
            <CapabilityCard key={capability.id} capability={capability} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
