import { Link, NavLink } from "react-router-dom"
import { NavBarItem } from "../container/NavBarItem"
import { TagElement } from "../components/TagElement"

export const NavBar = () => {
    return (
        <div className="nav-bar">
            <NavBarItem>
                <span style={{ fontSize: '25px', display: 'flex', gap: '2px' }}>
                    <TagElement tag="<DEV/>" />
                    Edwin Garcia Quiterio
                </span>
            </NavBarItem>
            <NavBarItem>
                <div className="navigate-menu">
                    <NavLink className={({ isActive }) => isActive ? 'navigate-active' : ''} to='/home'>Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'navigate-active' : ''} to='/blogs'>Blogs</NavLink>
                </div>
                <div className="search-item">
                    <input type="text" placeholder="Search" />
                    <button>
                        <i className="fa fa-search"></i>
                    </button>
                </div>
                <div className="nav-bar-item" >
                    <div className="contact-item">
                        <i className="fa fa-linkedin-square"></i>
                        <Link to='/home'>Linkedin</Link>
                    </div>
                    <div className="contact-item">
                        <i className="fa fa-instagram"></i>
                        <Link to='/home'>Instagram</Link>
                    </div>
                    <div className="contact-item">
                        <i className="fa fa-github"></i>
                        <Link to='/home'>Github</Link>
                    </div>
                </div>
            </NavBarItem>
        </div>
    )
}
