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
            <p className = {styles.paragraph}> 
                Hi, I'm Laith Khaled—a Computer Science student at the University of New Orleans, set to graduate 
                in December 2024. 
                I've been programming since high school, honing my skills across a diverse range of languages and frameworks like 
                React Native, Java, C#, C++, JavaScript, and Python. My concentration in game development has driven me to create 
                engaging projects, from mobile apps to game prototypes in Unity and Unreal Engine. Beyond coding, 
                I have a creative side as a photographer and video editor. In my free time, I like to play video games, 
                play my guitar, read comics, and take photos. Now, as I prepare to step into the tech industry, 
                I'm eager to leverage my technical expertise and creative mindset to build innovative 
                solutions and impactful software. Let's connect—I'm excited to see where this journey leads!

                 

            </p>
        </section>
    );
};
