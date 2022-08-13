import Slider from '@src/components/UiKit/Slider/Slider'
import Typography from '@src/components/UiKit/Typography/Typography'
import { EditIconSvg } from '@src/icons/Icons'
import classNames from 'classnames/bind'
import React from 'react'
import { SwiperSlide } from 'swiper/react'
import ObserveCard from './components/ObserveCard/ObserveCard'
import styles from './ObserveItem.module.scss'
const cnb = classNames.bind(styles)

interface IObserveItem {
  theme: string
  count?: string
}
const ObserveItem: React.FC<IObserveItem> = ({ theme, count }) => {
  return (
    <div className={cnb('observeItemWrapper')}>
      <div className={cnb('header')}>
        <Typography tag="h5" className={cnb('titleWrapper')}>
          {theme}
        </Typography>
        <div className={cnb('editSection')}>
          <div className={cnb('editIcon')}>
            <EditIconSvg />
          </div>
          <Typography tag="h6" className={cnb('countWrapper')}>
            {count}
          </Typography>
        </div>
      </div>
      <Slider
        swiperSlidesList={
          <>
            <SwiperSlide>
              <ObserveCard />
            </SwiperSlide>
            <SwiperSlide>
              <ObserveCard />
            </SwiperSlide>
            <SwiperSlide>
              <ObserveCard />
            </SwiperSlide>
            <SwiperSlide>
              <ObserveCard />
            </SwiperSlide>
            <SwiperSlide>
              <ObserveCard />
            </SwiperSlide>
          </>
        }
      />
    </div>
  )
}

export default ObserveItem
