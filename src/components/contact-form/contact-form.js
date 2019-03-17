import React from 'react';

import styles from './contact-form.module.scss';
import RouteButton from '../buttons/route-button';

const formspreeUrl = '//formspree.io/';
const emailLabel = 'leojreeves+portfolio';
const emailProvider = '@gmail.com';
const formUrl = `${formspreeUrl}${emailLabel}${emailProvider}`;

const ContactForm = () => (
  <form
    className={styles.contactContainer}
    action={formUrl}
    method="POST"
  >
    <div className={styles.contactRow}>
      <label htmlFor="name">
        <h3>Name</h3>
      </label>
      <input
        className={styles.contactInput}
        name="name"
        placeholder="Enter your name"
        required
      >
      </input>
      <label htmlFor="_replyto">
        <h3>Email</h3>
      </label>
      <input
        className={styles.contactInput}
        name="_replyto"
        type="email"
        placeholder="Enter your email"
        required
      >
      </input>
    </div>
    <div className={styles.contactRow}>
      <label htmlFor="message">
        <h3>Message</h3>
      </label>
      <textarea
        className={styles.contactMessageTextArea}
        name="message"
        placeholder="Enter your message"
        required
      />
    </div>
    <input type="text" name="_gotcha" style={{ display: 'none' }} title="please ignore" />
    <input type="hidden" name="_next" value="/contact" />
    <RouteButton buttonText={'Send Message'}/>
  </form>
)

export default ContactForm;
