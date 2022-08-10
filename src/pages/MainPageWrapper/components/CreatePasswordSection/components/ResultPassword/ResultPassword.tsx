import classNames from 'classnames/bind'
import React from 'react'
import styles from './ResultPassword.module.scss'
const cnb = classNames.bind(styles)
interface IResultPassword {
  value: string
}
const ResultPassword: React.FC<IResultPassword> = ({ value }) => {
  return <div className={cnb('passwordWrapper')}>{value}</div>
}

export default ResultPassword
