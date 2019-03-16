import React from 'react';

import styles from './contact-form.module.scss';
import Button from '../button/button';

const ContactForm = () => (
  <form className={styles.contactContainer}>
    <div className={styles.contactRow}>
      <label for="name">
        <h3>Name</h3>
      </label>
      <input
        className={styles.contactInput}
        name="name"
        placeholder="Enter your name">
      </input>
      <label for="email">
        <h3>Email</h3>
      </label>
      <input
        className={styles.contactInput}
        name="email"
        type="email"
        placeholder="Enter your email">
      </input>
    </div>
    <div className={styles.contactRow}>
      <label for="message">
        <h3>Message</h3>
      </label>
      <textarea
        className={styles.contactMessageTextArea}
        name="message"
        placeholder="Enter your message"
      />
    </div>
    <Button buttonText={'Send Message'} />
  </form>
)

export default ContactForm;
