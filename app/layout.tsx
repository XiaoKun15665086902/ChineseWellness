import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'ChineseWellness — Ancient Wisdom for Modern Life',
    template: '%s | ChineseWellness',
  },
  description:
    'Discover time-tested Chinese wellness traditions — TCM, acupressure, herbal remedies, qi gong, and mindful living practices for modern health.',
  keywords: ['Chinese wellness', 'TCM', 'traditional Chinese medicine', 'herbal remedies', 'acupressure', 'qi gong'],
  authors: [{ name: 'ChineseWellness' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://chinesewellness.com',
    siteName: 'ChineseWellness',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}<Analytics /></body>
    </html>
  )
}
