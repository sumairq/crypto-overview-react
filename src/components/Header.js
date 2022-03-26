import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaMicrophone } from 'react-icons/fa';
import { RiSettings5Fill } from 'react-icons/ri';

const Header = () => (
  <header>
    <div className="logo">
      <NavLink className="rmvLink" to="/">
        Crypto
        <span>Watcher</span>
      </NavLink>
    </div>

    <nav className="nav__links">
      <ul className="flex nav__links">
        <li>
          <NavLink
            to="/VoiceSearch"
            className="rmvLink"
            style={({ isActive }) => (isActive
              ? { textDecoration: 'underline' }
              : { textDecoration: 'none' })}
          >
            <FaMicrophone />
          </NavLink>
        </li>
        <li>
          <NavLink
            className="settings-icon rmvLink"
            to="/Settings"
            style={({ isActive }) => (isActive
              ? { textDecoration: 'underline' }
              : { textDecoration: 'none' })}
          >
            <RiSettings5Fill />
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
