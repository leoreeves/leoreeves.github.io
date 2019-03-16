import React from 'react';

import Button from '../button/button';
import styles from './header.module.css'

const Header = (props) => (
  <header>
    <h1 className={styles.primaryHeading}>{props.primaryHeading}</h1>
    <h2 className={styles.secondaryHeading}>{props.secondaryHeading}</h2>
    <hr className={styles.headingRow} />
    {
      props.buttonText &&
      <Button
        buttonText={props.buttonText}
        buttonRoute={props.buttonRoute}
      />
    }
  </header>
)

export default Header;
