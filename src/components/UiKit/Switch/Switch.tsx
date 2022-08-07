import classNames from 'classnames/bind'
import React, { memo } from 'react'
import styles from './Switch.module.scss'
const cnb = classNames.bind(styles)

export interface SwitchButtonProps extends React.HTMLProps<HTMLInputElement> {
  label?: string
}

const Switch: React.FC<SwitchButtonProps> = memo(({ label, id, ...props }) => {
  return (
    <div className={cnb('switchWrapper', { switchWithoutLabel: !!!label?.length })}>
      <label className={cnb('switch')}>
        <input type="checkbox" {...props} id={id} />
        <span className={cnb('slider', 'round')} />
      </label>
      <label htmlFor={id} className={cnb('desc')}>
        {label}
      </label>
    </div>
  )
})

export default Switch
