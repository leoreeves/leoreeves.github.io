import React from 'react';
import { navigate } from 'gatsby';

import styles from './portfolio-item.module.scss'
import Image from '../../image';

function openPortfolioItem(state) {
  navigate(
    '/portfolio-detail/',
    { state },
  );
}

const PortfolioItem = (props) => (
  <div className={styles.portfolioItem}>
    <div
        className={styles.imageContainer}
        onClick={() => openPortfolioItem(
          {
            primaryHeading: props.primaryHeading,
            secondaryHeading: props.secondaryHeading,
            buttonRoute: props.buttonRoute,
            buttonRouteSecondary: props.buttonRouteSecondary,
            imageFileName: props.imageFileName,
          }
        )}
      >
      <Image filename={props.imageFileName} />
      <div className={styles.imageOverlay}></div>
    </div>
    <h3>{props.primaryHeading}</h3>
    <p>{props.description}
      {
        props.link &&
        <a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.linkText}
        </a>
      }
      .
    </p>
  </div>
)

export default PortfolioItem;
