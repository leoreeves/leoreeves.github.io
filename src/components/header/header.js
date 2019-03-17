import React from 'react';

import RouteButton from '../buttons/route-button';
import Image from '../image';
import styles from './header.module.scss'

const Header = (props) => (
  <header className={styles.headerContainer}>
    <content className={styles.headerContent}>
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
    </content>
    {
      props.imageFileName &&
      <div className={styles.headerImage}>
        <Image filename={props.imageFileName}/>
      </div>
    }
  </header>
)

export default Header;
