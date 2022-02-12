import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';

import ContactForm from '../components/contact-form/contact-form';

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" keywords={['Leo Reeves', 'contact']} />
    <ContactForm />
  </Layout>
)

export default ContactPage;
