import Button, { ButtonSize } from '@src/components/UiKit/Button/Button'
import RangeComponent, { RangeValue } from '@src/components/UiKit/RangeComponent/RangeComponent'
import Typography from '@src/components/UiKit/Typography/Typography'
import classNames from 'classnames/bind'
import { useFormik } from 'formik'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import CounterChanger from './components/CounterChanger/CounterChanger'
import { createPassword, validateFunction } from './components/createPasswordUtils'
import ResultPassword from './components/ResultPassword/ResultPassword'
import UsualFilter from './components/UsualFilter/UsualFilter'
import styles from './CreatePasswordSection.module.scss'
const cnb = classNames.bind(styles)
export interface IValidateError {
  isError: boolean
  errorMessage: string
}

const CreatePasswordSection: React.FC = () => {
  const createPasswordForm = useFormik({
    initialValues: {
      password: '',
    },
    onSubmit: value => console.log('value', value),
  })
  const { errors, touched, handleBlur, handleChange, values } = createPasswordForm

  const [value, setValue] = useState({ values: [8] })
  const [withUpperCase, setWithUpperCase] = useState(false)
  const [withLowerCase, setWithLowerCase] = useState(false)
  const [withNumbers, setWithNumbers] = useState(false)
  const [withSpecialSymbols, setWithSpecialSymbols] = useState(false)
  const [minimumNumbers, setMinimumNumbers] = useState(0)
  const [minimumSymbols, setMinimumSymbols] = useState(0)
  const [generatedPassword, setGeneratedPassword] = useState('')
  const onChangeValue = (value: RangeValue) => {
    return setValue({ values: value })
  }

  return (
    <div className={cnb('generatorWrapper')}>
      <ResultPassword
        value={generatedPassword}
        isError={
          validateFunction(value.values[0], withUpperCase, withLowerCase, withNumbers, withSpecialSymbols, minimumNumbers, minimumSymbols)
            .isError
        }
        error={
          validateFunction(value.values[0], withUpperCase, withLowerCase, withNumbers, withSpecialSymbols, minimumNumbers, minimumSymbols)
            .errorMessage
        }
        setGeneratedPassword={setGeneratedPassword}
      />
      <div className={cnb('buttonsWrapper')}>
        <Button size={ButtonSize.LARGE} title={'Copy'} />
        <Button
          size={ButtonSize.LARGE}
          title={'Generate'}
          onClick={() =>
            setGeneratedPassword(
              createPassword({
                length: value.values[0],
                minimumNumber: minimumNumbers,
                minimumSpecialSymbol: minimumSymbols,
                withLowerCase: withLowerCase,
                withNumbers: withNumbers,
                withSpecialSymbols: withSpecialSymbols,
                withUpperCase: withUpperCase,
              })
            )
          }
        />
      </div>
      <div className={cnb('lengthWrapper')}>
        <Typography tag="p2">Length</Typography>
        <RangeComponent
          classNamesForWrapper={cnb('rangeWrapper')}
          currentValue={value}
          maxValue={100}
          minValue={0}
          onChangeCurrentValue={onChangeValue}
        />
        <Typography tag="p2" className={cnb('lengthText')}>
          {value.values.length && value.values[0]}
        </Typography>
      </div>
      <UsualFilter value="A-Z" isActive={withUpperCase} onChange={setWithUpperCase} />
      <UsualFilter value="a-z" isActive={withLowerCase} onChange={setWithLowerCase} />
      <UsualFilter value="0-9" isActive={withNumbers} onChange={setWithNumbers} />
      <UsualFilter value="!@#$%^&" isActive={withSpecialSymbols} onChange={setWithSpecialSymbols} />
      <CounterChanger title={'Minimum numbers'} count={minimumNumbers} onChangeNumber={setMinimumNumbers} />
      <CounterChanger title={'Minimum symbols'} count={minimumSymbols} onChangeNumber={setMinimumSymbols} />
    </div>
  )
}

export default CreatePasswordSection
