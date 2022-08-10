import Typography from '@src/components/UiKit/Typography/Typography'
import { MinusIconSvg, PlusIconSvg } from '@src/icons/Icons'
import classNames from 'classnames/bind'
import React from 'react'
import styles from './CounterChanger.module.scss'
const cnb = classNames.bind(styles)
const CounterChanger: React.FC = () => {
  return (
    <div className={cnb('counterChanger')}>
      <Typography tag="p2" className={cnb('title')}>
        Minimum number
      </Typography>
      <div className={cnb('countText')}>
        <div className={cnb('action')}>
          <MinusIconSvg />
        </div>

        <Typography tag="p2" className={cnb('count')}>
          03
        </Typography>
        <div className={cnb('action')}>
          <PlusIconSvg />
        </div>
      </div>
    </div>
  )
}

export default CounterChanger
