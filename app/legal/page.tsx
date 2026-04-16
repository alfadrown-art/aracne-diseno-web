import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Aviso Legal y Política de Privacidad',
  robots: { index: false, follow: false },
}

export default function LegalPage() {
  return (
    <article className="section-padding bg-white">
      <div className="container-narrow max-w-3xl">
        <h1 className="text-3xl font-bold text-aracne-text mb-2">Aviso Legal</h1>
        <p className="text-aracne-muted text-sm mb-10">Última actualización: marzo 2026</p>

        <div className="prose prose-gray max-w-none space-y-10">
          <section>
            <h2 className="text-xl font-semibold text-aracne-text mb-3">1. Datos identificativos</h2>
            <p className="text-aracne-muted leading-relaxed">
              En cumplimiento del artículo 10 de la Ley 34/2002 LSSI-CE, el titular del sitio web{' '}
              <strong className="text-aracne-text">aracneconsulting.com</strong> es{' '}
              <strong className="text-aracne-text">Aracne Consulting</strong>, con domicilio en
              Tarragona, España. Contacto: hola@aracneconsulting.com
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-aracne-text mb-3">2. Condiciones de uso</h2>
            <p className="text-aracne-muted leading-relaxed">
              El acceso y uso del sitio implica la aceptación plena de estas condiciones. Aracne
              Consulting se reserva el derecho de modificar este aviso en cualquier momento. Se
              prohíbe la reproducción, distribución o modificación del contenido sin autorización
              expresa.
            </p>
          </section>

          <section id="privacidad">
            <h2 className="text-xl font-semibold text-aracne-text mb-3">
              3. Política de Privacidad
            </h2>
            <p className="text-aracne-muted leading-relaxed mb-4">
              En cumplimiento del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018
              (LOPDGDD), te informamos sobre el tratamiento de tus datos personales.
            </p>

            <div className="space-y-5">
              {[
                {
                  title: 'Responsable del tratamiento',
                  body: 'Aracne Consulting · Tarragona, España · hola@aracneconsulting.com',
                },
                {
                  title: 'Finalidad y base jurídica',
                  body: 'Los datos recogidos a través del formulario de contacto se utilizan exclusivamente para responder a tu consulta y gestionar el contacto comercial. Base jurídica: consentimiento del interesado (art. 6.1.a RGPD).',
                },
                {
                  title: 'Conservación',
                  body: 'Los datos se conservan durante el tiempo necesario para atender la consulta y, en su caso, durante la relación comercial.',
                },
                {
                  title: 'Tus derechos',
                  body: 'Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a hola@aracneconsulting.com. También puedes reclamar ante la AEPD (aepd.es).',
                },
                {
                  title: 'Encargados de tratamiento',
                  body: 'Los datos de contacto se almacenan en Supabase (infraestructura en la UE). No se ceden datos a terceros salvo obligación legal.',
                },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="text-base font-semibold text-aracne-text mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-aracne-muted leading-relaxed text-sm">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-aracne-text mb-3">4. Cookies</h2>
            <p className="text-aracne-muted leading-relaxed">
              Este sitio utiliza únicamente una cookie técnica (
              <code className="text-aracne-emerald bg-aracne-card px-1.5 py-0.5 rounded text-xs">
                NEXT_LOCALE
              </code>
              ) para recordar el idioma seleccionado. No se utilizan cookies de seguimiento ni
              analítica.
            </p>
          </section>
        </div>

        <div className="pt-10 border-t border-aracne-border mt-10">
          <Link href="/" className="text-sm font-medium text-aracne-emerald hover:underline">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </article>
  )
}
