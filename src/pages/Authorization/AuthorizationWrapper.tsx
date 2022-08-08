import Layout from '@src/components/Layout/Layout'
import Dropdown from '@src/components/UiKit/Dropdown/Dropdown'
import Input from '@src/components/UiKit/Input/Input'
import RangeComponent from '@src/components/UiKit/RangeComponent/RangeComponent'
import Switch from '@src/components/UiKit/Switch/Switch'
import React, { useState } from 'react'
import Checkbox from '../../components/UiKit/Checkbox/Checkbox'
import Loader from '../../components/UiKit/Loader/Loader'
import Typography from '../../components/UiKit/Typography/Typography'
import Authorization from './Authorization'

const AuthorizationWrapper = () => {
  const [selected, setSelected] = useState(false)
  return (
    <Layout withoutHeader withOutMenu>
      <Authorization />
    </Layout>
  )
}

export default AuthorizationWrapper
