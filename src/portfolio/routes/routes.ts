import { HomePage } from "../pages/HomePage";

interface RoutesApp{
    path: string,
    Component: ()=> JSX.Element,
    name: string
    to: string
}
export const routes: RoutesApp[] = [
    {
        path: 'home',
        Component: HomePage,
        name: 'Home',
        to: '/home'
    }
];