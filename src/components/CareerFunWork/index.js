import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/scss/autoplay";
import "swiper/css/scrollbar";
import Style from "./CareerFunWork.module.scss";
import Assets from "../Layout/CommonLayout/assets";
import Image from "next/image";
import Icon from "../Layout/Icons";
import Animate from "../Animate/animate";

import { Scrollbar } from "swiper";




const CareerFunWork = ({ props }) => {


    const navPrevRef = useRef(null);
    const navNextRef = useRef(null);
    const ball = useRef(null);
  
    useEffect(() => {
      const ballElm = ball.current;
  
      let mouseX = 0;
      let mouseY = 0;
  
      let ballX = 0;
      let ballY = 0;
  
      let speed = 0.08;
  
      function animate() {
        let distX = mouseX - ballX;
        let distY = mouseY - ballY;
  
        ballX = ballX + distX * speed;
        ballY = ballY + distY * speed;
        if (ballElm) {
          ballElm.style.left = ballX + "px";
          ballElm.style.top = ballY + "px";
        }
  
        requestAnimationFrame(animate);
      }
      animate();
  
      const handleMouseMove = (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
      };

      window?.addEventListener("mousemove", handleMouseMove);
    
  
      return () => {
        cancelAnimationFrame(animate);
        window?.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);
    


  const parse = require("html-react-parser");
  return (
    <section className={Style.CareerFunWork}>

        <div className={Style.top_bg}>
            <Image fill src={Assets.fun_work_bg} alt={"background Image"}  quality={100}  sizes="(max-width: 768px) 100vw"/>
        </div>

      <div className="container text-white position-relative">
        <div className="row">
          <div className="col-lg-4">
                <h2 className={`h2 ${Style.title}`}>{parse(props?.data?.title)}</h2>
          </div>

          <div className="col-lg-8">
                <div className={Style.discription}>
                    {parse(props?.data?.text)}
                </div>
          </div>
        </div>


        <Animate className={Style.careerfuture_section_slider}>
          <span className="drag" ref={ball}>
            {/* <button className="arrow-lg-prev" ref={navPrevRef}>
              <Icon icon="arrow-lg-prev" size={10} color={"#ffffff"} />
            </button> */}
              Drag
            {/* <button className="arrow-lg-next" ref={navNextRef}>
              <Icon icon="arrow-lg-next" size={10} color={"#ffffff"} />
            </button> */}
          </span>
          <Swiper
            spaceBetween={30}
            draggable={true} 
            speed={1000}
            scrollbar={{ draggable: true, dragSize: 60 }}
            // grabCursor={true}
            autoplay={true}
            loop={false}
            modules={[Navigation,Scrollbar]}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navPrevRef.current;
              swiper.params.navigation.nextEl = navNextRef.current;
            }}
            navigation={{
              prevEl: navPrevRef.current,
              nextEl: navNextRef.current,
            }}
            className={`${Style.board_swiper} slider`}
            breakpoints={{
              0: {
                spaceBetween: 15,
                slidesPerView: 1.1,
              },
              768: {
                spaceBetween: 30,
                slidesPerView: 2,
              },
              992: {
                spaceBetween: 30,
                slidesPerView: 2.4,
              },
              1500: {
                spaceBetween: 36,
                slidesPerView: 2.5,
              },
            }}
          >
            {props?.data?.images.map((item, i) => {
              return (
                <SwiperSlide className={Style.item} key={i}>
                  <figure className={`mb-0 ${Style.swiper_figure}`}>
                    <Image src={item?.url} fill alt="image"  quality={100}  sizes="(max-width: 768px) 100vw"/>
                  </figure>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Animate>


      </div>
    </section>
  );
};
export default CareerFunWork;
