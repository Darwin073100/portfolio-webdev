import { InfoItem } from '../components/InfoItem';
import { BadgeList } from '../container/BadgeList'
import reactIcon from '../../assets/developer.png';
import { data } from '../../utils/data';
import '../styles/container/ProfileCard.css';

export const ProfileCard = () => {
    return (
        <div className='profile-card'>
            <div className='profile-header'>
                <img src={reactIcon} alt="img" />
                <h2>{data.name}</h2>
                <span>{data.profile.title}</span>
            </div>
            <div className="profile-body">
                <div>
                    {data.profile.info.map(item => (
                        <InfoItem
                            key={item.id}
                            value={item.value}
                            icon={item.icon} />
                    ))}
                </div>
                <BadgeList badges={data.profile.badges} />
            </div>
            <div className='profile-footer'>
                <a className='button button-icon-white' href={data.cvUrl} download='CV-Edwin-Garcia-Quiterio.pdf'>
                    <span>Descargar CV</span>
                    <i className="fa fa-download" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    )
}
