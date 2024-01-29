import { Link, useLocation } from 'react-router-dom';
import LogoRed from './assets/images/logoRed.svg';

import './styles/main.scss'


function Header() {
    const location = useLocation();
    return (
      <header>
        <nav className='navBar'>
          <Link to="/">
            <img src={LogoRed} alt="Logo Kasa" />
          </Link>
          <div className='link'>
            {/* <Link to="/" className='nav-link'>Accueil</Link>
            <Link to="/apropos" className='nav-link'>A Propos</Link> */}
           <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Accueil</Link>
        <Link to="/apropos" className={`nav-link ${location.pathname === '/apropos' ? 'active' : ''}`}>A Propos</Link>
          </div>
        </nav>
      </header>
    );
  }

  
  export default Header;