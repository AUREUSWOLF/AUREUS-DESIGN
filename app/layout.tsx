import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: '3D Artist & Visualization Specialist',
  description: 'Senior 3D generalist specializing in photorealistic rendering, product visualization, and hard surface modeling. 6+ years of experience in Blender, Photoshop, DaVinci Resolve, and Plasticity.',
  generator: 'v0.app',
  keywords: ['3D Artist', 'Blender', 'Product Visualization', 'Photorealistic Rendering', 'Hard Surface Modeling'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a12',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
