import React from 'react';

import { experience, experienceHeading } from '../../data/experience';
import { profile } from '../../data/profile';
import { skills, skillsHeading } from '../../data/skills';
import styles from './about-content.module.scss';

const AboutContent = () => (
  <div className={styles.aboutContainer}>
    <div className={styles.aboutRow}>
      <h3 className={styles.aboutHeading}>{profile.heading}</h3>
      <div className={styles.aboutContent}>{profile.content}</div>
    </div>
    <div className={styles.aboutRow}>
      <h3 className={styles.aboutHeading}>{experienceHeading}</h3>
      <div className={styles.aboutContent}>
        {
          experience.map((experience, index) => {
            return (
              <div key={index}>
                <h4 className={styles.experienceHeading}>
                  <span>{experience.name}</span>
                  <span>{experience.dates}</span>
                </h4>
                <span>{experience.role}</span>
                <hr/>
              </div>
            )
          })
        }
      </div>
    </div>
    <div className={styles.aboutRow}>
      <h3 className={styles.aboutHeading}>{skillsHeading}</h3>
      <div className={styles.aboutContent}>
      {
          skills.map((skill, index) => {
            return (
              <div key={index}>
                <h4 className={styles[skill.heading_class]}>{skill.heading}</h4>
                <span>{skill.content}</span>
              </div>
            )
          })
        }
      </div>
    </div>
  </div>
)

export default AboutContent;
