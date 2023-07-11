import React, { useRef, useState } from 'react';
import styles from "./Form.module.css";

const Form = () => {

    const refForm = useRef();

    const [ btn, setBtn ] = useState("Enviar")
    const [ errors, setErrors ] = useState({})
    const [ email, setEmail ] = useState({
        name: "",
        emailAddress: "",
        subject: "",
        message: ""
    })

    const validate = (formValues) => {
        let errs = {}
        if(!formValues.name.length) errs = {name: "Campo Requerido!"}
        else if(formValues.name.length > 25) errs = {name: "Nombre demasiado largo!"}
        else if(!formValues.emailAddress.length) errs = {emailAddress: "Campo Requerido!"}
        else if(!formValues.subject.length) errs = {subject: "Campo Requerido!"}
        else if(formValues.subject.length > 45) errs = {subject: "Demasiado largo!"}
        else if(!formValues.message.length) errs = {message: "Campo Requerido!"}
        else if(formValues.message.length > 250) errs =  {message: "Mensaje demasiado largo!"}
        setErrors(errs)
        const amountErrors = Object.keys(errs);
        if (!amountErrors.length) return true
        else return false
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setBtn("Enviando...")

        const validated = await validate(email)

        if (validated) {
            const sendedEmail = await fetch(`http://localhost:3001/email`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(email)
            }).then(res => res.json())
    
            alert(sendedEmail.message)
        }

        setBtn("Enviado!")

    }

    const handleChange = (e) => {
        e.preventDefault();

        setEmail({
            ...email,
            [e.target.name]: e.target.value
        })

    }

    return (
        <div className={styles.form}>
            <form ref={refForm} action='' onChange={(e) => handleChange(e)} onSubmit={(e) => handleSubmit(e)}>
                <label>Tu Nombre</label>
                <input type="text" name='name' autoComplete='off' required/>
                <p>{errors.hasOwnProperty("name") ? errors.name : null}</p>
                <label>Email</label>
                <input type="email" name='emailAddress' autoComplete='off' required/>
                <p>{errors.emailAddress}</p>
                <label>Asunto</label>
                <input type="text" name='subject' autoComplete='off' required/>
                <p>{errors.subject}</p>
                <label>Correo</label>
                <textarea rows="6" placeholder="Introduce tu mensaje acá..." name='message' autoComplete='off' required/>
                <p>{errors.message}</p>
                <button type="submit" className={styles.btn}>{btn}</button>
            </form>
        </div>
    );
};

export default Form;