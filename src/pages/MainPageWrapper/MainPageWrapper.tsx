import Layout from '@src/components/Layout/Layout'
import React, { memo } from 'react'
import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import MainPageContent from './MainPageContent'

export enum UrlPageParamToPages {
  PASSWORD_MANAGER = 'passwordCollections',
  OBSERVE_NOTES = 'observeNotes',
  CREATION_PASSWORD = 'configurePassword',
  ADD_GROUP = 'addGroup',
  PROFILE = 'profile',
}

export enum MainPageEnum {
  CREATED_NOTES = 'CREATED_NOTES',
  CREATED_NOTE_OBSERVE = 'CREATED_NOTE_OBSERVE',
  ADD_NEW_NOTE_GROUP = 'ADD_NEW_NOTE_GROUP',
  CREATE_PASSWORD = 'CREATE_PASSWORD',
  PROFILE_SETTINGS = 'PROFILE_SETTINGS',
}
interface IMainPageWrapper {
  type: MainPageEnum
}
const MainPageWrapper: React.FC<IMainPageWrapper> = ({ type }) => {
  return (
    <Layout page={type}>
      <MainPageContent page={type} />
    </Layout>
  )
}

export default memo(MainPageWrapper)
