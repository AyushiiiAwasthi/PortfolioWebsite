import React from "react";
import styles from "./Contact.module.css";
export const Contact = () => {
    return <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to contact me.</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
            <img src="../assets/emailIcon.png" />
            <a href="mailto:awasthiayushi301@gmail.com">awasthiayushi301@gmail.com</a>
            </li>
            <li className={styles.link}>
            <img src="../assets/linkedinIcon.png" />
            <a href="https://www.linkedin.com/in/ayushi-awasthi-61b4a82a7/">Linkedin.com/AyushiAwasthi</a>
            </li>
            <li className={styles.link}>
            <img src="../assets/githubIcon.png" />
            <a href="https://github.com/AyushiiiAwasthi">github.com/AyushiAwasthi</a>
            </li>
        </ul>
    </footer>
}