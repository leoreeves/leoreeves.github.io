import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';

import Header from '../components/header/header';
import Img from '../components/image';
import Portfolio from '../components/portfolio/portfolio';

const PortfolioPage = () => (
  <Layout>
    <SEO title="About" keywords={['Leo Reeves', 'portfolio', 'about']} />
    <Header
      primaryHeading={'Portfolio'}
      secondaryHeading={'Featured Work'}
    />
    <Portfolio />
  </Layout>
)

export default PortfolioPage;
