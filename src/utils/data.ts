import javaIcon from '../assets/java.svg';
import springIcon from '../assets/spring.svg';
import sjfIcon from '../assets/jsf-logo.png';
import ejbIcon from '../assets/ejb.png';

import javascriptIcon from '../assets/javascript.svg';
import nodeIcon from '../assets/nodejs.svg';
import reactIcon from '../assets/react.svg';
import expressIcon from '../assets/express.svg';
import viteIcon from '../assets/vite.svg';

import firebaseIcon from '../assets/firebase.svg';
import dbIcon from '../assets/db.svg';
import postgressqlIcon from '../assets/postgresql.svg';
import mysqlIcon from '../assets/mysql.svg';
import sqlserverIcon from '../assets/sqlserver.svg';

import linuxIcon from '../assets/linux.svg';
import ubuntuIcon from '../assets/ubuntu.svg';

import html5 from '../assets/html5.svg';
import css3 from '../assets/css3.svg';
import bootrstrap from '../assets/bootstrap.svg'

import facebook from '../assets/projects/facebook.png';
import maqueta from '../assets/projects/maqueta-profile.png';
import youtube from '../assets/projects/youtube.png';
import shopsystem from '../assets/projects/shop.png';
import springReact from '../assets/projects/spring-react.png';
import gifexpert from '../assets/projects/gifexpert.png';
import journalapp from '../assets/projects/journalapp.png';
import React from 'react';


const data = {
    name: 'Edwin',
    surname: 'Garcia Quiterio',
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
    globalSkill:[
        {
            title: 'Desarrollo FrontEnd',
            tools:['HTML','CSS','JS','React'],
            icon: 'fa-television'
        },
        {
            title: 'Desarrollo BackEnd',
            tools:['JS','Express','Java','SpringBoot'],
            icon: 'fa-code'
        }
    ],
    tools:[
        {
            skill: 'HTML',
            image: html5,
            style:{
                color: '#e44f26',
                backgroundColor: '#e44f26'
            },
            tools: []
        },
        {
            skill: 'CSS',
            image: css3,
            style:{
                color: 'rgb(28 114 182)',
                backgroundColor: 'rgb(28 114 182)'
            },
            tools: [
                {
                    skill: 'Bootrstrap',
                    image: bootrstrap
                }
            ]
        },
        {
            skill: 'JavaScript',
            image: javascriptIcon,
            style:{
                color: 'rgb(247 223 30)',
                backgroundColor: 'rgb(247 223 30)'
            },
            tools:[
                {
                    skill: 'Node.js',
                    image: nodeIcon
                },
                {
                    skill: 'React.js',
                    image: reactIcon,
                    style:{
                        color: 'white',
                        backgroundColor: 'white'
                    }
                },
                {
                    skill: 'Express.js',
                    image: expressIcon
                },
            ]
        },
        {
            skill: 'Java',
            image: javaIcon,
            style:{
                color: 'white',
                backgroundColor: 'white'
            },
            tools:[
                {
                    skill: 'Spring Boot',
                    image: springIcon
                },
                {
                    skill: 'Java ServerFaces',
                    image: sjfIcon
                },
                {
                    skill: 'Enterprice JavaBeans',
                    image: ejbIcon
                },
            ]
        },
        {
            skill: 'Bases de datos',
            image: dbIcon,
            style:{
                color: 'white',
                backgroundColor: 'white'
            },
            tools:[
                {
                    skill: 'PostgreSQL',
                    image: postgressqlIcon
                },
                {
                    skill: 'MySQL',
                    image: mysqlIcon
                },
                {
                    skill: 'Microsoft SQL Server',
                    image: sqlserverIcon
                },
            ]
        },
        {
            skill: 'Linux',
            image: linuxIcon,
            style:{
                color: 'white',
                backgroundColor: 'white'
            },
            tools:[
                {
                    skill: 'Ubuntu',
                    image: ubuntuIcon
                }
            ]
        },

    ],
    projects:[
        {
            name: 'Journal App',
            description: 'Esta aplicacion web esta conectada a una DB, donde se alojan las actividades diarias que una registra, deberas registrarte y loguearte antes.',
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
            description: 'Este proyecto está construido para buscar Gifs de los temas que pongamos en el buscador, al inicio muestra ya gif de una anime.',
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
            description: 'En este proyecto vamos a controlar distintas entidades y procesos, es simular un sistema de administración, donde podamos tener Empleados, Productos, Clientes, Proveedores, entre otras entidades mas que se muestran en el diagrama mas adelante.',
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
            name: 'Crud SpringBoot & PostgreSQL (API REST)',
            description: 'Construccion de una API REST con SpringBoot haciendo CRUD a una DB en PostgreSQL, esta api es consumida por react.js',
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
            name: 'Clon login de facebook',
            description: 'Es la maquetación de la pantalla del login de Facebook, esta solo adaptada para pantallas Desktop, ya que fue de practica, cuando estaba empezando a diseñar con html y css.',
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
            description: 'Hicimos un proyecto donde pudieramos plasmar las herramientas que manejamos, información personal, como tambien proyectos que hemos realizado, si podemos ver es la maquetación de este mismo sitio web.',
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
            name: 'Clon del home de Youtube',
            description: 'En este proyecto vamos a ver un clon de la pagina Home de youtube, donde esta el catalago de videos y shorts, puedes ir a verlo, ya que esta publicado.',
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
}

export { data };