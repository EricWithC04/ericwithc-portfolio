import React from 'react';
import styles from "./Heroimg.module.css";

const Heroimg = ({ heading, text }) => {
    return (
        <div className={styles.heroImg}>
            <div className={styles.heading}>
                <h1>{heading}</h1>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default Heroimg;