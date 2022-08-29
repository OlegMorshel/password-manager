import { CreatePasswordMenuSvg, PasswordMenuSvg } from '@src/icons/Icons'
import { IMenuItem } from './components/MenuItem/MenuItem'
import { v4 as uuidv4 } from 'uuid'
import CustomListIcon from './components/CustomListIcon/CustomListIcon'
import ProfileCustomSvg from './components/ProfileCustomSvg/ProfileCustomSvg'

export const MenuItems: IMenuItem[] = [
  { id: uuidv4(), icon: <PasswordMenuSvg />, page: 'passwordCollections', isActive: true },
  { id: uuidv4(), icon: <CustomListIcon />, page: 'observeNotes', isActive: false },
  { id: uuidv4(), icon: <CreatePasswordMenuSvg />, page: 'configurePassword', isActive: false },
  { id: uuidv4(), icon: <ProfileCustomSvg />, page: 'profile', isActive: false },
]
