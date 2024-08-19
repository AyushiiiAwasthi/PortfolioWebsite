import React from "react";
import styles from "./Hero.module.css";
export const Hero =() =>{
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi,I'm Ayushi</h1>
            <p className={styles.desc}>Hey, I'm Ayushi Awasthi! I'm a sophomore at IIIT Lucknow, pursuing B.Tech in Computer Science and Artificial Intelligence.</p>
            <a className={styles.btn}href="https://drive.google.com/file/d/1LtqYCLOjefmr48w9wXCr1LXnhNZ94fg2/view?usp=sharing">Know Me Better</a>
        </div>
        <img className={styles.heroImg} src="../assets/heroImage.png"></img>
        <div className={styles.top}></div>
        <div className={styles.bottom}/>
    </section>;
}