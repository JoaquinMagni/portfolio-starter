import React from 'react'
import './Servicios.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Curriculum from './Curriculum.pdf'
import { themeContext } from '../../Context'
import { useContext } from "react";

const Servicios = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className="services" id='Servicios'>
        {/* Lado Izquierdo */}
        <div className="awesome">
        <span style={{color: darkMode? 'white' : ''}}>Mis Increíbles</span>
        <span>servicios</span>
        <spane>
            Como desarrollador React, me considero un apasionado por el código.
            <br /> 
            Pudiendo colaborar en ambas etapas de desarrollo, ya sea UX ó UI.
        </spane>
        <a href={Curriculum} download>            
        <button className="button s-button">Descargar CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>
        {/* Lado Derecho */}
        <div className="cards">

            {/* Primera Card */}            
            <div style={{left: '14rem'}}>
                <Card
                    emoji = {HeartEmoji}
                    heading = {'Diseño'}
                    detail = {"Photoshop, Adobe, Adobe xd, Inkscape"}
                />
            </div>
            {/* Segunda Card */}
            <div style={{top: '12rem', left: "-4rem" }}>
                <Card
                    emoji = {Glasses}
                    heading = {'Desarrollo'}
                    detail = {"HTML, CSS, Javascript, Astro, React"}
                />
            </div>
            {/* Tercera Card */}
            <div style={{top: '19rem', left: "12rem" }}>
                <Card
                    emoji = {Humble}
                    heading = {"UI/UX"}
                    detail = {"Mis habilidades UI/UX permiten desenvolverme a la perfección en el desarrollo Frontend."}
                />
            </div>

            <div className="blur s-blur-2" style={{ background: "var(--purple)" }}>

            </div>
        </div>

    </div>
  )
}

export default Servicios