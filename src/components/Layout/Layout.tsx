import classNames from 'classnames/bind'
import React from 'react'
import Menu from './components/Menu/Menu'
import styles from './Layout.module.scss'
const cnb = classNames.bind(styles)
interface ILayout {
  withOutMenu?: boolean
  children: React.ReactNode
}
const Layout: React.FC<ILayout> = ({ withOutMenu = false, children }) => {
  return (
    <div className={cnb('gradient', 'layoutWrapper')}>
      <div className={cnb('container', 'contentWrapper')}>{children}</div>
      {!withOutMenu && <Menu />}
    </div>
  )
}

export default Layout
