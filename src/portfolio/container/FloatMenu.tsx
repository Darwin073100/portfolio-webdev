import '../styles/components/FloatMenu.css';
import { routes as routesIcon } from "../routes/routes"
import { NavLink, useNavigate } from 'react-router-dom';

export const FloatMenu = () => {
  return (
    <div className="float-menu">
      { routesIcon.map( route =>(
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
