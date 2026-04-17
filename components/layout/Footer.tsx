import Image from 'next/image'
import Link from 'next/link'
import { Linkedin, Twitter, Instagram } from 'lucide-react'
import type { getDict } from '@/lib/i18n'

type Dict = Awaited<ReturnType<typeof getDict>>

interface FooterProps {
  dict: Dict
}

export default function Footer({ dict }: FooterProps) {
  const year = new Date().getFullYear()
  const f = dict.footer

  return (
    <footer className="bg-aracne-dark">
      {/* Main grid */}
      <div className="container-narrow py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-5">
            <Image
              src="/logo.svg"
              alt="Aracne Consulting"
              width={160}
              height={32}
              className="brightness-0 invert"
            />
            <p className="text-sm text-white/45 max-w-sm leading-relaxed">
              {f.tagline}
            </p>
            <p className="text-sm text-white/30">{f.location}</p>

            {/* Social */}
            <div className="flex gap-2 pt-1">
              {[
                { href: 'https://linkedin.com/company/aracne-consulting', Icon: Linkedin, label: 'LinkedIn' },
                { href: 'https://twitter.com/aracneconsulting', Icon: Twitter, label: 'Twitter' },
                { href: 'https://instagram.com/aracneconsulting', Icon: Instagram, label: 'Instagram' },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-5">
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
                    className="text-sm text-white/45 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-5">
              {f.legal_label}
            </p>
            <ul className="space-y-3 mb-7">
              <li>
                <Link href="/legal" className="text-sm text-white/45 hover:text-white transition-colors">
                  {f.links.legal}
                </Link>
              </li>
              <li>
                <Link href="/legal#privacidad" className="text-sm text-white/45 hover:text-white transition-colors">
                  {f.links.privacy}
                </Link>
              </li>
            </ul>

            <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-5">
              {f.contact_label}
            </p>
            <a
              href="mailto:hola@aracneconsulting.com"
              className="text-sm text-white/45 hover:text-white transition-colors"
            >
              hola@aracneconsulting.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/25">
            © {year} Aracne Consulting. {f.rights}
          </p>
          <p className="text-xs text-white/25">
            Made with <span className="text-aracne-purple">♥</span> in Catalunya
          </p>
        </div>
      </div>
    </footer>
  )
}
