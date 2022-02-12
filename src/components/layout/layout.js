import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Nav from '../nav/nav';

import styles from './layout.module.scss';
import './layout.scss';

import PropTypes from 'prop-types';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={() => (
      <div className={styles.layoutContainer}>
        <Nav />
        <main>{children}</main>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
