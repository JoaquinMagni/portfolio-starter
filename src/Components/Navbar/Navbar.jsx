import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="n-wrapper">

        <div className="n-left">
            <div className="n-name">Joaquín</div>
            <span>toggle</span>
        </div>

        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType: 'none'}}>
                    <li>Home</li>
                    <li>Servicios</li>
                    <li>Experiencia</li>
                    <li>Portfolio</li>
                </ul>                
            </div>
        </div>  

        <button className="button n-button">
            Contácto
        </button>
    </div>
  )
}

export default Navbar