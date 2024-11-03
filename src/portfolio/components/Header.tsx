import '../styles/components/Header.css';

interface Props {
    icon?: string;
    title: string;
    text: string;
}

export const Header = ({ icon = 'fa-mouse-pointer', title, text}: Props) => {
  return (
    <header className='header'>
        <div className='icon-container'><i className={`fa ${ icon }`} aria-hidden="true"></i></div>
        <span>{ title }</span>
        <div className='var'></div>
        <p>{ text }</p>
    </header>
  )
}
