import classNames from 'classnames/bind'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './MenuItem.module.scss'
const cnb = classNames.bind(styles)
export interface IMenuItem {
  id: string
  icon: JSX.Element
  isActive: boolean
  page: string
}

interface IMenuItemProps extends IMenuItem {}

const MenuItem: React.FC<IMenuItemProps> = ({ icon, isActive, id, page }) => {
  return (
    <Link to={`/${page}`} replace>
      <div className={cnb('menuItemWrapper')}>
        {icon}
        <div className={cnb('mark', { activeMark: isActive })} />
      </div>
    </Link>
  )
}

export default MenuItem
