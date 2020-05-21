import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';

import './layout.scss';

const Layout = ({ title, description, children }) => (
  <>
    <Header
      title={title}
      description={description}
    />
    <section id="main-section" className="wrapper">
      { children }
    </section>
  </>
);

Layout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  title: null,
  description: null,
};

export default Layout;
