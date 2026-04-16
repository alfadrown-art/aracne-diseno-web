import type { Metadata } from 'next'
import { Mail, MessageCircle, MapPin, Clock } from 'lucide-react'
import { getDict } from '@/lib/i18n'
import PageHeader from '@/components/common/PageHeader'
import FadeIn from '@/components/common/FadeIn'
import ContactForm from '@/components/contact/ContactForm'

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Contacta con Aracne Consulting. Cuéntanos tu proyecto y te respondemos en menos de 24 horas.',
}

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '34676269655'

export default async function ContactoPage() {
  const dict = await getDict()
  const c = dict.contact_page

  const infoItems = [
    {
      icon: Mail,
      label: c.info.email_label,
      value: c.info.email,
      href: `mailto:${c.info.email}`,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      icon: MessageCircle,
      label: c.info.whatsapp_label,
      value: c.info.whatsapp_text,
      href: `https://wa.me/${WA_NUMBER}`,
      color: 'text-[#25D366]',
      bg: 'bg-green-50',
    },
    {
      icon: MapPin,
      label: c.info.address_label,
      value: c.info.address,
      href: null,
      color: 'text-aracne-emerald',
      bg: 'bg-emerald-50',
    },
    {
      icon: Clock,
      label: c.info.hours_label,
      value: c.info.hours,
      href: null,
      color: 'text-aracne-dark',
      bg: 'bg-slate-50',
    },
  ]

  return (
    <>
      <PageHeader label={c.label} title={c.title} subtitle={c.subtitle} />

      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
            {/* Left: form */}
            <FadeIn className="lg:col-span-3">
              <div className="rounded-2xl border border-aracne-border bg-white p-8 md:p-10 shadow-card">
                <h2 className="text-xl font-semibold text-aracne-text mb-6">
                  Cuéntanos tu proyecto
                </h2>
                <ContactForm dict={dict} />
              </div>
            </FadeIn>

            {/* Right: info */}
            <FadeIn delay={0.15} className="lg:col-span-2">
              <div className="space-y-4">
                {infoItems.map((item) => {
                  const Inner = (
                    <div className="flex items-start gap-4 p-5 rounded-xl border border-aracne-border bg-white hover:border-aracne-emerald/40 transition-colors">
                      <div
                        className={`flex-shrink-0 w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center`}
                      >
                        <item.icon size={18} className={item.color} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-aracne-muted mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-sm text-aracne-text font-medium">{item.value}</p>
                      </div>
                    </div>
                  )
                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {Inner}
                    </a>
                  ) : (
                    <div key={item.label}>{Inner}</div>
                  )
                })}

                {/* Map placeholder */}
                <div className="rounded-xl border border-aracne-border overflow-hidden mt-2">
                  <div className="h-44 bg-gradient-to-br from-aracne-card to-aracne-emerald/5 flex flex-col items-center justify-center gap-2">
                    <MapPin size={24} className="text-aracne-emerald" />
                    <p className="text-sm font-medium text-aracne-muted">Tarragona, España</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
