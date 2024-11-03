interface Props{
    onClick?: React.MouseEventHandler<HTMLElement>;
    children: React.ReactNode;
    className?: string
}

export const Button = ({ children, onClick, className, ...props }: Props) => {
  return (
    <button className={ className } {...props} onClick={()=> onClick }>{ children }</button>
  )
}
