import React from 'react';

import AboutContent from '../components/about-content/about-content';
import Header from '../components/header/header';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={['Leo Reeves', 'about me']} />
    <Header
      primaryHeading={'About'}
      buttonText={'Download CV'}
      buttonRoute={'https://drive.google.com/file/d/1qkwftwFC4vzaYQ00fO0hA7lnmyIQcFqC/view'}
      buttonExternal={true}
      imageFileName={'profile.png'}
    />
    <AboutContent />
  </Layout>
)

export default AboutPage;
