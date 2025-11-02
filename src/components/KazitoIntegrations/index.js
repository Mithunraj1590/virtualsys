import React from "react";
import Styles from "./KazitoIntegrations.module.scss";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

const KazitoIntegrations = ({ props }) => {
  return (
    <section className={Styles.integrations_section}>
      <div className="container">
        <div className={Styles.intergrate_wrap}>
          <h2 className={`text-center h2 ${Styles.title}`}>
            {props?.data?.title}
          </h2>
          <p className={`text-center ${Styles.sub_title}`}>
            {props?.data?.subtitle}
          </p>

          <div
            className={`d-flex align-items-center justify-content-between px-xl-5 ${Styles.partner_images}`}
          >
            <Swiper
              slidesPerView={2.5}
              spaceBetween={20}
            //   scrollbar={{ draggable: true, dragSize: 60 }}
              modules={[]}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                992: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                1200: {
                  slidesPerView: 5,
                  spaceBetween: 30,
                },
              }}
              className={Styles.mySwiper}
            >
              {props?.data?.partnerImages?.map((data, i) => {
                return (

                  <SwiperSlide key={i}>
                    <div className={Styles.img_wrapper} key={i}>
                      <figure>
                        <Image
                          src={data?.url}
                          fill
                          alt="image"
                          sizes="(max-width: 768px) 100vw"
                        
                        />
                      </figure>
                    </div>
                  </SwiperSlide>

                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
export default KazitoIntegrations;
