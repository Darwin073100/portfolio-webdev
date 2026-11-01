import javaIcon from '../assets/java.svg';
import springIcon from '../assets/spring.svg';
import sjfIcon from '../assets/jsf-logo.png';
import ejbIcon from '../assets/ejb.png';

import javascriptIcon from '../assets/javascript.svg';
import nodeIcon from '../assets/nodejs.svg';
import reactIcon from '../assets/react.svg';
import expressIcon from '../assets/express.svg';
import viteIcon from '../assets/vite.svg';
import nestIcon from '../assets/nestjs.png';
import nextIcon from '../assets/nextjs.png';
import typescriptIcon from '../assets/typescript.svg';
import tailwindIcon from '../assets/tailwindcss.svg';
import expoIcon from '../assets/expo.svg';

import firebaseIcon from '../assets/firebase.svg';
import dbIcon from '../assets/db.svg';
import postgressqlIcon from '../assets/postgresql.svg';
import mysqlIcon from '../assets/mysql.svg';
import sqlserverIcon from '../assets/sqlserver.svg';
import sqliteIcon from '../assets/sqlite.svg';
import supabaseIcon from '../assets/supabase.svg';
import typeormIcon from '../assets/typeorm.svg';

import linuxIcon from '../assets/linux.svg';
import ubuntuIcon from '../assets/ubuntu.svg';
import jestIcon from '../assets/jest.svg';
import dockerIcon from '../assets/docker.svg';
import gitIcon from '../assets/git.svg';
import githubIcon from '../assets/github.svg';
import vercelIcon from '../assets/vercel.svg';

import html5 from '../assets/html5.svg';
import css3 from '../assets/css3.svg';
import bootstrapIcon from '../assets/bootstrap.svg';
import jeemaStore from '../assets/projects/jeema-store.png';
import contaitscch from '../assets/projects/contaitscch.png';

import cenidetLogo from '../assets/cenidet.png';
import itscchLogo from '../assets/itscch.jpeg';
import conalepLogo from '../assets/conalep.png';

import facebook from '../assets/projects/facebook.png';
import maqueta from '../assets/projects/maqueta-profile.png';
import youtube from '../assets/projects/youtube.png';
import shopsystem from '../assets/projects/shop.png';
import springReact from '../assets/projects/spring-react.png';
import gifexpert from '../assets/projects/gifexpert.png';
import journalapp from '../assets/projects/journalapp.png';

import certFullStackDeveloperConJavascript from '../assets/certificates/full-stack-developer-con-javascript.png';
import certPatronesDeRenderYComposicion from '../assets/certificates/patrones-de-render-y-composicion.png';
import certManejoProfesionalDelEstado from '../assets/certificates/manejo-profesional-del-estado.png';
import certMaquetacionEnCss from '../assets/certificates/maquetacion-en-css.png';
import certFrontendDeveloper from '../assets/certificates/frontend-developer.png';
import certCursoDeJavaSpring from '../assets/certificates/curso-de-java-spring.png';
import certSpringDataJpaBasesDeDatos from '../assets/certificates/spring-data-jpa-bases-de-datos.png';
import certJavaSpringSecurity from '../assets/certificates/java-spring-security.png';
import certBackendConNodeJsApiRest from '../assets/certificates/backend-con-node-js-api-rest.png';
import certBackendConNodeJsDbPostgresql from '../assets/certificates/backend-con-node-js-db-postgresql.png';

import type { PortfolioData } from './types';

const data = {
    name: 'Edwin',
    surname: 'Garcia Quiterio',
    cvUrl: '/CV-Edwin-Garcia-Quiterio.pdf',
    profile: {
        title: 'Desarrollador Full Stack y Móvil',
        headline: 'Desarrollador Full Stack',
        summary: 'Construyo aplicaciones web y móviles con TypeScript, React, Next.js, NestJS y React Native, aplicando Clean Architecture y pruebas con Jest.',
        about: 'Soy desarrollador Full Stack con 2 años de experiencia construyendo aplicaciones web con TypeScript, React, Next.js y NestJS sobre PostgreSQL, y apps móviles con React Native, con una base sólida en programación orientada a objetos con Java. Aplico Clean Architecture, diseño APIs REST y escribo pruebas con Jest. Integro Claude Code en mi flujo de trabajo para acelerar el desarrollo sin sacrificar calidad. Actualmente desarrollo JEEMA, una plataforma de gestión comercial con más de 500 commits.',
        languages: 'Español nativo · Inglés básico (A1), con comprensión de lectura de documentación técnica',
        email: 'edwinegq@outlook.com',
        badges: ['TypeScript', 'React', 'Next.js', 'NestJS', 'React Native', 'PostgreSQL'],
        info: [
            {
                id: 1,
                icon: 'fa-envelope-o',
                value: 'edwinegq@outlook.com'
            },
            {
                id: 2,
                icon: 'fa-map-marker',
                value: 'Ometepec, Guerrero, México'
            },
            {
                id: 3,
                icon: 'fa-briefcase',
                value: 'Disponible para trabajo remoto'
            },
            {
                id: 4,
                icon: 'fa-link',
                value: 'edwinegq-portfolio.netlify.app'
            },
        ]
    },
    stats: [
        {
            value: '2+',
            label: 'Años de experiencia'
        },
        {
            value: '30+',
            label: 'Cursos aprobados en Platzi'
        },
        {
            value: '500+',
            label: 'Commits en JEEMA'
        },
    ],
    experience: [
        {
            role: 'Desarrollador Móvil',
            place: 'CONTAITSCCH (proyecto propio)',
            period: '2026',
            icon: 'fa-mobile',
            bullets: [
                'App móvil para aprender contabilidad (niveles, exámenes, XP, rachas y ranking) con React Native, Expo y TypeScript.',
                'Arquitectura offline-first con SQLite y sincronización con Supabase, Clean Architecture por features y pruebas con Jest.',
            ]
        },
        {
            role: 'Desarrollador Full Stack',
            place: 'JEEMA (proyecto propio)',
            period: '2025 – Actualidad',
            icon: 'fa-shopping-cart',
            bullets: [
                'Diseñé y desarrollé una plataforma web de gestión comercial (productos, inventario, ventas y compras) con Next.js, React 19, TypeScript, TypeORM y PostgreSQL.',
                'Construí una API REST con NestJS para traspasos de mercancía, con entorno local contenerizado mediante Docker Compose.',
                'Apliqué Clean Architecture en ambos proyectos, con pruebas unitarias y e2e en Jest y migraciones de TypeORM.',
                'Desplegué en Vercel, documenté la migración de Next.js 15 a 16 e integré Claude Code (subagentes y CLAUDE.md) en el desarrollo.',
            ]
        },
        {
            role: 'Desarrollador Web Full Stack',
            place: 'Freelance',
            period: '2024 – Actualidad',
            icon: 'fa-laptop',
            bullets: [
                'Levanté requerimientos con historias de usuario y mockups; desarrollé interfaces en React/Next.js y servicios en NestJS.',
            ]
        },
        {
            role: 'Auxiliar de Sistemas',
            place: 'Cooperativa Suljaa',
            period: '2024',
            icon: 'fa-wrench',
            bullets: [
                'Soporte técnico a matriz y sucursales, administración de red y mantenimiento de equipos de cómputo.',
            ]
        },
        {
            role: 'Desarrollador Web (prácticas)',
            place: 'Proyecto freelance',
            period: '2023',
            icon: 'fa-code',
            bullets: [
                'Sistema de administración de archivos con Java (programación orientada a objetos), JSF, EJB y PostgreSQL.',
            ]
        },
        {
            role: 'Residencia Profesional',
            place: 'CENIDET, Cuernavaca, Morelos',
            period: '2023',
            logo: cenidetLogo,
            bullets: [
                'Desarrollé una aplicación móvil de mensajería por voz con Java (POO) y Android Studio.',
            ]
        },
    ],
    education: [
        {
            role: 'Ingeniería en Tecnologías de la Información y Comunicaciones',
            place: 'Tec. Superior de la Costa Chica',
            period: '2018 – 2024',
            logo: itscchLogo,
            bullets: []
        },
        {
            role: 'Profesional Técnico Bachiller en Informática',
            place: 'CONALEP 139, Ometepec, Gro.',
            period: '2015 – 2018',
            logo: conalepLogo,
            bullets: []
        },
    ],
    contact:[
        {
            id: 1,
            name: 'Linkedin',
            url: 'https://www.linkedin.com/in/edwin310700/',
            img: 'https://cdn.icon-icons.com/icons2/805/PNG/512/linkedin_icon-icons.com_65929.png'
        },
        {
            id: 2,
            name: 'Github',
            url: 'https://github.com/Darwin073100',
            img: 'https://cdn.icon-icons.com/icons2/836/PNG/512/Github_icon-icons.com_66788.png'
        },
        {
            id: 2,
            name: 'Correo electronico',
            url: 'edwinegq@outlook.com',
            img: 'https://cdn.icon-icons.com/icons2/72/PNG/256/email_14410.png'
        },
        {
            id: 3,
            name: 'Numero telefonico',
            url: '+52 7411073337',
            img: 'https://cdn.icon-icons.com/icons2/72/PNG/256/mobile_phone_14388.png'
        }
    ],
    certificates:[
        {
            title: 'Full Stack Developer con JavaScript',
            image: certFullStackDeveloperConJavascript
        },
        {
            title: 'Patrones de Render y Composición',
            image: certPatronesDeRenderYComposicion
        },
        {
            title: 'Manejo Profesional del Estado',
            image: certManejoProfesionalDelEstado
        },
        {
            title: 'Maquetación en CSS',
            image: certMaquetacionEnCss
        },
        {
            title: 'Frontend Developer',
            image: certFrontendDeveloper
        },
        {
            title: 'Curso de Java Spring',
            image: certCursoDeJavaSpring
        },
        {
            title: 'Spring Data JPA: Bases de Datos',
            image: certSpringDataJpaBasesDeDatos
        },
        {
            title: 'Java Spring Security',
            image: certJavaSpringSecurity
        },
        {
            title: 'Backend con Node.js: API REST',
            image: certBackendConNodeJsApiRest
        },
        {
            title: 'Backend con Node.js: DB PostgreSQL',
            image: certBackendConNodeJsDbPostgresql
        }
    ],
    globalSkill:[
        {
            title: 'Frontend',
            tools:['TypeScript','React 19','Next.js','Tailwind CSS','CSS Grid / Flexbox'],
            icon: 'fa-television'
        },
        {
            title: 'Backend',
            tools:['NestJS','Node.js','Express.js','APIs REST','Spring Boot','JSF / EJB'],
            icon: 'fa-code'
        },
        {
            title: 'Móvil',
            tools:['React Native','Expo','Expo Router','NativeWind','SQLite','Supabase'],
            icon: 'fa-mobile'
        },
        {
            title: 'Arquitectura, Testing y DevOps',
            tools:['Clean Architecture','POO','Jest','Docker','Git / GitHub','Vercel','Claude Code'],
            icon: 'fa-cogs'
        }
    ],
    skillGroups:[
        {
            title: 'Lenguajes',
            icon: 'fa-code',
            skills: [
                { name: 'TypeScript', image: typescriptIcon },
                { name: 'JavaScript', image: javascriptIcon },
                { name: 'Java', image: javaIcon },
                { name: 'SQL', image: dbIcon },
                { name: 'HTML', image: html5 },
                { name: 'CSS', image: css3 },
            ]
        },
        {
            title: 'Frontend',
            icon: 'fa-television',
            skills: [
                { name: 'React.js', image: reactIcon },
                { name: 'Next.js', image: nextIcon },
                { name: 'Tailwind CSS', image: tailwindIcon },
                { name: 'Bootstrap', image: bootstrapIcon },
            ]
        },
        {
            title: 'Móvil',
            icon: 'fa-mobile',
            skills: [
                { name: 'React Native', image: reactIcon },
                { name: 'Expo', image: expoIcon },
                { name: 'NativeWind', icon: 'fa-paint-brush' },
            ]
        },
        {
            title: 'Backend',
            icon: 'fa-server',
            skills: [
                { name: 'NestJS', image: nestIcon },
                { name: 'Node.js', image: nodeIcon },
                { name: 'Express.js', image: expressIcon },
                { name: 'Spring Boot', image: springIcon },
                { name: 'JSF', image: sjfIcon },
                { name: 'EJB', image: ejbIcon },
            ]
        },
        {
            title: 'Bases de datos',
            icon: 'fa-database',
            skills: [
                { name: 'PostgreSQL', image: postgressqlIcon },
                { name: 'MySQL', image: mysqlIcon },
                { name: 'SQL Server', image: sqlserverIcon },
                { name: 'SQLite', image: sqliteIcon },
                { name: 'Supabase', image: supabaseIcon },
                { name: 'TypeORM', image: typeormIcon },
                { name: 'Firebase', image: firebaseIcon },
            ]
        },
        {
            title: 'Testing y DevOps',
            icon: 'fa-cogs',
            skills: [
                { name: 'Jest', image: jestIcon },
                { name: 'Docker', image: dockerIcon },
                { name: 'Git', image: gitIcon },
                { name: 'GitHub', image: githubIcon },
                { name: 'Vercel', image: vercelIcon },
                { name: 'Linux', image: linuxIcon },
                { name: 'Ubuntu', image: ubuntuIcon },
            ]
        },
        {
            title: 'IA',
            icon: 'fa-magic',
            skills: [
                { name: 'Claude Code', icon: 'fa-magic' },
            ]
        },
    ],
    projects:[
        {
            name: 'JEEMA Store Platform',
            kind: 'web',
            featured: true,
            year: '2025 – Actualidad',
            description: 'Plataforma web de gestión comercial para controlar productos, inventario, ventas y compras de un negocio con varias sucursales.',
            highlights: [
                'Clean Architecture con pruebas unitarias y e2e en Jest',
                'Entidades y migraciones con TypeORM sobre PostgreSQL',
                'Migración documentada de Next.js 15 a 16, desplegada en Vercel',
                'Más de 500 commits, con desarrollo asistido por Claude Code',
            ],
            github: 'https://github.com/Darwin073100/jeema-store-platform-web',
            deploy: 'https://jeema-store-platform-web.vercel.app',
            demoCredentials: { user: 'edwin', password: 'admin123' },
            picture: jeemaStore,
            tecnologies:[
                { name: 'TypeScript', picture: typescriptIcon },
                { name: 'Next.js', picture: nextIcon },
                { name: 'React', picture: reactIcon },
                { name: 'TypeORM', picture: typeormIcon },
                { name: 'PostgreSQL', picture: postgressqlIcon },
                { name: 'Jest', picture: jestIcon },
                { name: 'Vercel', picture: vercelIcon },
            ]
        },
        {
            name: 'JEEMA Transfer API',
            kind: 'api',
            featured: true,
            year: '2025 – Actualidad',
            description: 'API REST para registrar y controlar los traspasos de mercancía entre sucursales de la plataforma JEEMA.',
            highlights: [
                'Construida con NestJS siguiendo Clean Architecture',
                'Entorno local contenerizado con Docker Compose',
                'Pruebas unitarias y e2e con Jest',
            ],
            github: 'https://github.com/Darwin073100/jeema-transfer-platform-api',
            deploy: null,
            picture: null,
            tecnologies:[
                { name: 'TypeScript', picture: typescriptIcon },
                { name: 'NestJS', picture: nestIcon },
                { name: 'TypeORM', picture: typeormIcon },
                { name: 'PostgreSQL', picture: postgressqlIcon },
                { name: 'Docker', picture: dockerIcon },
                { name: 'Jest', picture: jestIcon },
            ]
        },
        {
            name: 'CONTAITSCCH',
            kind: 'mobile',
            featured: true,
            year: '2026',
            description: 'App móvil para aprender contabilidad jugando: niveles, exámenes, puntos de experiencia (XP), rachas y ranking.',
            highlights: [
                'Offline-first con SQLite y sincronización con Supabase',
                'Clean Architecture organizada por features',
                'Pruebas con Jest',
            ],
            github: 'https://github.com/Darwin073100/contaitscch-app',
            deploy: null,
            picture: contaitscch,
            tecnologies:[
                { name: 'TypeScript', picture: typescriptIcon },
                { name: 'React Native', picture: reactIcon },
                { name: 'Expo', picture: expoIcon },
                { name: 'SQLite', picture: sqliteIcon },
                { name: 'Supabase', picture: supabaseIcon },
                { name: 'Jest', picture: jestIcon },
            ]
        },
        {
            name: 'Journal App',
            kind: 'web',
            description: 'Aplicación web conectada a una base de datos donde registras tus actividades diarias. Es necesario registrarse e iniciar sesión.',
            github: 'https://github.com/Darwin073100/journal-app',
            deploy: 'https://journalappegq.netlify.app/',
            picture: journalapp,
            tecnologies:[
                {
                    name: 'JavaScript',
                    picture: javascriptIcon
                },
                {
                    name: 'React',
                    picture: reactIcon
                },
                {
                    name: 'Vite',
                    picture: viteIcon
                },
                {
                    name: 'Firestore',
                    picture: firebaseIcon
                }
            ]
        },
        {
            name: 'Gif Expert',
            kind: 'web',
            description: 'Buscador de GIFs por tema. Al iniciar muestra GIFs de anime como ejemplo.',
            github: 'https://github.com/Darwin073100/gif-expert-app',
            deploy: 'https://gifexpertappegq.netlify.app/',
            picture: gifexpert,
            tecnologies:[
                {
                    name: 'JavaScript',
                    picture: javascriptIcon
                },
                {
                    name: 'React',
                    picture: reactIcon
                },
                {
                    name: 'Vite',
                    picture: viteIcon
                }
            ]
        },
        {
            name: 'Shop System',
            kind: 'web',
            description: 'Simulación de un sistema de administración para gestionar empleados, productos, clientes, proveedores y otras entidades del negocio.',
            github: 'https://github.com/Darwin073100/ShopSystem',
            deploy: null,
            picture: shopsystem,
            tecnologies:[
                {
                    name: 'Java',
                    picture: javaIcon
                },
                {
                    name: 'Java ServerFaces',
                    picture: sjfIcon
                },
                {
                    name: 'MySQL',
                    picture: mysqlIcon
                }
            ]
        },
        {
            name: 'CRUD Spring Boot & PostgreSQL (API REST)',
            kind: 'api',
            description: 'API REST construida con Spring Boot que hace CRUD sobre una base de datos PostgreSQL y es consumida por un frontend en React.js.',
            github: 'https://github.com/Darwin073100/Crud-BackEnd-StringBoot/tree/react',
            deploy: null,
            picture: springReact,
            tecnologies:[
                {
                    name: 'Java',
                    picture: javaIcon
                },
                {
                    name: 'SpringBoot',
                    picture: springIcon
                },
                {
                    name: 'PostgreSQL',
                    picture: postgressqlIcon
                },
            ]
        },
        {
            name: 'Clon del login de Facebook',
            kind: 'ui',
            description: 'Maquetación de la pantalla de inicio de sesión de Facebook, adaptada solo a escritorio. Fue un proyecto de práctica de mis inicios con HTML y CSS.',
            github: 'https://github.com/Darwin073100/projects-ui',
            deploy: 'https://darwin073100.github.io/projects-ui/facebook/pages/login.html',
            picture: facebook,
            tecnologies:[
                {
                    name: 'HTML',
                    picture: html5
                },
                {
                    name: 'CSS',
                    picture: css3
                }
            ]
        },
        {
            name: 'Maquetación de un portafolio',
            kind: 'ui',
            description: 'Maquetación de un portafolio con herramientas, información personal y proyectos realizados. Es el diseño base de este mismo sitio web.',
            github: 'https://github.com/Darwin073100/projects-ui',
            deploy: 'https://darwin073100.github.io/projects-ui/profile/',
            picture: maqueta,
            tecnologies:[
                {
                    name: 'HTML',
                    picture: html5
                },
                {
                    name: 'CSS',
                    picture: css3
                },
                {
                    name: 'JavaScript',
                    picture: javascriptIcon
                }
            ]
        },
        {
            name: 'Clon del home de YouTube',
            kind: 'ui',
            description: 'Clon de la página de inicio de YouTube con el catálogo de videos y shorts. Está publicado y puedes verlo en línea.',
            github: 'https://github.com/Darwin073100/youtube-clone',
            deploy: 'https://ephemeral-sunshine-a179ce.netlify.app/',
            picture: youtube,
            tecnologies:[
                {
                    name: 'HTML',
                    picture: html5
                },
                {
                    name: 'CSS',
                    picture: css3
                },
                {
                    name: 'JavaScript',
                    picture: javascriptIcon
                },
                {
                    name: 'React.js',
                    picture: reactIcon
                }
            ]
        }
    ]
} satisfies PortfolioData;

export { data };