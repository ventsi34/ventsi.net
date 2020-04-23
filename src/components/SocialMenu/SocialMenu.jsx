import React from 'react';

import './social-menu.scss';

const SocialMenu = () => (
  <>
    <p>Find me:</p>
    <ul className="social-menu">
      <li><a href="/"><span className="icon linkedin">&nbsp;</span></a></li>
      <li><a href="/"><span className="icon github">&nbsp;</span></a></li>
    </ul>
  </>
);

export default SocialMenu;
