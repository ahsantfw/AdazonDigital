import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Adazon Digital - Amazon DSP Advertising Agency',
  description: 'Transform your Amazon advertising with Adazon Digital. Expert Amazon DSP management, first-party data strategies, and ROI-driven campaigns.',
  generator: 'v0.dev',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
