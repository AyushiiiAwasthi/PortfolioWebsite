import React from "react";
import styles from "./About.module.css";
export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>;
      <div className={styles.content}>
        <img className={styles.aboutImg} src="../assets/aboutImage.png"></img>
        <ul className={styles.items}>
          <li className={styles.item}>
            <img src="../Assets/cursorIcon.png"></img>
            <div className={styles.text}>
              <h3>Frontend Developer</h3>
              <p>
                I am a frontend developer with experience in building responsive
                and optimized websites.
              </p>
            </div>
          </li>
          <li className={styles.item}>
            <img src="../Assets/serverIcon.png"></img>
            <div className={styles.text}>
              <h3>Machine Learning enthusisast</h3>
              <p>
                I am exploring machine learning and developing  projects such as recommendation systems.
              </p>
            </div>
          </li>
          <li className={styles.item}>
            <img src="../Assets/uiIcon.png"></img>
            <div className={styles.text}>
              <h3>Competitive Coding</h3>
              <p>
                I participate in coding contests regularly and I am always eager to solve DSA problems.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
