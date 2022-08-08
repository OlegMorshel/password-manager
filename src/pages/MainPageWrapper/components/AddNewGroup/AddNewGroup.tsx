import Input from '@src/components/UiKit/Input/Input'
import classNames from 'classnames/bind'
import { useFormik } from 'formik'
import React from 'react'
import styles from './AddNewGroup.module.scss'
const cnb = classNames.bind(styles)
const AddNewGroup: React.FC = () => {
  const newGroupForm = useFormik({
    initialValues: {
      title: '',
      image: '',
    },
    onSubmit: value => console.log('value', value),
  })
  const { errors, touched, values, handleBlur, handleChange } = newGroupForm
  return (
    <div>
      <Input
        id="title"
        name="title"
        setValue={handleChange}
        title="Title"
        error={errors.title}
        touched={touched.title}
        handleBlur={handleBlur}
        value={values.title}
      />
    </div>
  )
}

export default AddNewGroup
