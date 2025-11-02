import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Style from "./AwardsAndRecognitions.module.scss";
import Image from "next/image";
import Assets from "../Layout/CommonLayout/assets";
import Link from "next/link";
import { useWindowSize } from "../../logic/useDimension";

import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css";


import Icons from "../Layout/Icons";

import { Autoplay, Grid, Pagination } from "swiper";

const AwardsAndRecognitions = ({ props }) => {
  const { width } = useWindowSize();

  const about_awards = props?.data?.page == "about" && Style.about_awards
  return (
    <section className={`${Style.AwardsAndRecognitions} ${about_awards}`}>

      {props?.data?.page === "career" && (
        <div className={Style.top_bg}>
          <Image fill src={Assets.awards_bg}  sizes="(max-width: 768px) 100vw" alt={"background Image"} />
        </div>
      )}

      <div className={`container   ${Style.AwardWraper}`}>
        <div className={Style.top_head}>
          <h2 className={`text-lg-center h2 ${Style.title}`}>
            {" "}
            {props?.data?.title}{" "}
          </h2>
        </div>

        {/* <div className="row">
          {props?.data?.cards?.map((data, i) => {
            return (
             
                <div className="col-lg-6" key={i}>
                  <div className={Style.wrapBox}>
                    <figure>
                      <Image
                        fill
                        src={data?.image?.url}
                        alt={data?.image?.alt}
                        quality={100}
                      ></Image>
                    </figure>
                    <div className={Style.ContentWrap}>
                      <h4 className={Style.subtitle}>{data?.subtitle}</h4>
                      <p>{data?.text}</p>
                    </div>
                  </div>
                </div>
              
            );
          })}
        </div> */}


        <div className={Style.swiper_wraper}>
        <Swiper
          slidesPerView={2} // or 'auto'
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={40}
          pagination={{
            clickable: true,
          }}
          // loop={true}

          breakpoints={{
            767: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            }
          }}
          // spaceBetween={30}
          modules={[Grid, Pagination,Autoplay]}
          className={`${Style.my_swiper} mySwiper`}
        >
          {props?.data?.cards.map((data, i) => {
            return (
              <SwiperSlide key={i}>
                  <div className={Style.wrapBox}>
                    <figure>
                      <Image
                        fill
                        src={data?.image?.url}
                        alt="image"
                        quality={100}
                        sizes="(max-width: 768px) 100vw"
                      ></Image>
                    </figure>
                    <div className={Style.ContentWrap}>
                      {/* <h4 className={Style.subtitle}>{data?.subtitle}</h4> */}
                      <p>{data?.text}</p>
                    </div>
                  </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>





        {/* <div className="text-center">
          {width < 992 && (
            <Link
              href={props?.data?.link?.url}
              className={`btn btn-outline-secondary ${Style.button}`}>{props?.data?.link?.text}</Link>
          )}
          {width >= 992 && (
            <Link
              href={`${props?.data?.links?.url}`}
              className={`arrow_text ${Style.arrow_text}`}
            >
              <span>{props?.data?.link?.text}</span>
              <div className={`arrow_links ${Style.arrow_bottom}`}>
                <Icons className={"link-arrow"} icon="arrow-link" size={12} />
              </div>
            </Link>
          )}

        </div> */}
      </div>
    </section>
  );
};
export default AwardsAndRecognitions;
