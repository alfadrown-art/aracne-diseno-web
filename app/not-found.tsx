import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <p className="text-8xl font-bold text-aracne-emerald mb-4">404</p>
      <h1 className="text-2xl font-semibold text-aracne-text mb-3">
        Página no encontrada
      </h1>
      <p className="text-aracne-muted mb-8 max-w-sm">
        La página que buscas no existe o ha sido movida.
      </p>
      <Button asChild className="bg-aracne-emerald hover:bg-aracne-emerald/90 text-white">
        <Link href="/">Volver al inicio</Link>
      </Button>
    </div>
  )
}
