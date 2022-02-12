import React from 'react';

import { experience, experienceHeading } from '../../data/experience';
import { about } from '../../data/about';
import { skills, skillsHeading } from '../../data/skills';

import styles from './about-content.module.scss';

const AboutContent = () => (
  <div className={styles.aboutContainer}>
    <div className={styles.aboutRow}>
      <h3 className={styles.aboutHeading}>{about.heading}</h3>
      <div className={styles.aboutContent}>{about.content}</div>
    </div>
    <div className={styles.aboutRow}>
      <h3 className={styles.aboutHeading}>{experienceHeading}</h3>
      <div className={styles.aboutContent}>
        {
          experience.map((experience, index) => {
            return (
              <div key={index}>
                <h4 className={styles.experienceHeading}>
                  {experience.name}
                </h4>
                <div className={styles.experienceContent}>
                  <em>{experience.role}</em>
                  <span>{experience.dates}</span>
                </div>
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
