import React from 'react';

import styles from './about-content.module.scss';

const AboutContent = () => (
  <div className={styles.aboutContainer}>
    <div className={styles.aboutRow}>
      <h3 className={styles.aboutHeading}>Profile</h3>
      <div className={styles.aboutContent}>
        I’m a self-taught developer with a keen eye for detail, strong knowledge of technologies and adept at solving complex problems.
        I’m passionate about building beautiful and responsive websites and apps.
      </div>
    </div>
    <div className={styles.aboutRow}>
      <h3 className={styles.aboutHeading}>Experience</h3>
      <div className={styles.aboutContent}>
        <h4 className={styles.experienceHeading}>
          <span>Prolific</span>
          <span>Jul. 2019 – Present</span>
        </h4>
        <span>Frontend Developer</span>
        <hr/>
        <h4 className={styles.experienceHeading}>
          <span>Lavanda</span>
          <span>Sept. 2017 – Jun. 2019</span>
        </h4>
        <span>Front-end Engineer</span>
        <hr/>
        <h4 className={styles.experienceHeading}>
          <span>Rapid Tender</span>
          <span>Apr. 2017 – Aug. 2017</span>
        </h4>
        <span>Junior Software Developer</span>
        <hr/>
      </div>
    </div>
    <div className={styles.aboutRow}>
      <h3 className={styles.aboutHeading}>Skills</h3>
      <div className={styles.aboutContent}>
        <h4 className={styles.developmentHeading}>Development</h4>
        <span>JavaScript (ES6), TypeScript, React, Ionic, Angular 4+, Vue.js, Semantic HTML, CSS/Sass, Bootstrap, Git</span>
        <h4 className={styles.designHeading}>Design</h4>
        <span>Sketch, Figma, Photoshop, After Effects</span>
      </div>
    </div>
  </div>
)

export default AboutContent;
