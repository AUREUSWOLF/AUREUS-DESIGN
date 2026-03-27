"use client";

const email = "goldenwolfchannel@gmail.com";

// X (Twitter) logo icon
function XIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// QR Code placeholder - desktop only
function QRCodePlaceholder() {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="w-20 h-20"
    >
      {/* Outer border */}
      <rect x="4" y="4" width="92" height="92" rx="8" className="stroke-foreground/20" strokeWidth="2" fill="none" />
      
      {/* Top-left positioning square */}
      <rect x="12" y="12" width="24" height="24" rx="2" className="fill-foreground" />
      <rect x="16" y="16" width="16" height="16" rx="1" className="fill-background" />
      <rect x="20" y="20" width="8" height="8" className="fill-foreground" />
      
      {/* Top-right positioning square */}
      <rect x="64" y="12" width="24" height="24" rx="2" className="fill-foreground" />
      <rect x="68" y="16" width="16" height="16" rx="1" className="fill-background" />
      <rect x="72" y="20" width="8" height="8" className="fill-foreground" />
      
      {/* Bottom-left positioning square */}
      <rect x="12" y="64" width="24" height="24" rx="2" className="fill-foreground" />
      <rect x="16" y="68" width="16" height="16" rx="1" className="fill-background" />
      <rect x="20" y="72" width="8" height="8" className="fill-foreground" />
      
      {/* Placeholder pattern dots */}
      <rect x="44" y="12" width="6" height="6" className="fill-foreground/30" />
      <rect x="52" y="20" width="6" height="6" className="fill-foreground/30" />
      <rect x="44" y="28" width="6" height="6" className="fill-foreground/30" />
      
      <rect x="12" y="44" width="6" height="6" className="fill-foreground/30" />
      <rect x="20" y="52" width="6" height="6" className="fill-foreground/30" />
      <rect x="28" y="44" width="6" height="6" className="fill-foreground/30" />
      
      <rect x="44" y="44" width="12" height="12" rx="2" className="fill-foreground/40" />
      
      <rect x="64" y="44" width="6" height="6" className="fill-foreground/30" />
      <rect x="72" y="52" width="6" height="6" className="fill-foreground/30" />
      <rect x="80" y="44" width="6" height="6" className="fill-foreground/30" />
      
      <rect x="44" y="64" width="6" height="6" className="fill-foreground/30" />
      <rect x="52" y="72" width="6" height="6" className="fill-foreground/30" />
      <rect x="44" y="80" width="6" height="6" className="fill-foreground/30" />
      
      <rect x="64" y="64" width="6" height="6" className="fill-foreground/30" />
      <rect x="72" y="72" width="6" height="6" className="fill-foreground/30" />
      <rect x="80" y="80" width="6" height="6" className="fill-foreground/30" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="py-16 lg:py-20 px-8 lg:px-16 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-8">
          {/* Left side - Email and X link */}
          <div className="flex flex-col items-center lg:items-start gap-6">
            {/* Email */}
            <a 
              href={`mailto:${email}`}
              className="text-foreground/80 hover:text-foreground transition-colors duration-300 text-sm"
            >
              {email}
            </a>
            
            {/* X (Twitter) link */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-foreground transition-colors duration-300"
              aria-label="Follow on X"
            >
              <XIcon className="w-5 h-5" />
            </a>
          </div>

          {/* Center - QR Code (desktop only) */}
          <div className="hidden lg:flex flex-col items-center gap-3">
            <QRCodePlaceholder />
            <span className="text-xs text-foreground/30">Scan to connect</span>
          </div>

          {/* Right side - Copyright */}
          <div className="flex flex-col items-center lg:items-end gap-4">
            <p className="text-sm text-foreground/50">
              {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
