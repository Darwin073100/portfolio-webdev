import { Header } from "../components/Header";
import { TagElement } from "../components/TagElement";
import imgSrc from '../../assets/projects/facebook.png';
import '../styles/pages/WorksPage.css';
import { NavLink } from "react-router-dom";

export const WorksPage = () => {
  return (
    <main className="general-main">
      <Header
        icon='fa-television' 
        title='Works' 
        text='El conocimiento es poder, nunca paremos de aprender.'/>
        <div className="works-page">
          <div className="project-name">
          <h2><TagElement tag="Nombre del proyecto"/></h2>
          <NavLink className='link-work-url-code' to={'/'}><i className="fa fa-github"></i></NavLink>
          <NavLink className='link-work-url-deploy' to={'/'}><i className="fa fa-television"></i></NavLink>
          </div>
          <div className="projects-details">
            <button className="float-menu-item"><i className="fa fa-angle-left" aria-hidden="true"></i></button>
              <img src={ imgSrc } alt="project" />
            <button className="float-menu-item"><i className="fa fa-angle-right" aria-hidden="true"></i></button>
          </div>
          <div className="project-description">
          <TagElement tag='<p>'/>
            <br />
            <h3 className='one-tab'><TagElement tag='Descripción del proyecto'/></h3>
            <p className='one-tab'>Soy una persona que le gusta los retos, quiero aprender día a día sobre lo que me apasiona, 
            soy estudiante, comprometido con mi carrera y mi sabiduría. Me gusta ser responsable con mis 
            tareas, trato de cumplir al <TagElement tag='100 %'/> lo que me corresponde, la responsabilidad es un aspecto muy 
            importante para mí.</p>
          <TagElement tag='<p>'/>
          </div>
        </div>
    </main>
  )
}
