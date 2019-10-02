import React from 'react';

import Image from '../image';
import RouteButton from '../route-button/route-button';

import styles from './header.module.scss'

const Header = (props) => (
  <header className={styles.headerContainer}>
    <content className={styles.headerContent}>
      <h1 className={styles.primaryHeading}>{props.primaryHeading}</h1>
      <h2 className={styles.secondaryHeading}>{props.secondaryHeading}</h2>
      <hr className={styles.headerRow} />
      <div className={styles.headerButtons}>
        {
          props.buttonText &&
          <div className={styles.primaryButton}>
            <RouteButton
              buttonText={props.buttonText}
              buttonRoute={props.buttonRoute}
              buttonExternal={props.buttonExternal}
            />
          </div>
        }
        {
          props.buttonTextSecondary &&
          <RouteButton
            buttonText={props.buttonTextSecondary}
            buttonRoute={props.buttonRouteSecondary}
            buttonExternal={props.buttonExternalSecondary}
            secondary={true}
          />
        }
      </div>
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
