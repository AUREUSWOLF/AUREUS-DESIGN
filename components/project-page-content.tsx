"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/projects";

function BackButton() {
  return (
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
  );
}

export function ProjectPageContent({ project }: { project: Project }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      {/* Fixed header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 lg:h-20 flex items-center justify-between">
          <BackButton />
          <Link
            href="#contact"
            className="px-5 py-2 bg-foreground text-background text-sm rounded-full hover:bg-foreground/90 transition-colors"
          >
            Contact Me
          </Link>
        </nav>
      </header>

      {/* Hero section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Category */}
          <span
            className={cn(
              "inline-block text-sm uppercase tracking-widest text-accent mb-4 transition-all duration-700",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            {project.category}
          </span>

          {/* Title */}
          <h1
            className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 transition-all duration-700 delay-100 text-balance",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            {project.title}
          </h1>

          {/* Description */}
          <p
            className={cn(
              "text-lg md:text-xl text-foreground/50 max-w-2xl mb-12 transition-all duration-700 delay-200 text-pretty",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            {project.description}
          </p>

          {/* Project details */}
          <div
            className={cn(
              "flex flex-wrap gap-8 lg:gap-16 transition-all duration-700 delay-300",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <div>
              <span className="block text-xs uppercase tracking-widest text-foreground/30 mb-1">Client</span>
              <span className="text-foreground">{project.details.client}</span>
            </div>
            <div>
              <span className="block text-xs uppercase tracking-widest text-foreground/30 mb-1">Year</span>
              <span className="text-foreground">{project.details.year}</span>
            </div>
            <div>
              <span className="block text-xs uppercase tracking-widest text-foreground/30 mb-1">Software</span>
              <span className="text-foreground">{project.details.software}</span>
            </div>
            <div>
              <span className="block text-xs uppercase tracking-widest text-foreground/30 mb-1">Type</span>
              <span className="text-foreground">{project.details.type}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section
        className={cn(
          "px-6 lg:px-8 transition-all duration-1000 delay-400",
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}
      >
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full rounded-2xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 lg:py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.images.map((image, index) => (
              <div
                key={index}
                className={cn(
                  "relative w-full rounded-2xl overflow-hidden transition-all duration-700",
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
                  index === 0 && "md:col-span-2"
                )}
                style={{ 
                  paddingBottom: index === 0 ? '56.25%' : '75%',
                  transitionDelay: `${500 + index * 100}ms`
                }}
              >
                <Image
                  src={image}
                  alt={`${project.title} render ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section id="contact" className="py-24 lg:py-32 px-6 lg:px-8 border-t border-border/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 text-balance">
            Like what you see?
          </h2>
          <p className="text-lg text-foreground/50 mb-10 text-pretty">
            Let&apos;s create something amazing together. Get in touch to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:goldenwolfchannel@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-all duration-300"
            >
              Get in Touch
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 border border-border rounded-full text-foreground font-medium hover:bg-secondary transition-all duration-300"
            >
              View More Projects
            </Link>
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
