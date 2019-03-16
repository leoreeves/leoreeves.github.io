import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';

import Contact from '../components/contact/contact';
import Header from '../components/header/header';

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" keywords={['Leo Reeves', 'portfolio', 'contact']} />
    <Header
      primaryHeading={'Let’s chat!'}
      secondaryHeading={'Reach out for help with a project or just to say hello!'}
    />
    <Contact />
  </Layout>
)

export default ContactPage;
