import React from 'react';

import './header.scss';

const Header = () => (
  <header id="header" className="wrapper">
    <div className="logo-wrapper">
      <a href="/"><img src="../../../images/ventsi-logo.png" alt="ventsi.net logo" /></a>
    </div>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">Portfolio</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
