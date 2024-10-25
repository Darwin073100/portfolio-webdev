import '../styles/components/FloatMenu.css';
import { NavLink } from 'react-router-dom';

type FloatMenuProps = {
  to: string,
  icon: string,
}

interface Props{
  routes: FloatMenuProps[]
}

export const FloatMenu = ({ routes }: Props) => {
  return (
    <div className="float-menu">
      { routes.map( route =>(
        <NavLink
          to={route.to}
          className={({ isActive })=> `float-menu-item ${ isActive ?'float-menu-item-active': ''}` } 
          key={route.to} >
            <i className={`fa ${route.icon}`} aria-hidden="true"></i>
        </NavLink>
      ))}
    </div>
  )
}
