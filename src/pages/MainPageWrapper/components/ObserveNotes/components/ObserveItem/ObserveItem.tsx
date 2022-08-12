import Slider from '@src/components/UiKit/Slider/Slider'
import Typography from '@src/components/UiKit/Typography/Typography'
import classNames from 'classnames/bind'
import React from 'react'
import { SwiperSlide } from 'swiper/react'
import styles from './ObserveItem.module.scss'
const cnb = classNames.bind(styles)

interface IObserveItem {}
const ObserveItem: React.FC<IObserveItem> = () => {
  return (
    <div className={cnb('observeItemWrapper')}>
      <Typography tag="h5" className={cnb('titleWrapper')}>
        Login
      </Typography>
      <Slider
        swiperSlidesList={
          <>
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </>
        }
      />
    </div>
  )
}

export default ObserveItem
