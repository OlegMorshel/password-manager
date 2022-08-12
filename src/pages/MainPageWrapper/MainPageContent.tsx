import React from 'react'
import NotFound from '../NotFound/NotFound'
import AddNewGroup from './components/AddNewGroup/AddNewGroup'
import CreatePasswordSection from './components/CreatePasswordSection/CreatePasswordSection'
import ObserveNotes from './components/ObserveNotes/ObserveNotes'
import PasswordSection from './components/PasswordCollections/PasswordCollections'
import ProfileSection from './components/ProfileSection/ProfileSection'
import { UrlQueryParamToPages } from './MainPageWrapper'
interface IMainPageContent {
  query: string
}
const MainPageContent: React.FC<IMainPageContent> = ({ query }) => {
  switch (query) {
    case UrlQueryParamToPages.PASSWORD_MANAGER:
      return <PasswordSection />
    case UrlQueryParamToPages.OBSERVE_NOTES:
      return <ObserveNotes />
    case UrlQueryParamToPages.ADD_GROUP:
      return <AddNewGroup />
    case UrlQueryParamToPages.CREATION_PASSWORD:
      return <CreatePasswordSection />
    case UrlQueryParamToPages.PROFILE:
      return <ProfileSection />
    default:
      return <NotFound />
  }
}

export default MainPageContent
