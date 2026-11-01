
interface Props {
    skill: string;
    image?: string;
    icon?: string;
    className?: string;
}

export const SkillItem = ({ skill = 'No text', image, icon, className = '' }: Props) => {
    return (
        <div className={`skill-item ${ className }`}>
            <div className='picture-skill'>
                { image
                    ? <img src={image} alt={skill} loading='lazy' />
                    : <i className={`fa ${ icon }`} aria-hidden="true"></i> }
            </div>
            <span>{skill}</span>
        </div>
    )
}
