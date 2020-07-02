import React from 'react';
import PropTypes from 'prop-types';
import SEO from '../SEO';
import MainMenu from '../MainMenu/MainMenu';
import './header.scss';

const Header = ({ title, description }) => (
  <>
    <SEO
      title={title}
      description={description}
    />
    <header id="header" className="wrapper">
      <div className="logo-wrapper">
        <a href="/"><img src="../../images/ventsi-logo.png" alt="ventsi.net logo" /></a>
      </div>
      <MainMenu />
    </header>
  </>
);

Header.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

Header.defaultProps = {
  title: null,
  description: null,
};

export default Header;
