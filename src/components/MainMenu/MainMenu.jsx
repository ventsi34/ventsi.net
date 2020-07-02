import React, { Component } from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import './main-menu.scss';

const ACTIVE_MENU_CLASS = 'active';
const UNITS = 'px';
const getMenuData = graphql`
{
  markdownRemark(frontmatter: { name: { eq: "main-menu" } }) {
    frontmatter {
      menu {
        title
        link
      }
    }
  }
}
`;

class MainMenu extends Component {
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
    return (
      <StaticQuery
        query={getMenuData}
        render={({ markdownRemark }) => (
          <nav>
            <ul ref={this.menu} onMouseLeave={this.setStripToActiveMenu}>
              { markdownRemark.frontmatter.menu.map((item) => (
                <li
                  key={item.title}
                  onMouseEnter={this.setStripToHoverMenu}
                >
                  <Link to={item.link} activeClassName={ACTIVE_MENU_CLASS}>{ item.title }</Link>
                </li>
              )) }
            </ul>
            <div ref={this.stripe} className="hover-stripe">&nbsp;</div>
          </nav>
        )}
      />
    );
  }
}

export default MainMenu;
