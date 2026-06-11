'use client'

import ReactMarkdown from 'react-markdown'
import { useEffect, useRef } from 'react'

interface PostContentProps {
  title: string
  category: string
  date: string
  readTime: string
  excerpt: string
  content: string
}

/**
 * Split markdown content for in-article ad insertion.
 * Splits before the 3rd heading (or at 40% if fewer headings).
 */
function splitContentForAd(content: string): { before: string; after: string } {
  const lines = content.split('\n')
  let headingCount = 0
  let splitIndex = Math.floor(lines.length * 0.4)

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('## ') || lines[i].startsWith('### ')) {
      headingCount++
      if (headingCount >= 2) {
        splitIndex = i
        break
      }
    }
  }

  return {
    before: lines.slice(0, splitIndex).join('\n'),
    after: lines.slice(splitIndex).join('\n'),
  }
}

/* ─── Ad Unit Component (client-side only) ─── */
function AdSlot({ slot, format = 'auto', className }: { slot: string; format?: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const pushed = useRef(false)

  useEffect(() => {
    if (pushed.current || !ref.current) return
    try {
      // @ts-expect-error adsbygoogle is global
      window.adsbygoogle = window.adsbygoogle || []
      // @ts-expect-error push ad
      window.adsbygoogle.push({})
      pushed.current = true
    } catch { /* blocked or not loaded */ }
  }, [])

  return (
    <div ref={ref} className={className} style={{ overflow: 'hidden', textAlign: 'center' }}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-5330611753654284"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  )
}

export default function PostContent({ title, category, date, readTime, content }: PostContentProps) {
  const { before, after } = splitContentForAd(content)

  return (
    <div style={styles.layout}>
      {/* Main Content */}
      <article style={styles.content}>
        <a href="/" style={styles.backLink}>&larr; Back to all articles</a>

        <header style={styles.header}>
          <div style={styles.tag}>{category}</div>
          <h1 style={styles.title}>{title}</h1>
          <div style={styles.meta}>
            <span>{date}</span>
            <span>&middot;</span>
            <span>{readTime}</span>
          </div>
        </header>

        {/* Content Part 1 */}
        <div style={styles.body}>
          <ReactMarkdown>{before}</ReactMarkdown>
        </div>

        {/* In-Article Ad */}
        <div style={styles.adWrapper}>
          <p style={styles.adLabel}>Advertisement</p>
          <AdSlot slot="YOUR-IN-ARTICLE-SLOT-ID" format="fluid" />
        </div>

        {/* Content Part 2 */}
        <div style={styles.body}>
          <ReactMarkdown>{after}</ReactMarkdown>
        </div>

        {/* Bottom Banner Ad */}
        <div style={styles.adWrapperBottom}>
          <p style={styles.adLabel}>Advertisement</p>
          <AdSlot slot="YOUR-BOTTOM-SLOT-ID" format="horizontal" />
        </div>

        {/* Related CTA */}
        <div style={styles.relatedBox}>
          <h3 style={styles.relatedTitle}>Enjoyed this article?</h3>
          <p style={styles.relatedText}>
            Explore more wellness topics from traditional Chinese medicine.
            Browse our{' '}
            <a href="/" style={styles.inlineLink}>full collection</a> of articles.
          </p>
        </div>
      </article>

      {/* Sidebar */}
      <aside style={styles.sidebar}>
        {/* Sticky Sidebar Ad */}
        <div style={styles.sidebarSticky}>
          <div style={styles.sidebarCard}>
            <p style={styles.adLabel}>Advertisement</p>
            <AdSlot slot="YOUR-SIDEBAR-SLOT-ID" format="rectangle" />
          </div>
        </div>

        {/* About Box */}
        <div style={styles.aboutBox}>
          <h3 style={styles.sbTitle}>About ChineseWellness</h3>
          <p style={styles.sbText}>
            We share time-tested Chinese wellness traditions &mdash; TCM insights,
            herbal remedies, acupressure tips, and mindful living practices
            for modern health seekers.
          </p>
          <a href="/about" style={styles.sbLink}>Learn more &rarr;</a>
        </div>

        {/* Subscribe CTA */}
        <div style={styles.ctaBox}>
          <h3 style={styles.sbTitleLight}>Stay Updated</h3>
          <p style={styles.ctaText}>Get new wellness articles delivered fresh.</p>
          <a href="/contact" style={styles.ctaBtn}>Subscribe &rarr;</a>
        </div>

        {/* Medical Disclaimer */}
        <div style={styles.discBox}>
          <p style={styles.discText}>
            <strong>Medical Disclaimer:</strong> This content is for educational
            purposes only. Always consult a healthcare professional.
          </p>
        </div>
      </aside>
    </div>
  )
}

const s: Record<string, React.CSSProperties> = {
  layout: {
    maxWidth: '960px',
    margin: '0 auto',
    padding: '2rem 1.5rem 4rem',
    display: 'grid',
    gridTemplateColumns: '1fr 280px',
    gap: '2.5rem',
    alignItems: 'start',
  },
  content: { minWidth: 0 },
  backLink: {
    display: 'inline-block',
    marginBottom: '1.5rem',
    fontSize: '0.88rem',
    color: '#2d8a4e',
    textDecoration: 'none',
    fontWeight: 500,
  },
  header: {
    marginBottom: '2rem',
    borderBottom: '1px solid #e5e5e5',
    paddingBottom: '1.5rem',
  },
  tag: {
    display: 'inline-block',
    fontSize: '0.72rem',
    color: '#2d8a4e',
    fontWeight: 600,
    marginBottom: '0.5rem',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
  },
  title: {
    fontSize: '1.85rem',
    fontWeight: 700,
    color: '#1a1a1a',
    lineHeight: 1.25,
    fontFamily: "'Playfair Display', Georgia, serif",
    marginBottom: '0.6rem',
  },
  meta: {
    display: 'flex',
    gap: '0.5rem',
    fontSize: '0.85rem',
    color: '#999',
  },
  body: {
    lineHeight: 1.85,
    fontSize: '1.02rem',
    color: '#1a1a1a',
  },
  adWrapper: {
    margin: '2rem 0',
    padding: '1.25rem 0',
    borderTop: '1px solid #f0f0f0',
    borderBottom: '1px solid #f0f0f0',
  },
  adWrapperBottom: {
    margin: '2.5rem 0 1rem',
    padding: '1rem 0',
    borderTop: '1px solid #f0f0f0',
  },
  adLabel: {
    fontSize: '0.7rem',
    color: '#bbb',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.08em',
    marginBottom: '0.75rem',
    textAlign: 'center' as const,
    margin: '0 0 0.75rem 0',
  },
  relatedBox: {
    background: '#f0fdf4',
    border: '1px solid #bbf7d0',
    borderRadius: '10px',
    padding: '1.5rem',
    marginTop: '2rem',
  },
  relatedTitle: { fontSize: '1.05rem', fontWeight: 700, color: '#166534', marginBottom: '0.4rem' },
  relatedText: { fontSize: '0.9rem', color: '#15803d', marginBottom: 0 },
  inlineLink: { color: '#2d8a4e', textDecoration: 'underline', fontWeight: 600 },

  /* Sidebar */
  sidebar: { display: 'flex', flexDirection: 'column' as const, gap: '1.5rem' },
  sidebarSticky: {
    position: 'sticky' as const,
    top: '5rem',
  },
  sidebarCard: {
    background: '#fafafa',
    border: '1px solid #e5e5e5',
    borderRadius: '10px',
    padding: '1rem',
  },
  aboutBox: {
    background: '#fafafa',
    border: '1px solid #e5e5e5',
    borderRadius: '10px',
    padding: '1.4rem',
  },
  ctaBox: {
    background: '#1a1a1a',
    borderRadius: '10px',
    padding: '1.4rem',
  },
  discBox: {
    background: '#fefce8',
    border: '1px solid #fde047',
    borderRadius: '8px',
    padding: '1rem',
  },
  sbTitle: { fontSize: '0.92rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '0.5rem' },
  sbTitleLight: { fontSize: '0.92rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' },
  sbText: { fontSize: '0.82rem', color: '#555', lineHeight: 1.65, marginBottom: '0.7rem' },
  ctaText: { fontSize: '0.82rem', color: '#ccc', lineHeight: 1.65, marginBottom: '0.7rem' },
  sbLink: { fontSize: '0.84rem', color: '#2d8a4e', textDecoration: 'none', fontWeight: 600 },
  ctaBtn: {
    display: 'inline-block',
    background: '#2d8a4e',
    color: '#fff',
    padding: '0.55rem 1.2rem',
    borderRadius: '6px',
    fontSize: '0.85rem',
    fontWeight: 600,
    textDecoration: 'none',
  },
  discText: { margin: 0, lineHeight: 1.55, fontSize: '0.78rem', color: '#854d0e' },
}

// Alias for readability in JSX
const styles = s
