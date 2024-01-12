import React from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import Resto from '../../img/resto.png';
import Planificador from '../../img/planificador.png';
import Veterinaria from '../../img/veterinaria.png';
import Blogcafe from '../../img/blogcafe.png';
import Festival from '../../img/festival.png';

import 'swiper/css'

const Portfolio = () => {
  return (
    <div className="portfolio">

        {/* Heading */}
        <span>Proyectos Recientes</span>
        <span>Portfolio</span>

        {/* Slider */}
        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
        >

            <SwiperSlide>
                <a
                    href="https://restococina.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                >                    
                    <img src={Resto} alt="" />
                    <button>VISITAR</button>
                </a>
            </SwiperSlide>

            <SwiperSlide>
                <a
                    href="https://presupuesto-de-gasto.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                > 
                    <img src={Planificador} alt="" />
                    <button>VISITAR</button>
                </a>
            </SwiperSlide>

            <SwiperSlide>
                <a
                    href="https://stylo-pet.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                > 
                    <img src={Veterinaria} alt="" />
                    <button>VISITAR</button>
                </a>
            </SwiperSlide>

            <SwiperSlide>
                <a
                    href="https://festivaldemusicapop.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                > 
                    <img src={Festival} alt="" />
                    <button>VISITAR</button>
                </a>
            </SwiperSlide>

            <SwiperSlide>
                <a 
                    href="https://blogdecafeejemplojoaquin.netlify.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <img src={Blogcafe} alt="" />
                    <button>VISITAR</button>
                </a>                
            </SwiperSlide>

        </Swiper>
    </div>
  )
}

export default Portfolio