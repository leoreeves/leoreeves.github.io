import { Link } from 'gatsby';
import React from 'react';

import styles from './nav.module.scss';

const Nav = () => (
  <nav className={styles.nav}>
    <div className={styles.navContainer}>
      <Link className={styles.navLink} to="/portfolio">
        Portfolio
      </Link>
      <Link className={styles.navLink} to="/about">
        About
      </Link>
      <Link className={styles.navLink} to="/contact">
        Contact
      </Link>
    </div>
  </nav>
)

export default Nav;
