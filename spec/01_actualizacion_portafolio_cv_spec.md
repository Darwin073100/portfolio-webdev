# 01 · Actualización del portafolio con base en el CV 2026

| Campo | Valor |
|---|---|
| Estado | Implementado (F0–F7) en la rama `feature/actualizacion-portafolio-cv` |
| Fecha | 2026-11-01 |
| Fuente de verdad | `CV_Edwin_Garcia_Quiterio (1).pdf` (Descargas, 2026-11-01) |
| Alcance | Contenido (proyectos, habilidades, experiencia, certificados, perfil) + CV descargable + correcciones necesarias para soportarlo |

> **Desviaciones respecto del plan original:**
> - **Respuestas a las preguntas abiertas:** P1, capturas proporcionadas para JEEMA Store y CONTAITSCCH; la API no tiene captura. P2, se eliminó "Control de inventarios". P3, se agregaron 6 de los 7 certificados nuevos; falta la imagen de "Introducción a Java SE". P4, no se publicó el teléfono. P5, los tres repos son públicos. P6, se quitaron "Blogs" y el buscador.
> - **Certificados:** se eliminó "Frontend Developer", que mostraba la imagen de otro curso. Quedan 16 certificados, no 17.
> - **T3:** `Button.tsx` y `ButtonIcon.tsx` no se corrigieron; se eliminaron porque nadie los usaba.
> - **Íconos sin logo:** NativeWind y Claude Code usan íconos de Font Awesome. React Native usa el logo de React.
> - **Pendiente:** responsive en móvil, un problema anterior a esta actualización que queda fuera de alcance (§3).

## 1. Objetivo

Que el portafolio cuente lo mismo que el CV actual. El sitio todavía presenta a Edwin como "Desarrollador Web FrontEnd" con 1 año de experiencia y un stack de 2023. El CV nuevo lo presenta como **Desarrollador Full Stack y Móvil**, con 2 años de experiencia, TypeScript, React Native, NestJS, Clean Architecture, testing con Jest, Docker y Claude Code, y con dos proyectos propios recientes (JEEMA y CONTAITSCCH). Además, el botón "Download CV" debe entregar el PDF nuevo.

## 2. Diagnóstico: qué está desactualizado

| Área | Hoy en el sitio | Según el CV | Archivo |
|---|---|---|---|
| Título profesional | "Desarrollador web FrontEnd" / "Desarrollador Web FrontEdn" (con errata) | Desarrollador Full Stack y Móvil | `ProfileCard.tsx`, `InformationMe.tsx`, `HomePage.tsx` |
| Años de experiencia | 1 | 2 | `TecnologiesCounter.tsx` (fijo en el código) |
| Contadores | 4 lenguajes / 4 herramientas | 6 lenguajes (TS, JS, Java, SQL, HTML, CSS), 30+ cursos Platzi, 500+ commits en JEEMA | `TecnologiesCounter.tsx` |
| Badges del perfil | CSS, HTML, JS, REACT | TypeScript, React, Next.js, NestJS, React Native, PostgreSQL | `ProfileCard.tsx` |
| Link personal | `www.edwin.com.mx` | `edwinegq-portfolio.netlify.app` | `ProfileCard.tsx` |
| Proyectos | No aparecen JEEMA, la API de traspasos ni CONTAITSCCH. "Control de inventarios" apunta al repo y deploy anteriores (`edyof-platform-web`, `jemae-platform-web`) | JEEMA Store (web), JEEMA Transfer (API), CONTAITSCCH (móvil) | `data.ts → projects` |
| Habilidades | No incluyen TypeScript, React Native, Expo, Tailwind, TypeORM, Supabase, SQLite, Jest, Docker, Git/GitHub, Vercel, Clean Architecture ni Claude Code | Se agrupan en 8 categorías (ver §4.3) | `data.ts → tools`, `globalSkill` |
| Subhabilidades | `tools[].tools` existe en los datos pero **no se renderiza**: `SkillList` solo muestra el nivel superior | — | `SkillList.tsx` |
| Experiencia y educación | No existen en el sitio. Los logos `cenidet.png`, `conalep.png` e `itscch.jpeg` están en `assets/` sin usarse | 6 experiencias y 2 estudios | — |
| Certificados | 10 imágenes en base64 dentro de `data.ts` (~2.5 MB en el bundle JS) | El CV agrega Arquitecturas Limpias, Claude Code, Docker, Intro a la IA, Java SE POO, Intro a Java SE y Fundamentos de TypeScript | `data.ts → certificates` |
| CV descargable | PDF antiguo (con el correo mal escrito: `oloutlook.com`) | PDF nuevo | `public/CV-Edwin-Garcia.pdf` |
| Metadatos | `<title>Vite + React + TS</title>`, favicon de Vite, `lang="en"` | — | `index.html` |

## 3. Fuera de alcance

- Rediseño visual o cambio de identidad. Se conservan el tema oscuro, la fuente Ubuntu y el motivo `<TagElement>`.
- Migrar a Tailwind, CSS Modules u otra librería de UI.
- Formulario de contacto funcional (`ContactPage`) y sección de blogs.
- Internacionalización (inglés).
- Diseño responsive general. Solo se pide que las piezas nuevas no rompan en móvil.
- Tests automatizados. El proyecto no los tiene y no se agregan aquí.

## 4. Cambios funcionales

### 4.1 CV descargable (prioridad alta, independiente del resto)

1. Reemplazar `public/CV-Edwin-Garcia.pdf` por el PDF nuevo.
2. Renombrarlo a `public/CV-Edwin-Garcia-Quiterio.pdf` para evitar que Netlify o el navegador sirvan la versión cacheada del nombre anterior.
3. Mover la ruta del CV a una constante en `data.ts` (`cvUrl`) y usarla en `ProfileCard.tsx`. Mantener el atributo `download='CV-Edwin-Garcia-Quiterio.pdf'`.
4. Corregir el texto del botón: "Dowload CV" → "Descargar CV". El resto de la interfaz está en español.

### 4.2 Proyectos (`WorksPage`)

**Agregar** al inicio de la lista, en este orden (lo más reciente y relevante primero):

| Proyecto | Tipo | Stack (íconos) | Enlaces | Descripción base (del CV) |
|---|---|---|---|---|
| **JEEMA Store Platform** | Web | TypeScript, Next.js, React, TypeORM, PostgreSQL, Jest, Vercel | Demo: `https://jeema-store-platform-web.vercel.app` (usuario `edwin` / contraseña `admin123`); Código: `github.com/Darwin073100/jeema-store-platform-web` | Plataforma de gestión comercial (productos, inventario, ventas y compras). Clean Architecture, pruebas unitarias y e2e con Jest, migraciones con TypeORM, migración documentada de Next.js 15 a 16, desarrollo asistido con Claude Code. Más de 500 commits. |
| **JEEMA Transfer API** | API REST | TypeScript, NestJS, PostgreSQL, TypeORM, Docker, Jest | Código: `github.com/Darwin073100/jeema-transfer-platform-api` | API para traspasos de mercancía entre sucursales. Entorno local con Docker Compose, Clean Architecture y pruebas e2e. |
| **CONTAITSCCH** | Móvil | TypeScript, React Native, Expo, SQLite, Supabase, Jest | Código: `github.com/Darwin073100/contaitscch-app` | App para aprender contabilidad con niveles, exámenes, XP, rachas y ranking. Offline-first con SQLite y sincronización con Supabase. Clean Architecture por features. |

**Modificar:**
- "Control de inventarios" es la versión anterior de JEEMA. **Se elimina** y se sustituye por JEEMA Store Platform, para no mostrar dos veces el mismo producto con enlaces viejos. Ver la pregunta abierta P2.

**Mantener** el resto (Journal App, Gif Expert, Shop System, CRUD Spring Boot, clones de Facebook y YouTube, maqueta del portafolio), pero:
- Corregir erratas visibles en las descripciones ("emplados", "PosgreSQL", "aplicacion", "catalago", "Construccion", etc.).
- Moverlos debajo de los proyectos nuevos.

**Cambios en el modelo de datos de proyecto:**

```ts
// src/utils/types.ts (nuevo)
export type ProjectKind = 'web' | 'api' | 'mobile' | 'ui';

export interface Technology { name: string; picture: string; }

export interface Project {
  name: string;
  kind: ProjectKind;          // nuevo: se muestra como etiqueta
  featured?: boolean;         // nuevo: true para JEEMA ×2 y CONTAITSCCH
  year?: string;              // nuevo: '2026', '2025 – Actualidad'
  description: string;
  highlights?: string[];      // nuevo: viñetas cortas (Clean Architecture, Jest e2e, …)
  github: string | null;      // null si el repo es privado
  deploy: string | null;
  demoCredentials?: { user: string; password: string }; // nuevo
  picture: string;
  tecnologies: Technology[];  // se conserva el nombre para no tocar consumidores
}
```

**Cambios de UI en `WorksPage.tsx`:**
- Para los proyectos con `featured`: mostrar la etiqueta del tipo (Web / API / Móvil), el año, la lista de `highlights` y las credenciales de demo, si existen.
- Los enlaces externos (GitHub y deploy) deben usar `<a href target="_blank" rel="noopener noreferrer">`. Hoy usan `<NavLink to>` de react-router, que no es para URLs externas. Agregar `title`/`aria-label` ("Ver código", "Ver demo").
- Si `github` es `null`, no se muestra el ícono de GitHub.
- Agregar `key` en los dos `.map()`.

### 4.3 Habilidades (`SkillsPage`)

**`globalSkill`** pasa de 2 tarjetas a 4, con los mismos íconos de FA 4.7:

| Tarjeta | Ícono FA 4.7 | Herramientas |
|---|---|---|
| Frontend | `fa-television` | TypeScript, React 19, Next.js (App Router), Tailwind CSS, CSS Grid/Flexbox |
| Backend | `fa-code` | NestJS, Node.js, Express.js, APIs REST, Spring Boot, JSF/EJB |
| Móvil | `fa-mobile` | React Native, Expo, Expo Router, NativeWind, SQLite, Supabase |
| Arquitectura, Testing y DevOps | `fa-cogs` | Clean Architecture, POO, Jest (unitarias y e2e), Docker / Compose, Git/GitHub, Vercel, Claude Code |

**`tools`** (la cuadrícula de íconos) se reorganiza en categorías y **se renderizan las subhabilidades**:

| Categoría | Habilidades |
|---|---|
| Lenguajes | TypeScript *(nuevo)*, JavaScript, Java, SQL *(nuevo)*, HTML, CSS |
| Frontend | React.js, Next.js, Tailwind CSS *(nuevo)*, Bootstrap |
| Móvil | React Native *(nuevo)*, Expo *(nuevo)*, NativeWind *(nuevo)* |
| Backend | NestJS, Node.js, Express.js, Spring Boot, JSF, EJB |
| Bases de datos | PostgreSQL, MySQL, SQL Server, SQLite *(nuevo)*, Supabase *(nuevo)*, TypeORM *(nuevo)*, Firebase |
| Testing y DevOps | Jest *(nuevo)*, Docker *(nuevo)*, Git *(nuevo)*, GitHub *(nuevo)*, Vercel *(nuevo)*, Linux/Ubuntu |
| IA | Claude Code *(nuevo)* |

- **Nuevo modelo:** `skillGroups: { title: string; icon: string; skills: { name: string; image: string }[] }[]`. Reemplaza a `tools` y elimina el campo `style` por ítem, que solo pintaba el borde. El color pasa a una clase CSS común.
- **`SkillList.tsx`:** renderiza un bloque por grupo (título + cuadrícula de `SkillItem`) y agrega `key`. Se elimina el bloque de código comentado.
- **Íconos nuevos:** SVG de [devicon](https://github.com/devicons/devicon) (licencia MIT), descargados a `src/assets/` e importados como módulos, igual que los actuales. No se cargan desde CDN, para seguir el patrón local del proyecto. Para Claude Code se usa el logo de Claude o, si no se puede usar, un ícono genérico `fa-magic` (ver P5).
- Se corrigen las erratas "Bootrstrap" y "Enterprice JavaBeans".

### 4.4 Experiencia y educación (nuevo, dentro de `AboutPage`)

Hoy `AboutPage` solo tiene un párrafo y una foto. Se agrega debajo una **línea de tiempo** con dos columnas (Experiencia | Educación) que usa los logos que ya existen en `assets/`:

| Puesto | Lugar | Periodo | Logo |
|---|---|---|---|
| Desarrollador Móvil | CONTAITSCCH (proyecto propio) | 2026 | — |
| Desarrollador Full Stack | JEEMA (proyecto propio) | 2025 – Actualidad | `jemae1.png` u otro nuevo |
| Desarrollador Web Full Stack | Freelance | 2024 – Actualidad | — |
| Auxiliar de Sistemas | Cooperativa Suljaa | 2024 | — |
| Desarrollador Web (prácticas) | Proyecto freelance | 2023 | — |
| Residencia Profesional | CENIDET, Cuernavaca | 2023 | `cenidet.png` |
| Ing. en TIC | Tec. Superior de la Costa Chica | 2018 – 2024 | `itscch.jpeg` |
| Profesional Técnico Bachiller en Informática | CONALEP 139 | 2015 – 2018 | `conalep.png` |

- **Datos:** `data.experience[]` y `data.education[]` con la forma `{ role, place, period, bullets: string[], logo?: string }`. Las viñetas se copian del CV.
- **Componentes nuevos:** `container/Timeline.tsx` y `components/TimelineItem.tsx`, con su CSS en `styles/container/Timeline.css` y `styles/components/TimelineItem.css`, siguiendo la convención de carpetas espejo.
- **Texto "Hola!":** se reescribe con el *Perfil profesional* del CV, en lugar del texto genérico actual ("soy estudiante…"), que ya no aplica porque terminó la carrera en 2024.
- **Idiomas:** se agrega una línea: Español nativo · Inglés A1 (lectura técnica).

No se crea una ruta nueva, para no saturar el `FloatMenu`.

### 4.5 Página de inicio (`HomePage`)

- **`InformationMe`:** "Desarrollador Web FrontEdn" → "Desarrollador Full Stack y Móvil". El párrafo pasa a ser un resumen de una línea del perfil. El botón "Let's Talk" apunta a `/contact`, que redirige a `/home`; se cambia por `mailto:edwinegq@outlook.com`.
- **`TagElement` del encabezado:** "Desarrollador Web" → "Desarrollador Full Stack".
- **`ProfileCard`:**
  - Subtítulo: "Desarrollador Full Stack y Móvil".
  - `infoItem`: correo, ubicación "Ometepec, Guerrero, México", "Disponible para trabajo remoto", teléfono `(+52) 741 107 3337` (ver P4) y el link `edwinegq-portfolio.netlify.app`.
  - Badges: `['TypeScript', 'React', 'Next.js', 'NestJS', 'React Native', 'PostgreSQL']`.
  - Los datos se mueven a `data.profile` en lugar de estar fijos en el componente.
- **`TecnologiesCounter`:** lee de `data.stats`, con los valores `2+ años de experiencia`, `30+ cursos aprobados (Platzi)` y `500+ commits en JEEMA`. Si se prefiere mantener "lenguajes", el valor es `6`.
- **`NavBar`:** se quita el link `/blogs`, que no existe, y el buscador que no hace nada (ver P6). Los links externos pasan de `<Link to>` a `<a href rel="noopener noreferrer">`.

### 4.6 Certificados (`CertificatesPage`)

1. **Sacar el base64 de `data.ts`:** se extraen las 10 imágenes a archivos `src/assets/certificates/*.png` y se importan. `data.ts` baja de ~2.5 MB a ~15 KB, y las imágenes se cargan como assets con hash (cacheables y lazy).
   - Se hace con un script de un solo uso en el scratchpad que decodifica cada data URI. El script **no** se versiona.
2. **Cursos nuevos del CV:** Arquitecturas Limpias (2025), Claude Code (2026), Docker: Fundamentos (2026), Introducción a la IA (2025), Java SE Orientado a Objetos (2023), Introducción a Java SE (2023) y Fundamentos de TypeScript.
   - El modelo permite `image` opcional y `year`. Los cursos sin imagen se muestran como tarjeta de texto hasta que haya captura (ver P3).
3. **Agrupar** con los mismos encabezados del CV: *Arquitectura, IA y DevOps* · *Java y POO* · *TypeScript y React* · *Otros* (Node.js, CSS, Frontend Developer, Spring Security, Spring Data JPA, Full Stack JS).
4. Agregar `<img loading="lazy">` y `key`.

### 4.7 Metadatos (`index.html`)

- `lang="es"`.
- `<title>Edwin García Quiterio · Desarrollador Full Stack y Móvil</title>`.
- `<meta name="description">` con el resumen del perfil, y etiquetas Open Graph básicas (`og:title`, `og:description`, `og:url` = `https://edwinegq-portfolio.netlify.app`).
- Favicon: se reemplaza `vite.svg` por `src/assets/logo.png`, copiado a `public/`.
- Se agrega `public/_redirects` con `/* /index.html 200`, para que Netlify no devuelva 404 al recargar `/works` u otras rutas.

## 5. Cambios técnicos de soporte

| # | Cambio | Motivo |
|---|---|---|
| T1 | Crear `src/utils/types.ts` con `Project`, `Technology`, `SkillGroup`, `TimelineEntry`, `Certificate`, `Profile` y `Stat`; tipar `data` con `satisfies` | `data.ts` va a crecer bastante; con tipos, `tsc -b` detecta campos faltantes |
| T2 | Agregar `key` en todos los `.map()` (`RouterApp`, `WorksPage`, `CertificatesPage`, `SkillList`, `GlobalSkill`) | Elimina los warnings de React |
| T3 | Corregir `Button.tsx` (`onClick={onClick}`) | El bug ya existe y conviene corregirlo si se reutiliza el botón |
| T4 | Completar `pnpm-workspace.yaml` con `allowBuilds: { esbuild: true }` | Sin esto, esbuild no ejecuta su postinstall y el build puede fallar en limpio |
| T5 | Actualizar `README.md` (descripción, stack, comandos, deploy en Netlify) y la sección de datos del `CLAUDE.md` | La documentación debe reflejar el nuevo modelo de datos |

## 6. Plan de implementación (orden y commits)

Cada fase termina con `pnpm build && pnpm lint` en verde y un commit propio.

| Fase | Contenido | Archivos principales | Riesgo |
|---|---|---|---|
| **F0** | CV nuevo + constante `cvUrl` + texto del botón + `pnpm-workspace.yaml` | `public/`, `ProfileCard.tsx`, `data.ts` | Bajo. Se puede publicar sola |
| **F1** | Tipos (T1) + extraer los certificados en base64 a archivos | `types.ts`, `data.ts`, `assets/certificates/` | Medio: se edita un archivo de 2.5 MB. Se hace con un script, no a mano |
| **F2** | Perfil, `stats`, Home (`InformationMe`, `ProfileCard`, `TecnologiesCounter`, `NavBar`) | `data.ts`, `container/*` | Bajo |
| **F3** | Habilidades: íconos nuevos, `skillGroups`, `SkillList` por categoría, `GlobalSkill` con 4 tarjetas | `assets/*.svg`, `SkillList.tsx`, `GlobalSkill.tsx`, CSS | Medio: hay que verificar la cuadrícula con más ítems |
| **F4** | Proyectos: modelo nuevo, JEEMA ×2 + CONTAITSCCH, capturas, UI de destacados, enlaces `<a>` | `data.ts`, `WorksPage.tsx`, `WorksPage.css`, `assets/projects/` | Medio: depende de las capturas (P1) |
| **F5** | Experiencia y educación en `AboutPage` (Timeline) + texto de perfil | `AboutPage.tsx`, `container/Timeline.tsx`, `components/TimelineItem.tsx`, CSS | Bajo |
| **F6** | Certificados agrupados y cursos nuevos | `CertificatesPage.tsx`, `data.ts` | Bajo |
| **F7** | `index.html`, favicon, `_redirects`, README, CLAUDE.md, T2/T3 pendientes | — | Bajo |

## 7. Criterios de aceptación

- [ ] El botón de descarga del CV baja un PDF idéntico (mismo hash) a `CV_Edwin_Garcia_Quiterio (1).pdf`, con el nombre `CV-Edwin-Garcia-Quiterio.pdf`.
- [ ] `/works` muestra primero JEEMA Store Platform, JEEMA Transfer API y CONTAITSCCH, con su tipo, año, highlights, stack y enlaces que abren en una pestaña nueva. La demo de JEEMA muestra las credenciales `edwin` / `admin123`.
- [ ] Ya no aparecen "Control de inventarios" ni enlaces a `edyof-platform-web` / `jemae-platform-web`.
- [ ] `/skills` muestra las 4 tarjetas de §4.3 y todas las habilidades del CV agrupadas por categoría, cada una con su ícono.
- [ ] `/about` muestra el perfil del CV, la línea de tiempo con 6 experiencias y 2 estudios, y los idiomas.
- [ ] `/certificates` muestra los 10 certificados actuales más los 7 cursos nuevos, agrupados.
- [ ] `/home` no contiene "FrontEnd" ni "FrontEdn". Los contadores, badges, link personal y "Let's Talk" corresponden a §4.5.
- [ ] `src/utils/data.ts` pesa menos de 50 KB y no contiene `base64`.
- [ ] `pnpm build` y `pnpm lint` terminan sin errores y la consola del navegador no muestra warnings de `key`.
- [ ] Al recargar directamente `/works` en el deploy de Netlify no hay 404.
- [ ] El título de la pestaña es "Edwin García Quiterio · Desarrollador Full Stack y Móvil".

## 8. Preguntas abiertas

| # | Pregunta | Impacto si no se responde |
|---|---|---|
| **P1** | ¿Puedes pasar capturas de pantalla de JEEMA Store, JEEMA Transfer (p. ej. Swagger o un diagrama) y CONTAITSCCH (pantallas de la app)? | Se usa `jemae1.png` para JEEMA Store y un placeholder genérico (`project.png`) para las otras dos |
| **P2** | ¿Se elimina "Control de inventarios" o se conserva como "versión anterior"? | Se elimina (§4.2) |
| **P3** | ¿Tienes las imágenes de los certificados de Platzi nuevos (Claude Code, Docker, Arquitecturas Limpias, etc.)? | Se muestran como tarjetas de texto, sin imagen |
| **P4** | ¿Quieres publicar tu teléfono en el sitio? Está en el CV, pero el sitio es público e indexable | No se publica. Solo se muestran el correo y LinkedIn |
| **P5** | ¿Los repos `jeema-store-platform-web`, `jeema-transfer-platform-api` y `contaitscch-app` son públicos? | Si alguno es privado, se pone `github: null` y se oculta el ícono |
| **P6** | ¿Se quitan del NavBar el link "Blogs" y el buscador, o se dejan como placeholder? | Se quitan |
