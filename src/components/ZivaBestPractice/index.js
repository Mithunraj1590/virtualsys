import Style from "./ZivaBestPractice.module.scss";
import Image from "next/image";
import ZivaWhiteCard from "../utils/ZivaWhiteCard";
import Assets from "../Layout/CommonLayout/assets";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import { Scrollbar } from "swiper";
import { useWindowSize } from "../../logic/useDimension";


const ZivaBestPractice = ({ props }) => {
  const { width } = useWindowSize();
  return (
    <section className={Style.ziva_best_practice}>
      <div className={Style.best_practice_bg}>
        <Image fill src={Assets.best_practice_bg} alt={"background Image"}  sizes="(max-width: 768px) 100vw"/>
      </div>

      <div className="container">
        <div className="row pb-3">
          <div className="col-lg-6">
            <div className={Style.left}>
                <h2 className={`h2 ${Style.title}`}>
                {props?.data?.title}
                </h2>
                <p>
                   {props?.data?.text}
                </p>
            </div>
          </div>

          <div className="col-lg-6 pt-3 pt-lg-0">
              <div className={Style.right}>
                  <h3 className={Style.value} >
                      {props?.data?.right_content?.value}
                  </h3>
                  <h4 className={Style.subtitle}>{props?.data?.right_content?.subtitle}</h4>
                  <ul className={Style.list_wrap}>

                    {props?.data?.right_content?.text_cards?.map((data,i)=>{
                            return(
                                <li key={i}> {data?.text} </li>
                            )
                    })}

                  </ul>

              </div>
          </div>
        </div>

      {width >= 992 && (
      <div className="row pt-5">
        {props?.data?.cards?.map((data, i) => {
          return <ZivaWhiteCard props={data} key={i} flag={'bestpractice'} dataAnime={i}/>;
        })}
      </div>
      )}
        


       
        {props?.data?.cards?.length && props?.data?.cards?.length > 0 &&   width < 992 &&  (
          <Swiper
            slidesPerView={1.1}
            spaceBetween={20}
            scrollbar={{ draggable: true, dragSize: 60 }}
            modules={[Scrollbar]}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className={Style.mySwiper}
          >
            {props?.data?.cards?.map((data, i) => {
              return (
                <SwiperSlide key={i}>
                    <ZivaWhiteCard props={data}  flag={'bestpractice'} dataAnime={i}/>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}

      </div>
    </section>
  );
};
export default ZivaBestPractice;
