'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '34676269655'

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const show = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', show, { passive: true })
    show()
    return () => window.removeEventListener('scroll', show)
  }, [])

  return (
    <a
      href={`https://wa.me/${WA_NUMBER}?text=Hola%2C%20he%20visto%20vuestra%20web%20y%20me%20interesa%20saber%20m%C3%A1s%20sobre%20vuestros%20servicios%20de%20IA`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className={cn(
        'fixed bottom-6 right-6 z-50 flex items-center justify-center w-13 h-13 rounded-full shadow-lg transition-all duration-300',
        'bg-[#25D366] hover:bg-[#20bd5a] hover:scale-105',
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4 pointer-events-none',
      )}
      style={{ width: 52, height: 52 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        className="w-6 h-6"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.549 4.1 1.509 5.831L.057 23.25c-.055.204.006.423.161.572.115.108.265.166.418.166a.56.56 0 0 0 .14-.018l5.561-1.459A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.74 9.74 0 0 1-4.967-1.358l-.356-.212-3.695.97.985-3.604-.232-.37A9.72 9.72 0 0 1 2.182 12C2.182 6.573 6.573 2.182 12 2.182S21.818 6.573 21.818 12 17.427 21.818 12 21.818z" />
      </svg>
    </a>
  )
}
