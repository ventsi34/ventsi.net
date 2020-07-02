import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { Layout, SocialMenu } from '../components';
import './index.scss';

const getSiteMetadata = graphql`
{
  markdownRemark(frontmatter: { pageName: { eq: "home" } }) {
    frontmatter {
      pageName
      pageTitle
      congrats
      firstName
      lastName
      description
      socialIcons {
        label
        icon
        link
      }
      buttons {
        name
        link
        classes
      }
    }
  }
}
`;

export default () => (
  <StaticQuery
    query={getSiteMetadata}
    render={({ markdownRemark }) => (
      <Layout title={markdownRemark.frontmatter.pageTitle}>
        <div className="home-content-wrapper">
          <div className="text-wrapper">
            <p className="congrats">{ markdownRemark.frontmatter.congrats }</p>
            <h1>
              { markdownRemark.frontmatter.firstName }
              <br />
              { markdownRemark.frontmatter.lastName }
            </h1>
            <p className="description">{ markdownRemark.frontmatter.description }</p>
            <SocialMenu
              menu={markdownRemark.frontmatter.socialIcons}
            />
          </div>
          <div className="image-wrapper">
            <img src="../images/ventsi-image.png" alt="Ventsislav Dimitrov" />
          </div>
        </div>
      </Layout>
    )}
  />
);
