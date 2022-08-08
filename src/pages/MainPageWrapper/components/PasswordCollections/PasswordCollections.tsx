import Typography from '@src/components/UiKit/Typography/Typography'
import classNames from 'classnames/bind'
import React from 'react'
import styles from './PasswordCollections.module.scss'
const cnb = classNames.bind(styles)
const PasswordCollections: React.FC = () => {
  return (
    <div className={cnb('passwordCollectionsWrapper')}>
      <Typography tag="h5" className={cnb('title')}>
        Let's <span>secure</span> your details...
      </Typography>
    </div>
  )
}

export default PasswordCollections
