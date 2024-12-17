import { Header } from "../components/Header"
import '../styles/pages/CertificatesPage.css';
import { TagElement } from "../components/TagElement";
import { data } from "../../utils/data";

export const CertificatesPage = () => {
  return (
    <main className="general-main">
      <Header
        icon='fa-certificate' 
        title='Certificados' 
        text='Certificados de cursos tomados.'/>
      <div className="blog-page">
        <div className="certificates-content">
          {data.certificates.map(certificate=>(
            <div className="certificate-item">
            <h3><TagElement tag={certificate.title}/></h3>
            <img src={certificate.image} alt={certificate.title} />
          </div>
          ))}
         </div>
      </div>
    </main>
  )
}
