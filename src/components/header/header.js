import React from 'react';

import Image from '../image';
import RouteButton from '../route-button/route-button';
import navigateToRoute from '../../utils/helpers'

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
          <div 
            className={styles.primaryButton}
            role="button"
            tabIndex={0}
            onKeyPress={() => navigateToRoute(props.buttonRoute, props.buttonExternal)}
          >
            <RouteButton
              buttonText={props.buttonText}
              buttonRoute={props.buttonRoute}
              buttonExternal={props.buttonExternal}
            />
          </div>
        }
        {
          props.buttonTextSecondary &&
          <div
            role="button"
            tabIndex={0}
            onKeyPress={() => navigateToRoute(props.buttonRouteSecondary, props.buttonExternalSecondary)}
          >
            <RouteButton
              buttonText={props.buttonTextSecondary}
              buttonRoute={props.buttonRouteSecondary}
              buttonExternal={props.buttonExternalSecondary}
              secondary={true}
              tabIndex={0}
            />
          </div>
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
