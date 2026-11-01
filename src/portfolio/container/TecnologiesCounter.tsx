import { data } from '../../utils/data';
import '../styles/container/TecnologiesCounter.css';

export const TecnologiesCounter = () => {
  return (
    <div className="tecnologies-counter">
        <div className="tecnologies-container">
            {data.stats.map(stat => (
                <div className="tecnologie" key={stat.label}>
                    <div style={{ fontSize:30, color: 'var(--green-color-100)'}}>{stat.value}</div>
                    <div>{stat.label}</div>
                </div>
            ))}
        </div>
    </div>
  )
}
