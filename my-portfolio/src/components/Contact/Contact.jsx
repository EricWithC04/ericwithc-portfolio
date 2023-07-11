import React from 'react';
import Footer from '../Footer/Footer.jsx';
import Heroimg from '../Heroimg/Heroimg.jsx';
import NavBar from "../NavBar/NavBar.jsx";
import Form from './Form.jsx';

const Contact = () => {
    return (
        <div>
            <NavBar />
            <Heroimg heading="CONTACTO" text="Hablemos un rato!"/>
            <Form />
            <Footer />
        </div>
    );
};

export default Contact;