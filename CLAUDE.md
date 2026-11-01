# CLAUDE.md

Portafolio personal de Edwin Garcia Quiterio. Es una SPA estática hecha con React 18, TypeScript y Vite 5. No tiene backend, ni tests, ni librería de estado o de UI.

## Comandos

Gestor de paquetes: **pnpm** (existe `pnpm-lock.yaml`).

```bash
pnpm install
pnpm dev       # Vite en el puerto 5173 con host: true (accesible desde la LAN)
pnpm build     # tsc -b && vite build -> dist/
pnpm lint      # ESLint 9 (flat config)
pnpm preview
```

`pnpm build` corre primero `tsc -b`, y `tsconfig.app.json` tiene `strict`, `noUnusedLocals` y `noUnusedParameters`. Por eso un import o una variable sin usar rompen el build. Para validar cambios, ejecuta `pnpm build` y no solo `pnpm dev`.

## Arquitectura

```
index.html            -> <body class="theme-dark">, carga la fuente Ubuntu desde Google Fonts
src/main.tsx          -> StrictMode + BrowserRouter + CSS globales (styles.css, font-awesome, ubuntu.css)
src/PortfolioApp.tsx  -> <RouterApp/> + <FloatMenu routes={routes}/>
src/router/RouterApp.tsx       -> genera un <Route> por cada entrada de `routes`; cualquier otra ruta redirige a /home
src/portfolio/routes/routes.ts -> FUENTE ÚNICA de rutas: path, Component, name, to, icon (clase de Font Awesome)
src/portfolio/
  pages/       -> una página por ruta (Home, About, Skills, Works, Certificates, Contact), re-exportadas en pages/index.ts
  container/   -> secciones compuestas (NavBar, ProfileCard, FloatMenu, SkillList, InformationMe, ...)
  components/  -> piezas pequeñas y presentacionales (TagElement, Header, Badge, SkillItem, InfoItem, ...)
  styles/      -> CSS plano, con carpetas espejo: components/, container/, pages/
src/utils/data.ts  -> todo el contenido del sitio, validado con `satisfies PortfolioData`
src/utils/types.ts -> tipos del contenido (Profile, Project, SkillGroup, TimelineEntry, CertificateGroup, ...)
src/assets/        -> íconos de tecnologías, logos, capturas (assets/projects/), certificados (assets/certificates/), Font Awesome 4.7 local
public/CV-Edwin-Garcia-Quiterio.pdf -> CV que se descarga desde ProfileCard (ruta en `data.cvUrl`)
public/_redirects  -> fallback SPA para Netlify (`/* /index.html 200`)
```

### Qué contiene `data.ts` y quién lo usa

| Clave | Página / componente |
|---|---|
| `profile`, `stats`, `cvUrl` | Home: `ProfileCard`, `InformationMe`, `TecnologiesCounter`; About |
| `experience`, `education` | About: `Timeline` / `TimelineItem` |
| `globalSkill`, `skillGroups` | Skills: `GlobalSkill`, `SkillList` / `SkillItem` |
| `projects` | Works |
| `certificateGroups` | Certificates |
| `contact` | (sin uso actualmente) |

La fuente de verdad del contenido es el CV de Edwin. El plan de la última actualización está en [spec/01_actualizacion_portafolio_cv_spec.md](spec/01_actualizacion_portafolio_cv_spec.md).

### Cómo agregar cosas

- **Página o ruta nueva:** crea `pages/XPage.tsx`, expórtala desde `pages/index.ts` y agrega una entrada en `routes.ts`. Con eso aparece sola en el router y en el `FloatMenu`, que es la navegación lateral por íconos. `ContactPage` existe pero está vacía y su ruta está comentada en `routes.ts`.
- **Proyecto, certificado, habilidad o experiencia nuevos:** edita `src/utils/data.ts`. Las imágenes se importan como módulos al inicio del archivo (`import x from '../assets/...'`) y se referencian en el objeto `data`. Si falta un campo o sobra uno, `tsc -b` falla gracias al `satisfies`.
  - Proyecto: `{ name, kind: 'web'|'api'|'mobile'|'ui', featured?, year?, description, highlights?, github, deploy, demoCredentials?, picture, tecnologies }`. Con `picture: null` se muestra un bloque alternativo (lo usan las APIs).
  - Habilidad (`SkillEntry`) y entrada de línea de tiempo (`TimelineEntry`): llevan `image`/`logo` **o** `icon` (clase de Font Awesome) cuando no hay logo.
  - Certificado: `{ title, year?, image? }`. Sin `image` se muestra como tarjeta de texto.
- **Íconos de tecnologías nuevos:** SVG de [devicon](https://github.com/devicons/devicon) (MIT) o [Simple Icons](https://simpleicons.org) (CC0), guardados en `src/assets/`. No se cargan desde CDN.
- **Estilos:** cada componente importa su propio CSS (`import '../styles/pages/WorksPage.css'`). No hay CSS Modules, así que todas las clases son globales y conviene darles nombres específicos. Los colores salen de variables en `src/styles.css` (`--dark-color-*`, `--light-color-*`, `--green-color-100`). Se usa nesting nativo de CSS (`&:hover`). También hay muchos estilos inline en el JSX.
- **Íconos:** Font Awesome **4.7** (`<i className="fa fa-github">`), servido localmente desde `src/assets/font-awesome-4.7.0`. Los nombres de íconos de FA5 o FA6 no funcionan.

### Convenciones

- Componentes funcionales como arrow functions con **export nombrado** (`export const HomePage = () => ...`). No se usan default exports.
- Las props se tipan con `interface Props` en el mismo archivo.
- `TagElement` muestra texto con estilo de etiqueta de código (`<DEV/>`, `<p>`). Es el motivo visual de todo el sitio.
- El texto de la interfaz está en español. Hay algunos nombres en inglés o con erratas que se conservan a propósito porque ya están en uso (`tecnologies`, `TecnologiesCounter`).

## Cuidado con esto

- **Contenedores de ancho o alto fijo.** Muchas tarjetas tienen medidas fijas (por ejemplo `.profile-card` mide 250 px). Si agregas contenido más largo, revisa que los flex tengan `flex-wrap` y comprueba la página visualmente; el build no detecta desbordes.
- **Responsive incompleto.** Solo hay un breakpoint (`max-width: 480px`) con márgenes fijos, y varias páginas se desbordan en móvil. Es un problema anterior a la actualización de 2026 que todavía no se ha resuelto.
- **Captura de pantallas con Chrome headless:** en Windows, Chrome no baja de unos 500 px de ancho, así que `--window-size=390,...` no simula un móvil. Para móvil usa el modo dispositivo de DevTools.
- `pnpm build` modifica `tsconfig.app.tsbuildinfo` y `tsconfig.node.tsbuildinfo`, que están versionados. No los incluyas en los commits (`git restore` después del build).
- `ContactPage` está vacía y su ruta está comentada. "Let's Talk" abre `mailto:`.
- El enlace a YouTube del `NavBar` no aparece en el CV; se conserva por decisión pendiente.
