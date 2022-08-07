import { PasswordMenuSvg, PlusMenuSvg } from '@src/icons/Icons'
import classNames from 'classnames/bind'
import React, { useState } from 'react'
import MenuItem, { IMenuItem } from './components/MenuItem/MenuItem'
import styles from './Menu.module.scss'
import { MenuItems } from './menuUtils'
const cnb = classNames.bind(styles)

const Menu = () => {
  const [menuIconsState, setMenuIconsState] = useState<IMenuItem[]>(MenuItems)
  console.log('menuIconsState ', menuIconsState)
  const onSelectedItemChange = (item: IMenuItem) => {
    setMenuIconsState(
      menuIconsState.map(el => {
        if (el.id === item.id) return { ...el, isActive: true }
        return { ...el, isActive: false }
      })
    )
    return
  }

  return (
    <div className={cnb('menuWrapper')}>
      {menuIconsState.map(item => (
        <MenuItem icon={item.icon} isActive={item.isActive} id={item.id} key={item.id} onSelectedItemChange={onSelectedItemChange} />
      ))}
      <div className={cnb('plusMenuIcon')}>
        <PlusMenuSvg />
      </div>
    </div>
  )
}

export default Menu
