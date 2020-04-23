import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';

import './layout.scss';

const Layout = ({ children }) => (
  <>
    <Header />
    <section id="main-section" className="wrapper">
      { children }
    </section>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
