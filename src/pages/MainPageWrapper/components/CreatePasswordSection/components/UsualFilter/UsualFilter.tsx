import Checkbox from '@src/components/UiKit/Checkbox/Checkbox'
import Switch from '@src/components/UiKit/Switch/Switch'
import Typography from '@src/components/UiKit/Typography/Typography'
import classNames from 'classnames/bind'
import React from 'react'
import styles from './UsualFilter.module.scss'
const cnb = classNames.bind(styles)
interface IUsualFilter {
  value: string
  isActive: boolean
  onChange: React.Dispatch<React.SetStateAction<boolean>>
}
const UsualFilter: React.FC<IUsualFilter> = ({ isActive, value, onChange }) => {
  return (
    <div className={cnb('wrapper')}>
      <Typography tag="p2">{value}</Typography>
      <Switch checked={isActive} onChange={() => onChange(prev => !prev)} />
    </div>
  )
}

export default UsualFilter
