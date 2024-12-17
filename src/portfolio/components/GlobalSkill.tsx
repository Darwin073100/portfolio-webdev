import { data } from '../../utils/data';
import '../styles/components/GlobalSkill.css';

export const GlobalSkill = () => {
    return (
        <div className='global-skill'>
            {data.globalSkill.map(skill => (
                <div className='skill-container'>
                    <div className='var-h'></div>
                    <div className='skill-in-container'>
                        <i className={`fa ${skill.icon}`}></i>
                        <span className='skill-title'>
                            {skill.title}
                        </span>
                        <ul className='skill-tools'>
                            {skill.tools.map( tool => <li>{ tool }</li>)}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
}
