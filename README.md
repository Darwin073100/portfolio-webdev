# Portafolio · Edwin García Quiterio

Portafolio personal de **Edwin García Quiterio**, desarrollador Full Stack y Móvil (TypeScript · React · Next.js · NestJS · React Native · PostgreSQL).

🔗 **En línea:** [edwinegq-portfolio.netlify.app](https://edwinegq-portfolio.netlify.app)

## Secciones

| Ruta | Contenido |
|---|---|
| `/home` | Perfil, resumen, indicadores y descarga del CV |
| `/about` | Perfil profesional, idiomas, experiencia y educación |
| `/skills` | Habilidades agrupadas por área |
| `/works` | Proyectos, con demo y código cuando están disponibles |
| `/certificates` | Certificados de Platzi agrupados por tema |

## Stack

React 18 · TypeScript · Vite 5 · React Router 6 · CSS plano · Font Awesome 4.7

Todo el contenido vive en [`src/utils/data.ts`](src/utils/data.ts), tipado con [`src/utils/types.ts`](src/utils/types.ts). Para actualizar proyectos, habilidades, experiencia o certificados solo hay que editar ese archivo.

## Desarrollo

Requiere Node.js y [pnpm](https://pnpm.io).

```bash
pnpm install
pnpm dev       # http://localhost:5173
pnpm build     # verifica tipos y genera dist/
pnpm lint
pnpm preview   # sirve el build de dist/
```

## Despliegue

El sitio está pensado para Netlify: el comando de build es `pnpm build` y el directorio de publicación es `dist/`. El archivo [`public/_redirects`](public/_redirects) redirige todas las rutas a `index.html`, para que recargar una ruta como `/works` no devuelva 404.

## Créditos

Íconos de tecnologías de [devicon](https://github.com/devicons/devicon) (MIT) y [Simple Icons](https://simpleicons.org) (CC0). Íconos de interfaz de [Font Awesome 4.7](https://fontawesome.com/v4/) (SIL OFL / MIT).
