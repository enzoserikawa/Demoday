import { Navbar } from './Components/Navbar/Navbar';
import { LandingPage } from './Components/Pages/LandingPage/LandingPage';
import { Cursos } from './Components/Pages/PaginaCursos/PaginaCursos';
import { QuemSomos } from './Components/Pages/PaginaQuemSomos/QuemSomos';
import { Contatos } from './Components/Pages/PaginaContatos/PaginaContatos';

import './Styles/Global.css'

function App() {
  let component
  switch (window.location.pathname) {
    case "/Pages/LandingPage":
        component = <LandingPage />
        break
    case "/Pages/Cursos":
        component = <Cursos />
        break
    case "/Pages/Quem%20Somos":
        component = <QuemSomos />
      break
    case "/Pages/Contatos":
        component = <Contatos />
      break
  }
  return(
    <>
    <Navbar />
    <div className="container">
    {component}
    </div>
    </>
  )
}

export default App;
