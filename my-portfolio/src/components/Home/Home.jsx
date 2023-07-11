import React from 'react';
import Footer from '../Footer/Footer.jsx';
import NavBar from "../NavBar/NavBar.jsx";
import Heroimg from "./Heroimg.jsx";
import ProjectCards from "../ProjectCards/ProjectCards.jsx";

const Home = () => {
    return (
        <div>
            <NavBar />
            <Heroimg />
            <ProjectCards />
            <Footer />
        </div>
    );
};

export default Home;