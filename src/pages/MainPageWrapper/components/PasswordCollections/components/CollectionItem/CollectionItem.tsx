import { ApiFileType } from '@src/components/UiKit/DropZone/DropZone'
import Picture from '@src/components/UiKit/Picture/Picture'
import Typography from '@src/components/UiKit/Typography/Typography'
import classNames from 'classnames/bind'
import React from 'react'
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
      <Picture alt="" src={cover?.absolute_path} className={cnb('image')} />
      <div className={cnb('infoWrapper')}>
        <Typography tag="p1" className={cnb('collectionTitle')}>
          {title}
        </Typography>
        <Typography tag="h5" className={cnb('collectionCount')}>
          {count}
        </Typography>
      </div>
      <Typography tag="p4" className={cnb('viewAllText')}>
        {count ? 'View all' : ''}
      </Typography>
    </div>
  )
}

export default CollectionItem
