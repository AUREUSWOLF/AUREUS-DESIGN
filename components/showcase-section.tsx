"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { projects } from "@/lib/projects";

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100);
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
      className={cn(
        "transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      )}
    >
      <Link
        href={`/projects/${project.slug}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative block rounded-2xl overflow-hidden cursor-pointer"
      >
        {/* Image container with fixed aspect ratio */}
        <div className="relative w-full" style={{ paddingBottom: '125%' }}>
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            className={cn(
              "object-cover transition-transform duration-700",
              isHovered ? "scale-110" : "scale-100"
            )}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>

        {/* Overlay gradient */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent transition-opacity duration-500 z-10",
            isHovered ? "opacity-90" : "opacity-60"
          )}
        />

        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
          <span
            className={cn(
              "text-xs uppercase tracking-widest text-accent mb-2 transition-all duration-500",
              isHovered ? "opacity-100 translate-y-0" : "opacity-70 translate-y-2"
            )}
          >
            {project.category}
          </span>
          <h3
            className={cn(
              "text-xl font-semibold text-foreground transition-all duration-500",
              isHovered ? "translate-y-0" : "translate-y-1"
            )}
          >
            {project.title}
          </h3>

          {/* View button */}
          <div
            className={cn(
              "mt-4 transition-all duration-500",
              isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <span className="inline-flex items-center gap-2 text-sm text-foreground">
              View Project
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export function ShowcaseSection() {
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
    <section id="work" ref={sectionRef} className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16 lg:mb-24">
          <span
            className={cn(
              "inline-block text-sm uppercase tracking-widest text-accent mb-4 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Selected Work
          </span>
          <h2
            className={cn(
              "text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground max-w-2xl transition-all duration-700 delay-100 text-balance",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            Every render tells a story. Here are some of mine.
          </h2>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View all link */}
        <div
          className={cn(
            "mt-16 text-center transition-all duration-700 delay-500",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
          >
            View All Projects
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
