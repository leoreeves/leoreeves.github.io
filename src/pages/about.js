import React from 'react';

import AboutContent from '../components/about-content/about-content';
import Header from '../components/header/header';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import { CV_URL } from '../contstants/urls';

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={['Leo Reeves', 'about']} />
    <Header
      primaryHeading={'About'}
      buttonText={'Download CV'}
      buttonRoute={CV_URL}
      buttonExternal={true}
      imageFileName={'profile.png'}
    />
    <AboutContent />
  </Layout>
)

export default AboutPage;
