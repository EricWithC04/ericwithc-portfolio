import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";
import './App.css';

const App = () => {
    return (
        <div>
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/About"
                    element={<About />}
                />
                <Route
                    path="/Projects"
                    element={<Projects />}
                />
                <Route
                    path="/Contact"
                    element={<Contact />}
                />
            </Routes>
        </div>
    );
}

export default App;
