# Diseño — Aracne Consulting

## Sistema visual

| Token | Valor | Uso |
|-------|-------|-----|
| `aracne-bg` | `#050810` | Fondo principal |
| `aracne-emerald` | `#1D9E75` | Acento principal, CTAs, iconos |
| `aracne-cyan` | `#00D4FF` | Acento secundario, gradientes, links |
| Font | Inter | Todos los textos vía `next/font/google` |

## Patrones de componentes

### GlassCard
```tsx
className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl
           hover:border-aracne-emerald/30 hover:shadow-[0_0_30px_rgba(29,158,117,0.12)]
           transition-all duration-300"
```
Usado en: ServicesSection, ContactSection

### text-gradient
```css
background: linear-gradient(to right, #1D9E75, #00D4FF)
-webkit-background-clip: text
```
Usado en: hero tagline, métricas de casos de uso, números del timeline

### Badge pill
```tsx
<AracneBadge variant="emerald|cyan|gold">contenido</AracneBadge>
```

## Animaciones

| Animación | Implementación | Dónde |
|-----------|---------------|-------|
| Telaraña de partículas | HTML5 Canvas nativo, `requestAnimationFrame` | Hero background |
| Scroll reveal | Framer Motion `whileInView + opacity/translateY` | Todas las secciones |
| Hover scale icon | Tailwind `group-hover:scale-110 transition-transform` | Cards de servicios |
| Botón glow | `shadow-[0_0_25-40px_rgba(...)]` Tailwind arbitrario | CTAs principales |

## Estructura de secciones (en orden de página)

1. **HeroSection** — fullscreen, canvas background, tagline grande
2. **ServicesSection** — 4 glasscards en grid responsive
3. **CrmSection** — 2 columnas: texto + features, borde verde highlight
4. **UseCasesSection** — 3 cards con badge tag + métrica de resultado
5. **HowWeWorkSection** — timeline 4 pasos con números gradiente
6. **PartnersSection** — logos en row con hover glassmorphism
7. **MarketingSection** — banner destacado con borde cyan
8. **ContactSection** — formulario 3/5 col + info contacto 2/5 col

## i18n

Sistema de dict simple (sin next-intl) con cookie `NEXT_LOCALE`.
Archivos: `messages/es.json` y `messages/en.json`.
Toggle ES/EN en la Navbar, recarga la página para aplicar el cambio.

## Supabase

Tabla `contactos_web` (public schema):
- `id` uuid PK
- `nombre` text NOT NULL
- `empresa` text
- `sector` text
- `necesidad` text NOT NULL
- `created_at` timestamptz DEFAULT now()

RLS habilitado. Policy `allow_insert` para anon.
La inserción se hace via Server Action usando service role key (server-only).
