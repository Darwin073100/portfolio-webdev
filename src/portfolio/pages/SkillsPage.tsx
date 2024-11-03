import { GlobalSkill } from '../components/GlobalSkill';
import { Header } from '../components/Header';
import '../styles/pages/SkillPage.css';
import { SkillList } from '../container/SkillList';

export const SkillsPage = () => {
  return (
    <main className="general-main">
      <Header 
        icon='fa-code' 
        title='Skills' 
        text='El conocimiento es poder, nunca paremos de aprender.'/>
      <div className='skill-page'>
        <GlobalSkill />
        <SkillList />
      </div>
    </main>
  )
}
