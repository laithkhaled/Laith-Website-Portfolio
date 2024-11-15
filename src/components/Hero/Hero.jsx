import React from "react";
import styles from "./Hero.module.css";
export const Hero = () => {
    return <section className= {styles.container}>
        <div className= {styles.content}>
            <h1 className= {styles.title}>Hi, I'm Laith,</h1>
            <p className= {styles.paragraph}>a Computer Science student at the University of New Orleans, 
                graduating in December 2024. I specialize in game development and have hands-on experience 
                with languages like Java, C#, C++, and Python, along with frameworks like React Native and Unity. 
                My projects range from mobile applications to game prototypes, demonstrating my ability to create efficient, 
                scalable solutions. I’m now looking to launch my career in the tech industry, where I can apply my 
                skills in software development and problem-solving to drive impactful results.</p>
            <a href = "mailto:laithkhaled8@gmail.com" className= {styles.contact}>Contact Me</a>
        </div>
        <img src = {"/assets/Hero/laithphoto.png"} alt = "Image of Laith Khaled" className= {styles.image}/>
        <div className= {styles.topBlur} />
        <div className= {styles.bottomBlur} />
    </section>
}