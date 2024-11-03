import { NavLink } from "react-router-dom";
import { TagElement } from "../components/TagElement"
import '../styles/container/InformationMe.css';
export const InformationMe = () => {
  return (
    <div className="information-me" >
        <div className="information-item">
            <TagElement tag="<h1>"/><br />
            <span style={{fontSize:30, paddingRight:4}}>
                <span className="one-tab">Hola</span><br />
                <span className="one-tab">soy</span><TagElement tag=" Edwin"/> <br />
                <span className="one-tab">Desarrollador Web FrontEdn</span>
            </span>
            <TagElement tag="</h1>"/>
        </div>
        <div className="information-item">
            <TagElement tag="<p>"/>
            <p className="one-tab" style={{margin:'6px 12px 6px 12px'}}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Ullam voluptatibus ratione quis et dolorem magn
            </p>
            <TagElement tag="</p>"/>
        </div>

        <div className="information-item one-tab">
            <NavLink className='info-contact-me' to='/contact'>Let's Talk <div><i className="fa fa-envelope-o" aria-hidden="true"></i></div></NavLink>
        </div>
    </div>
  )
}
