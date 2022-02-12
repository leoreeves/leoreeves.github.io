import { Link } from 'gatsby';
import React from 'react';

import { copyrightLink, footerLinks } from '../../data/footer'
import styles from './footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.navContainer}>
      <Link className={styles.navLink} to="/">
        {copyrightLink.content}
      </Link>
      <div>
        {
          footerLinks.map((link, index) => {
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
  </footer>
)

export default Footer;
