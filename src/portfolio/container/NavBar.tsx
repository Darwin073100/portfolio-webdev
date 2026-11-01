import { NavLink } from "react-router-dom"
import { NavBarItem } from "../container/NavBarItem"
import { TagElement } from "../components/TagElement"

export const NavBar = () => {
    return (
        <div className="nav-bar">
            <NavBarItem>
                <span style={{ fontSize: '25px', display: 'flex', gap: '2px' }}>
                    <TagElement tag="<DEV/>" />
                    <span className="span-name">Edwin</span><span className="span-surname">Garcia Quiterio</span>
                </span>
            </NavBarItem>
            <NavBarItem>
                <div className="navigate-menu">
                    <NavLink className={({ isActive }) => isActive ? 'navigate-active' : ''} to='/home'>Home</NavLink>
                </div>
                <div className="nav-bar-item" >
                    <div className="contact-item">
                        <i className="fa fa-linkedin-square"></i>
                        <a href='https://www.linkedin.com/in/edwin310700/' target="_blank" rel="noopener noreferrer">Linkedin</a>
                    </div>
                    <div className="contact-item">
                        <i className="fa fa-youtube-play" aria-hidden="true"></i>
                        <a href='https://www.youtube.com/channel/UC55HwLnzvhBHvsGAVrlSZFg' target="_blank" rel="noopener noreferrer">Youtube</a>
                    </div>
                    <div className="contact-item">
                        <i className="fa fa-github"></i>
                        <a href='https://github.com/Darwin073100' target="_blank" rel="noopener noreferrer">Github</a>
                    </div>
                </div>
            </NavBarItem>
        </div>
    )
}
