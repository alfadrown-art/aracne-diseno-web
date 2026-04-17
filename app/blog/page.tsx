import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock, Tag } from 'lucide-react'
import { posts } from './posts'

export const metadata: Metadata = {
  title: 'Blog — IA para empresas en Cataluña',
  description:
    'Artículos sobre asesoría IA empresas Cataluña, agentes WhatsApp IA Barcelona y automatización de procesos empresariales en España.',
  keywords: [
    'asesoría IA empresas Cataluña',
    'agente WhatsApp IA Barcelona',
    'automatización empresas Catalunya',
    'blog IA empresas España',
  ],
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function BlogPage() {
  return (
    <main className="bg-aracne-bg min-h-screen">
      <div className="container-narrow section-padding">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="label-tag">Blog</span>
          <h1 className="text-4xl md:text-5xl text-aracne-text leading-tight mb-4">
            IA para empresas.{' '}
            <span className="text-aracne-purple">Sin tecnicismos.</span>
          </h1>
          <p className="text-aracne-body text-lg leading-relaxed">
            Artículos prácticos sobre automatización, agentes IA y transformación digital
            para empresas de Cataluña y España.
          </p>
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group neurai-card hover:border-aracne-purple/30 hover:shadow-card transition-all duration-200 p-7 flex flex-col h-full"
            >
              {/* Category + read time */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-medium text-aracne-purple bg-aracne-purple-light border border-aracne-purple/15 px-2.5 py-1 rounded-full flex items-center gap-1.5">
                  <Tag size={10} />
                  {post.category}
                </span>
                <span className="text-xs text-aracne-muted flex items-center gap-1">
                  <Clock size={10} />
                  {post.readTime}
                </span>
              </div>

              <h2 className="text-base text-aracne-text leading-snug mb-3 group-hover:text-aracne-purple transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-aracne-body leading-relaxed flex-1">
                {post.description}
              </p>

              {/* Footer */}
              <div className="mt-5 pt-4 border-t border-aracne-border flex items-center justify-between">
                <span className="text-xs text-aracne-muted">{formatDate(post.date)}</span>
                <ArrowRight
                  size={14}
                  className="text-aracne-muted group-hover:text-aracne-purple group-hover:translate-x-1 transition-all"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
