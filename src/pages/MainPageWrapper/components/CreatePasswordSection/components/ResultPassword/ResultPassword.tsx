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

  const setLetterClassName = (symbol: string) => {
    const letters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    const specialSymbols: string = '!@#$%^&*()<>,.?/[]{}-=_+|/'
    const numbers: string = '0123456789'
    if (letters.includes(symbol)) {
      return cnb('isLetter')
    }
    if (specialSymbols.includes(symbol)) {
      return cnb('isSymbol')
    }
    if (numbers.includes(symbol)) {
      return cnb('isNumber')
    }
    return cnb('defaultText')
  }
  return (
    <div className={cnb('passwordWrapper')}>
      <div className={cnb('passwordInfo')}>
        <div className={cnb('textWrapper')}>
          {[...value].map((chart, index) => (
            <Typography tag="p2" className={cnb('value', setLetterClassName(chart))} key={index}>
              {chart}
            </Typography>
          ))}
        </div>
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
