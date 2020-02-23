import React from 'react';

import AboutContent from '../components/about-content/about-content';
import Header from '../components/header/header';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={['Leo Reeves', 'about']} />
    <Header
      primaryHeading={'About'}
      buttonText={'Download CV'}
      buttonRoute={'https://docs.google.com/document/d/1vD0v2erFUkg4HdOV3Tw-Jwlf7QVyec7OBiA4apjtl8M/export?format=pdf'}
      buttonExternal={true}
      imageFileName={'profile.png'}
    />
    <AboutContent />
  </Layout>
)

export default AboutPage;
