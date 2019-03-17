import React from 'react';

import Layout from '../components/layout/layout';

import Header from '../components/header/header';

const ContactSuccessPage = () => (
  <Layout>
    <Header
      primaryHeading={'Thank you for your message'}
      secondaryHeading={'I will be in touch shortly!'}
      buttonText={'Return Home'}
      buttonRoute={'/'}
    />
  </Layout>
)

export default ContactSuccessPage;
