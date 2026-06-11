import Link from 'next/link'
import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'ChineseWellness — Ancient Wisdom for Modern Life',
}

export default function HomePage() {
  const posts = getAllPosts()

  return (
    <div style={styles.container}>
      {/* Hero */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>
          Ancient Wisdom for<br />Modern Life
        </h1>
        <p style={styles.heroSubtitle}>
          Discover time-tested Chinese wellness traditions — TCM, acupressure,
          herbal remedies, qi gong, and mindful living practices for health today.
        </p>
      </section>

      {/* Posts Grid */}
      <section>
        <h2 style={styles.sectionTitle}>Latest Articles</h2>
        <div style={styles.grid}>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/posts/${post.slug}`}
              style={styles.cardLink}
            >
              <article style={styles.card}>
                <div style={styles.cardTag}>{post.category}</div>
                <h3 style={styles.cardTitle}>{post.title}</h3>
                <p style={styles.cardExcerpt}>{post.excerpt}</p>
                <div style={styles.cardMeta}>
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

const styles = {
  container: {
    maxWidth: '720px',
    margin: '0 auto',
    padding: '2rem 1.5rem 4rem',
  },
  hero: {
    textAlign: 'center' as const,
    padding: '3rem 0 2.5rem',
    borderBottom: '1px solid #e5e5e5',
    marginBottom: '2.5rem',
  },
  heroTitle: {
    fontSize: '2.2rem',
    fontWeight: 700,
    color: '#1a1a1a',
    lineHeight: 1.3,
    marginBottom: '1rem',
    fontFamily: "'Playfair Display', Georgia, serif",
  },
  heroSubtitle: {
    fontSize: '1.05rem',
    color: '#555',
    lineHeight: 1.7,
    maxWidth: '540px',
    margin: '0 auto',
  },
  sectionTitle: {
    fontSize: '1.25rem',
    fontWeight: 700,
    color: '#1a1a1a',
    marginBottom: '1.5rem',
  },
  grid: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1.5rem',
  },
  cardLink: {
    textDecoration: 'none',
    color: 'inherit',
  },
  card: {
    border: '1px solid #e5e5e5',
    borderRadius: '8px',
    padding: '1.5rem',
    transition: 'border-color 0.15s',
    cursor: 'pointer',
  },
  cardTag: {
    display: 'inline-block',
    fontSize: '0.75rem',
    color: '#2d8a4e',
    fontWeight: 600,
    marginBottom: '0.5rem',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
  },
  cardTitle: {
    fontSize: '1.15rem',
    fontWeight: 700,
    color: '#1a1a1a',
    marginBottom: '0.5rem',
    lineHeight: 1.4,
  },
  cardExcerpt: {
    fontSize: '0.95rem',
    color: '#555',
    lineHeight: 1.6,
    marginBottom: '0.75rem',
  },
  cardMeta: {
    display: 'flex',
    gap: '0.5rem',
    fontSize: '0.8rem',
    color: '#999',
  },
}
