import React from 'react'
import './Habilidades.css'
import Upwork from "../../img/Upwork.png"
import Fiverr from "../../img/fiverr.png"
import Amazon from "../../img/amazon.png"
import Shopify from "../../img/Shopify.png"
import Facebook from "../../img/Facebook.png"

const Habilidades = () => {
  return (
    <div className="works">
        <div className="awesome">
            <span>Mis Habilidades</span>
            <span>Diseño y Desarrollo</span>
            <spane>
                Diferentes proyectos, utilizando herramientas JS, React, Astro y demás.
                <br /> 
                Diseño completamente responsive.
                <br />
                Una simple muestra de mis habilidades de desarrollador Frontend.
                <br /> 
                Aca ya no se que carajo poner.
            </spane>
                        
            <button className="button s-button">Contrátame</button>
            
            <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>

        {/* Lado derecho */}
        <div className="w-right">
            <div className="w-mainCircle">

                <div className="w-secCircle">
                    <img src={Upwork} alt="" />
                </div>

                <div className="w-secCircle">
                    <img src={Fiverr} alt="" />
                </div>

                <div className="w-secCircle">
                    <img src={Amazon} alt="" />
                </div>

                <div className="w-secCircle">
                    <img src={Shopify} alt="" />
                </div>

                <div className="w-secCircle">
                    <img src={Facebook} alt="" />
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