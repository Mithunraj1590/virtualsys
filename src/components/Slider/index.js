import {Swiper, SwiperSlide } from 'swiper/react'
import style from './swiper.module.scss'
import 'swiper/css';
const Slider = (props, { ch}) => {
  return (
    <div className={`${style.swiper_wrapper}`}>

<Swiper {...props}>
    </Swiper>


    </div>
  )
}

export default Slider