interface Props{
    children: React.ReactNode
}

export const NavBarItem = ({ children }: Props) => {
    return (
        <div className="nav-bar-item">
            { children }
        </div>
    )
}
