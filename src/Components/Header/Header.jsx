// Header.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Teaching Assistant Application</h1>
        <div className="header-buttons">
          {isHomePage ? (
            <Link to="/add">
              <button className="button-primary">Add Data</button>
            </Link>
          ) : (
            <Link to="/">
              <button className="button-primary">Home</button>
            </Link>
          )}
          <Link to="/">
            <button className="button-primary">Logout</button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
