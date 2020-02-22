import React from 'react';

import navigateToRoute from '../../utils/helpers'

import styles from './route-button.module.scss';

const RouteButton = (props) => (
  <button
    className={`${styles.routeButton} ${ props.secondary ? styles.secondary : styles.primary}`}
    onClick={() => navigateToRoute(props.buttonRoute, props.buttonExternal)}
  >
    { props.buttonText }
  </button>
)

export default RouteButton;
