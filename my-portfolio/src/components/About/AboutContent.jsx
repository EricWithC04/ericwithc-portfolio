import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./AboutContent.module.css";
import certificate from "../../assets/certificado-henry.jpg";
import react2 from "../../assets/react2.jpg";

const AboutContent = () => {
    return (
        <div className={styles.about}>
            <div className={styles.left}>
                <h1>Quién soy?</h1>
                <p>
                    Soy un Frontend Developer Jr en búsqueda de mi primera
                    oportunidad en la industria tecnologica!
                </p>
                <Link to="/Contact">
                    <button className={styles.btn}>Contacto</button>
                </Link>
            </div>
            <div className={styles.right}>
                <div className={styles.imgContainer}>
                    <div className={styles.imgStackTop}>
                        <img src={certificate} className={styles.img} alt="true" />
                    </div>
                    <div className={styles.imgStackBottom}>
                        <img src={react2} className={styles.img} alt="true" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutContent;