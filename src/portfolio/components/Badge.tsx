import '../styles/components/Badge.css';

export const Badge = ({text}:{text: string}) => {
  return (
    <div className="badge">{ text }</div>
  )
}
