import React from "react";
import history from "../../data/history.json";
import styles from "./Experience.module.css";

export const Experience = () => {
    return (
        <section className = {styles.container} id="experience">
            <h2 className = {styles.title}>Experience</h2>
            <div className = {styles.content}>
                <ul className = {styles.history}>
                {history.map((historyItem, id) => {
                    return <li className = {styles.historyItem} key = {id}>
                        <div className = {styles.historyImageContainer}>
                        <img
                                src={historyItem.imageSrc}
                                alt={`${historyItem.organization} Logo`}
                            />
                        </div>
                        <div className = {styles.historyItemDetails}>
                            <h3>{`${historyItem.role}, ${historyItem.organization}`}</h3>
                            <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                            <ul>{historyItem.experiences.map((experience, id) => {
                                return <li key = {id}>{experience}</li>
                            })}</ul>
                        </div>
                    </li>
                })}
                </ul>
            </div>
        </section>
    );
};
