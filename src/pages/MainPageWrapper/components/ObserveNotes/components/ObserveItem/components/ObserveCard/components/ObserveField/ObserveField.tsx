import Typography from '@src/components/UiKit/Typography/Typography'
import { CopyIconSvg } from '@src/icons/Icons'
import classNames from 'classnames/bind'
import React from 'react'
import styles from './ObserveField.module.scss'
const cnb = classNames.bind(styles)

interface IObserveField {
  field: string
  classNameWrapper?: string
}
const ObserveField: React.FC<IObserveField> = ({ field, classNameWrapper }) => {
  return (
    <div className={cnb('fieldWrapper', classNameWrapper)}>
      <Typography tag="p2" className={cnb('fieldText')}>
        {field}
      </Typography>
      <div className={cnb('copyIcon')}>
        <CopyIconSvg />
      </div>
    </div>
  )
}

export default ObserveField
