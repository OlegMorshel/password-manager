import React from 'react'
import NotFound from '../NotFound/NotFound'
import AddNewGroup from './components/AddNewGroup/AddNewGroup'
import CreatePasswordSection from './components/CreatePasswordSection/CreatePasswordSection'
import ObserveNotes from './components/ObserveNotes/ObserveNotes'
import PasswordSection from './components/PasswordCollections/PasswordCollections'
import ProfileSection from './components/ProfileSection/ProfileSection'
import { MainPageEnum, UrlPageParamToPages } from './MainPageWrapper'
interface IMainPageContent {
  page: MainPageEnum
}
const MainPageContent: React.FC<IMainPageContent> = ({ page }) => {
  switch (page) {
    case MainPageEnum.CREATED_NOTES:
      return <PasswordSection />
    case MainPageEnum.CREATED_NOTE_OBSERVE:
      return <ObserveNotes />
    case MainPageEnum.ADD_NEW_NOTE_GROUP:
      return <AddNewGroup />
    case MainPageEnum.CREATE_PASSWORD:
      return <CreatePasswordSection />
    case MainPageEnum.PROFILE_SETTINGS:
      return <ProfileSection />
    default:
      return <NotFound />
  }
}

export default MainPageContent
