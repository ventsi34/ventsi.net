import React from 'react';
import PropTypes from 'prop-types';

import './social-menu.scss';

const SocialMenu = ({ menu }) => (
  <>
    <p className="social-title">Find Me on:</p>
    <ul className="social-menu">
      { menu.map((el) => (
        <li key={el.label}>
          <a href={el.link} rel="noopener noreferrer" target="_blank">
            <span className={el.icon}>&nbsp;</span>
          </a>
        </li>
      ))}
    </ul>
  </>
);

SocialMenu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.object),
};

SocialMenu.defaultProps = {
  menu: [],
};

export default SocialMenu;
