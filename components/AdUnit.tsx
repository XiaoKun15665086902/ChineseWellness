'use client'

import { useEffect, useRef } from 'react'

interface AdUnitProps {
  slot: string
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical' | 'fluid' | string
  responsive?: boolean
  style?: React.CSSProperties
  className?: string
}

/**
 * Google AdSense Ad Unit Component
 *
 * Usage: <AdUnit slot="1234567890" format="auto" />
 *
 * To get your own ad slot ID:
 * 1. Go to https://www.google.com/adsense
 * 2. Create a new ad unit
 * 3. Copy the data-ad-slot value
 */
export default function AdUnit({ slot, format = 'auto', responsive = true, style, className }: AdUnitProps) {
  const adRef = useRef<HTMLDivElement>(null)
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    try {
      // @ts-expect-error adsbygoogle is injected by the AdSense script
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      initialized.current = true
    } catch (e) {
      // AdSense not loaded or blocked — silently fail
    }
  }, [])

  return (
    <div
      ref={adRef}
      className={className}
      style={{
        overflow: 'hidden',
        textAlign: 'center',
        ...style,
      }}
    >
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-5330611753654284"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : undefined}
      />
    </div>
  )
}

/**
 * AdSense Script Loader — should be included once in the layout
 * This loads the official AdSense JavaScript
 */
export function AdSenseScript() {
  return (
    <script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5330611753654284"
      crossOrigin="anonymous"
    />
  )
}

/**
 * In-Article Ad — optimized for placement within article content
 */
export function InArticleAd({ slot }: { slot: string }) {
  return (
    <div style={{
      margin: '2rem 0',
      padding: '1.25rem 0',
      borderTop: '1px solid #f0f0f0',
      borderBottom: '1px solid #f0f0f0',
    }}>
      <p style={{
        fontSize: '0.7rem',
        color: '#bbb',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        marginBottom: '0.75rem',
        textAlign: 'center' as const,
      }}>
        Advertisement
      </p>
      <AdUnit slot={slot} format="fluid" />
    </div>
  )
}

/**
 * Sidebar Ad — optimized for sidebar placement
 */
export function SidebarAd({ slot }: { slot: string }) {
  return (
    <div style={{
      background: '#fafafa',
      border: '1px solid #e5e5e5',
      borderRadius: '8px',
      padding: '1rem',
      position: 'sticky' as const,
      top: '5rem',
    }}>
      <p style={{
        fontSize: '0.65rem',
        color: '#bbb',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        marginBottom: '0.6rem',
        textAlign: 'center' as const,
      }}>
        Advertisement
      </p>
      <AdUnit slot={slot} format="rectangle" />
    </div>
  )
}
