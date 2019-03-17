import React from 'react';

import styles from './portfolio.module.scss'
import Image from '../image';

const Portfolio = () => (
  <div className={styles.portfolioContainer}>
    <div className={styles.portfolioRow}>
      <div className={styles.portfolioItem}>
        <Image filename="elliott-smith-tribute-page.jpg" />
        <h3>Elliott Smith</h3>
        <p>Tribute to the musician Elliott Smith.</p>
      </div>
      <div className={styles.portfolioItem}>
        <Image filename="quotes-on-design-generator.jpg" />
        <h3>Quotes on Design Generator</h3>
        <p>
          Minimial quote generator powered by
          <span> </span>
          <a
            href="https://quotesondesign.com/api-v4-0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quotes on Design API
          </a>
        .
        </p>
      </div>
    </div>
    <div className={styles.portfolioRow}>
      <div className={styles.portfolioItem}>
        <Image filename="simple-clock.png" />
        <h3>Simple clock</h3>
        <p>Simple clock with switchable digital and analogue face.</p>
      </div>
      <div className={styles.portfolioItem}>
        <Image filename="uk-vat-calculator.png" />
        <h3>UK Vat Calculator</h3>
        <p>Minimal calculator for quickly calculating VAT.</p>
      </div>
    </div>
    <div className={styles.portfolioRow}>
      <div className={styles.portfolioItem}>
        <Image filename="hex-colour-generator.jpg" />
        <h3>Hex Colour Generator</h3>
        <p>Generate random hex colours.</p>
      </div>
      <div className={styles.portfolioItem}>
        <Image filename="geolocation-weather-app.png" />
        <h3>Geolocation Weather App</h3>
        <p>A simple weather app, powered by
        <span> </span>
        <a
            href="https://darksky.net/dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dark Sky API
        </a>
        .
        </p>
      </div>
    </div>
  </div>
)

export default Portfolio;