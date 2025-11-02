import Image from "next/image";
import Style from "./HomeBanner.module.scss";
import Assets from "../Layout/CommonLayout/assets";
// import Slider from "../Slider";

import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// import required modules
import { Scrollbar, Pagination, EffectFade, Autoplay } from "swiper";
import Link from "next/link";
import Icons from "../Layout/Icons";
import { useWindowSize } from "../../logic/useDimension";

import Animate from "../Animate/animate";

const HomeBanner = ({ props }) => {
  const parse = require("html-react-parser");
  const { width } = useWindowSize();


  const backgroundColors = ['#040026', '#042847','#242627',  '#201522']; // Example colors
  
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const handleSlideChange = (swiper) => {
    // Update the current slide index when the slide changes
    setCurrentSlideIndex(swiper.realIndex);
  };


// onload add class to components
  const addMyLoadClass = useRef(null);

  useEffect(() => {
    // Add the class to the element after it has been rendered
    if (addMyLoadClass.current) {
      addMyLoadClass.current.classList.add('loadedclass');
    }
  }, []);

  // const settings = {
  //   slidesPerView: 2,
  //   spaceBetween: 0,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  // };

  return (
    // <section className={Style.banner_sec} >
    //   <Slider {...settings}>
    //     <SwiperSlide>Slide 1</SwiperSlide>
    //     <SwiperSlide>Slide 2</SwiperSlide>
    //     <SwiperSlide>Slide 3</SwiperSlide>
    //     <SwiperSlide>Slide 4</SwiperSlide>
    //   </Slider>
    // </section>

    <section className={`${Style.banner_sec}`} style={{ backgroundColor: backgroundColors[currentSlideIndex] }} ref={addMyLoadClass}>
      <div className="container-fluid px-0">
        <Swiper
          scrollbar={{
            hide: true,
            el: ".scrollbar_slider",
          }}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          onSlideChange={handleSlideChange}
          effect="fade"
          pagination={{
            el: ".jail-app-left-side-fractions",
            type: "custom",
            renderCustom: function (swiper, current, total) {
              return "0" + current + " / " + "0" + total;
            },
          }}
          modules={[Autoplay, Scrollbar, Pagination, EffectFade]}
          className={`mySwiper ${Style.home_banner_slider}`}
        >
          {props?.data?.slider?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                {width >= 992 && (
                  <Image
                    src={item?.image_desktop?.url}
                    fill
                    sizes="(max-width: 768px) 100vw, 100vw"
                    quality={100}
                    alt={item?.title}
                    className={Style.desktop_banner}
                    priority={true}
                    
                  />
                )}

                <div className={Style.mob_ban_wrap}>
                  {width < 992 && (
                    <div className={Style.mob_banner}>
                      <Image
                        src={item?.image_mobile?.url}
                        fill
                        sizes="(max-width: 768px) 100vw, 100vw"
                        quality={100}
                        alt={item?.title}
                        className={Style.mob_img}
                        priority={true}
                      />
                    </div>
                  )}
                </div>

                <div className={Style.banner_overlay}></div>

                <div className="container">
                  <div className={` ${Style.txt_wrap}`}>

                    {index==0 ? 
                           <h1 className={`${Style.titlehead} titlehead `}>{parse(`${item?.title}`)}</h1>
                    : 
                            <h2 className={`${Style.titlehead} titlehead `}>{parse(`${item?.title}`)}</h2>
                    }
                   
                    <div className={`overflow-hidden ${Style.subtitlewrap}`}>
                      {parse(`${item?.subtitle}`)}
                    </div>
                    <div className="overflow-hidden">
                      <Link
                        href={`${item?.links?.url}`}
                        className="btn btn-outline-secondary"
                      >
                        {item?.links?.text}
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="container position-relative">
          <Animate className={`${Style.banner_controls}`}>
            <div>
              <div className="scrollbar_slider"></div>
            </div>
            <div className="jail-app-left-side-fractions"></div>
          </Animate>
        </div>

        <Animate className={` ${Style.homeBtnWrap}`}>
          <div className="container">
            <ul>
              {props?.data?.sliderLink?.map((data, i) => {
                return (
                  <li key={i}>
                    <Link href={`${data?.url}`}>
                      <div className={`${Style.imgWrap}`}>
                        <Icons
                          className={Style.bottomicon}
                          icon={data?.icon}
                          size={34}
                        />
                      </div>
                      <h3 className={`h6 ${Style.subhead}`}>{data?.title}</h3>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default HomeBanner;
