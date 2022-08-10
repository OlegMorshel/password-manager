import React from 'react'
import NotFound from '../NotFound/NotFound'
import AddNewGroup from './components/AddNewGroup/AddNewGroup'
import CreatePasswordSection from './components/CreatePasswordSection/CreatePasswordSection'
import PasswordSection from './components/PasswordCollections/PasswordCollections'
import SettingsSection from './components/SettingsSection/SettingsSection'
import { UrlQueryParamToPages } from './MainPageWrapper'
interface IMainPageContent {
  query: string
}
const MainPageContent: React.FC<IMainPageContent> = ({ query }) => {
  switch (query) {
    case UrlQueryParamToPages.PASSWORD_MANAGER:
    case '':
      return <PasswordSection />
    case UrlQueryParamToPages.ADD_GROUP:
      return <AddNewGroup />
    case UrlQueryParamToPages.CREATION_PASSWORD:
      return <CreatePasswordSection />
    case UrlQueryParamToPages.SETTINGS:
      return <SettingsSection />
    default:
      return <NotFound />
  }
}

export default MainPageContent
