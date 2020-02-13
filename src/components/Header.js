import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../public/assets/logo.png';

const Header = () => {

  return (
    <header>
      <section className="logo"><img src={logo} /></section>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;