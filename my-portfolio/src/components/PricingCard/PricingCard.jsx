import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./PricingCard.module.css";

// Este componente de momento no se va a utilizar

const PricingCard = () => {
    return (
        <div className={styles.project}>
            <div className={styles.cardContainer}>
                <div className={styles.card}>
                    <h3></h3>
                    <span className={styles.bar}></span>
                    <img src="#" alt="nothing" />
                    <Link className={styles.btn}>VIEW</Link>
                </div>
                <div className={styles.card}>
                    <h3></h3>
                    <span className={styles.bar}></span>
                    <img src="#" alt="nothing" />
                    <Link className={styles.btn}>VIEW</Link>
                </div>
                <div className={styles.card}>
                    <h3></h3>
                    <span className={styles.bar}></span>
                    <img src="#" alt="nothing" />
                    <Link className={styles.btn}>VIEW</Link>
                </div>
            </div>
        </div>
    );
};

export default PricingCard;