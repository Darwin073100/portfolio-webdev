import '../styles/components/InfoItem.css';

interface Props{
    icon?: string | 'fa-trash';
    value: string
}

export const InfoItem = ({ icon, value }: Props) => {
    return (
        <div className='info-item'>
            <i className={`fa ${ icon }`} aria-hidden="true"></i>
            <span>{ value }</span>
        </div>
    )
}
