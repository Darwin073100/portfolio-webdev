import { NavBar } from "../container/NavBar"
import { TagElement } from '../components/TagElement'
import { ProfileCard } from '../container/ProfileCard';
import { InformationMe } from '../container/InformationMe';
import '../styles/container/NavBar.css';
import '../styles/pages/HomePage.css';
import { TecnologiesCounter } from "../container/TecnologiesCounter";

export const HomePage = () => {
  return (
    <>
      <NavBar />
      <span style={{ fontSize: 50, textAlign: 'center', marginTop: 20, display: 'flex', justifyContent: 'center' }}>
        <TagElement tag='Desarrollador Web' />
      </span>
      <main className='main-container' style={{ margin: '20px 100px 0px 120px' }}>
        <ProfileCard />
        <InformationMe />
        <TecnologiesCounter />
      </main>
    </>
  )
}
