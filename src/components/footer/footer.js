import { Link } from 'gatsby';
import React from 'react';

import styles from './footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.navContainer}>
      <Link className={styles.navLink} to="/">
        { `© 2020 Leo Reeves` }
      </Link>
      <a
        style={{ marginLeft: `auto` }}
        className={styles.navLink}
        href="https://codepen.io/leoreeves/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Codepen
      </a>
      <a
        href="https://github.com/leoreeves/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.navLink}
      >
        Github
      </a>
      <a
        href="https://www.linkedin.com/in/leoreeves/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.navLink}
      >
        Linkedin
      </a>
    </div>
  </footer>
)

export default Footer;
