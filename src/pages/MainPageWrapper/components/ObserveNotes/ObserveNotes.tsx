import classNames from 'classnames/bind'
import React from 'react'
import ObserveItem from './components/ObserveItem/ObserveItem'
import styles from './ObserveNotes.module.scss'
const cnb = classNames.bind(styles)

const ObserveNotes: React.FC = () => {
  return (
    <div className={cnb('notesWrapper')}>
      <ObserveItem />
      <ObserveItem />
      <ObserveItem />
    </div>
  )
}

export default ObserveNotes
