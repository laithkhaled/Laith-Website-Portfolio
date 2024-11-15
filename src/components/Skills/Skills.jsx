import React from "react";
import skills from "../../data/skills.json";
import styles from "./Skills.module.css";


export const Skills = () => {
    return (
        <section className = {styles.container} id="skills">
            <h2 className = {styles.title}>Skills</h2>
            <div className = {styles.content}>
                {skills.map((skills, id) => (
                    <div className = {styles.skill} key={id}>
                        <div className = {styles.skillImageContainer}>
                            <img
                                src={skills.imageSrc}
                                alt={skills.title}
                                onError={() => console.error("Failed to load:", skills.imagesrc)}
                            />
                        </div>
                        <p>{skills.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
