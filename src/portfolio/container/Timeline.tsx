import { TimelineItem } from '../components/TimelineItem';
import { TagElement } from '../components/TagElement';
import type { TimelineEntry } from '../../utils/types';
import '../styles/container/Timeline.css';

interface Props {
    title: string;
    icon: string;
    entries: TimelineEntry[];
}

export const Timeline = ({ title, icon, entries }: Props) => {
  return (
    <section className='timeline'>
        <h2 className='timeline-title'>
            <i className={`fa ${ icon }`} aria-hidden="true"></i>
            <TagElement tag={ title }/>
        </h2>
        <ol className='timeline-list'>
            { entries.map( entry => (
                <TimelineItem key={`${entry.role}-${entry.period}`} {...entry}/>
            ))}
        </ol>
    </section>
  )
}
