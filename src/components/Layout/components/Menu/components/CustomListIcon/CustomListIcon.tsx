import classNames from 'classnames/bind'
import React from 'react'
import styles from './CustomListIcon.module.scss'
const cnb = classNames.bind(styles)
const CustomListIcon: React.FC = () => {
  return (
    <div className={cnb('iconWrapper')}>
      <div className={cnb('iconCircle')} />
      <div className={cnb('iconCircle')} />
      <div className={cnb('iconCircle')} />
    </div>
  )
}

export default CustomListIcon
