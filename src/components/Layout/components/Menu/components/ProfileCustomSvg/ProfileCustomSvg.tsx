import Picture from '@src/components/UiKit/Picture/Picture'
import classNames from 'classnames/bind'
import React from 'react'
import styles from './ProfileCustomSvg.module.scss'
const cnb = classNames.bind(styles)
const ProfileCustomSvg: React.FC = () => {
  return <Picture alt="" className={cnb('profileWrapper')} height={22} width={22} />
}

export default ProfileCustomSvg
