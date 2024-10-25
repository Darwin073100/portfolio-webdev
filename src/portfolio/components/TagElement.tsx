import '../styles/components/TagElement.css';

export const TagElement = ({ tag }: { tag: string}) => {
  return (
    <div className='tag-element'>{ tag }</div>
  )
}
