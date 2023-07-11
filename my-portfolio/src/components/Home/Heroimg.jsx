import React from 'react';
import { Link } from "react-router-dom"
import IntroImg from "../../assets/intro-bg.jpg";
import styles from "./Heroimg.module.css";

const Heroimg = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.mask}>
                <img className={styles.introImg} src={IntroImg} alt="IntroImg" />
            </div>
            <div className={styles.content}>
                <p>Hola, Me llamo Eric y soy un</p>
                <h1>React Developer</h1>
                <div>
                    <Link to="/Projects" className={styles.btn}>Proyectos</Link>
                    <Link to="/Contact" className={styles.btnLight}>Contacto</Link>
                </div>
            </div>
        </div>
    );
};

export default Heroimg;