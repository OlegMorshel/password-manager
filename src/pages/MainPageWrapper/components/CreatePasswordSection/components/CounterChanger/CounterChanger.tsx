import Typography from '@src/components/UiKit/Typography/Typography'
import { MinusIconSvg, PlusIconSvg } from '@src/icons/Icons'
import classNames from 'classnames/bind'
import React from 'react'
import styles from './CounterChanger.module.scss'
const cnb = classNames.bind(styles)
interface ICounterChanger {
  onChangeNumber: React.Dispatch<React.SetStateAction<number>>
  count: number
  title: string
}
const CounterChanger: React.FC<ICounterChanger> = ({ count, onChangeNumber, title }) => {
  return (
    <div className={cnb('counterChanger')}>
      <Typography tag="p2" className={cnb('title')}>
        {title}
      </Typography>
      <div className={cnb('countText')}>
        <div className={cnb('action')} onClick={() => count > 0 && onChangeNumber(prev => prev - 1)}>
          <MinusIconSvg />
        </div>
        <Typography tag="p2" className={cnb('count')}>
          {count}
        </Typography>
        <div className={cnb('action')} onClick={() => count >= 0 && onChangeNumber(prev => prev + 1)}>
          <PlusIconSvg />
        </div>
      </div>
    </div>
  )
}

export default CounterChanger
