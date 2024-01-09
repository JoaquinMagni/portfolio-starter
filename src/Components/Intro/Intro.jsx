import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'

const Intro = () => {
  return (
    <div className="intro">

        <div className="i-left">
            <div className="i-name">
                <span>¡Hola! Soy</span>
                <span>Joaquín Magni</span>
                <span>Desarrollador Frontend, con una gran capacidad de aprendizaje e interés por el diseño y desarrollo, dando como resultado trabajos de calidad.</span>
            </div>

            <button className="button i-button">Contrátame</button>

            <div className="i-icons">
                <img src={Github} alt="" />
                <img src={LinkedIn} alt="" />
                <img src={Instagram} alt="" />
            </div>

        </div>

        <div className="i-right">

            sidebar derecho
        </div>
    </div>
  )
}

export default Intro