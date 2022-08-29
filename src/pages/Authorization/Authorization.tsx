import Button, { ButtonSize } from '@src/components/UiKit/Button/Button'
import Checkbox from '@src/components/UiKit/Checkbox/Checkbox'
import Input from '@src/components/UiKit/Input/Input'
import Typography from '@src/components/UiKit/Typography/Typography'
import classNames from 'classnames/bind'
import { useFormik } from 'formik'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Authorization.module.scss'
const cnb = classNames.bind(styles)

const Authorization: React.FC = () => {
  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => console.log('values ', values),
  })

  const { errors, touched, values, handleChange, handleBlur } = loginForm
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate({ pathname: '/passwordCollections', search: '' }, { replace: true })
  }

  return (
    <div className={cnb('authWrapper')}>
      <Typography tag="h2" className={cnb('loginTitle')}>
        Sign in
      </Typography>
      <form onSubmit={e => e.preventDefault()} className={cnb('authForm')}>
        <Input
          title="Email"
          id="email"
          name="email"
          value={values.email}
          setValue={handleChange}
          handleBlur={handleBlur}
          error={errors.email}
        />
        <Input
          title="Password"
          id="password"
          name="password"
          value={values.password}
          setValue={handleChange}
          handleBlur={handleBlur}
          error={errors.password}
          isPassword
        />
        <Checkbox label="Remember me" classNameForWrapper={cnb('authCheckbox')} />
        <Button title="Login" size={ButtonSize.LARGE} loading={false} onClick={handleLogin} />
      </form>

      <Link to={'/registration'} className={cnb('registrationTitle')}>
        Registration
      </Link>
    </div>
  )
}

export default Authorization
