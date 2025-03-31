import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div>
      <header className="header-conroller">
          <b><h2>Siraj<strong>&nbsp;Mohammed</strong></h2></b>
          <ul>
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
