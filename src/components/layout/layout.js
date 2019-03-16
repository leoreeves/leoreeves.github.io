import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import 'normalize.css';

import Nav from '../nav/nav';
import Footer from '../footer/footer';

import styles from './layout.module.css';
import './layout.css';

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
        <Footer />
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
