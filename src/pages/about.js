import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';

import About from '../components/about/about';
import Header from '../components/header/header';

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={['Leo Reeves', 'portfolio', 'about']} />
    <Header
      primaryHeading={'A little about me.'}
      secondaryHeading={'Front-end Developer'}
      buttonText={'Download CV'}
    />
    <About />
  </Layout>
)

export default AboutPage;
