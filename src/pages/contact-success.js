import React from 'react';

import Header from '../components/header/header';
import Layout from '../components/layout/layout';

const ContactSuccessPage = () => (
  <Layout>
    <Header
      primaryHeading={'Thank you for your message'}
      buttonText={'Return Home'}
      buttonRoute={'/'}
    />
  </Layout>
)

export default ContactSuccessPage;
