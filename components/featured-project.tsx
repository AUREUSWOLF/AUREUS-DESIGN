"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function FeaturedProject() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;
      
      // Calculate progress from when section enters view to when it leaves
      const startPoint = windowHeight;
      const endPoint = -sectionHeight;
      const currentPosition = rect.top;
      
      const progress = Math.max(0, Math.min(1, (startPoint - currentPosition) / (startPoint - endPoint)));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Transform values based on scroll
  const imageScale = 0.8 + scrollProgress * 0.2;
  const imageOpacity = 0.3 + scrollProgress * 0.7;
  const textY = 50 - scrollProgress * 50;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[150vh] flex items-center justify-center overflow-hidden"
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background image with parallax */}
        <div
          className="absolute inset-0 transition-transform duration-100"
          style={{
            transform: `scale(${imageScale})`,
            opacity: imageOpacity,
          }}
        >
          <Image
            src="/renders/project-2.jpg"
            alt="Featured automotive render"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/40" />
        </div>

        {/* Content */}
        <div
          className="relative z-10 max-w-4xl mx-auto px-6 text-center"
          style={{
            transform: `translateY(${textY}px)`,
            opacity: Math.min(1, scrollProgress * 2),
          }}
        >
          <span className="inline-block text-sm uppercase tracking-widest text-accent mb-6">
            Featured Project
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 text-balance">
            Where Engineering Meets Art
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty">
            Automotive CGI that captures every curve, reflection, and material with
            obsessive attention to detail.
          </p>
          <Link
            href="/projects/automotive-cgi"
            className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-all duration-300"
          >
            View Project
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
