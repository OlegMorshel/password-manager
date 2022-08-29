import Button, { ButtonSize } from '@src/components/UiKit/Button/Button'
import DropZone from '@src/components/UiKit/DropZone/DropZone'
import Input from '@src/components/UiKit/Input/Input'
import Picture from '@src/components/UiKit/Picture/Picture'
import Typography from '@src/components/UiKit/Typography/Typography'
import classNames from 'classnames/bind'
import { useFormik } from 'formik'
import { stringify } from 'querystring'
import React from 'react'
import styles from './ProfileSection.module.scss'
const cnb = classNames.bind(styles)

const ProfileSection: React.FC = () => {
  const profileForm = useFormik({
    initialValues: {
      file: null,
      first_name: '',
      middle_name: '',
      last_name: '',
    },
    onSubmit: values => console.log('values', values),
  })
  const {
    values: profileValues,
    errors: profileErrors,
    touched: profileTouched,
    handleBlur: profileHandleBlur,
    handleChange: profileHandleChange,
  } = profileForm
  const passwordForm = useFormik({
    initialValues: {
      last_password: '',
      new_password: '',
    },
    onSubmit: values => console.log('values', values),
  })
  const {
    errors: passwordErrors,
    touched: passwordTouched,
    values: passwordValues,
    handleBlur: passwordHandleBlur,
    handleChange: passwordHandleChange,
  } = passwordForm
  return (
    <div className={cnb('profileWrapper')}>
      <div className={cnb('profileSection')}>
        <Typography tag="p2" className={cnb('editProfileText')}>
          Edit profile data
        </Typography>
        <div className={cnb('infoWrapper')}>
          <Picture alt="" height={60} width={60} className={cnb('profileIcon')} />
          <div className={cnb('')}>
            <Input
              setValue={profileHandleChange}
              id="first_name"
              name="first_name"
              value={profileValues.first_name}
              title={'Name'}
              touched={profileTouched.first_name}
              handleBlur={profileHandleBlur}
              error={profileErrors.first_name}
            />
            <Input
              setValue={profileHandleChange}
              id="middle_name"
              name="middle_name"
              value={profileValues.middle_name}
              title={'Middle name'}
              touched={profileTouched.middle_name}
              handleBlur={profileHandleBlur}
              error={profileErrors.middle_name}
            />
            <Input
              setValue={profileHandleChange}
              id="last_name"
              name="last_name"
              value={profileValues.last_name}
              title={'Last name'}
              touched={profileTouched.last_name}
              handleBlur={profileHandleBlur}
              error={profileErrors.last_name}
            />
          </div>
        </div>
        <DropZone files={[]} setFiles={() => null} />
        <Button title="Save" size={ButtonSize.LARGE} className={cnb('saveButton')} />
        <Typography tag="p2" className={cnb('updatePasswordText')}>
          Update password
        </Typography>
        <Input
          setValue={passwordHandleChange}
          id="last_password"
          name="last_password"
          value={passwordValues.last_password}
          title={'Last password'}
          touched={passwordTouched.last_password}
          handleBlur={passwordHandleBlur}
          error={passwordErrors.last_password}
        />
        <Input
          setValue={passwordHandleChange}
          id="new_password"
          name="new_password"
          value={passwordValues.new_password}
          title={'New password'}
          touched={passwordTouched.new_password}
          handleBlur={passwordHandleBlur}
          error={passwordErrors.new_password}
        />
        <Input
          setValue={passwordHandleChange}
          id="new_password"
          name="new_password"
          value={passwordValues.new_password}
          title={'Repeat password'}
          touched={passwordTouched.new_password}
          handleBlur={passwordHandleBlur}
          error={passwordErrors.new_password}
        />
        <Button title="Edit" size={ButtonSize.LARGE} />
      </div>
    </div>
  )
}

export default ProfileSection
