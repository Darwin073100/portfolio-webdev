import { data } from "../../utils/data";
import type { ProjectKind } from "../../utils/types";
import { Header } from "../components/Header";
import { TagElement } from "../components/TagElement";
import '../styles/pages/WorksPage.css';

const kindLabels: Record<ProjectKind, { label: string, icon: string }> = {
  web: { label: 'Web', icon: 'fa-globe' },
  api: { label: 'API REST', icon: 'fa-server' },
  mobile: { label: 'Móvil', icon: 'fa-mobile' },
  ui: { label: 'Maquetación', icon: 'fa-paint-brush' },
};

export const WorksPage = () => {
  return (
    <main className="general-main">
      <Header
        icon='fa-television'
        title='Works'
        text='Lista de proyectos realizados.' />
      <div className="works-page">
        {data.projects.map(project => (
          <div className="project-item" key={project.name}>
            <div className="project-name">
              <h2><TagElement tag={project.name} /></h2>
              {project.github && (
                <a className='link-work-url-code' href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`Ver código de ${project.name}`} title="Ver código">
                  <i className="fa fa-github" aria-hidden="true"></i>
                </a>
              )}
              {project.deploy && (
                <a className='link-work-url-deploy' href={project.deploy} target="_blank" rel="noopener noreferrer" aria-label={`Ver demo de ${project.name}`} title="Ver demo">
                  <i className="fa fa-television" aria-hidden="true"></i>
                </a>
              )}
            </div>
            <div className="project-meta">
              <span className="project-kind">
                <i className={`fa ${kindLabels[project.kind].icon}`} aria-hidden="true"></i> {kindLabels[project.kind].label}
              </span>
              {project.featured && <span className="project-featured">Destacado</span>}
              {project.year && <span className="project-year">{project.year}</span>}
            </div>
            <div className="projects-details">
              {project.picture
                ? <img src={project.picture} alt={project.name} loading="lazy" />
                : (
                  <div className="project-placeholder">
                    <i className={`fa ${kindLabels[project.kind].icon}`} aria-hidden="true"></i>
                    <span>{kindLabels[project.kind].label}</span>
                    <small>{project.tecnologies.map(item => item.name).join(' · ')}</small>
                  </div>
                )}
            </div>
            <div className="project-tecnologies">
              {project.tecnologies.map(item => (
                <img key={item.name} src={item.picture} alt={item.name} title={item.name} />
              ))}
            </div>
            <div className="project-description">
              <TagElement tag='<p>' />
              <br />
              <h3 className='one-tab'><TagElement tag='Descripción del proyecto' /></h3>
              <p className='one-tab'>{project.description}</p>
              {project.highlights && (
                <ul className='one-tab project-highlights'>
                  {project.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}
                </ul>
              )}
              {project.demoCredentials && (
                <p className='one-tab project-credentials'>
                  <i className="fa fa-key" aria-hidden="true"></i> Demo: usuario <code>{project.demoCredentials.user}</code> · contraseña <code>{project.demoCredentials.password}</code>
                </p>
              )}
              <TagElement tag='</p>' />
              <div className="bar"></div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
