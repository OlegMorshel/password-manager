import { PasswordMenuSvg, PlusMenuSvg } from '@src/icons/Icons'
import classNames from 'classnames/bind'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MenuItem, { IMenuItem } from './components/MenuItem/MenuItem'
import styles from './Menu.module.scss'
import { MenuItems } from './menuUtils'
const cnb = classNames.bind(styles)

const Menu = () => {
  const [menuIconsState, setMenuIconsState] = useState<IMenuItem[]>(MenuItems)
  const navigate = useNavigate()
  console.log('menuIconsState ', menuIconsState)
  const onSelectedItemChange = (item: IMenuItem) => {
    setMenuIconsState(
      menuIconsState.map(el => {
        if (el.id === item.id) return { ...el, isActive: true }
        return { ...el, isActive: false }
      })
    )
    navigate({ pathname: '/', search: item.query }, { replace: true })
    return
  }
  const addGroupAction = () => {
    setMenuIconsState(menuIconsState.map(el => ({ ...el, isActive: false })))
    navigate({ pathname: '/', search: 'addGroup' }, { replace: true })
  }

  return (
    <div className={cnb('menuWrapper')}>
      {menuIconsState.map(item => (
        <MenuItem {...item} onSelectedItemChange={onSelectedItemChange} />
      ))}
      <div className={cnb('plusMenuIcon')} onClick={addGroupAction}>
        <PlusMenuSvg />
      </div>
    </div>
  )
}

export default Menu
