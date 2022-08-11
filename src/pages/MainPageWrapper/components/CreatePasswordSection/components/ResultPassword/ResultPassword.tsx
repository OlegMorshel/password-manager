import Typography from '@src/components/UiKit/Typography/Typography'
import classNames from 'classnames/bind'
import React from 'react'
import styles from './ResultPassword.module.scss'
const cnb = classNames.bind(styles)
interface IResultPassword {
  value: string
  isError?: boolean
  error?: string
  setGeneratedPassword: React.Dispatch<React.SetStateAction<string>>
}
const ResultPassword: React.FC<IResultPassword> = ({ value, error, isError, setGeneratedPassword }) => {
  if (isError) {
    setGeneratedPassword('')
  }
  return (
    <div className={cnb('passwordWrapper')}>
      <div className={cnb('passwordInfo')}>
        <Typography tag="p2" className={cnb('value')}>
          {!isError && value}
        </Typography>
      </div>
      {isError && (
        <Typography tag="p4" className={cnb('errorMessage')}>
          {error}
        </Typography>
      )}
    </div>
  )
}

export default ResultPassword
