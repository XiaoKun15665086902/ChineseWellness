import { getAllPosts, getPostBySlug } from '@/lib/posts'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const posts = getAllPosts()
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) return {}

  return {
    title: `${post.title} | ChineseWellness`,
    description: post.excerpt,
  }
}

export default function PostPage({ params }: Props) {
  let post
  try {
    post = getPostBySlug(params.slug)
  } catch {
    notFound()
  }

  return (
    <div style={styles.container}>
      <a href="/" style={styles.backLink}>← Back to all articles</a>

      <article>
        <header style={styles.header}>
          <div style={styles.tag}>{post.category}</div>
          <h1 style={styles.title}>{post.title}</h1>
          <div style={styles.meta}>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        <div style={styles.content}>
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
    </div>
  )
}

const styles = {
  container: {
    maxWidth: '720px',
    margin: '0 auto',
    padding: '2rem 1.5rem 4rem',
  },
  backLink: {
    display: 'inline-block',
    marginBottom: '2rem',
    fontSize: '0.9rem',
    color: '#2d8a4e',
    textDecoration: 'none',
  },
  header: {
    marginBottom: '2rem',
    borderBottom: '1px solid #e5e5e5',
    paddingBottom: '1.5rem',
  },
  tag: {
    display: 'inline-block',
    fontSize: '0.75rem',
    color: '#2d8a4e',
    fontWeight: 600,
    marginBottom: '0.5rem',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 700,
    color: '#1a1a1a',
    lineHeight: 1.3,
    fontFamily: "'Playfair Display', Georgia, serif",
    marginBottom: '0.75rem',
  },
  meta: {
    display: 'flex',
    gap: '0.5rem',
    fontSize: '0.85rem',
    color: '#999',
  },
  content: {
    lineHeight: 1.85,
    fontSize: '1.05rem',
    color: '#1a1a1a',
  },
}
