import DropZone, { ApiFileType } from '@src/components/UiKit/DropZone/DropZone'
import Typography from '@src/components/UiKit/Typography/Typography'
import classNames from 'classnames/bind'
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import CollectionItem, { IGroupType } from './components/CollectionItem/CollectionItem'
import styles from './PasswordCollections.module.scss'
const cnb = classNames.bind(styles)
const PasswordCollections: React.FC = () => {
  const [files, setFiles] = useState<ApiFileType[]>([])
  const testList: IGroupType[] = [{ count: '15', id: uuidv4(), title: 'Login' }]
  return (
    <div className={cnb('passwordCollectionsWrapper')}>
      <Typography tag="h5" className={cnb('title')}>
        Let's <span>secure</span> your details...
      </Typography>
      {testList.map(card => (
        <CollectionItem item={card} key={card.id} />
      ))}
    </div>
  )
}

export default PasswordCollections
