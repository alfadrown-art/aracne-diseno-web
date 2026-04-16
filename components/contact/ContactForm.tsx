'use client'

import { useActionState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'
import { submitContact, type ContactResult } from '@/app/actions/contact'
import { Send, CheckCircle2 } from 'lucide-react'
import type { getDict } from '@/lib/i18n'

type Dict = Awaited<ReturnType<typeof getDict>>

const initialState: ContactResult = { success: false }

interface ContactFormProps {
  dict: Dict
}

export default function ContactForm({ dict }: ContactFormProps) {
  const f = dict.contact_page.form
  const { toast } = useToast()
  const formRef = useRef<HTMLFormElement>(null)
  const [state, action, pending] = useActionState(submitContact, initialState)

  useEffect(() => {
    if (state.success) {
      toast({ title: f.success_title, description: f.success_desc })
      formRef.current?.reset()
    } else if (state.error) {
      toast({ title: state.error, variant: 'destructive' })
    }
  }, [state, f.success_title, f.success_desc, toast])

  if (state.success) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 gap-4">
        <div className="w-14 h-14 rounded-full bg-aracne-emerald/10 flex items-center justify-center">
          <CheckCircle2 size={28} className="text-aracne-emerald" />
        </div>
        <h3 className="text-xl font-semibold text-aracne-text">{f.success_title}</h3>
        <p className="text-aracne-muted">{f.success_desc}</p>
        <button
          onClick={() => window.location.reload()}
          className="text-sm text-aracne-emerald hover:underline"
        >
          Enviar otro mensaje
        </button>
      </div>
    )
  }

  return (
    <form ref={formRef} action={action} className="space-y-5">
      {/* Nombre + Empresa */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="nombre" className="text-sm font-medium text-aracne-text">
            {f.name} *
          </Label>
          <Input
            id="nombre"
            name="nombre"
            required
            placeholder="Juan García"
            className="border-aracne-border focus-visible:ring-aracne-emerald/30 focus-visible:border-aracne-emerald"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="empresa" className="text-sm font-medium text-aracne-text">
            {f.company}
          </Label>
          <Input
            id="empresa"
            name="empresa"
            placeholder="Mi Empresa S.L."
            className="border-aracne-border focus-visible:ring-aracne-emerald/30 focus-visible:border-aracne-emerald"
          />
        </div>
      </div>

      {/* Sector + Teléfono */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label className="text-sm font-medium text-aracne-text">{f.sector}</Label>
          <Select name="sector">
            <SelectTrigger className="border-aracne-border focus:ring-aracne-emerald/30 focus:border-aracne-emerald">
              <SelectValue placeholder={f.sector_placeholder} />
            </SelectTrigger>
            <SelectContent>
              {f.sectors.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="telefono" className="text-sm font-medium text-aracne-text">
            {f.phone}
          </Label>
          <Input
            id="telefono"
            name="telefono"
            type="tel"
            placeholder="+34 600 000 000"
            className="border-aracne-border focus-visible:ring-aracne-emerald/30 focus-visible:border-aracne-emerald"
          />
        </div>
      </div>

      {/* Necesidad */}
      <div className="space-y-1.5">
        <Label htmlFor="necesidad" className="text-sm font-medium text-aracne-text">
          {f.need} *
        </Label>
        <Textarea
          id="necesidad"
          name="necesidad"
          required
          rows={5}
          placeholder={f.need_placeholder}
          className="border-aracne-border focus-visible:ring-aracne-emerald/30 focus-visible:border-aracne-emerald resize-none"
        />
      </div>

      <Button
        type="submit"
        disabled={pending}
        size="lg"
        className="w-full bg-aracne-emerald hover:bg-aracne-emerald/90 text-white font-semibold disabled:opacity-60"
      >
        {pending ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            {f.submitting}
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Send size={15} />
            {f.submit}
          </span>
        )}
      </Button>

      <p className="text-xs text-aracne-muted text-center">
        {f.privacy}{' '}
        <Link href="/legal#privacidad" className="underline hover:text-aracne-text">
          política de privacidad
        </Link>
        .
      </p>
    </form>
  )
}
