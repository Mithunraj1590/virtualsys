import { useEffect } from "react";
import Style from "./FintechEcosystem.module.scss";
import Image from "next/image";
import ZivaWhiteCard from "../utils/ZivaWhiteCard";
import Assets from "../Layout/CommonLayout/assets";
import Link from "next/link";
import Animate from "../Animate/animate";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import { Scrollbar } from "swiper";
import { useWindowSize } from "../../logic/useDimension";

const FintechEcosystem = ({ props }) => {
  const { width } = useWindowSize();
  const parse = require("html-react-parser");

  useEffect(() => {
    document.body.classList.add("overflow-x-hidden");
    return () => {
      document.body.classList.remove("overflow-x-hidden"); // Remove the class when the component unmounts
    };
  }, []);

  return (
    <>
      <div className="position-relative">
        <div className={Style.ecosystem_bg1}>
          <Image fill src={Assets.ecosystem_bg1} alt={"background Image"} sizes="(max-width: 768px) 100vw"/>
        </div>

        <div className={Style.ecosystem_bg2}>
          <Image fill src={Assets.ecosystem_bg2} alt={"background Image"} sizes="(max-width: 768px) 100vw"/>
        </div>
      </div>
      <section className={Style.FintechEcosystem}>
        <div className="container">
          <div className={Style.top_heading}>
            <h2 className={`h2 text-lg-center ${Style.title}`}>
              {parse(props?.data?.title)}
            </h2>
          </div>

          <Swiper
            slidesPerView={1.08}
            spaceBetween={20}
            scrollbar={{ draggable: true, dragSize: 60 }}
            modules={[Scrollbar]}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            className={Style.mySwiper}
          >
            {props?.data?.cards?.map((data, i) => {
              return (
                <SwiperSlide key={i}>
                  <Animate
                    className={`animate-fadein ${Style.column_item}`}
                    key={i}
                    style={{ "--anim-index": `${i * 0.2}s` }}
                  >
                    <div
                      className={`h-100 ${Style.column_item_inner} d-flex flex-column justify-content-between`}
                    >
                      <figure className={`${Style.img_wrapper} mb-0`}>
                        <Image
                          src={data?.icon?.url}
                          width={data?.icon?.width}
                          height={data?.icon?.height}
                          alt="image"
                          sizes="(max-width: 768px) 100vw"
                        />
                      </figure>
                      <h4 className={Style.column_title}>
                        {parse(data?.title)}
                      </h4>
                    </div>
                  </Animate>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="overflow-hidden mt-3 pt-1 text-md-center">
            <Link
              href={`${props?.data?.link?.url}`}
              className={`btn 
                    btn-fintech
                    `}
            >
              {props?.data?.link?.title}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
export default FintechEcosystem;
