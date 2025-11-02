import React, { Fragment } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import Style from "./RelatedTopics.module.scss";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SwiperCore ,{ Navigation, Scrollbar } from 'swiper';
import ZivaEventsCard from '../utils/ZivaEventsCard';
import { useRef } from 'react';
import Icons from '../Layout/Icons';

const RelatedTopics = ({ props }) => {
    SwiperCore.use([Navigation]);

    const navPrevRef = useRef(null);
    const navNextRef = useRef(null);
    return (
        <React.Fragment>
{props?.data?.cards[0] && 

        <section className={Style.relatedtopic}>
            <div className="container">
                <div className={Style.head}>
                    <h4 className={`h4 ${Style.title}`}>{props?.data?.title}</h4>
                    <div className={`${Style.controls} d-none d-md-block`}>
                        <button className={Style.prev} ref={navPrevRef}>  <Icons icon="arrow-green" size={30} /></button>
                        <button className={Style.next} ref={navNextRef}>  <Icons icon="arrow-green" size={30} /></button>
                    </div>
                </div>

                <div className={Style.relatedtopic_slider}>
                    <Swiper
                        modules={[Navigation, Scrollbar]}
                        spaceBetween={20}
                        slidesPerView={1.1}

                        breakpoints={{
                            576: {
                              slidesPerView: 2,
                              spaceBetween: 20,
                            },
                            992: {
                              slidesPerView: 3,
                              spaceBetween: 30,
                            },
                          }}

                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = navPrevRef.current;
                            swiper.params.navigation.nextEl = navNextRef.current;
                        }}
                        scrollbar={{ draggable: true }}
                    >
                        {props?.data?.cards.map((item, i) => {
                            return (
                                <SwiperSlide key={i}>
                                    <ZivaEventsCard props={item} flag="relatedTopics"></ZivaEventsCard>
                                </SwiperSlide>
                            )
                        })}


                    </Swiper>
                </div>
            </div>
        </section>

}

        </React.Fragment>
    );
};
export default RelatedTopics;