import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import styles from './Slider.module.scss'

import classNames from 'classnames/bind'
const cnb = classNames.bind(styles)
interface ISlider {
  swiperSlidesList: JSX.Element
  spaceBetween?: number
}
const Slider: React.FC<ISlider> = ({ swiperSlidesList, spaceBetween }) => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
        bulletActiveClass: cnb('bulletClassNames'),
      }}
      modules={[Pagination]}
      className={cnb('mySwiper')}
      spaceBetween={spaceBetween ?? 10}
    >
      {swiperSlidesList}
    </Swiper>
  )
}

export default Slider
