import { cookies } from 'next/headers'
import es from '@/messages/es.json'
import en from '@/messages/en.json'

export type Locale = 'es' | 'en'

const dicts = { es, en } as const

export async function getDict(): Promise<typeof es> {
  const cookieStore = await cookies()
  const locale = (cookieStore.get('NEXT_LOCALE')?.value as Locale) ?? 'es'
  return dicts[locale] ?? dicts.es
}

export function getLocaleFromCookie(cookieValue: string | undefined): Locale {
  if (cookieValue === 'en') return 'en'
  return 'es'
}
