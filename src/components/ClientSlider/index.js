"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles

import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css";

import Style from "./ClientSlider.module.scss";

// import required modules
import { Autoplay, Grid, Pagination } from "swiper";

export default function App({ props }) {
  const singleRow = props?.data?.singleRow || false;
  
  const gridConfig = singleRow ? {
    rows: 1,
  } : {
    rows: 4,
  };
  
  const breakpointsConfig = singleRow ? {
    767: {
      slidesPerView: 3,
      grid: {
        rows: 1,
      },
    },
    1370: {
      slidesPerView: 5,
      grid: {
        rows: 1,
      },
    },
  } : {
    767: {
      slidesPerView: 3,
      grid: {
        rows: 2,
      },
    },
    1370: {
      slidesPerView: 5,
      grid: {
        rows: 2,
      },
    },
  };
  
  return (
    <>
      <div className={`${Style.swiper_wraper} ${singleRow ? 'single-row-pagination' : ''}`}>
        <Swiper
          slidesPerView={2} // or 'auto'
          grid={gridConfig}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          breakpoints={breakpointsConfig}
          modules={[Grid, Pagination, Autoplay]}
          className={`${Style.my_swiper} mySwiper ${singleRow ? 'swiper-single-row' : ''}`}
        >
          {props?.data?.cards?.map((data, i) => {
            return (
              <SwiperSlide key={i}>
                <div className={Style.box_wrap}>
                  <figure className={`mb-0 ${Style.value_figure}`}>
                    <Image
                      className={`${Style.value1}`}
                      src={data?.image?.url}
                      fill
                         sizes="(max-width: 768px) 50vw, 33vw"
                      alt="Novac Clients"
                      quality={100}
                    />

                    <Image
                      className={`${Style.value2}`}
                      src={data?.hover_image?.url}
                      fill
                         sizes="(max-width: 768px) 50vw, 33vw"
                      alt="image"
                    />
                  </figure>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
