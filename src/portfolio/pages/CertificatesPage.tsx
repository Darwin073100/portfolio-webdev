import { Header } from "../components/Header"
import imgSrc from '../../assets/projects/facebook.png';
import '../styles/pages/CertificatesPage.css';
import { TagElement } from "../components/TagElement";
export const CertificatesPage = () => {
  return (
    <main className="general-main">
      <Header
        icon='fa-certificate' 
        title='Certificados' 
        text='El conocimiento es poder, nunca paremos de aprender.'/>
      <div className="blog-page">
        <div className="certificates-content">
          <div className="certificate-item">
            <h3><TagElement tag="Title"/></h3>
            <img src={imgSrc} alt="certificate" />
          </div>
          <div className="certificate-item">
            <h3><TagElement tag="Title"/></h3>
            <img src={imgSrc} alt="certificate" />
          </div>
          <div className="certificate-item">
            <h3><TagElement tag="Title"/></h3>
            <img src={imgSrc} alt="certificate" />
          </div>
          <div className="certificate-item">
            <h3><TagElement tag="Title"/></h3>
            <img src={imgSrc} alt="certificate" />
          </div>
        </div>
      </div>
    </main>
  )
}
