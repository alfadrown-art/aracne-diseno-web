'use server'

import { createServerClient } from '@/lib/supabase-server'

export interface ContactResult {
  success: boolean
  error?: string
}

export async function submitContact(
  _prevState: ContactResult,
  formData: FormData,
): Promise<ContactResult> {
  const nombre = (formData.get('nombre') as string)?.trim()
  const empresa = (formData.get('empresa') as string)?.trim()
  const sector = (formData.get('sector') as string)?.trim()
  const telefono = (formData.get('telefono') as string)?.trim()
  const necesidad = (formData.get('necesidad') as string)?.trim()

  if (!nombre || nombre.length < 2) {
    return { success: false, error: 'El nombre es obligatorio.' }
  }
  if (!necesidad || necesidad.length < 10) {
    return { success: false, error: 'Por favor describe tu necesidad (mínimo 10 caracteres).' }
  }

  const supabase = createServerClient()
  const { error } = await supabase.from('contactos_web').insert({
    nombre,
    empresa: empresa || null,
    sector: sector || null,
    telefono: telefono || null,
    necesidad,
  })

  if (error) {
    console.error('Supabase error:', error.message)
    return { success: false, error: 'Error al enviar. Inténtalo de nuevo.' }
  }

  return { success: true }
}
