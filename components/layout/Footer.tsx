import Image from 'next/image'
import Link from 'next/link'
import type { getDict } from '@/lib/i18n'

type Dict = Awaited<ReturnType<typeof getDict>>

interface FooterProps {
  dict: Dict
}

export default function Footer({ dict }: FooterProps) {
  const year = new Date().getFullYear()
  const f = dict.footer

  return (
    <footer className="bg-aracne-surface border-t border-aracne-border">
      {/* Main grid */}
      <div className="container-narrow py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="Aracne"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-sm font-semibold tracking-widest text-aracne-text uppercase">
                Aracne Consulting
              </span>
            </div>
            <p className="text-sm text-aracne-muted max-w-sm leading-relaxed">
              {f.tagline}
            </p>
            <p className="text-sm text-aracne-muted">{f.location}</p>
            <a
              href="tel:+34676269655"
              className="text-sm text-aracne-body hover:text-aracne-text transition-colors"
            >
              +34 676 269 655
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-aracne-muted mb-5">
              {f.nav_label}
            </p>
            <ul className="space-y-3">
              {[
                { href: '/servicios', label: f.links.services },
                { href: '/casos', label: f.links.cases },
                { href: '/blog', label: 'Blog' },
                { href: '/empresa', label: f.links.company },
                { href: '/contacto', label: f.links.contact },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-aracne-muted hover:text-aracne-text transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-aracne-muted mb-5">
              {f.legal_label}
            </p>
            <ul className="space-y-3 mb-7">
              <li>
                <Link href="/legal" className="text-sm text-aracne-muted hover:text-aracne-text transition-colors">
                  {f.links.legal}
                </Link>
              </li>
              <li>
                <Link href="/legal#privacidad" className="text-sm text-aracne-muted hover:text-aracne-text transition-colors">
                  {f.links.privacy}
                </Link>
              </li>
            </ul>

            <p className="text-xs font-semibold uppercase tracking-widest text-aracne-muted mb-4">
              {f.contact_label}
            </p>
            <a
              href="mailto:hola@aracneconsulting.com"
              className="text-sm text-aracne-muted hover:text-aracne-text transition-colors"
            >
              hola@aracneconsulting.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-aracne-border">
          <p className="text-xs text-aracne-muted">
            © {year} Aracne Consulting. {f.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
