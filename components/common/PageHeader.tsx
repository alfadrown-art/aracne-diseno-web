interface PageHeaderProps {
  label?: string
  title: string
  subtitle?: string
}

export default function PageHeader({ label, title, subtitle }: PageHeaderProps) {
  return (
    <section className="bg-white border-b border-aracne-border py-16 md:py-20">
      <div className="container-narrow">
        {label && (
          <p className="label-tag">{label}</p>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-aracne-text leading-tight max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-lg text-aracne-muted max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
