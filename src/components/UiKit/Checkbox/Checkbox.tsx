import React, { memo } from 'react'
import styles from './Checkbox.module.scss'
import classNames from 'classnames/bind'
import Typography from '../Typography/Typography'
const cnb = classNames.bind(styles)

export interface CheckboxProps extends React.HTMLProps<HTMLInputElement> {
  label?: string
  type?: 'default' | 'table'
  classNameForWrapper?: string
}

const Checkbox: React.FC<CheckboxProps> = memo(({ label, type, id, classNameForWrapper, ...props }) => (
  <div className={cnb('wrapper', classNameForWrapper)}>
    <input id={id} type="checkbox" className={cnb('defaultCheckbox', { tableType: type === 'table' && !!!props.checked })} {...props} />
    <Typography tag="p3" htmlFor={id}>
      {label}
    </Typography>
  </div>
))

export default Checkbox
