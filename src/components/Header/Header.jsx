import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SEO from '../SEO';
import './header.scss';

const ACTIVE_MENU_CLASS = 'active';
const UNITS = 'px';

class Header extends Component {
  constructor(props) {
    super(props);
    this.menu = React.createRef();
    this.stripe = React.createRef();
  }

  componentDidMount() {
    this.setStripToActiveMenu();
  }

  setStripToActiveMenu = () => {
    const currentEl = Object.values(this.menu.current.childNodes)
      .find((el) => el.classList.contains(ACTIVE_MENU_CLASS));

    if (currentEl) {
      this.positionMenuStrip(currentEl);
    }
  }

  setStripToHoverMenu = (ev) => {
    const currentEl = ev.target;

    if (currentEl) {
      this.positionMenuStrip(currentEl);
    }
  }

  positionMenuStrip = (currentEl) => {
    const menuDimensions = this.menu.current.getBoundingClientRect();
    const dimensions = currentEl.getBoundingClientRect();
    this.stripe.current.style.width = Math.floor(dimensions.width) + UNITS;
    this.stripe.current.style.left = (Math.floor(dimensions.left)
      - Math.floor(menuDimensions.left)) + UNITS;
    this.stripe.current.style.display = 'block';
  }

  render() {
    const { title, description } = this.props;
    return (
      <>
        <SEO
          title={title}
          description={description}
        />
        <header id="header" className="wrapper">
          <div className="logo-wrapper">
            <a href="/"><img src="../../images/ventsi-logo.png" alt="ventsi.net logo" /></a>
          </div>
          <nav>
            <ul ref={this.menu} onMouseLeave={this.setStripToActiveMenu}>
              <li onMouseEnter={this.setStripToHoverMenu} className={ACTIVE_MENU_CLASS}><a href="/">Home</a></li>
              <li onMouseEnter={this.setStripToHoverMenu}><a href="/">Portfolio</a></li>
            </ul>
            <div ref={this.stripe} className="hover-stripe">&nbsp;</div>
          </nav>
        </header>
      </>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

Header.defaultProps = {
  title: null,
  description: null,
};

export default Header;
