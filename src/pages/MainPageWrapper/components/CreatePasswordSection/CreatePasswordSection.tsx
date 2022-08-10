import Button, { ButtonSize } from '@src/components/UiKit/Button/Button'
import Input from '@src/components/UiKit/Input/Input'
import RangeComponent, { RangeValue } from '@src/components/UiKit/RangeComponent/RangeComponent'
import Typography from '@src/components/UiKit/Typography/Typography'
import classNames from 'classnames/bind'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import CounterChanger from './components/CounterChanger/CounterChanger'
import { createPassword } from './components/createPasswordUtils'
import ResultPassword from './components/ResultPassword/ResultPassword'
import UsualFilter from './components/UsualFilter/UsualFilter'
import styles from './CreatePasswordSection.module.scss'
const cnb = classNames.bind(styles)
const CreatePasswordSection: React.FC = () => {
  const createPasswordForm = useFormik({
    initialValues: {
      password: '',
    },
    onSubmit: value => console.log('value', value),
  })
  const { errors, touched, handleBlur, handleChange, values } = createPasswordForm
  const [value, setValue] = useState({ values: [15] })
  const [isChecked, setIsChecked] = useState(false)
  const onChangeValue = (value: RangeValue) => {
    return setValue({ values: value })
  }

  // const generatePassword = (passwordProps, pwdLength) => {
  //   const { uppercase, lowercase, symbols, numbers } = passwordProps
  //   setPasswordLength(pwdLength)
  //   setUpperCase(uppercase)
  //   setLowerCase(lowercase)
  //   setSymbols(symbols)
  //   setNumber(numbers)
  //   const password = passwordCharacters()
  //   return password
  // }
  createPassword({
    length: 15,
    minimumNumber: 5,
    minimumSpecialSymbol: 6,
    withLowerCase: true,
    withNumbers: true,
    withSpecialSymbols: true,
    withUpperCase: true,
  })
  return (
    <div className={cnb('generatorWrapper')}>
      <ResultPassword value="" />
      <div className={cnb('buttonsWrapper')}>
        <Button size={ButtonSize.LARGE} title={'Copy'} />
        <Button size={ButtonSize.LARGE} title={'Generate'} />
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
      <UsualFilter value="A-Z" isActive={isChecked} onChange={setIsChecked} />
      <UsualFilter value="a-z" isActive={isChecked} onChange={setIsChecked} />
      <UsualFilter value="0-9" isActive={isChecked} onChange={setIsChecked} />
      <UsualFilter value="!@#$%^&" isActive={isChecked} onChange={setIsChecked} />
      <CounterChanger />
      <CounterChanger />
    </div>
  )
}

export default CreatePasswordSection
