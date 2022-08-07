import { CreatePasswordMenuSvg, PasswordMenuSvg, SettingsMenuSvg, TelegramMenuSvg } from '@src/icons/Icons'
import { IMenuItem } from './components/MenuItem/MenuItem'
import { v4 as uuidv4 } from 'uuid'

export const MenuItems: IMenuItem[] = [
  { id: uuidv4(), icon: <PasswordMenuSvg />, isActive: true },
  { id: uuidv4(), icon: <TelegramMenuSvg />, isActive: false },
  { id: uuidv4(), icon: <CreatePasswordMenuSvg />, isActive: false },
  { id: uuidv4(), icon: <SettingsMenuSvg />, isActive: false },
]
