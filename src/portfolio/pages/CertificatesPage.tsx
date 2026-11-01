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
        {data.certificateGroups.map(group => (
          <section className="certificate-group" key={group.title}>
            <h2 className="certificate-group-title">
              <i className={`fa ${group.icon}`} aria-hidden="true"></i>
              <TagElement tag={group.title}/>
            </h2>
            <div className="certificates-content">
              {group.certificates.map(certificate => (
                <div className="certificate-item" key={certificate.title}>
                  <h3><TagElement tag={certificate.title}/></h3>
                  {certificate.image
                    ? <img src={certificate.image} alt={certificate.title} loading="lazy" />
                    : (
                      <div className="certificate-placeholder">
                        <i className="fa fa-certificate" aria-hidden="true"></i>
                        <span>{certificate.title}</span>
                        <small>Platzi{certificate.year && ` · ${certificate.year}`}</small>
                      </div>
                    )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
