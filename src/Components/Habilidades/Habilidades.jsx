import React from 'react'
import './Habilidades.css'
import Html from "../../img/html5.png"
import Javascript from "../../img/javascript.png"
import Node from "../../img/node.png"
import Astro from "../../img/astro.png"
import ReactImage from "../../img/react.png"
import { themeContext } from '../../Context'
import { useContext } from "react";

const Habilidades = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode

  return (
    <div className="works" id='Habilidades'>
        <div className="awesome">
            <span style={{color: darkMode? 'white' : ''}}>Mis Habilidades De</span>
            <span>Desarrollo</span>
            <spane style={{color: darkMode? 'white' : ''}}>
                El uso de diferentes tecnologías es indispensable a la hora de realizar un buen proyecto.
                <br /> 
                Diferentes tecnologías como Javascript, React, Node, Next JS, garantizan un proyecto excelente. 
                <br />
                Es indispensable estar al tanto sobre las actualizaciones de los lenguajes para un mejor código.
                <br /> 
                Un código LIMPIO y FUNCIONAL es el resultado de trabajar con las tecnologías de vanguardia.
            </spane>
                        
            <button className="button s-button">Contrátame</button>
            
            <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>

        {/* Lado derecho */}
        <div className="w-right">
            <div className="w-mainCircle"
            >

                <div className="w-secCircle">
                    <img src={Html} alt="" />
                </div>

                <div className="w-secCircle">
                    <img src={Javascript} alt="" />
                </div>

                <div className="w-secCircle">
                    <img src={ReactImage} alt="" />
                </div>

                <div className="w-secCircle">
                    <img src={Node} alt="" />
                </div>

                <div className="w-secCircle">
                    <img src={Astro} alt="" />
                </div>
            </div>
            {/* Background Circles */}
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
        </div>
    </div>
  )
}

export default Habilidades