import React from 'react';
import Footer from '../Footer/Footer.jsx';
import Heroimg from '../Heroimg/Heroimg.jsx';
import NavBar from "../NavBar/NavBar.jsx";
import AboutContent from './AboutContent.jsx';

const About = () => {
    return (
        <div>
            <NavBar />
            <Heroimg heading="SOBRE MÍ" text="Soy un desarrollador de React Jr."/>
            <AboutContent />
            <Footer />
        </div>
    );
};

export default About;