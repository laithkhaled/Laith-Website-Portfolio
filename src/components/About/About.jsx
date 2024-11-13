import React from "react";
import styles from "./About.module.css";

export const About = () => {
    return (
        <section className={styles.container} id = "about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img
                    className={styles.image}
                    src="/assets/About/IMG_1912.png"
                    alt="Me standing in front of the Chicago Bean"
                />
            </div>
            <h3 className = {styles.paragraphTitle}>Here are some things about me</h3>
            <p className = {styles.paragraph}>This is a sample text for things about Laith Khaled</p>
        </section>
    );
};
