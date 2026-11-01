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
src/utils/data.ts -> todo el contenido: contact, certificates, globalSkill, tools, projects
src/assets/       -> imágenes, íconos de tecnologías, capturas de proyectos (assets/projects/), Font Awesome 4.7 local
public/CV-Edwin-Garcia.pdf -> CV que se descarga desde ProfileCard
```

### Cómo agregar cosas

- **Página o ruta nueva:** crea `pages/XPage.tsx`, expórtala desde `pages/index.ts` y agrega una entrada en `routes.ts`. Con eso aparece sola en el router y en el `FloatMenu`, que es la navegación lateral por íconos. `ContactPage` existe pero está vacía y su ruta está comentada en `routes.ts`.
- **Proyecto, certificado o tecnología nuevos:** edita `src/utils/data.ts`. Las imágenes se importan como módulos al inicio del archivo (`import x from '../assets/...'`) y se referencian en el objeto `data`. Los proyectos tienen esta forma: `{ name, description, github, deploy?, picture, tecnologies: [{ name, picture }] }`.
- **Estilos:** cada componente importa su propio CSS (`import '../styles/pages/WorksPage.css'`). No hay CSS Modules, así que todas las clases son globales y conviene darles nombres específicos. Los colores salen de variables en `src/styles.css` (`--dark-color-*`, `--light-color-*`, `--green-color-100`). Se usa nesting nativo de CSS (`&:hover`). También hay muchos estilos inline en el JSX.
- **Íconos:** Font Awesome **4.7** (`<i className="fa fa-github">`), servido localmente desde `src/assets/font-awesome-4.7.0`. Los nombres de íconos de FA5 o FA6 no funcionan.

### Convenciones

- Componentes funcionales como arrow functions con **export nombrado** (`export const HomePage = () => ...`). No se usan default exports.
- Las props se tipan con `interface Props` en el mismo archivo.
- `TagElement` muestra texto con estilo de etiqueta de código (`<DEV/>`, `<p>`). Es el motivo visual de todo el sitio.
- El texto de la interfaz está en español. Hay algunos nombres en inglés o con erratas que se conservan a propósito porque ya están en uso (`tecnologies`, `TecnologiesCounter`).

## Cuidado con esto

- **`src/utils/data.ts` pesa unos 2.5 MB.** Los certificados están incrustados como data URIs en base64, en líneas de más de 200 KB cada una. No leas ni hagas `cat` del archivo completo: usa `Grep` o lee rangos de líneas concretos y evita esas líneas. Los certificados nuevos deberían ir como archivos en `src/assets/` e importarse, no en base64.
- Varios `.map()` no tienen `key`: `WorksPage`, `CertificatesPage`, `SkillList`, `GlobalSkill` y `RouterApp`.
- `components/Button.tsx` no llama a `onClick`: el código es `onClick={() => onClick}`.
- `NavBar` enlaza a `/blogs`, que no existe y termina redirigiendo a `/home`. El buscador de `NavBar` es solo visual.
- Algunos datos están escritos directo en los componentes en vez de venir de `data.ts`, por ejemplo `ProfileCard` (email, ubicación, badges) y los contadores de `TecnologiesCounter`.
- El `<title>` de `index.html` sigue siendo "Vite + React + TS" y el `README.md` es el de la plantilla de Vite.
- `pnpm-workspace.yaml` (sin trackear en git) tiene un placeholder `allowBuilds: esbuild: set this to true or false` que pnpm generó. Hay que poner `true` para que esbuild ejecute su postinstall.
- Como es un SPA con `BrowserRouter`, el hosting necesita un fallback a `index.html`, por ejemplo un rewrite en Vercel o Netlify. El repo no incluye configuración de deploy.
