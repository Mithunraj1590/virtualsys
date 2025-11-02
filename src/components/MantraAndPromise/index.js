import React, { useEffect, useState } from "react";
import MantraCard from "../utils/MantraCard";
import { useWindowSize } from "../../logic/useDimension";
import Style from "./MantraAndPromise.module.scss";
import Image from "next/image";

import { Swiper, SwiperSlide  } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import { Scrollbar,Mousewheel, Autoplay } from "swiper";

const MantraAndPromise = ({ props }) => {
  const parse = require("html-react-parser");
  const { width } = useWindowSize();

  
  const [activeIndex, setActiveIndex] = useState(0);

  
  return (
    <section className={Style.promise}>
      <div className="container">
        <div className={Style.topWraper}>
          <h2 className={`${Style.title} h2 gradient-text-black`}>
            {parse(props?.data?.title)}
          </h2>
          <p className={Style.botom}>{props?.data?.description}</p>
        </div>
      
        {width >= 992 && (
          <div className={Style.card_slider}>
            <Swiper
              slidesPerView={1.05}
              spaceBetween={0}
              // mousewheel={true}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              // scrollbar={{ draggable: true }}
              modules={[Scrollbar, Mousewheel, Autoplay]}
              breakpoints={{
                640: {
                  slidesPerView: 1.5,
                },
                768: {
                  slidesPerView: 4,
                },
                1200: {
                  slidesPerView: 6,
                },
              }}
              className={Style.mySwiper}
            >
              {props?.data?.card?.map((data, i) => {
                return (
                  <SwiperSlide key={i}>
                    <div className={`${Style.mantracard} `}>
                      <figure>
                        <Image
                          src={data?.image?.url}
                          fill
                          alt="image"
                        ></Image>
                      </figure>
                      <div className={Style.ContWrapper}>
                        <h5 className={`${Style.title} h5`}>{parse(data?.title)}</h5>
                        <div className={Style.text_content}>
                           {parse(data?.text)}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        )}



     {/* Devices Code */}
        {width < 992 && (
          <div className={Style.card_wrap}>
            {props?.data?.card?.map((data, i) => {
              return <MantraCard props={data}
                datatop={i} // Pass the index as datatop
                isActive={i === activeIndex} // Pass isActive based on activeIndex
                handleCardClick={() => setActiveIndex(i)} // Pass a click handler to update activeIndex
                key={i}
                ></MantraCard>;
            })}
          </div>
        )}
      </div>
    </section>
  );
};
export default MantraAndPromise;
