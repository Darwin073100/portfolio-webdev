import { AboutPage, CertificatesPage, ContactPage, HomePage, SkillsPage, WorksPage } from "../pages";

interface RoutesApp{
    path: string;
    Component: ()=> JSX.Element;
    name: string;
    to: string;
    icon: string;
}

export const routes: RoutesApp[] = [
    {
        path: 'home',
        Component: HomePage,
        name: 'Home',
        to: '/home',
        icon: 'fa-home',
    },
    {
        path: 'about',
        Component: AboutPage,
        name: 'About',
        to: '/about',
        icon: 'fa-user'
    },
    {
        path: 'skills',
        Component: SkillsPage,
        name: 'Skills',
        to: '/skills',
        icon: 'fa-code'
    },
    {
        path: 'works',
        Component: WorksPage,
        name: 'Works',
        to: '/works',
        icon: 'fa-television'
    },
    {
        path: 'certificates',
        Component: CertificatesPage,
        name: 'Certificates',
        to: '/certificates',
        icon: 'fa-certificate',
    },
    // {
    //     path: 'contact',
    //     Component: ContactPage,
    //     name: 'Contact',
    //     to: '/contact',
    //     icon: 'fa-envelope-o'
    // }
];