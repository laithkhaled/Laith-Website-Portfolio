import React from "react";
import styles from "./Contact.module.css"

export const Contact = () => {
    return (
        <footer id = "contact" className= {styles.container}>
            <div className= {styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out to me if you're looking for a developer, photographer, video editor, or just looking to chat!</p>
            </div>
            <ul className= {styles.links}>
                <div className = {styles.linkImageContainer}>
                <li className= {styles.link}>
                    <img src = "/assets/Contact/Email.png" alt = "Email Icon"/>
                    <a href = "mailto:laithkhaled8@gmail.com">laithkhaled8@gmail.com</a>
                </li>
                <li className= {styles.link}>
                    <img src = "/assets/Contact/LinkedIn.png" alt = "LinkedIn Icon"/>
                    <a href = "https://www.linkedin.com/in/laithkhaled/">linkedin.com/laithkhaled</a>
                </li>
                <li className= {styles.link}>
                    <img src = "/assets/Contact/Github.png" alt = "Github Icon"/>
                    <a href = "https://github.com/laithkhaled">github.com/laithkhaled</a>
                </li>
                </div>
            </ul>
        </footer>
    );
}

/* 
ICON REFERENCES:
Email: <a href="https://www.flaticon.com/free-icons/email" title="email icons">Email icons created by Freepik - Flaticon</a>
LinkedIn: <a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Linkedin icons created by Google - Flaticon</a>
Github: <a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by Pixel perfect - Flaticon</a>
*/