import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';

import About from '../components/about/about';
import Header from '../components/header/header';

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={['Leo Reeves', 'about me']} />
    <Header
      primaryHeading={'A little about me.'}
      secondaryHeading={'Front-end Developer'}
      buttonText={'Download CV'}
      buttonRoute={'https://drive.google.com/file/d/1pYHHe03v7pZIm3RTyyBdC9wEz8xsM1D2/view'}
      buttonExternal={true}
    />
    <About />
  </Layout>
)

export default AboutPage;
