import { ApiFileType } from '@src/components/UiKit/DropZone/DropZone'
import Picture from '@src/components/UiKit/Picture/Picture'
import Typography from '@src/components/UiKit/Typography/Typography'
import classNames from 'classnames/bind'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './CollectionItem.module.scss'
const cnb = classNames.bind(styles)
export interface IGroupType {
  id: string
  cover?: ApiFileType
  title: string
  count: string
}
interface Props {
  item: IGroupType
}
const CollectionItem: React.FC<Props> = ({ item }) => {
  const { count, title, cover } = item
  return (
    <div className={cnb('collectionWrapper')}>
      <div className={cnb('coverWrapper')}>
        <Picture
          alt="profile"
          className={cnb('cover')}
          src="https://images.freeimages.com/variants/QTyPhL6A6VdRuFw4TYKMdZNq/5a0bd68e593adb18739fe6fe526aa40368c6d1e5924c85e47ba06f7a665f1000"
        />
      </div>
      <div className={cnb('infoWrapper')}>
        <Typography tag="p1" className={cnb('collectionTitle')}>
          <Link to={{ pathname: '/observeNotes', search: title }}>{title}</Link>
        </Typography>
        <Typography tag="h5" className={cnb('collectionCount')}>
          {count}
        </Typography>
      </div>
      <Typography tag="p4" className={cnb('viewAllText')}>
        <Link to={'/observeNotes'}>{count ? 'View all' : ''}</Link>
      </Typography>
    </div>
  )
}

export default CollectionItem
