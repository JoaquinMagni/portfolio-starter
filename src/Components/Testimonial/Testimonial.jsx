import React from 'react';
import './Testimonial.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import { Pagination } from "swiper/modules";
import 'swiper/css/pagination';
import 'swiper/css';

const Testimonial = () => {
    const clientes = [
        {
            img: profilePic1,
            review:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, quaerat voluptatibus assumenda voluptate quos tempora illum veritatis similique fuga laboriosam quam excepturi voluptas veniam suscipit modi accusantium commodi explicabo molestias!",
        },
        {
            img: profilePic2,
            review:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, quaerat voluptatibus assumenda voluptate quos tempora illum veritatis similique fuga laboriosam quam excepturi voluptas veniam suscipit modi accusantium commodi explicabo molestias!",
        },
        {
            img: profilePic3,
            review:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, quaerat voluptatibus assumenda voluptate quos tempora illum veritatis similique fuga laboriosam quam excepturi voluptas veniam suscipit modi accusantium commodi explicabo molestias!",
        },
        {
            img: profilePic4,
            review:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, quaerat voluptatibus assumenda voluptate quos tempora illum veritatis similique fuga laboriosam quam excepturi voluptas veniam suscipit modi accusantium commodi explicabo molestias!",
        },
    ]

  return (
    <div className="t-wrapper">
        <div className="t-heading">
            <span>Los clientes siempre obtendrán </span>
            <span>UN TRABAJO EXCEPCIONAL .</span>
            <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
            <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
        </div>
        {/* slider */}
        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}        
        >
            {clientes.map((cliente, index)=>{
                return(
                    <SwiperSlide key={index}>
                        <div className="testimonial">
                            <img src={cliente.img} alt="" />
                            <span>{cliente.review}</span>
                        </div>
                    </SwiperSlide>
                )
            })}


        </Swiper>
    </div>
  )
}

export default Testimonial