import React, { useMemo } from 'react'
import Typography from '@src/components/UiKit/Typography/Typography'
import styles from './Header.module.scss'
import classNames from 'classnames/bind'
import { getHeaderTitle } from './headerUtils'
import { useLocation } from 'react-router-dom'
import Picture from '@src/components/UiKit/Picture/Picture'
const cnb = classNames.bind(styles)

const Header: React.FC = () => {
  const locationQuery = useLocation()
  const pathName = useMemo(() => locationQuery.pathname.replace('/', ''), [locationQuery])
  return (
    <div className={cnb('headerWrapper')}>
      <Typography tag="h4" className={cnb('headerTitle')}>
        {getHeaderTitle({ pathName: pathName })}
      </Typography>
      <Picture alt="profile" className={cnb('profileWrapper')} />
    </div>
  )
}

export default Header
