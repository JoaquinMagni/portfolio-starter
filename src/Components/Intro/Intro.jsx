import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from '../../Context'
import { useContext } from "react";

import { Link } from 'react-scroll'

const Intro = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className="intro">

        <div className="i-left">
            <div className="i-name">
                <span style={{color: darkMode? 'white' : ''}}>¡Hola! Soy</span>
                <span>Joaquín Magni</span>
                <span style={{color: darkMode? 'white' : ''}}>Desarrollador React Frontend, con una gran capacidad de aprendizaje e interés por el diseño y desarrollo, dando como resultado trabajos de calidad.</span>
            </div>
            <Link spy={true} to='Contacto' smooth={true}>                
                <button className= "button i-button">CONTRÁTAME</button>
            </Link>

            <div className="i-icons">
                <a 
                  href='https://github.com/JoaquinMagni'
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                <img src={Github} alt="" />
                </a>

                <a 
                  href='https://www.linkedin.com/in/joaquinmagnidev/'
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                <img src={LinkedIn} alt="" />
                </a>

                <a 
                  href='https://www.instagram.com/magni.joaqa/'
                  target="_blank" 
                  rel="noopener noreferrer"
                >                    
                <img src={Instagram} alt="" />
                </a>
            </div>

        </div>

        <div className="i-right">

            <img src={Vector1} alt='' />
            <img src={Vector2} alt='' />
            <img src={boy} alt='' className='foto' />
            <img src={glassesimoji} alt="" />
            <div 
                style={{top: '-4%', left: '68%'}}
                className='floating-div'
            >
                <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
            </div>
            <div 
                style={{top: '18rem', left: '0rem'}}
                className='floating-div'
            >
                <FloatingDiv image={thumbup} txt1="Responsive Web" txt2="Design" />
            </div>
            {/* Blur divs */}
            <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
            <div className='blur'
            style={{
                background: '#C1F5FF',
                top: '17rem',
                width: '21rem',
                height: '11rem',
                left: '-9rem'
            }}

            ></div>
        </div>
    </div>
  )
}

export default Intro