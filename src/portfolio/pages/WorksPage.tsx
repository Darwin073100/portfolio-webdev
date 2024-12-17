import { data } from "../../utils/data";
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
        text='Lista de proyectos realizados.'/>
        <div className="works-page">
          {data.projects.map( project =>(
            <div className="project-item">
            <div className="project-name">
            <h2><TagElement tag={project.name}/></h2>
            <NavLink className='link-work-url-code' to={project.github}><i className="fa fa-github"></i></NavLink>
            {project.deploy && (
              <NavLink className='link-work-url-deploy' to={project.deploy}>
                <i className="fa fa-television"></i>
              </NavLink>
            )}
            </div>
            <div className="projects-details">
                <img src={ project.picture } alt="project" />
            </div>
            <div className="project-description">
            <TagElement tag='<p>'/>
              <br />
              <h3 className='one-tab'><TagElement tag='Descripción del proyecto'/></h3>
              <p className='one-tab'>{project.description}</p>
            <TagElement tag='<p>'/>
            <div className="bar"></div>
            </div>
          </div>
          ))}
        </div>
    </main>
  )
}
