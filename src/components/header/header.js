import React from 'react';

import RouteButton from '../buttons/route-button';
import styles from './header.module.scss'

const Header = (props) => (
  <header className={styles.header}>
    <h1 className={styles.primaryHeading}>{props.primaryHeading}</h1>
    <h2 className={styles.secondaryHeading}>{props.secondaryHeading}</h2>
    <hr className={styles.headingRow} />
    {
      props.buttonText &&
      <RouteButton
        buttonText={props.buttonText}
        buttonRoute={props.buttonRoute}
        external={props.external}
      />
    }
  </header>
)

export default Header;
