import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Clock, Tag, Calendar } from 'lucide-react'
import { posts, getPostBySlug } from '../posts'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    keywords: ['asesoría IA empresas Cataluña', 'agente WhatsApp IA Barcelona', 'automatización empresas Catalunya'],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function renderContent(content: string) {
  const lines = content.split('\n')
  const elements: React.ReactNode[] = []
  let key = 0

  for (const line of lines) {
    const k = key++
    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={k} className="text-2xl font-bold text-white mt-10 mb-4 leading-tight">
          {line.slice(3)}
        </h2>
      )
    } else if (line.startsWith('### ')) {
      elements.push(
        <h3 key={k} className="text-lg font-semibold text-aracne-emerald mt-7 mb-3">
          {line.slice(4)}
        </h3>
      )
    } else if (line.startsWith('**') && line.endsWith('**') && line.length > 4) {
      elements.push(
        <p key={k} className="font-semibold text-white/90 mb-2">
          {line.slice(2, -2)}
        </p>
      )
    } else if (line.startsWith('- ')) {
      elements.push(
        <li key={k} className="text-white/60 text-base leading-relaxed ml-4 list-disc">
          {line.slice(2)}
        </li>
      )
    } else if (line.trim() === '') {
      elements.push(<div key={k} className="h-2" />)
    } else {
      // Render bold inline
      const parts = line.split(/\*\*(.+?)\*\*/g)
      const rendered = parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="text-white font-semibold">
            {part}
          </strong>
        ) : (
          part
        )
      )
      elements.push(
        <p key={k} className="text-white/60 text-base leading-relaxed mb-3">
          {rendered}
        </p>
      )
    }
  }

  return elements
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  return (
    <main className="bg-aracne-bg min-h-screen">
      {/* Grid bg */}
      <div className="fixed inset-0 grid-bg pointer-events-none opacity-40" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-aracne-emerald/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative container-narrow py-20 md:py-28">
        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft size={14} />
          Volver al blog
        </Link>

        {/* Article header */}
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-xs font-semibold text-aracne-emerald bg-aracne-emerald/10 border border-aracne-emerald/20 px-2.5 py-1 rounded-full flex items-center gap-1.5">
              <Tag size={10} />
              {post.category}
            </span>
            <span className="text-xs text-white/30 flex items-center gap-1.5">
              <Clock size={10} />
              {post.readTime} de lectura
            </span>
            <span className="text-xs text-white/30 flex items-center gap-1.5">
              <Calendar size={10} />
              {formatDate(post.date)}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            {post.title}
          </h1>
          <p className="text-lg text-white/50 leading-relaxed border-l-2 border-aracne-emerald/40 pl-5">
            {post.description}
          </p>
        </div>

        {/* Divider */}
        <div className="my-12 border-t border-white/10" />

        {/* Content */}
        <article className="max-w-3xl">
          {renderContent(post.content)}
        </article>

        {/* CTA */}
        <div className="max-w-3xl mt-16 p-8 glass-card text-center">
          <p className="text-white font-semibold text-lg mb-2">
            ¿Quieres implementar esto en tu empresa?
          </p>
          <p className="text-white/50 text-sm mb-6">
            Somos especialistas en IA para empresas de Cataluña y España. Cuéntanos tu proyecto.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 bg-aracne-emerald hover:bg-aracne-emerald/90 text-white font-semibold px-6 py-3 rounded-xl transition-all glow-emerald-sm"
          >
            Hablar con nosotros
          </Link>
        </div>
      </div>
    </main>
  )
}
