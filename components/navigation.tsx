"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Small squared logo placeholder for navigation - replace SVG content with your logo
function LogoMark() {
  return (
    <svg 
      width="36" 
      height="36" 
      viewBox="0 0 36 36" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="w-9 h-9"
    >
      {/* Placeholder squircle shape - replace with your logo */}
      <rect 
        x="0" 
        y="0" 
        width="36" 
        height="36" 
        rx="8" 
        className="fill-foreground"
      />
      {/* Placeholder icon - replace with your logo */}
      <path 
        d="M18 10L26 14V22L18 26L10 22V14L18 10Z" 
        className="stroke-background" 
        strokeWidth="1.5" 
        fill="none"
      />
      <path 
        d="M18 10V26M10 14L26 22M26 14L10 22" 
        className="stroke-background" 
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#work", label: "Work" },
    { href: "#capabilities", label: "Capabilities" },
    { href: "#tools", label: "Tools" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center">
              <LogoMark />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Button - always visible */}
            <div className="flex items-center gap-3">
              <Button
                asChild
                size="sm"
                className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-5 md:px-6 text-xs md:text-sm"
              >
                <a href="#contact">Contact Me</a>
              </Button>

              {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 relative flex flex-col justify-center items-center">
                <span
                  className={cn(
                    "absolute w-5 h-[1.5px] bg-foreground transition-all duration-300 ease-out",
                    isMobileMenuOpen ? "rotate-45" : "-translate-y-[5px]"
                  )}
                />
                <span
                  className={cn(
                    "absolute w-5 h-[1.5px] bg-foreground transition-all duration-300 ease-out",
                    isMobileMenuOpen && "opacity-0 scale-0"
                  )}
                />
                <span
                  className={cn(
                    "absolute w-5 h-[1.5px] bg-foreground transition-all duration-300 ease-out",
                    isMobileMenuOpen ? "-rotate-45" : "translate-y-[5px]"
                  )}
                />
              </div>
            </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-500",
          isMobileMenuOpen ? "visible" : "invisible"
        )}
      >
        {/* Backdrop with blur */}
        <div
          className={cn(
            "absolute inset-0 bg-background/90 backdrop-blur-xl transition-opacity duration-500",
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu content */}
        <div
          className={cn(
            "absolute inset-x-0 top-16 p-6 transition-all duration-500",
            isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          )}
        >
          <div className="flex flex-col gap-6">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-medium text-foreground hover:text-muted-foreground transition-colors"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-6 border-t border-border/50">
              <Button
                asChild
                size="lg"
                className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-full"
              >
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Get in Touch
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
