import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div className="n-wrapper">

        <div className="n-left">
            <div className="n-name">JM DEV</div>
            <Toggle />
        </div>

        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType: 'none'}}>
                    <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                    <li className="hovernaranja">HOME</li>
                    </Link>

                    <Link spy={true} to='Servicios' smooth={true}>
                    <li className="hovernaranja">SERVICIOS</li>
                    </Link>

                    <Link spy={true} to='Habilidades' smooth={true}>
                    <li className="hovernaranja">HABILIDADES</li>
                    </Link>

                    <Link spy={true} to='Portfolio' smooth={true}>
                    <li className="hovernaranja">PORTFOLIO</li>
                    </Link>                         
                </ul>                
            </div>
        </div>  
        <Link spy={true} to='Contacto' smooth={true}>
            <button className="button n-button">
                CONTÁCTO
            </button>
        </Link>
    </div>
  )
}

export default Navbar