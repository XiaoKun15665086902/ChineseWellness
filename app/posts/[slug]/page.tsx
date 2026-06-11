import { getAllPosts, getPostBySlug } from '@/lib/posts'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PostContent from './PostContent'

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

  return <PostContent
    title={post.title}
    category={post.category}
    date={post.date}
    readTime={post.readTime}
    excerpt={post.excerpt}
    content={post.content}
  />
}
