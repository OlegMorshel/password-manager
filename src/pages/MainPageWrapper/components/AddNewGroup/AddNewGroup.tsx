import Button, { ButtonSize } from '@src/components/UiKit/Button/Button'
import DropZone, { ApiFileType } from '@src/components/UiKit/DropZone/DropZone'
import Input from '@src/components/UiKit/Input/Input'
import Typography from '@src/components/UiKit/Typography/Typography'
import classNames from 'classnames/bind'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import styles from './AddNewGroup.module.scss'
const cnb = classNames.bind(styles)
const AddNewGroup: React.FC = () => {
  const [file, setFile] = useState<ApiFileType[]>([])
  const newGroupForm = useFormik({
    initialValues: {
      title: '',
      image: '',
    },
    onSubmit: value => console.log('value', value),
  })
  const { errors, touched, values, handleBlur, handleChange } = newGroupForm
  return (
    <div className={cnb('addNesGroupWrapper')}>
      <Input
        id="title"
        name="title"
        setValue={handleChange}
        title="Group title"
        error={errors.title}
        touched={touched.title}
        handleBlur={handleBlur}
        value={values.title}
      />
      <Typography tag="p2" className={cnb('subtitle')}>
        Group image
      </Typography>
      <DropZone files={file} setFiles={setFile} />
      <Button size={ButtonSize.LARGE} title="Create" />
    </div>
  )
}

export default AddNewGroup
