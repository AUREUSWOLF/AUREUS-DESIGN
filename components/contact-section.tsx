"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const email = "goldenwolfchannel@gmail.com";

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

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-32 lg:py-48 px-6 lg:px-8 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Availability badge */}
        <div
          className={cn(
            "inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 backdrop-blur-sm mb-8 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-sm text-muted-foreground">
            Currently accepting new projects
          </span>
        </div>

        {/* Main headline */}
        <h2
          className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 transition-all duration-700 delay-100 text-balance",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          Let&apos;s create something extraordinary together.
        </h2>

        {/* Subtext */}
        <p
          className={cn(
            "text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 transition-all duration-700 delay-200 text-pretty",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          Have a project in mind? I&apos;d love to hear about it. Drop me a line and
          let&apos;s discuss how we can bring your vision to life.
        </p>

        {/* CTA Buttons */}
        <div
          className={cn(
            "flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-700 delay-300",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <Button
            asChild
            size="lg"
            className="px-8 py-6 text-lg bg-foreground text-background hover:bg-foreground/90 rounded-full"
          >
            <a href={`mailto:${email}`}>
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send an Email
            </a>
          </Button>

          <Button
            onClick={copyEmail}
            variant="outline"
            size="lg"
            className="px-8 py-6 text-lg rounded-full border-border hover:bg-secondary"
          >
            {isCopied ? (
              <>
                <svg className="w-5 h-5 mr-2 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Copied!
              </>
            ) : (
              <>
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy Email
              </>
            )}
          </Button>
        </div>

        {/* Email display */}
        <p
          className={cn(
            "text-muted-foreground transition-all duration-700 delay-400",
            isVisible ? "opacity-100" : "opacity-0"
          )}
        >
          {email}
        </p>
      </div>
    </section>
  );
}
