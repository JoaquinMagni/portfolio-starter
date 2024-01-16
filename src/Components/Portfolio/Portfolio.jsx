import React from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import Resto from '../../img/resto.png';
import Planificador from '../../img/planificador.png';
import Veterinaria from '../../img/veterinaria.png';
import Blogcafe from '../../img/blogcafe.png';
import Festival from '../../img/festival.png';
import { themeContext } from '../../Context'
import { useContext } from "react";

import 'swiper/css';
import { Pagination } from 'swiper/modules';

const Portfolio = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id='Portfolio'>

        {/* Heading */}
        <span style={{color: darkMode? 'white' : ''}}>Proyectos Recientes</span>
        <span>Portfolio</span>

        {/* Slider */}
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="portfolio-slider"               
        >

            <SwiperSlide>
                <a
                    href="https://restococina.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                >                    
                    <img src={Resto} alt="" />                    
                </a>
            </SwiperSlide>

            <SwiperSlide>
                <a
                    href="https://presupuesto-de-gasto.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                > 
                    <img src={Planificador} alt="" />
                </a>
            </SwiperSlide>

            <SwiperSlide>
                <a
                    href="https://stylo-pet.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                > 
                    <img src={Veterinaria} alt="" />
                </a>
            </SwiperSlide>

            <SwiperSlide>
                <a
                    href="https://festivaldemusicapop.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                > 
                    <img src={Festival} alt="" />
                </a>
            </SwiperSlide>

            <SwiperSlide>
                <a 
                    href="https://blogdecafeejemplojoaquin.netlify.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <img src={Blogcafe} alt="" />
                </a>                
            </SwiperSlide>

        </Swiper>
    </div>
  )
}

export default Portfolio