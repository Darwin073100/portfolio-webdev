import image from '../../assets/perfil.jpg';
import { TagElement } from '../components/TagElement';
import '../styles/pages/AboutPage.css'
export const AboutPage = () => {
  return (
    <div className='about-page'>
      <div className='about-text'>
        <span className='head-text'>About</span>
        <div className='text-about'>
          <TagElement tag='<p>'/>
          <br />
          <h2 className='one-tab'><TagElement tag='Hola!'/></h2>
          <p className='one-tab'>Soy una persona que le gusta los retos, quiero aprender día a día sobre lo que me apasiona, 
          soy estudiante, comprometido con mi carrera y mi sabiduría. Me gusta ser responsable con mis 
          tareas, trato de cumplir al 100 % lo que me corresponde, la responsabilidad es un aspecto muy 
          importante para mí.</p>
          <TagElement tag='<p>'/>
        </div>
      </div>
      <div className='about-image'>
        <img src={ image } alt="image" />
      </div>
    </div>
  )
}
