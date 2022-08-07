import classNames from 'classnames/bind'
import React from 'react'
import styles from './MenuItem.module.scss'
const cnb = classNames.bind(styles)
export interface IMenuItem {
  id: string
  icon: JSX.Element
  isActive: boolean
}

interface IMenuItemProps extends IMenuItem {
  onSelectedItemChange: (item: IMenuItem) => void
}

const MenuItem: React.FC<IMenuItemProps> = ({ icon, isActive, id, onSelectedItemChange }) => {
  return (
    <div className={cnb('menuItemWrapper')} onClick={() => onSelectedItemChange({ icon, id, isActive })}>
      {icon}
      <div className={cnb('mark', { activeMark: isActive })} />
    </div>
  )
}

export default MenuItem
