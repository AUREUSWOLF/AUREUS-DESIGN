"use client";

import { useEffect, useState, useRef } from "react";
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
      { threshold: 0.1 }
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
        {/* Image container */}
        <div className="relative w-full" style={{ paddingBottom: '75%' }}>
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            className={cn(
              "object-cover transition-transform duration-700",
              isHovered ? "scale-110" : "scale-100"
            )}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
        <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end z-20">
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
              "text-xl lg:text-2xl font-semibold text-foreground mb-2 transition-all duration-500",
              isHovered ? "translate-y-0" : "translate-y-1"
            )}
          >
            {project.title}
          </h3>
          <p
            className={cn(
              "text-sm text-foreground/50 max-w-md transition-all duration-500 line-clamp-2",
              isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            {project.description}
          </p>

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

export function AllProjectsContent() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      {/* Fixed header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 lg:h-20 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-foreground/50 hover:text-foreground transition-colors duration-300 group"
          >
            <svg 
              className="w-4 h-4 transition-transform group-hover:-translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back
          </Link>
          <a
            href="mailto:goldenwolfchannel@gmail.com"
            className="px-5 py-2 bg-foreground text-background text-sm rounded-full hover:bg-foreground/90 transition-colors"
          >
            Contact Me
          </a>
        </nav>
      </header>

      {/* Page content */}
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16 lg:mb-24">
            <span
              className={cn(
                "inline-block text-sm uppercase tracking-widest text-accent mb-4 transition-all duration-700",
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              Portfolio
            </span>
            <h1
              className={cn(
                "text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 transition-all duration-700 delay-100 text-balance",
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              All Projects
            </h1>
            <p
              className={cn(
                "text-lg md:text-xl text-foreground/50 max-w-2xl transition-all duration-700 delay-200 text-pretty",
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              A collection of photorealistic renders and product visualizations crafted with precision and passion.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 lg:px-8 border-t border-border/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <p className="text-sm text-foreground/30">
            {new Date().getFullYear()} All rights reserved.
          </p>
          <Link href="/" className="text-sm text-foreground/50 hover:text-foreground transition-colors">
            Back to Home
          </Link>
        </div>
      </footer>
    </main>
  );
}
