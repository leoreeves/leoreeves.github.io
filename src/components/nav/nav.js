import { Link } from 'gatsby';
import React from 'react';

import styles from './nav.module.scss';

const Nav = () => (
  <nav className={styles.nav}>
    <div className={styles.navContainer}>
      <Link
        className={styles.navLink}
        to="/"
      >
        Leo Reeves
      </Link>
      <div>
        <Link
          activeStyle={{ borderBottomColor: '#00AC7E' }}
          className={styles.navLink}
          to="/about/"
        >
          About
        </Link>
        <Link
          activeStyle={{ borderBottomColor: '#00AC7E' }}
          className={styles.navLink}
          to="/contact/"
        >
          Contact
        </Link>
      </div>
    </div>
  </nav>
)

export default Nav;
