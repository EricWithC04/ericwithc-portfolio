import React from 'react';
import Footer from '../Footer/Footer.jsx';
import Heroimg from '../Heroimg/Heroimg.jsx';
import NavBar from "../NavBar/NavBar.jsx";
import ProjectCards from '../ProjectCards/ProjectCards.jsx';

const Projects = () => {
    return (
        <div>
            <NavBar />
            <Heroimg heading="PROYECTOS" text="Algunos de mis trabajos."/>
            <ProjectCards />
            <Footer />
        </div>
    );
};

export default Projects;