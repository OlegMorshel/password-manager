import { PasswordMenuSvg, PlusMenuSvg } from '@src/icons/Icons'
import { MainPageEnum } from '@src/pages/MainPageWrapper/MainPageWrapper'
import classNames from 'classnames/bind'
import React, { useEffect, useMemo, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import MenuItem, { IMenuItem } from './components/MenuItem/MenuItem'
import styles from './Menu.module.scss'
import { MenuItems } from './menuUtils'
const cnb = classNames.bind(styles)
interface IMenu {
  page?: MainPageEnum
}
const Menu: React.FC<IMenu> = ({ page }) => {
  const [menuIconsState, setMenuIconsState] = useState<IMenuItem[]>(MenuItems)
  const locationQuery = useLocation()
  const pathName = useMemo(() => locationQuery.pathname.replace('/', ''), [locationQuery])

  useEffect(() => {
    setMenuIconsState(prev => prev.map(menuItem => ({ ...menuItem, isActive: pathName === menuItem.page })))
  }, [locationQuery])

  return (
    <div className={cnb('menuWrapper')}>
      {menuIconsState.map(item => (
        <MenuItem {...item} key={item.id} />
      ))}
      <Link to={'/addGroup'}>
        <div className={cnb('plusMenuIcon')}>
          <PlusMenuSvg />
        </div>
      </Link>
    </div>
  )
}

export default Menu
