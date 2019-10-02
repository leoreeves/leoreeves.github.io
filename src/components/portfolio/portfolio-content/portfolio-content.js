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
        imageFileName={'wikipedia-search.png'}
        primaryHeading={'Wikipedia Search'}
        secondaryHeading={'HTML, CSS, React'}
        description={'A Wikipedia search viewer'}
        buttonRoute={'https://react-wikipedia-search.netlify.com/'}
        buttonRouteSecondary={`${gitHubRepoUrl}react-wikipedia-search`}
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
        imageFileName={'ionic-contacts-manager.png'}
        primaryHeading={'Contacts Manager'}
        secondaryHeading={'HTML, Sass, Ionic'}
        description={'Allows users to create, edit and view contacts'}
        buttonRoute={`https://ionic-contacts-manager-app.herokuapp.com/`}
        buttonRouteSecondary={'https://github.com/leoreeves/projects/tree/master/ionic-contacts-manager'}
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
