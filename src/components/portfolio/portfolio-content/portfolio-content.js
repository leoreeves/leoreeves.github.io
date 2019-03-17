import React from 'react';

import styles from './portfolio-content.module.scss'
import PortfolioItem from '../portfolio-item/portfolio-item';

const gitHubPageProjectsUrl = 'https://leoreeves.github.io/projects/';
const gitHubRepoUrl = 'https://github.com/LeoReeves/projects/tree/master/';

const PortfolioContent = () => (
  <section className={styles.portfolioContainer}>
    <div className={styles.portfolioRow}>
      <PortfolioItem
        imageFileName={'elliott-smith-tribute.jpg'}
        primaryHeading={'Elliott Smith'}
        secondaryHeading={'HTML, CSS, Bootstrap'}
        description={'Tribute to the musician Elliott Smith'}
        buttonRoute={`${gitHubPageProjectsUrl}elliott-smith-tribute-page`}
        buttonRouteSecondary={`${gitHubRepoUrl}elliott-smith-tribute-page`}
      />
      <PortfolioItem
        imageFileName={'quotes-on-design-generator.jpg'}
        primaryHeading={'Quotes on Design Generator'}
        secondaryHeading={'HTML, CSS, jQuery, AJAX'}
        description={'Minimial quote generator powered by '}
        link={'https://quotesondesign.com/api-v4-0/'}
        linkText={'Quotes on Design API'}
        buttonRoute={`${gitHubPageProjectsUrl}quotes-on-design-generator`}
        buttonRouteSecondary={`${gitHubRepoUrl}quotes-on-design-generator`}
      />
      <PortfolioItem
        imageFileName={'simple-clock.png'}
        primaryHeading={'Simple clock'}
        secondaryHeading={'HTML, CSS, Vue.js'}
        description={'Simple clock with switchable digital and analogue face'}
        buttonRoute={`${gitHubPageProjectsUrl}simple-clock`}
        buttonRouteSecondary={`${gitHubRepoUrl}simple-clock`}
      />
      <PortfolioItem
        imageFileName={'uk-vat-calculator.png'}
        primaryHeading={'UK Vat Calculator'}
        secondaryHeading={'HTML, CSS, Vue.js'}
        description={'Minimal calculator for quickly calculating VAT'}
        buttonRoute={`${gitHubPageProjectsUrl}uk-vat-calculator`}
        buttonRouteSecondary={`${gitHubRepoUrl}uk-vat-calculator`}
      />
      <PortfolioItem
        imageFileName={'hex-colour-generator.jpg'}
        primaryHeading={'Hex Colour Generator'}
        secondaryHeading={'HTML, CSS, JavaScript'}
        description={'Generate random hex colours'}
        buttonRoute={`${gitHubPageProjectsUrl}hex-colour-generator`}
        buttonRouteSecondary={`${gitHubRepoUrl}hex-colour-generator`}
      />
      <PortfolioItem
        imageFileName={'geolocation-weather-app.png'}
        primaryHeading={'Geolocation Weather App'}
        secondaryHeading={'HTML, CSS, JavaScript, jQuery, AJAX'}
        description={'Simple weather app, powered by '}
        link={'https://darksky.net/dev'}
        linkText={'Dark Sky API'}
        buttonRoute={`${gitHubPageProjectsUrl}geolocation-weather-app`}
        buttonRouteSecondary={`${gitHubRepoUrl}geolocation-weather-app`}
      />
    </div>
  </section>
)

export default PortfolioContent;
