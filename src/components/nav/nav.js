import { Link } from 'gatsby';
import React from 'react';
import { colorGreen } from '../../styles/colors.module.scss'
import { rightHandLinks } from '../../data/right-hand-links'

import styles from './nav.module.scss';

const activeStyle = { borderBottomColor: colorGreen, opacity: 1 }

const Nav = () => (
  <nav className={styles.nav}>
    <div className={styles.navContainer}>
      <div>
        <Link
          activeStyle={activeStyle}
          className={styles.navLink}
          to="/"
        >
          Home
        </Link>
        <Link
          activeStyle={activeStyle}
          className={styles.navLink}
          to="/contact/"
        >
          Contact
        </Link>
      </div>
      <div>
        {
          rightHandLinks.map((link, index) => {
            return (
              <a
                key={index}
                className={styles.navLink}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </a>
            )
          })
        }
      </div>
    </div>
  </nav>
)

export default Nav;
