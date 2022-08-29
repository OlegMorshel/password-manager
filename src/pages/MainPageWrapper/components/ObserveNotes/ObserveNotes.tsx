import classNames from 'classnames/bind'
import React from 'react'
import ObserveItem from './components/ObserveItem/ObserveItem'
import styles from './ObserveNotes.module.scss'
import { v4 as uuidv4 } from 'uuid'
const cnb = classNames.bind(styles)
export interface INoteItem {
  title: string
  count?: string
  id: string
}
const ObserveNotes: React.FC = () => {
  const notesList: INoteItem[] = [
    {
      title: 'Login',
      count: '15',
      id: uuidv4(),
    },
    {
      title: 'Login',
      count: '15',
      id: uuidv4(),
    },
  ]

  return (
    <div className={cnb('notesWrapper')}>
      {notesList.map(note => (
        <ObserveItem theme={note.title} count={note.count} key={note.id} />
      ))}
    </div>
  )
}

export default ObserveNotes
