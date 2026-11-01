import { TagElement } from "../components/TagElement"
import { data } from "../../utils/data";
import '../styles/container/InformationMe.css';
export const InformationMe = () => {
  return (
    <div className="information-me" >
        <div className="information-item">
            <TagElement tag="<h1>"/><br />
            <span style={{fontSize:30, paddingRight:4}}>
                <span className="one-tab">Hola</span><br />
                <span className="one-tab">soy</span><TagElement tag={` ${data.name}`}/> <br />
                <span className="one-tab">{data.profile.title}</span>
            </span>
            <TagElement tag="</h1>"/>
        </div>
        <div className="information-item">
            <TagElement tag="<p>"/>
            <p className="one-tab" style={{margin:'6px 12px 6px 12px'}}>
                {data.profile.summary}
            </p>
            <TagElement tag="</p>"/>
        </div>

        <div className="information-item one-tab">
            <a className='info-contact-me' href={`mailto:${data.profile.email}`}>Let's Talk <div><i className="fa fa-envelope-o" aria-hidden="true"></i></div></a>
        </div>
    </div>
  )
}
