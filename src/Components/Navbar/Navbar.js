import'./Navbar.css'

export function Navbar(){
const path = window.location.pathname
  
    return(
        <nav className="nav">
            <ul>
                <CustomLink href="/Pages/LandingPage" >Home</CustomLink>
                <CustomLink href="/Pages/Cursos" >Cursos</CustomLink>
                <CustomLink href="/Pages/Quem Somos" >Quem Somos</CustomLink>
                <CustomLink href="/Pages/Contatos" >Contatos</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ href, children, ...props }){
    const path = window.location.pathname
    return (
        <li className={path === href ? "active" : ""}>
        <a href = { href } {...props}> {children}</a>
        </li>
        )
}