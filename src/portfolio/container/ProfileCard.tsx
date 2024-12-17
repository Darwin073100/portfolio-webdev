import { InfoItem } from '../components/InfoItem';
import { BadgeList } from '../container/BadgeList'
import reactIcon from '../../assets/developer.png';
import '../styles/container/ProfileCard.css';

const infoItem = [
  {
    id: 1,
    icon: 'fa-envelope-o',
    value: 'edwinegq@outlook.com'
  },
  {
    id: 2,
    icon: 'fa-map-marker',
    value: 'Ometepec, Guerrero'
  },
  {
    id: 3,
    icon: 'fa-briefcase',
    value: 'Trabajo Remoto'
  },
  {
    id: 4,
    icon: 'fa-link',
    value: 'www.edwin.com.mx'
  },
];

export const ProfileCard = () => {
    return (
        <div className='profile-card'>
            <div className='profile-header'>
                <img src={reactIcon} alt="img" />
                <h2>Edwin</h2>
                <span>Desarrollador web FrontEnd</span>
            </div>
            <div className="profile-body">
                <div>
                    {infoItem.map(item => (
                        <InfoItem
                            key={item.id}
                            value={item.value}
                            icon={item.icon} />
                    ))}
                </div>
                <BadgeList badges={['CSS', 'HTML', 'JS', 'REACT']} />
            </div>
            <div className='profile-footer'>
                <a className='button button-icon-white' href='/public/CV-Edwin-Garcia.pdf' download='CV-Edwin-Garcia-Quiterio.pdf'>
                    <span>Dowload CV</span>
                    <i className="fa fa-download" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    )
}
