import './styles/Nav.css';
import { NavLink, useLocation } from 'react-router-dom';

const Nav = () => {
  const location = useLocation();

  const isActiveRoute = (route) => {
    return location.pathname === route;
  };

  return (
    <div className='nav-container'>
      <div className='nav-logo'>
        <NavLink to='/' className='nav-item'><h1 className='nav-logo-text'>dekel matslich <i className='flower'/></h1></NavLink>
      </div>
      <div className='nav-items'>
        <NavLink
          className={`nav-item nav-item-1 ${isActiveRoute('/') ? 'nav-selected' : ''}`}
          to="/"
        >
          <div className='nav-item-background'></div>
          <h1 className='nav-item-text'>home /</h1>
        </NavLink>
        <NavLink
          className={`nav-item nav-item-2 ${isActiveRoute('/about') ? 'nav-selected' : ''}`}
          to="/about"
        >
          <div className='nav-item-background'></div>
          <h1 className='nav-item-text'>about /</h1>
        </NavLink>
        <div className='nav-item nav-item-3'>
          <div className='nav-item-background'></div>
          <a className='nav-item' href='../resume.pdf'><h1 className='nav-item-text'>resume</h1></a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
