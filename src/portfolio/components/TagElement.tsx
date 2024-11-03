import '../styles/components/TagElement.css';

export const TagElement = ({ tag }: { tag: string }) => {
  return (
    <span className='tag-element'>{ tag }</span>
  )
}
