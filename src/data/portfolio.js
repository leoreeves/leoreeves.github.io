import { GITHUB_PAGE_PROJECTS_URL, GITHUB_REPO_URL } from '../contstants';

const portfolioData = [
  { 
    image: 'elliott-smith.jpg',
    name: 'elliott-smith',
    primary_heading: 'Elliott Smith',
    secondary_heading: 'HTML, CSS, Bootstrap',
    description: 'Tribute to the musician Elliott Smith',
    button_route: `${GITHUB_PAGE_PROJECTS_URL}elliott-smith-tribute-page/`,
    button_route_secondary: `${GITHUB_REPO_URL}elliott-smith-tribute-page/`
  },
  { 
    image: 'quotes-on-design-generator.jpg',
    name: 'quotes-on-design-generator',
    primary_heading: 'Quotes on Design Generator',
    secondary_heading: 'HTML, CSS, React',
    description: 'Minimial quote generator powered by ',
    link: 'https://quotesondesign.com/api/',
    link_text: 'Quotes on Design API',
    button_route: `${GITHUB_PAGE_PROJECTS_URL}quotes-on-design-generator/`,
    button_route_secondary: `${GITHUB_REPO_URL}quotes-on-design-generator/`
  },
  { 
    image: 'wikipedia-search.png',
    name: 'wikipedia-search',
    primary_heading: 'Wikipedia Search',
    secondary_heading: 'HTML, CSS, React',
    description: 'A Wikipedia search viewer',
    button_route: 'https://react-wikipedia-search.netlify.com/',
    button_route_secondary: `${GITHUB_REPO_URL}react-wikipedia-search/`
  },
  { 
    image: 'uk-vat-calculator.png',
    name: 'uk-vat-calculator',
    primary_heading: 'UK Vat Calculator',
    secondary_heading: 'HTML, CSS, Vue.js',
    description: 'Minimal calculator for quickly calculating VAT',
    button_route: `${GITHUB_PAGE_PROJECTS_URL}uk-vat-calculator/`,
    button_route_secondary: `${GITHUB_REPO_URL}uk-vat-calculator/`
  },
  { 
    image: 'ionic-contacts-manager.png',
    name: 'ionic-contacts-manager',
    primary_heading: 'Contacts Manager',
    secondary_heading: 'HTML, Sass, Ionic',
    description: 'Allows users to create, edit and view contacts',
    button_route: 'https://ionic-contacts-manager.netlify.com',
    button_route_secondary: `${GITHUB_REPO_URL}ionic-contacts-manager/`
  },
  { 
    image: 'geolocation-weather-app.png',
    name: 'geolocation-weather-app',
    primary_heading: 'Geolocation Weather App',
    secondary_heading: 'HTML, CSS, JavaScript, jQuery, AJAX',
    description: 'Simple weather app, powered by ',
    link: 'https://darksky.net/dev',
    link_text: 'Dark Sky API',
    button_route: `${GITHUB_PAGE_PROJECTS_URL}geolocation-weather-app/`,
    button_route_secondary: `${GITHUB_REPO_URL}geolocation-weather-app/`
  },
]

export default portfolioData