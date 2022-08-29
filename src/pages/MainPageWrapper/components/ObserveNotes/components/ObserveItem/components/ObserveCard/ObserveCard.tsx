import classNames from 'classnames/bind'
import React from 'react'
import ObserveField from './components/ObserveField/ObserveField'
import styles from './ObserveCard.module.scss'
const cnb = classNames.bind(styles)

interface IObserveCard {
  login?: string
  password?: string
}
const ObserveCard: React.FC<IObserveCard> = ({ login, password }) => {
  return (
    <div>
      <ObserveField field="asddsdasddsdasddsdasddsdasddsdasddsdasddsdasddsd" classNameWrapper={cnb('observeTopField')} />
      <ObserveField field="test" />
    </div>
  )
}

export default ObserveCard
