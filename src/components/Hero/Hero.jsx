import React from "react";
import styles from "./Hero.module.css";
export const Hero = () => {
    return <section className= {styles.container}>
        <div className= {styles.content}>
            <h1 className= {styles.title}>Hi, I'm Laith.</h1>
            <p className= {styles.paragraph}>I am a senior Computer Science student at the University of New Orleans.</p>
            <a href = "mailto:laithkhaled8@gmail.com" className= {styles.contact}>Contact Me</a>
        </div>
        <img src = {"/assets/Hero/laithphoto.png"} alt = "Image of Laith Khaled" className= {styles.image}/>
        <div className= {styles.topBlur} />
        <div className= {styles.bottomBlur} />
    </section>
}