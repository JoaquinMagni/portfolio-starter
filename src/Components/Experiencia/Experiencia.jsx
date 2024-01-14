import React from 'react'
import './Experiencia.css'
import { themeContext } from '../../Context'
import { useContext } from "react";

const Experiencia = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience">

        <div className="achievement">
            <div className="circle">2+</div>
            <span>Años de</span>
            <span>Experiencia</span>
        </div>

        <div className="achievement">
            <div className="circle">20+</div>
            <span>Proyectos</span>
            <span>Completados</span>
        </div>

        <div className="achievement">
            <div className="circle">5+</div>
            <span>Empresas</span>
            <span>Trabajadas</span>
        </div>

    </div>
  )
}

export default Experiencia