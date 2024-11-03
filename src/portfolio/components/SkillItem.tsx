
interface Props {
    skill: string;
    image: string;
    className?: string;
    style?: React.CSSProperties | undefined;
}

export const SkillItem = ({ skill = 'No text', image, className, style }: Props) => {
    return (
        <div className={`skill-item ${ className }`}>
            <div className='picture-skill' style={style}>
                <img src={image} alt="skill-picture" />
            </div>
            <span style={{...style, backgroundColor: 'transparent'}}>{skill}</span>
        </div>
    )
}
