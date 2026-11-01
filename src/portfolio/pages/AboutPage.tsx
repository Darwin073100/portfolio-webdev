import image from '../../assets/perfil.jpg';
import { TagElement } from '../components/TagElement';
import { Timeline } from '../container/Timeline';
import { data } from '../../utils/data';
import '../styles/pages/AboutPage.css'
export const AboutPage = () => {
  return (
    <main className='about-main'>
      <div className='about-page'>
        <div className='about-text'>
          <span className='head-text'>About</span>
          <div className='text-about'>
            <TagElement tag='<p>'/>
            <br />
            <h2 className='one-tab'><TagElement tag='Hola!'/></h2>
            <p className='one-tab'>{ data.profile.about }</p>
            <p className='one-tab about-languages'>
              <i className="fa fa-language" aria-hidden="true"></i> { data.profile.languages }
            </p>
            <TagElement tag='</p>'/>
          </div>
        </div>
        <div className='about-image'>
          <img src={ image } alt={ `${data.name} ${data.surname}` } />
        </div>
      </div>
      <div className='about-timelines'>
        <Timeline title='Experiencia' icon='fa-briefcase' entries={ data.experience }/>
        <Timeline title='Educación' icon='fa-graduation-cap' entries={ data.education }/>
      </div>
    </main>
  )
}
