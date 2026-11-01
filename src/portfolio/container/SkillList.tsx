import { SkillItem } from "../components/SkillItem"
import { TagElement } from "../components/TagElement";
import { data } from "../../utils/data";

export const SkillList = () => {
  return (
    <div className='skill-groups'>
        { data.skillGroups.map( group => (
            <section className='skill-group' key={group.title}>
                <h3 className='skill-group-title'>
                    <i className={`fa ${group.icon}`} aria-hidden="true"></i>
                    <TagElement tag={group.title}/>
                </h3>
                <div className='skill-list'>
                    { group.skills.map( item => (
                        <SkillItem key={item.name} skill={item.name} image={item.image} icon={item.icon}/>
                    ))}
                </div>
            </section>
        ))}
    </div>
  )
}
