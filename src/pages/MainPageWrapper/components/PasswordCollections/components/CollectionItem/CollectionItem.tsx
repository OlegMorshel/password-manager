import Picture from '@src/components/UiKit/Picture/Picture'
import Typography from '@src/components/UiKit/Typography/Typography'
import classNames from 'classnames/bind'
import React from 'react'
import styles from './CollectionItem.module.scss'
const cnb = classNames.bind(styles)

const CollectionItem: React.FC = () => {
  return (
    <div className={cnb('collectionWrapper')}>
      <Picture alt="" className={cnb('image')} />
      <div className={cnb('infoWrapper')}>
        <Typography tag="p1" className={cnb('collectionTitle')}>
          Logins
        </Typography>
        <Typography tag="h5" className={cnb('collectionCount')}>
          06
        </Typography>
      </div>
      <Typography tag="p4" className={cnb('viewAllText')}>
        View all
      </Typography>
    </div>
  )
}

export default CollectionItem
