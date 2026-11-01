import type { TimelineEntry } from '../../utils/types';
import '../styles/components/TimelineItem.css';

export const TimelineItem = ({ role, place, period, bullets, logo, icon }: TimelineEntry) => {
  return (
    <li className='timeline-item'>
        <div className='timeline-marker'>
            { logo
                ? <img src={logo} alt={place} loading='lazy' />
                : <i className={`fa ${ icon }`} aria-hidden="true"></i> }
        </div>
        <div className='timeline-content'>
            <span className='timeline-period'>{ period }</span>
            <h3>{ role }</h3>
            <span className='timeline-place'>{ place }</span>
            { bullets.length > 0 && (
                <ul>
                    { bullets.map( bullet => <li key={bullet}>{ bullet }</li> )}
                </ul>
            )}
        </div>
    </li>
  )
}
