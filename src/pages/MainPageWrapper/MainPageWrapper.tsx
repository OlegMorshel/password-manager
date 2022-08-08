import Layout from '@src/components/Layout/Layout'
import React, { memo } from 'react'
import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import MainPageContent from './MainPageContent'

export enum UrlQueryParamToPages {
  PASSWORD_MANAGER = 'passwordCollections',
  CREATION_PASSWORD = 'configurePassword',
  ADD_GROUP = 'addGroup',
  SETTINGS = 'settings',
}

const MainPageWrapper: React.FC = () => {
  const locationQuery = useLocation()
  const query = useMemo(() => locationQuery.search.replace('?', ''), [locationQuery])

  return (
    <Layout>
      <MainPageContent query={query} />
    </Layout>
  )
}

export default memo(MainPageWrapper)