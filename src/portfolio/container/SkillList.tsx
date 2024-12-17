import { SkillItem } from "../components/SkillItem"
import { data } from "../../utils/data";


// interface Skill {
//     skill: string,
//     image: string,
//     className?: React.CSSProperties | undefined,
//     style?: React.CSSProperties | undefined,
// }
// const skills: Skill[] = [
//     {
//         skill: 'HTML',
//         image: html,
//         style:{
//             color: '#e44f26',
//             backgroundColor: '#e44f26'
//         }
//     },
//     {
//         skill: 'CSS',
//         image: css,
//         style:{
//             color: 'rgb(28 114 182)',
//             backgroundColor: 'rgb(28 114 182)'
//         }
//     },
//     {
//         skill: 'JS',
//         image: js,
//         style:{
//             color: 'rgb(247 223 30)',
//             backgroundColor: 'rgb(247 223 30)'
//         }
//     },
//     {
//         skill: 'REACT',
//         image: react,
//         style:{
//             color: 'white',
//             backgroundColor: 'white'
//         }
//     }
// ];
export const SkillList = () => {
  return (
    <div className='skill-list'>     
        { data.tools.map( item => <SkillItem skill={item.skill} image={ item.image } style={ item?.style}/> )}
    </div>
  )
}
