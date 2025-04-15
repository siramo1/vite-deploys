import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="header-conroller">
          <b><h2>&nbsp;Siraj<strong>&nbsp;Mohammed</strong></h2></b>
          <ul className='for-pc'>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active-link" : "normal-link")}
                end // Ensures the link is only active when the path is exactly "/"
              >
                Portofolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Services"
                className={({ isActive }) => (isActive ? "active-link" : "normal-link")}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Expriences"
                className={({ isActive }) => (isActive ? "active-link" : "normal-link")}
              >
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Projects"
                className={({ isActive }) => (isActive ? "active-link" : "normal-link")}
              >
                Projects
              </NavLink>
            </li>
          </ul>

          {/* this is just for mobile phones */}
          <div 
          className="mobile-menu-button" 
          onClick={toggleMenu}
          >
          {isMenuOpen ? 'X' : '☰'}
          </div>
          <ul className={`for-phone ${isMenuOpen ? 'show' : ''}`}><br />
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active-link" : "normal-link")}
                end // Ensures the link is only active when the path is exactly "/"
              >
                Portofolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Services"
                className={({ isActive }) => (isActive ? "active-link" : "normal-link")}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Expriences"
                className={({ isActive }) => (isActive ? "active-link" : "normal-link")}
              >
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Projects"
                className={({ isActive }) => (isActive ? "active-link" : "normal-link")}
              >
                Projects
              </NavLink>
            </li>
          </ul>
        </header>
    </div>
  )
}

export default Header
