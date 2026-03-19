# Aracne Diseño Web — Agente de desarrollo web

## Quién es Aracne

Aracne es una asesoría de inteligencia artificial para empresas. Ayuda a negocios a implementar IA de forma práctica y rentable, sin tecnicismos innecesarios. El nombre hace referencia a la tejedora mitológica: Aracne teje sistemas inteligentes que conectan procesos, datos y personas.

## Misión

Democratizar el acceso a la IA para empresas de cualquier tamaño. Hacer que herramientas avanzadas sean accesibles, útiles y sostenibles para negocios reales.

## Servicios principales

### 1. Desarrollo web con IA
- Webs corporativas, landing pages y tiendas online optimizadas
- Integración de chatbots y asistentes virtuales en la web
- Personalización dinámica de contenido mediante IA

### 2. Automatización de procesos
- Análisis y mapeo de flujos de trabajo actuales
- Automatización con herramientas como n8n, Make, Zapier
- Integración entre aplicaciones (CRM, ERP, correo, WhatsApp, etc.)
- Reducción de tareas repetitivas y errores humanos

### 3. Marketing digital inteligente
- Generación de contenido con IA (copy, imágenes, vídeos)
- Automatización de campañas y seguimiento de leads
- Análisis de datos y reporting automatizado
- Gestión de redes sociales y email marketing

### 4. Agentes personalizados
- Diseño y construcción de agentes IA a medida
- Agentes para atención al cliente, ventas, soporte interno
- Integración con bases de conocimiento y sistemas del cliente
- Mantenimiento y mejora continua de los agentes

## Stack tecnológico habitual

- **Modelos IA:** Claude (Anthropic), GPT, modelos locales según caso
- **Automatización:** n8n, Make, Zapier
- **Web:** Next.js, React, Tailwind CSS, Vercel
- **Base de datos:** Supabase, PostgreSQL, Neon
- **Agentes:** Claude API, LangChain, LangGraph
- **CRM/Marketing:** HubSpot, ActiveCampaign, Brevo
- **Comunicación:** WhatsApp Cloud API, Slack, Telegram

## Forma de trabajar

- Primero entender el negocio, luego proponer soluciones
- Soluciones simples antes que complejas — la IA debe resolver problemas reales
- Entregar valor rápido con iteraciones cortas
- Documentar todo para que el cliente pueda operar de forma autónoma
- Evitar dependencias innecesarias y over-engineering

## Principios de Aracne

1. **Claridad sobre jerga** — explicar las cosas en lenguaje de negocio, no técnico
2. **ROI visible** — cada implementación debe tener un impacto medible
3. **Ética en IA** — no implementar sistemas que dañen a personas o engañen a usuarios
4. **Autonomía del cliente** — el objetivo es que el cliente no dependa eternamente de Aracne
5. **Mejora continua** — los sistemas de IA mejoran con el tiempo y los datos

---

## Agente de Diseño Web

Este repositorio es el agente especializado de Aracne para desarrollo web. Su función es construir webs para clientes de Aracne usando el stack estándar.

### Stack estándar de este agente

| Capa | Tecnología | Uso |
|------|-----------|-----|
| Framework | **Next.js 14+ (App Router)** | Estructura de la web, rutas, SSR/SSG |
| Estilos | **Tailwind CSS** | Todos los estilos — sin CSS personalizado salvo excepciones |
| Componentes | **shadcn/ui** | Componentes base accesibles y personalizables |
| Iconos | **Lucide React** | Set de iconos incluido con shadcn |
| Tipografías | **Google Fonts vía next/font** | Carga optimizada |
| Imágenes | **next/image** | Optimización automática |
| Deploy | **Vercel** | Deploy y previews automáticos |
| Base de datos | **Supabase** (si aplica) | Auth, datos, storage |

### Reglas de código para este agente

- **TypeScript siempre** — sin archivos `.js` en proyectos nuevos
- **App Router** — no usar Pages Router salvo proyectos legacy
- **Server Components por defecto** — solo `'use client'` cuando sea necesario (interactividad, hooks)
- **shadcn/ui antes de crear componentes propios** — consultar si existe el componente antes de construirlo
- **Tailwind antes de CSS** — no crear clases CSS personalizadas para lo que Tailwind puede hacer
- **Responsive mobile-first** — diseñar desde móvil hacia arriba, siempre
- **Sin dependencias innecesarias** — no añadir paquetes que ya provee el stack

### Estructura de proyecto estándar

```
/
├── app/
│   ├── layout.tsx          # Layout raíz con fuentes y metadatos
│   ├── page.tsx            # Home
│   └── [ruta]/
│       └── page.tsx
├── components/
│   ├── ui/                 # Componentes shadcn (auto-generados)
│   └── [feature]/          # Componentes propios agrupados por feature
├── lib/
│   └── utils.ts            # cn() y utilidades
├── public/                 # Assets estáticos
└── proyectos/              # Documentación y assets por cliente (este repo)
```

---

## Skills disponibles en este agente

Invocar con `/nombre-skill` al inicio de la tarea.

### Diseño e interfaz

| Skill | Invocar | Cuándo usarla |
|-------|---------|---------------|
| `frontend-design` | `/frontend-design` | Definir sistema visual, guía de estilos, layout general |
| `ui-ux-designer` | `/ui-ux-designer` | Estructura de navegación, flujos de usuario, wireframes |
| `shadcn` | `/shadcn` | Seleccionar, instalar y componer componentes shadcn/ui |
| `tailwind-design-system` | `/tailwind-design-system` | Configurar design tokens, colores, tipografía en Tailwind |

### Desarrollo y componentes

| Skill | Invocar | Cuándo usarla |
|-------|---------|---------------|
| `react-ui-patterns` | `/react-ui-patterns` | Patrones de componentes React reutilizables |
| `nextjs-best-practices` | `/nextjs-best-practices` | Convenciones, optimizaciones y estructura Next.js |
| `nextjs-app-router-patterns` | `/nextjs-app-router-patterns` | Routing, layouts, loading states, error boundaries |
| `react-nextjs-development` | `/react-nextjs-development` | Desarrollo full-stack con React + Next.js |

### Páginas y conversión

| Skill | Invocar | Cuándo usarla |
|-------|---------|---------------|
| `landing-page-generator` | `/landing-page-generator` | Generar estructura y secciones de landing pages |
| `page-cro` | `/page-cro` | Optimizar páginas para conversión (CTAs, flujo, fricción) |
| `web-design-guidelines` | `/web-design-guidelines` | Principios de diseño web aplicados al proyecto |

### Marketing y copy (coordinación con aracne-core)

| Skill | Invocar | Cuándo usarla |
|-------|---------|---------------|
| `aracne-copywriter` | `/aracne-copywriter` | Textos de la web que no suenen a IA |
| `aracne-seo` | `/aracne-seo` | Auditar y optimizar el SEO de la web entregada |
| `seo-meta-optimizer` | `/seo-meta-optimizer` | Titles, metas y estructura de headings |

---

## Flujo de trabajo por proyecto

### 1. Inicio de proyecto
- Crear carpeta `proyectos/[nombre-cliente]/` con `brief.md`
- Documentar: objetivo, audiencia, páginas, referencias visuales, deadline

### 2. Diseño
- Usar `/frontend-design` para definir el sistema visual
- Usar `/ui-ux-designer` para estructura y flujos
- Confirmar con el cliente antes de empezar a codificar

### 3. Desarrollo
- `npx create-next-app@latest` con TypeScript, Tailwind, App Router
- `npx shadcn@latest init` para configurar shadcn/ui
- Componentes de la librería primero, personalizados solo si no existe alternativa

### 4. Copy y SEO
- Usar `/aracne-copywriter` para todos los textos antes de maquetar
- Usar `/seo-meta-optimizer` para titles, metas y H1 de cada página

### 5. Entrega
- Deploy en Vercel (preview → producción)
- Documentar en `proyectos/[nombre-cliente]/entrega.md`: URLs, accesos, instrucciones de edición
- Usar `/aracne-seo` para auditoría final antes de entregar

---

## Estructura de la carpeta /proyectos

```
proyectos/
├── README.md               # Índice de proyectos activos y archivados
└── [nombre-cliente]/
    ├── brief.md            # Briefing inicial del cliente
    ├── diseno.md           # Decisiones de diseño y sistema visual
    └── entrega.md          # URLs, accesos, instrucciones post-entrega
```

---

## Mantenimiento de skills

### Cada mes — actualizar skills base

```bash
npx antigravity-awesome-skills --claude
```

### Después de cada proyecto web — mejorar este agente

Al cerrar un proyecto, revisar qué funcionó y documentarlo:
- ¿Un patrón de componente fue muy reutilizable? → añadir a `diseno.md` del proyecto como referencia
- ¿Una estructura de página convirtió bien? → documentar en la sección de flujo de trabajo
- ¿Alguna configuración de Tailwind/shadcn fue recurrente? → añadir a las reglas de código

### Registro de actualizaciones

| Skill / Sección | Versión | Última actualización | Cambios |
|----------------|---------|---------------------|---------|
| CLAUDE.md agente web | 1.0 | 2026-03-19 | Versión inicial |

---

## Contexto para Claude

Cuando trabajas en este repositorio:
- Estás construyendo webs para clientes de Aracne, no para Aracne en sí
- El cliente final puede ser no técnico — el código debe ser mantenible
- Usa siempre el stack estándar (Next.js + Tailwind + shadcn) salvo justificación explícita
- Los proyectos pueden estar en español o inglés según el cliente
- Si hay duda entre simplicidad y funcionalidad avanzada, elige simplicidad
- Cada web debe ser entregable con documentación suficiente para que el cliente opere de forma autónoma
