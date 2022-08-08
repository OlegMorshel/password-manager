import classNames from 'classnames/bind'
import React from 'react'
import styles from './MenuItem.module.scss'
const cnb = classNames.bind(styles)
export interface IMenuItem {
  id: string
  icon: JSX.Element
  isActive: boolean
  query: string
}

interface IMenuItemProps extends IMenuItem {
  onSelectedItemChange: (item: IMenuItem) => void
}

const MenuItem: React.FC<IMenuItemProps> = ({ icon, isActive, id, query, onSelectedItemChange }) => {
  return (
    <div className={cnb('menuItemWrapper')} onClick={() => onSelectedItemChange({ icon, id, query, isActive })}>
      {icon}
      <div className={cnb('mark', { activeMark: isActive })} />
    </div>
  )
}

export default MenuItem
