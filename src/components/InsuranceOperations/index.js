import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper";
import Style from "./InsuranceOperations.module.scss";
import InsuranceCard from "../utils/InsuranceCard";

const InsuranceOperations = ({ props }) => {
    return (
        <section className={`${Style.ins_op} d-none`}>
            <div className="container">
                <div className={Style.ins_op_head}>
                    <div className="row row-cols-lg-2 text-white">
                        <h2 className={`${Style.title} h2`}>{props?.data?.title}</h2>
                        <p>{props.data.description}</p>
                    </div>
                </div>
                <div className={Style.ins_op_body}>
                    <Swiper
                        slidesPerView={1.05}
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
                                spaceBetween: 40,
                            },
                        }}
                        className={Style.mySwiper}
                    >
                        {props?.data?.cards?.map((data, i) => {
                            return (
                                <SwiperSlide key={i}>
                                    <InsuranceCard props={data} key={i} />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};
export default InsuranceOperations;