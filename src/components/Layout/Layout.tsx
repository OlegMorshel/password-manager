import MainPageContent from '@src/pages/MainPageWrapper/MainPageContent'
import classNames from 'classnames/bind'
import React from 'react'
import Typography from '../UiKit/Typography/Typography'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import styles from './Layout.module.scss'
const cnb = classNames.bind(styles)
interface ILayout {
  withOutMenu?: boolean
  withoutHeader?: boolean
  children?: React.ReactNode
}
const Layout: React.FC<ILayout> = ({ withoutHeader = false, withOutMenu = false, children }) => {
  return (
    <div className={cnb('gradient', 'layoutWrapper')}>
      <div className={cnb('container', 'contentWrapper')}>
        {!withoutHeader && <Header />}
        {children}
      </div>
      {!withOutMenu && <Menu />}
    </div>
  )
}

export default Layout
