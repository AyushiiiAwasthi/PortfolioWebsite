import React from "react";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utlis.js";
import styles from "./Experience.module.css";

export const Experience = () => {
    return (
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Achievements & Skills</h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                {skills.map((skills, id) => (
                    <div key={id} className={styles.skill}>
                        <div className={styles.imgCon}>
                            <img src={(skills.imageSrc)} alt={skills.title} />
                        </div>
                            <p>{skills.title}</p>
                        
                    </div>
                ))}
                </div>
                
            
            <ul className={styles.history}>
                 {history.map((historyItem,id) =>(
                    <li key={id} className={styles.hisItem}>
                       <img src={historyItem.imageSrc}/>
                       <div className={styles.details}>
                       <h3>{historyItem.role}, {historyItem.organisation}</h3>
                       
                       <ul>{historyItem.experiences.map((experience,id) => {
                            return <li key={id}>{experience}</li>
                       })}</ul>
                       </div>
                    </li>
                ))}
            </ul>
            </div>
        </section>
    );
};
