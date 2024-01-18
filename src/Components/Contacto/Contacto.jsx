import React, { useState } from 'react';
import "./Contacto.css";
import emailjs from '@emailjs/browser';

import { useRef } from "react";

import { themeContext } from '../../Context'
import { useContext } from "react";

const Contacto = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode

    const form = useRef();

    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_3zydiwn', 'template_w13w4fc', form.current, 'dNrZ30FK8SrwB1zQ0')
        .then((result) => {
            console.log(result.text);
            setDone(true);
            form.current.reset();
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div className="contact-form" id='Contacto'>        
        <div className="w-left">
            <div className="awesome">
                <span style={{color: darkMode? 'white' : ''}}>Completa el formulario y</span>
                <span>Contáctame</span>
                <div
                    className="blur s-blur"
                    style={{ background: "#ABF1FF94" }}
                ></div>
            </div>
        </div>

        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" className="user" placeholder="Nombre" />
                <input type="email" name="user_email" className="user" placeholder="Email" />
                <textarea name="message" className="user textarea" placeholder="Mensaje" />
                <input type="submit" value="ENVIAR" className="button" />
                <span>{done && "¡Gracias por contactarme!"}</span>
                <div 
                    className="blur c-blur"
                    style={{ background: "var(--purple)" }}
                ></div>
            </form>
        </div>


    </div>
  )
}

export default Contacto