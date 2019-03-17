import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';

import ContactForm from '../components/contact-form/contact-form';
import Header from '../components/header/header';

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" keywords={['Leo Reeves', 'contact']} />
    <Header
      primaryHeading={'Want to talk?'}
      secondaryHeading={'Write me a message!'}
    />
    <ContactForm />
  </Layout>
)

export default ContactPage;
