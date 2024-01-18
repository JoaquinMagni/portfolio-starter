import React from 'react'
import './Footer.css'

import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'

import Wave from '../../img/wave.png'

const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{ width: '100%'}} />
        <div className="f-content">
            <span>joaquinmagnidev@gmail.com</span>
            <div className="f-icons">
                <a 
                  href='https://github.com/JoaquinMagni'
                  target="_blank" 
                  rel="noopener noreferrer"
                >                
                  <Github color="white" size="3rem" />
                </a>

                <a 
                  href='https://www.linkedin.com/in/joaquin-magni/'
                  target="_blank" 
                  rel="noopener noreferrer"
                >                
                <Linkedin color="white" size="3rem" />                  
                </a>

                <a 
                  href='https://www.instagram.com/magni.joaqa/'
                  target="_blank" 
                  rel="noopener noreferrer"
                >                                                 
                <Insta color="white" size="3rem" />                
                </a>

            </div>
        </div>
    </div>
  )
}

export default Footer