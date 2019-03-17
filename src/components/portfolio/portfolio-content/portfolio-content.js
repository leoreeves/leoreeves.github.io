import React from 'react';

import styles from './portfolio-content.module.scss'
import PortfolioItem from '../portfolio-item/portfolio-item';

const PortfolioContent = () => (
  <section className={styles.portfolioContainer}>
    <div className={styles.portfolioRow}>
      <PortfolioItem
        imageFileName={'elliott-smith-tribute.jpg'}
        primaryHeading={'Elliott Smith'}
        secondaryHeading={'HTML, CSS, Bootstrap'}
        description={'Tribute to the musician Elliott Smith'}
        buttonRoute={'/projects/elliott-smith-tribute-page/'}
        buttonRouteSecondary={'https://github.com/LeoReeves/projects/tree/master/elliott-smith-tribute-page'}
      />
      <PortfolioItem
        imageFileName={'quotes-on-design-generator.jpg'}
        heading={'Quotes on Design Generator'}
        description={'Minimial quote generator powered by '}
        buttonRoute={'/portfolio/quotes-on-design-generator'}
        link={'https://quotesondesign.com/api-v4-0/'}
        linkText={'Quotes on Design API'}
      />
      <PortfolioItem
        imageFileName={'simple-clock.png'}
        heading={'Simple clock'}
        description={'Simple clock with switchable digital and analogue face'}
      />
      <PortfolioItem
        imageFileName={'uk-vat-calculator.png'}
        heading={'UK Vat Calculator'}
        description={'Minimal calculator for quickly calculating VAT'}
      />
      <PortfolioItem
        imageFileName={'hex-colour-generator.jpg'}
        heading={'Hex Colour Generator'}
        description={'Generate random hex colours'}
      />
      <PortfolioItem
        imageFileName={'geolocation-weather-app.png'}
        heading={'Geolocation Weather App'}
        description={'Simple weather app, powered by '}
        link={'https://darksky.net/dev'}
        linkText={'Dark Sky API'}
      />
    </div>
  </section>
)

export default PortfolioContent;
