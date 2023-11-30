import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1>
        <span>NEW</span> STORE
      </h1>

      <Link to="/logout">
        <button className="logout-button">Log out</button>
      </Link>
    </header>
  );
};

export default Header;
