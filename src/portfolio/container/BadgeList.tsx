import { Badge } from "../components/Badge";
import '../styles/container/BadgeList.css'

export const BadgeList = ({ badges }: {badges: string[]}) => {
  return (
    <div className="badge-list">
        {badges.map( t => (
            <Badge key={ t } text={ t }/>
        ))}
    </div>
  )
}
